<template>
  <section ref="aboutSection" class="py-20 px-6 md:px-16 lg:px-32 lg:py-32 bg-bg-base section-animate">
    <div class="container mx-auto max-w-6xl">
      <RouterLink to="/portfolio" class="bg-accent text-bg-dark px-4 py-1 rounded-full text-xs font-semibold hover:accent-hover transition">
        ← Back to portfolio
      </RouterLink>
      <h2 class="text-4xl lg:text-6xl font-bold text-justify mb-16 text-text-primary">My journey</h2>
      <div class="space-y-12">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card
            title="My journey"
            description="I am a master student with a background in data and multimedia. My short-term plan is to secure a full-time job within three months after graduation. If not, I will dedicate myself to Zeryaw, my independent project. With Zeryaw, I plan to start small, connect with communities, and explore opportunities in Norway, Scandinavia, and beyond."
            image="/images/me1.png"
            :borderColor="'#ffffff'"
            class="custom-card"
          />
          <Card
            title="Zeryaw digital innovation"
            description="Zeryaw is my company. It was created to bypass the three to five years of job experience that many roles demand. It provides digital solutions like apps, websites, and software with strong user experience (UX). The prototype is a Vue.js single page application (SPA) with role-based dashboards and a clean, ocean-inspired design."
            image="/images/logo.png"
            :borderColor="'#ffffff'"  
            class="custom-card"
          />
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card
            title="Dream job"
            description="My dream is to run my own projects and work independently with creative freedom. I aim to prove my skills by building real solutions rather than waiting for traditional roles."
            :borderColor="'#ffffff'"
            class="custom-card"
          />
          <Card
            title="Competence gaps"
            description="I am improving my skills in AR, VR, and AI development, client communication, and project management by creating my own projects and gaining hands-on experience."
            :borderColor="'#ffffff'"
            class="custom-card"
          />
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card
            title="Future profile"
            description="I do not use platforms like Upwork or Fiverr for my work. Polywork and Lunchclub are networking alternatives I am aware of."
            :borderColor="'#ffffff'"
            class="custom-card"
          />
          <Card
            title="Learning strategy"
            description="I am using my master courses to improve my user experience (UX) and augmented and virtual reality (AR/VR) skills, and I continuously try to keep my knowledge up to date. My master thesis explores AR/VR simulations, and this connects to future goals for Zeryaw."
            :borderColor="'#ffffff'"
            class="custom-card"
          />
        </div>
        <Card
          title="Reflection statement"
          description="My title as founder of Zeryaw shows my independence. I use keywords like user interface (UI), user experience (UX), prototyping, augmented reality (AR), and virtual reality (VR) to describe my skills. My main audience is small businesses and startups in Norway and Scandinavia."
          :borderColor="'#ffffff'"
          class="custom-card"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { ref, onMounted } from 'vue'
import Card from '../components/Card.vue'

const aboutSection = ref(null)

onMounted(() => {
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      aboutSection.value.classList.add('visible')
      observer.disconnect()
    }
  })
  observer.observe(aboutSection.value)
})
</script>

<style scoped>
.custom-card p {
  text-align:start;
  white-space: normal;
  overflow-wrap: break-word;
}

/* Ensure card container fits text content properly */
.custom-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: auto;
  max-width: 100%;
}


/* Make Card text justified */
.card .card-body p {
  text-align: justify;
}



</style>


