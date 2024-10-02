<script setup>
import { onMounted } from 'vue'
import { tns } from 'tiny-slider'

const props = defineProps({
  index: Number,
  project: {
    name: String,
    url: String,
    badges: Array,
    desktopImages: Array,
    mobileImages: Array,
    description: {
      en: String,
      pt: String
    }
  }
})

let totalImages = 0
if (props.project.desktopImages.length > 0) totalImages += props.project.desktopImages.length
if (props.project.mobileImages.length > 0) totalImages += props.project.mobileImages.length

const getImageUrl = (name) => {
  return new URL(`../assets/media/${name}`, import.meta.url).href
}

onMounted(() => {
  tns({
    container: `.my-slider${props.index + 1}`,
    items: totalImages,
    slideBy: 'page',
    autoplay: true,
    autoWidth: true,
    nav: false,
    controls: false,
    autoplayButtonOutput: false
  })
})
</script>

<!-- Project -->
<template>
  <div class="p-3">
    <!-- Slider -->
    <div :class="'my-slider' + (index + 1) + ' w-full h-64'">
      <!-- Desktop Images -->
      <img
        v-for="(image, imgIndex) in project.desktopImages"
        :key="imgIndex"
        :src="getImageUrl(image)"
        :alt="'Slide ' + (imgIndex + 1)"
        class="w-full h-full object-cover"
      />

      <!-- Mobile Images -->
      <img
        v-for="(image, imgIndex) in project.mobileImages"
        :key="imgIndex"
        :src="getImageUrl(image)"
        :alt="'Slide ' + (imgIndex + 1)"
        class="w-full h-full object-contain"
      />
    </div>

    <div class="content bg-white p-3 rounded-bl-lg rounded-br-lg">
      <!-- Name -->
      <a v-if="project.url" :href="project.url" target="_blank">
        <div class="flex items-center gap-2">
          <h3 class="text-lg font-bold">{{ project.name }}</h3>
          <i v-if="project.url" class="fa-solid fa-arrow-up-right-from-square text-sm"></i>
        </div>
      </a>

      <!-- Name -->
      <div v-else>
        <div class="flex items-center gap-2">
          <h3 class="text-lg font-bold">{{ project.name }}</h3>
        </div>
      </div>

      <!-- Tags -->
      <div class="tags flex py-3">
        <ul class="flex flex-wrap gap-2">
          <template v-for="(badgeUrl, index) in project.badges" :key="index">
            <li class="tag">
              <img :src="badgeUrl" alt="Badge" />
            </li>
          </template>
        </ul>
      </div>

      <!-- Description -->
      <template v-for="(paragraph, index) in project.description.en.split('\n')" :key="index">
        <p>{{ paragraph }}</p>
        <br v-if="index !== project.description.en.split('\n').length - 1" />
      </template>
    </div>
  </div>
</template>
