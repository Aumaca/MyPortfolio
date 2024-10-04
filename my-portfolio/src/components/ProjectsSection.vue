<script setup>
import projects from '@/utils/projects'
import ProjectItem from './ProjectItem.vue'

defineProps({
  getDescription: {
    type: Function
  }
})
</script>

<!-- Projects -->
<template>
  <section id="projects" class="mt-10">
    <div class="pb-5 ps-5">
      <h2 class="text-4xl text-left font-bold gradient-text title-slide">{{ $t('projects') }}</h2>
    </div>

    <div class="flex flex-col gap-5">
      <!-- Project -->
      <template v-for="(project, index) in projects" :key="index">
        <ProjectItem :project="project" :index="index" :getDescription="getDescription" />
      </template>
    </div>
  </section>
</template>
