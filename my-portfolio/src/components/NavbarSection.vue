<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

defineProps({
  messages: Object
})

const isScrolled = ref(false)
const lastScrollY = ref(0)
const isHidden = ref(false)
const isAboutMeInView = ref(false)
const isProjectsInView = ref(false)
const isKnowledgeInView = ref(false)

const handleScroll = () => {
  const scrollY = window.scrollY
  isScrolled.value = scrollY > window.innerHeight

  isHidden.value = scrollY > lastScrollY.value
  lastScrollY.value = scrollY
}

const scrollToAboutMe = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

const scrollToProjects = () => {
  const projectsSection = document.querySelector('#projects')
  window.scrollTo({
    top: projectsSection.offsetTop,
    behavior: 'smooth'
  })
}

const scrollToKnowledge = () => {
  const knowledgeSection = document.querySelector('#knowledge')
  window.scrollTo({
    top: knowledgeSection.offsetTop,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)

  const aboutMeSection = document.querySelector('#about-me')
  const projectsSection = document.querySelector('#projects')
  const knowledgeSection = document.querySelector('#knowledge')

  const observerConfig = { threshold: 0.5 }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (isAboutMeInView.value || isKnowledgeInView.value) isProjectsInView.value = false
      if (entry.target.id === 'about-me') isAboutMeInView.value = entry.isIntersecting
      if (entry.target.id === 'projects') isProjectsInView.value = entry.isIntersecting
      if (entry.target.id === 'knowledge') isKnowledgeInView.value = entry.isIntersecting
    })
  }, observerConfig)

  observer.observe(aboutMeSection)
  observer.observe(projectsSection)
  observer.observe(knowledgeSection)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav
    :class="[
      'p-5 pb-10 flex items-center justify-center sticky top-0 z-10 navbar-slide-down',
      {
        invisible: isHidden
      }
    ]"
  >
    <ul
      :class="[
        'rounded-full p-3 text-white uppercase font-bold flex justify-end gap-4 text-sm transition-all duration-500',
        {
          'bg-black bg-opacity-80': isScrolled,
          'bg-transparent': !isScrolled,
          'translate-y-[-200%]': isHidden
        }
      ]"
    >
      <a @click.prevent="scrollToAboutMe">
        <li :class="{ 'gradient-animate': isAboutMeInView }">{{ $t('aboutMe') }}</li>
      </a>
      <a @click.prevent="scrollToProjects">
        <li :class="{ 'gradient-animate': isProjectsInView }">{{ $t('projects') }}</li>
      </a>
      <a @click.prevent="scrollToKnowledge">
        <li :class="{ 'gradient-animate': isKnowledgeInView }">{{ $t('knowledge') }}</li>
      </a>
    </ul>
  </nav>
</template>
