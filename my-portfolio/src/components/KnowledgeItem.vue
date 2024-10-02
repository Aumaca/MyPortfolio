<script setup>
import { web, database, mobile, others, languages } from '@/utils/knowledge'
</script>

<template>
  <div class="pb-5 ps-5">
    <h2 class="text-4xl text-left font-bold gradient-text title-slide">Knowledge</h2>
  </div>

  <div class="gradient-white-background flex flex-col rounded-lg m-5 p-3">
    <h3 class="text-center p-3 font-bold">Languages</h3>
    <div class="tags flex justify-center py-3">
      <div class="flex flex-wrap justify-center gap-3">
        <img v-for="(image, index) in languages" v-bind:key="index" :src="image" class="w-10" />
      </div>
    </div>
  </div>

  <!-- Category -->
  <div class="gradient-white-background flex flex-col rounded-lg m-5 p-3">
    <h3 class="text-center p-3 font-bold">Web Development</h3>
    <div class="tags flex justify-center py-3">
      <div class="flex flex-wrap justify-center gap-3">
        <img v-for="(image, index) in web" v-bind:key="index" :src="image" class="w-10" />
      </div>
    </div>
  </div>

  <div class="gradient-white-background flex flex-col rounded-lg m-5 p-3">
    <h3 class="text-center p-3 font-bold">Mobile</h3>
    <div class="tags flex justify-center py-3">
      <div class="flex flex-wrap justify-center gap-3">
        <img v-for="(image, index) in mobile" v-bind:key="index" :src="image" class="w-10" />
      </div>
    </div>
  </div>

  <div class="gradient-white-background flex flex-col rounded-lg m-5 p-3">
    <h3 class="text-center p-3 font-bold">Databases</h3>
    <div class="tags flex justify-center py-3">
      <div class="flex flex-wrap justify-center gap-3">
        <img v-for="(image, index) in database" v-bind:key="index" :src="image" class="w-10" />
      </div>
    </div>
  </div>

  <div class="gradient-white-background flex flex-col rounded-lg m-5 p-3">
    <h3 class="text-center p-3 font-bold">Others</h3>
    <div class="tags flex justify-center py-3">
      <div class="flex flex-wrap justify-center gap-3">
        <img v-for="(image, index) in others" v-bind:key="index" :src="image" class="w-10" />
      </div>
    </div>
  </div>
</template>
