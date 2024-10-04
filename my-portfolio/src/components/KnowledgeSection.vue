<script setup>
import { web, database, mobile, others, languages } from '@/utils/knowledge'
</script>

<template>
  <section id="knowledge" class="mt-10">
    <div class="pb-5 ps-5">
      <h2 class="text-4xl text-left font-bold gradient-text title-slide">{{ $t('knowledge') }}</h2>
    </div>

    <!-- Category -->
    <div class="bg-white flex flex-col rounded-lg m-5 p-3">
      <h3 class="text-center p-3 font-bold">{{ $t('languages') }}</h3>
      <div class="tags flex justify-center py-3">
        <div class="flex flex-wrap justify-center gap-3">
          <img v-for="(image, index) in languages" v-bind:key="index" :src="image" class="w-10" />
        </div>
      </div>
    </div>

    <!-- Category -->
    <div class="bg-white flex flex-col rounded-lg m-5 p-3">
      <h3 class="text-center p-3 font-bold">{{ $t('webDevelopment') }}</h3>
      <div class="tags flex justify-center py-3">
        <div class="flex flex-wrap justify-center gap-3">
          <img v-for="(image, index) in web" v-bind:key="index" :src="image" class="w-10" />
        </div>
      </div>
    </div>

    <!-- Category -->
    <div class="bg-white flex flex-col rounded-lg m-5 p-3">
      <h3 class="text-center p-3 font-bold">Mobile</h3>
      <div class="tags flex justify-center py-3">
        <div class="flex flex-wrap justify-center gap-3">
          <img v-for="(image, index) in mobile" v-bind:key="index" :src="image" class="w-10" />
        </div>
      </div>
    </div>

    <!-- Category -->
    <div class="bg-white flex flex-col rounded-lg m-5 p-3">
      <h3 class="text-center p-3 font-bold">{{ $t('database') }}</h3>
      <div class="tags flex justify-center py-3">
        <div class="flex flex-wrap justify-center gap-3">
          <img v-for="(image, index) in database" v-bind:key="index" :src="image" class="w-10" />
        </div>
      </div>
    </div>

    <!-- Category -->
    <div class="bg-white flex flex-col rounded-lg m-5 p-3">
      <h3 class="text-center p-3 font-bold">{{ $t('others') }}</h3>
      <div class="tags flex justify-center py-3">
        <div class="flex flex-wrap justify-center gap-3">
          <img v-for="(image, index) in others" v-bind:key="index" :src="image" class="w-10" />
        </div>
      </div>
    </div>
  </section>

  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path
      fill="#f9fcff"
      fill-opacity="1"
      d="M0,128L48,138.7C96,149,192,171,288,170.7C384,171,480,149,576,128C672,107,768,85,864,69.3C960,53,1056,43,1152,74.7C1248,107,1344,181,1392,218.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
    ></path>
  </svg>
</template>
