<template>
  <div id="app" class="gradient-background">
    <div class="h-screen flex flex-col">
      <!-- Flags -->
      <div class="fixed flex flex-col gap-3 top-1/2 transform -translate-y-1/2">
        <div class="flex items-center">
          <span
            class="fi fi-us text-3xl rounded-lg cursor-pointer"
            @click="changeLanguage('en')"
          ></span>
          <div v-if="currentLanguage === 'en'" class="z-10 -ml-2 -mt-2">
            <i class="fa-solid fa-circle-check text-green-500"></i>
          </div>
        </div>
        <div class="flex items-center">
          <span
            class="fi fi-br text-3xl rounded-lg cursor-pointer"
            @click="changeLanguage('pt')"
          ></span>
          <div v-if="currentLanguage === 'pt'" class="z-10 -ml-2 -mt-2">
            <i class="fa-solid fa-circle-check text-green-500"></i>
          </div>
        </div>
      </div>

      <!-- Navbar -->
      <NavbarSection />

      <!-- Main -->
      <AboutMeSection
        :circles="circles"
        :currentLanguage="currentLocale"
        :changeLanguage="changeLanguage"
      />
    </div>

    <!-- Projects -->
    <ProjectsSection :getDescription="getDescription" />

    <!-- Knowledge -->
    <KnowledgeSection />

    <!-- Contact -->
    <ContactSection />

    <!-- Footer -->
    <FooterSection />
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'

import NavbarSection from './components/NavbarSection.vue'
import AboutMeSection from './components/AboutMeSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import KnowledgeSection from './components/KnowledgeSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'

const circles = Array.from({ length: 36 })

const { locale } = useI18n()

const currentLocale = ref(locale.value)

const changeLanguage = (lang) => {
  currentLocale.value = lang
  locale.value = currentLocale.value
}

const getDescription = (description) => {
  return description[locale.value] || description.en // Fallback to English if the locale isn't found
}
</script>
