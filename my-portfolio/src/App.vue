<template>
  <div id="app">
    <NavbarItem />

    <!-- Main -->
    <MainItem :circles="circles" />

    <!-- Projects -->
    <section id="projects">
      <div class="pb-5 ps-5">
        <h2 class="text-4xl text-left font-bold gradient-text title-slide">Projects</h2>
      </div>

      <div class="flex flex-col gap-5">
        <!-- Project -->
        <template v-for="(project, index) in projects" :key="index">
          <Project :project="project" :index="index" />
        </template>
      </div>
    </section>

    <section id="knowledge" class="mt-10">
      <KnowledgeItem />
    </section>
  </div>
</template>

<script setup>
import Project from './components/ProjectItem.vue'
import projects from './utils/projects'
import NavbarItem from './components/NavbarItem.vue'
import KnowledgeItem from './components/KnowledgeItem.vue'
import MainItem from './components/MainItem.vue'

const circles = Array.from({ length: 36 })
</script>
