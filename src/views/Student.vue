<template>
  <section ref="studentSection" class="py-20 px-6 md:px-16 lg:px-32 lg:py-32 bg-bg-base">
    <div class="container mx-auto max-w-6xl">
      <!-- Header -->
      <div class="flex flex-col sm:flex-row items-center sm:items-start sm:justify-between mb-12">
        <RouterLink 
          to="/portfolio"
          class="bg-accent text-bg-dark px-4 py-1 text-xs font-semibold hover:bg-accent-hover transition"
        >
          ← Back to portfolio
        </RouterLink>
        <h2 class="text-4xl lg:text-6xl font-bold text-center sm:text-left text-text-primary">
          Student project showcase
        </h2>
      </div>

      <!-- Projects Grid -->
      <div v-if="selectedCard === null">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-14 justify-center">
          <div 
            v-for="(project, index) in projects" 
            :key="project.title" 
            @click="selectCard(index)" 
            class="cursor-pointer flex flex-col max-w-[380px] mx-auto"
          >
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

      <!-- Selected project detail view -->
      <div v-else class="space-y-8">
        <!-- Back button -->
        <button 
          @click="selectedCard = null" 
          class="bg-accent text-bg-dark px-4 py-1 text-xs font-semibold hover:bg-accent-hover transition"
        >
          ← Back to showcase
        </button>

        <!-- Title -->
        <h3 class="text-3xl font-bold text-text-primary">
          {{ projects[selectedCard].title }}
        </h3>

        <!-- Main image -->
        <img
          v-if="projects[selectedCard].image"
          :src="projects[selectedCard].image"
          :alt="projects[selectedCard].title + ' Main Image'"
          class="w-full max-w-md mx-auto rounded-lg shadow mb-4"
        />

        <!-- Extra image (if present) -->
        <img
          v-if="projects[selectedCard].extraImages && projects[selectedCard].extraImages.length > 0"
          :src="projects[selectedCard].extraImages[0]"
          :alt="projects[selectedCard].title + ' Extra Image'"
          class="w-full max-w-md mx-auto rounded-lg shadow mb-4"
        />

        <!-- Links (iframe for proto / button for repo etc) -->
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

        <!-- Detailed description -->
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
  title: "Norsk Kulturskatt App",
  description: "A mobile app that makes Norwegian cultural heritage accessible in a simple and engaging way.",
  detailedDescription: "The Norsk Kulturskatt app is designed to make Norwegian cultural heritage, or 'kulturskatt', accessible to a wider audience. The term means 'cultural treasure', referring to structures, objects, traditions, and crafts of historical and cultural value. The app combines artifacts, folklore, and crafts within a user-friendly digital platform based on human-centered design principles.\n\nThe main goal is to simplify cultural exploration with an interface that requires only an email for registration. This makes the experience more inclusive, especially for people outside Norway. Compared with apps that demand detailed local information, Kulturskatt focuses on simplicity and accessibility. Key features include an interactive catalog, artifact exploration, and an intuitive search, all designed to prioritize ease of use and cultural discovery.",
  image: "/images/project1-Photoroom.png",
  links: [
    {
      label: "View prototype (Figma)",
      url: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FfHILCEZfmB21IagMl5BU22%2FNorsk-Kulturskatt-app-project-2%3Fnode-id%3D547-1423%26node-type%3Dsection%26t%3DkNqSmqdQuWPME6CC-0%26scaling%3Dscale-down%26content-scaling%3Dfixed%26page-id%3D0%253A1%26starting-point-node-id%3D171%253A181",
      button: false
    }
  ]
}

,
  {
    title: 'LaTeX Online Course Design on Canvas',
    description: 'Case study on the design and development of a user-friendly online course focused on LaTeX.',
    detailedDescription: 'This case study utilized a constructivist teaching approach with structured course modules and integrated user feedback to enhance the learning experience and usability of the course materials.',
    image: '/images/latex.png',
    extraImages: ['/images/late1.png'],
    links: [
      {
        label: 'View Course Repository (GitHub)',
        url: 'https://github.com/MekoRaoulifard/latex-for-beginners-course',
        button: true,
      },
    ],
  },
  {
    title: "UIA Cleaning Services",
    description: "Efficient mobile application for sorting tasks and managing cleaning services at the University of Agder.",
    detailedDescription: "This project aimed to create an efficient app for managing cleaning services at UiA. The upgraded version improves room status visibility, task reporting, digital reports, and scheduling for cleaning crews.",
    image: "/images/UiA.png",
    links: [
      {
        label: "View prototype (Figma)",
        url: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FC5PkK2XzbIpa9rfLBl77zv%2FUiA-Cleaning-Services%3Fnode-id%3D15-636%26p%3Df%26t%3D0JlxbgmCqBkPIgl0-1%26scaling%3Dscale-down%26content-scaling%3Dfixed%26page-id%3D0%253A1%26starting-point-node-id%3D15%253A759",
        button: false
      }
    ]
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
.section-animate {
  opacity: 1;
  transform: none;
}
.large-card {
  min-height: 400px;
  max-width: 380px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}
.large-card img,
img.w-full.max-w-md.mx-auto.rounded-lg.shadow.mb-4 {
  width: 100%;
  height: auto;
  max-height: 300px;
  object-fit: contain;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.grid > div {
  max-width: 380px;
  margin-left: auto;
  margin-right: auto;
}
.text-text-secondary {
  text-align: justify;
}
:root {
  --color-accent: #205c6b;
  --color-accent-hover: #205c6b;
}
</style>



