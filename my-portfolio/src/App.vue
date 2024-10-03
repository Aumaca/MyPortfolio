<template>
  <div id="app">
    <NavbarItem />

    <!-- Main -->
    <MainItem :circles="circles" :currentLanguage="locale.value" :changeLanguage="changeLanguage" />

    <!-- Projects -->
    <section id="projects">
      <div class="pb-5 ps-5">
        <h2 class="text-4xl text-left font-bold gradient-text title-slide">Projects</h2>
      </div>

      <div class="flex flex-col gap-5">
        <!-- Project -->
        <template v-for="(project, index) in projects" :key="index">
          <Project :project="project" :index="index" :getDescription="getDescription" />
        </template>
      </div>
    </section>

    <section id="knowledge" class="mt-10">
      <KnowledgeItem />
    </section>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'

import Project from './components/ProjectItem.vue'
import projects from './utils/projects'
import NavbarItem from './components/NavbarItem.vue'
import KnowledgeItem from './components/KnowledgeItem.vue'
import MainItem from './components/MainItem.vue'

const circles = Array.from({ length: 36 })

const { locale } = useI18n()

const currentLocale = ref(locale.value)
console.log(locale.value)

const changeLanguage = (lang) => {
  currentLocale.value = lang
  locale.value = currentLocale.value
}

const getDescription = (description) => {
  return description[locale.value] || description.en // Fallback to English if the locale isn't found
}
</script>
