<template>
  <main>
    <div id="app">
      <nav class="p-5 pb-10 flex items-center justify-center sticky fixed top-0 z-10">
        <ul
          :class="[
            'rounded-full p-3 px-5 text-white uppercase font-bold flex justify-end gap-4 text-sm transition-all duration-500',
            {
              'bg-black bg-opacity-80': isScrolled,
              'bg-transparent': !isScrolled,
              'translate-y-[-200%]': isHidden
            }
          ]"
        >
          <a @click.prevent="scrollToAboutMe">
            <li :class="{ 'gradient-animate': isAboutMeInView }">About Me</li>
          </a>
          <a @click.prevent="scrollToProjects">
            <li :class="{ 'gradient-animate': isProjectsInView }">Projects</li>
          </a>
          <a @click.prevent="scrollToKnowledge">
            <li :class="{ 'gradient-animate': isKnowledgeInView }">Knowledge</li>
          </a>
        </ul>
      </nav>

      <!-- MAIN -->
      <main class="h-screen" id="about-me">
        <div class="pb-5">
          <h1 class="text-5xl text-center font-bold gradient-text title-slide">Hello world!</h1>
        </div>

        <div class="flex flex-col gap-5">
          <img src="./assets/media/eu.jpg" class="w-52 rounded-full mx-auto" alt="User Image" />

          <h3 class="text-center text-white text-xl">
            <a
              class="typewrite"
              data-period="2000"
              data-type='[ "Hello! I am Carlos.", "I am a Developer...", "I like challenges" ]'
            >
              <span class="wrap"></span>
            </a>
          </h3>
        </div>

        <!-- Social -->
        <div class="flex gap-3 justify-end mt-28 mr-5">
          <a href="https://github.com/Aumaca">
            <i class="fa-brands fa-github text-white text-3xl"></i>
          </a>
          <a href="https://www.linkedin.com/in/carlos-mariano-cardoso/">
            <i class="fa-brands fa-linkedin text-white text-3xl"></i>
          </a>
          <a href="https://www.youtube.com/@_aumaca">
            <i class="fa-brands fa-youtube text-white text-3xl"></i>
          </a>
          <a href="https://stackoverflow.com/users/19912446/c-aumaca">
            <i class="fa-brands fa-stack-overflow text-white text-3xl"></i>
          </a>
          <a href="https://judge.beecrowd.com/en/profile/878874">
            <img src="./assets/media/bee.png" class="w-8 h-8" />
          </a>
        </div>

        <!-- Circles Design -->
        <div class="absolute bottom-0 left-0 -ml-4 -mb-6">
          <div class="background-circles">
            <template v-for="(circle, index) in circles" :key="index">
              <div class="circle"></div>
            </template>
          </div>
        </div>

        <!-- Arrow down -->
        <div class="absolute bottom-0 right-0 p-5 text-2xl animate-arrow">
          <i class="fa-solid fa-angles-down text-white"></i>
        </div>
      </main>

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

      <section id="knowledge">
        <div class="pb-5 ps-5">
          <h2 class="text-4xl text-left font-bold gradient-text title-slide">Projects</h2>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Project from './components/ProjectItem.vue'
import projects from './utils/projects'

const isScrolled = ref(false)
const lastScrollY = ref(0)
const isHidden = ref(false)
const isAboutMeInView = ref(false)
const isProjectsInView = ref(false)
const isKnowledgeInView = ref(false)
const circles = Array.from({ length: 25 })

const handleScroll = () => {
  const scrollY = window.scrollY
  isScrolled.value = scrollY > window.innerHeight

  isHidden.value = scrollY > lastScrollY.value
  lastScrollY.value = scrollY
}

const scrollToAboutMe = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Optional: adds a smooth scrolling effect
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

  // Check user scroll to animate the nav items
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
