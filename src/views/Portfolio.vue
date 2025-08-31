<template>
  <section ref="portfolioSection" class="py-16 lg:py-32 bg-bg-base px-6 lg:px-32 text-text-primary section-animate">
    <div class="container mx-auto max-w-6xl">
      <h2 class="text-4xl lg:text-6xl font-bold mb-16">Portfolio</h2>

      <!-- Projects Grid with 2 rows and 3 columns as per screenshot -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20 mb-16">
        <!-- Zeryaw Prototype -->
        <RouterLink to="/zeryaw" class="block col-span-1 lg:col-span-1">
          <Card
            title="Zeryaw Prototype"
            description="Dashboard and single page application (SPA) mockup built with Vue.js and Tailwind as for style and C# server side. Includes mobile and desktop design concepts."
            image="/images/home-desktop.png"
            :borderColor="'#ffffffff'"
            class="h-full"
          />
        </RouterLink>

        <!-- University Project -->
        <RouterLink to="/student" class="block col-span-1 lg:col-span-1">
          <Card
            title="Student Project"
            description="User interface and user experience (UI/UX) case study from my master’s program, showcasing design thinking and prototyping for learning systems."
            image="/images/uia_logo.png"
            :borderColor="'#ffffffff'"
            class="h-full"
          />
        </RouterLink>

        <!-- Future Concept -->
        <RouterLink to="/arvr" class="block col-span-1 lg:col-span-1">
          <Card
            title="AR and VR Concept"
            description="Immersive augmented reality (AR) and virtual reality (VR) experience concept for interactive storytelling and virtual learning."
            image="/images/AR.png"
            :borderColor="'#ffffffff'"
            class="h-full"
          />
        </RouterLink>
      </div>

      <!-- Tabbed Links Section -->
      <div class="bg-bg-dark p-8 border border-border md">
        <div class="flex border-b border-border mb-6">
          <button
            @click="activeTab = 'live'"
            :class="tabClass('live')"
            class="flex-1 py-3 border-r border-border last:border-r-0 uppercase text-xs tracking-widest transition-colors duration-150"
          >
            Live Site
          </button>
          <button
            @click="activeTab = 'source'"
            :class="tabClass('source')"
            class="flex-1 py-3 border-r border-border last:border-r-0 uppercase text-xs tracking-widest transition-colors duration-150"
          >
            Source Code
          </button>
          <button
            @click="activeTab = 'prototypes'"
            :class="tabClass('prototypes')"
            class="flex-1 py-3 uppercase text-xs tracking-widest transition-colors duration-150"
          >
            Prototypes
          </button>
        </div>

        <!-- Live Site Tab -->
        <div v-if="activeTab === 'live'" class="min-h-[200px] pt-2">
          <h3 class="text-xl lg:text-2xl font-bold mb-4">Live Site</h3>
          <p class="mb-4 leading-relaxed max-w-xl mx-auto whitespace-normal text-center sm:text-left">
            View my portfolio deployed on Vercel, showcasing my latest projects and designs.
          </p>
          <a
            href="https://your-vercel-link.vercel.app"
            target="_blank"
            class="text-accent hover:text-accent-hover mt-2 block transition"
          >
            Open Vercel Link
          </a>
        </div>

        <!-- Source Code Tab -->
        <div v-if="activeTab === 'source'" class="min-h-[200px] pt-2">
          <h3 class="text-xl lg:text-2xl font-bold mb-4">Source Code</h3>
          <p class="mb-4 leading-relaxed max-w-xl mx-auto whitespace-normal text-center sm:text-left">
            Check the full source code for my projects on GitHub, including the Zeryaw prototype and more.
          </p>
          <a
            href="https://github.com/yourusername/zeryaw"
            target="_blank"
            class="text-accent hover:text-accent-hover mt-2 block transition"
          >
            Open GitHub Repository
          </a>
        </div>

        <!-- Prototypes Tab -->
        <div v-if="activeTab === 'prototypes'" class="min-h-[200px] pt-2">
          <h3 class="text-xl lg:text-2xl font-bold mb-4">Prototypes</h3>
          <p class="mb-4 leading-relaxed max-w-xl mx-auto whitespace-normal text-center sm:text-left">
            Explore additional prototypes and design mockups on Figma, or download portfolio PDF.
          </p>
          <a
            href="/pdfs/zeryaw.pdf"
            target="_blank"
            class="text-accent hover:text-accent-hover mt-2 block transition"
          >
            Download Portfolio PDF
          </a>
          <a
            href="https://www.figma.com/proto/fHILCEZfmB21IagMl5BU22/Norsk-Kulturskatt-app-project-2?node-id=2008-1097&node-type=section&t=kNqSmqdQuWPME6CC-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=171%3A181"
            target="_blank"
            class="text-accent hover:text-accent-hover mt-2 block transition"
          >
            Open other school Figma design
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { ref, onMounted } from 'vue'
import Card from '../components/Card.vue'

const activeTab = ref('live')

function tabClass(tab) {
  return activeTab.value === tab
    ? 'bg-accent text-bg-dark font-semibold'
    : 'bg-bg-base text-text-primary hover:bg-accent-hover hover:text-bg-dark'
}

const portfolioSection = ref(null)
onMounted(() => {
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      portfolioSection.value.classList.add('visible')
      observer.disconnect()
    }
  })
  observer.observe(portfolioSection.value)
})
</script>

<style scoped>
button {
  border-radius: 0 !important;
}

:root {
  --color-accent-hover: #205c6b;
}

.bg-accent-hover {
  background-color: var(--color-accent-hover) !important;
}

/* Make Card text justified */
.card .card-body p {
  text-align: justify;
}

/* Make Card fit text content height */
.card {
  height: auto !important;
  display: flex;
  flex-direction: column;
}

/* Make card-body take full height except image */
.card .card-body {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>


