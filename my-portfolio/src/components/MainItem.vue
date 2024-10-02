<script setup>
defineProps({
  circles: Number
})
</script>

<template>
  <!-- MAIN -->
  <main class="h-screen grid grid-cols-1 grid-rows-5 gap-5" id="about-me">
    <div class="row-span-1">
      <h1 class="text-5xl text-center font-bold gradient-text title-slide">Hello world!</h1>
    </div>

    <div class="flex flex-col items-center justify-center row-span-1">
      <img src="../assets/media/eu.jpg" class="w-52 rounded-full" alt="User Image" />

      <h3 class="text-center text-white text-xl mt-5">
        <a
          class="typewrite"
          data-period="1000"
          data-type='[ "Hello! I am Carlos.", "I am a Developer...", "I like challenges :)", "I love to see work done \O/" ]'
        >
          <span class="wrap"></span>
        </a>
      </h3>
    </div>

    <div class="row-span-1"></div>

    <div class="row-span-1 flex justify-between">
      <!-- Circles Design -->
      <div>
        <div class="background-circles -ml-4">
          <template v-for="(circle, index) in circles" :key="index">
            <div class="circle"></div>
          </template>
        </div>
      </div>

      <!-- Social -->
      <div class="flex gap-3 w-100 mx-auto">
        <a href="https://github.com/Aumaca" target="_bla">
          <i class="fa-brands fa-github text-white text-3xl"></i>
        </a>
        <a href="https://www.linkedin.com/in/carlos-mariano-cardoso/" target="_bla">
          <i class="fa-brands fa-linkedin text-white text-3xl"></i>
        </a>
        <a href="https://www.youtube.com/@_aumaca" target="_bla">
          <i class="fa-brands fa-youtube text-white text-3xl"></i>
        </a>
        <a href="https://stackoverflow.com/users/19912446/c-aumaca" target="_bla">
          <i class="fa-brands fa-stack-overflow text-white text-3xl"></i>
        </a>
        <a href="https://judge.beecrowd.com/en/profile/878874" target="_bla">
          <img src="../assets/media/bee.png" class="w-8 h-8" />
        </a>
      </div>
    </div>

    <!-- Arrow down -->
    <div class="absolute bottom-0 right-0 p-5 text-2xl animate-arrow">
      <i class="fa-solid fa-angles-down text-white"></i>
    </div>
  </main>
</template>
