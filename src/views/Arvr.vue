<template>
  <section ref="arvrSection" class="py-20 px-6 md:px-16 lg:px-32 lg:py-32 bg-bg-base">
    <div class="container mx-auto max-w-6xl">
      <div class="flex flex-col sm:flex-row items-center sm:items-start sm:justify-between mb-12">
        <RouterLink to="/portfolio" class="bg-accent text-bg-dark px-4 py-1 text-xs font-semibold hover:bg-accent-hover transition">
          ← Back to portfolio
        </RouterLink>
        <h2 class="text-4xl lg:text-6xl font-bold text-center sm:text-left text-text-primary">
          AR/VR Concept Showcase
        </h2>
      </div>

      <!-- Projects grid -->
      <div v-if="selectedCard === null">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div v-for="(project, index) in projects" :key="project.title" @click="selectCard(index)" class="cursor-pointer flex flex-col max-w-[380px] mx-auto">
            <Card
              :title="project.title"
              :description="project.description"
              :image="project.image"
              :borderColor="'#ffffff'"
              class="large-card flex-1"
            />
          </div>
        </div>
      </div>

      <!-- Selected project detail -->
      <div v-else class="space-y-8">
        
        <button @click="selectedCard = null" class="bg-accent text-bg-dark px-4 py-1 text-xs font-semibold hover:bg-accent-hover transition">
          ← Back to showcase
        </button>

        <h3 class="text-3xl font-bold text-text-primary">{{ projects[selectedCard].title }}</h3>

        <img 
          v-if="projects[selectedCard].image"
          :src="projects[selectedCard].image" 
          :alt="projects[selectedCard].title + ' Image'" 
          class="w-full max-w-md mx-auto rounded-lg shadow"
        />

        <div class="w-full aspect-[16/9] bg-bg-dark border border-border rounded-md overflow-hidden mt-4">
          <iframe
            v-if="projects[selectedCard].links && projects[selectedCard].links[0] && !projects[selectedCard].links[0].button"
            :src="projects[selectedCard].links[0].url"
            class="w-full h-full"
            allowfullscreen
            :title="projects[selectedCard].title + ' Prototype'"
          />
          <div v-else class="w-full h-full flex flex-col items-center justify-center text-text-secondary space-y-2">
            <button
              v-if="projects[selectedCard].links && projects[selectedCard].links[0]"
              class="bg-accent text-bg-dark px-4 py-2 text-xs font-semibold hover:bg-accent-hover transition disabled:opacity-50"
              :disabled="projects[selectedCard].inProgress"
              @click="!projects[selectedCard].inProgress && openExternalLink(projects[selectedCard].links[0].url)"
            >
              {{ projects[selectedCard].links[0].label }}
            </button>
            <p v-if="projects[selectedCard].inProgress" class="italic text-sm text-warning">
              This project is currently in progress.
            </p>
            <p v-if="!projects[selectedCard].links" class="italic">No project link available</p>
          </div>
        </div>

        <p class="text-text-secondary text-lg max-w-4xl mx-auto text-justify">
          {{ projects[selectedCard].detailedDescription }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import Card from '../components/Card.vue'

const selectedCard = ref(null)

const projects = [
  {
  title: 'Mixed Reality Research Proposal (Master thesis)',
  description: 'Research proposal exploring VR and AR technologies for healthcare simulation training.',
  detailedDescription: 'This project is in progress. It focuses on integrating immersive virtual reality (VR) and augmented reality (AR) in healthcare training scenarios such as HLR and ABCDE, involving co-design, user testing, and development of a Unity prototype using ARFoundation and XR Interaction Toolkit.',
  image: '/images/masterthesis.png',
  inProgress: true,
  links: [
    {
      label: 'Master Thesis Projects at UiA',
      url: 'https://www.uia.no/om-uia/senter-og-nettverk/sof/kfp/masteroppgaver.html',
      button: false,  // Active clickable iframe embed if possible
    },
  ],
},

  {
    title: 'AR Recycling & Waste Sorting Assistant',
    description: 'Augmented reality (AR) app for residents to learn correct recycling through scanning, drag-and-drop, and gamified interactions.',
    detailedDescription: 'This project presents a detailed blueprint for an AR recycling and waste sorting assistant. Users scan product labels or bin stickers, and the app highlights the correct disposal bin in 3D. Key use cases include identifying correct bins, learning waste types through interactive cards, and gamified sorting with instant feedback. Requirements include image detection, 3D models of bins and waste, drag-and-drop interaction, and feedback with sound and color. The app is planned for cross-platform development in Unity with AR Foundation, using lightweight free 3D assets for smooth performance on mobile devices.',
    image: '/images/Recycling.png',
    inProgress: true,
    links: [
      { label: 'View Project Repository (GitHub)', url: 'https://github.com/m-byteforge/ARRWSApp', button: true }
    ],
  },
  {
    title: 'Spaceship Game',
    description: '2D arcade-style spaceship game built in Unity with Blender models, featuring meteors, energy orbs, and progressive levels.',
    detailedDescription: 'Spaceship Game is a Unity project where players navigate a spaceship in a top-down 2D view. The goal is to dodge meteors and collect energy orbs to score points and survive across three levels. The game includes three unique spaceship models designed in Blender. Players earn points by destroying meteors and collecting orbs, while managing energy levels that decrease on collision. Levels become progressively harder, with faster meteors and stricter hit limits. Originally planned as a 3D game, it was adapted to 2D for timely completion, using Unity’s 2D tools.',
    image: '/images/spaceship.png',
    extraImages: ['/images/spaceship.png'],
    inProgress: false,
    links: [
      { label: 'View Game Repository (GitHub)', url: 'https://m-byteforge.github.io/Spaceship/', button: false }
    ],
  }
]

const selectCard = (index) => {
  selectedCard.value = index
}

const openExternalLink = (url) => {
  window.open(url, '_blank', 'noopener,noreferrer')
}
</script>

<style scoped>
/* Remove animation */
.section-animate {
  opacity: 1;
  transform: none;
}

/* Card styling */
.large-card {
  min-height: 400px;
  max-width: 380px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}

.large-card img {
  width: 100%;
  height: auto;
  max-height: 300px;
  object-fit: contain;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>


