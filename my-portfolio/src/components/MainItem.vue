<script setup>
import { onMounted } from 'vue'

defineProps({
  circles: Number
})

onMounted(() => {
  var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate
    this.el = el
    this.loopNum = 0
    this.period = parseInt(period, 10) || 2000
    this.txt = ''
    this.tick()
    this.isDeleting = false
  }

  TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length
    var fullTxt = this.toRotate[i]

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1)
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1)
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>'

    var that = this
    var delta = 200 - Math.random() * 100

    if (this.isDeleting) {
      delta /= 2
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period
      this.isDeleting = true
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false
      this.loopNum++
      delta = 500
    }

    setTimeout(function () {
      that.tick()
    }, delta)
  }

  const initializeTypeWriter = () => {
    var elements = document.getElementsByClassName('typewrite')
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type')
      var period = elements[i].getAttribute('data-period')

      if (toRotate) {
        try {
          new TxtType(elements[i], JSON.parse(toRotate), period)
        } catch (error) {
          console.error('Failed to parse toRotate:', error)
        }
      }
    }
    // INJECT CSS
    var css = document.createElement('style')
    css.type = 'text/css'
    css.innerHTML = `
        .typewrite > .wrap { 
            border-right: 0.08em solid #fff; 
            animation: blink 0.7s step-end infinite; 
        }
        @keyframes blink {
            50% { border-color: transparent; }
        }
    `
    document.body.appendChild(css)
  }

  initializeTypeWriter()
})
</script>

<template>
  <!-- MAIN -->
  <main class="h-screen flex flex-col" id="about-me">
    <div class="flex flex-col items-center mb-5">
      <h1 class="text-5xl text-center font-bold gradient-text title-slide">Hello world!</h1>
    </div>

    <div class="flex flex-col items-center justify-center">
      <img src="../assets/media/eu.jpg" class="w-52 rounded-full" alt="User Image" />
      <h3 class="text-center text-white text-xl mt-5">
        <a
          class="typewrite"
          data-period="1000"
          data-type='[ "Hello! I am Carlos.", "I am a Developer...", "I like challenges :)", "I love to see work done \\O/" ]'
        >
          <span class="wrap"></span>
        </a>
      </h3>
    </div>

    <div class="mt-5">
      <div class="flex flex-col ml-3 gap-3 mb-5">
        <span class="fi fi-us text-3xl rounded-lg"></span>
        <span class="fi fi-br text-3xl rounded-lg"></span>
      </div>

      <div class="flex justify-between">
        <!-- Circles Design -->
        <div>
          <div class="background-circles -ml-4">
            <template v-for="(circle, index) in circles" :key="index">
              <div class="circle"></div>
            </template>
          </div>
        </div>

        <!-- Social -->
        <div class="flex gap-3 mx-auto">
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
    </div>

    <!-- Arrow down -->
    <div class="absolute bottom-0 right-0 p-5 text-2xl animate-arrow">
      <i class="fa-solid fa-angles-down text-white"></i>
    </div>
  </main>
</template>
