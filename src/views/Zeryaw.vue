<template>
  <section
    class="py-16 px-4 sm:px-6 md:px-16 lg:px-32 bg-bg-base section-animate"
    ref="zeryawSection"
  >
    <div class="container mx-auto max-w-7xl overflow-hidden">
      <!-- Header with Back Button and PDF Button -->
      <div class="flex flex-col sm:flex-row items-center sm:items-start sm:justify-between mb-12">
        <div class="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-4 sm:mb-0">
          <RouterLink
            to="/portfolio"
            class="bg-accent text-bg-dark px-4 py-1 text-xs font-semibold hover:bg-accent-hover transition"
          >
            ← Back to Portfolio
          </RouterLink>
          <button
            @click="downloadPdf"
            class="bg-accent text-bg-dark px-4 py-1 text-xs font-semibold hover:bg-accent-hover transition"
          >
            Download Zeryaw prototype as PDF
          </button>
        </div>
        <h2 class="text-3xl sm:text-4xl lg:text-6xl font-bold text-center sm:text-left text-text-primary">
          Zeryaw Prototype
        </h2>
        
      </div>

      <!-- Tabs -->
      <div class="flex justify-center mb-8 border-b border-border overflow-x-auto">
        <button
          v-for="section in sections"
          :key="section"
          @click="activeSection = section"
          :class="tabClass(section)"
          :aria-label="`View ${section} section`"
        >
          {{ section }}
        </button>
      </div>

      <!-- Device Previews -->
      <div class="w-full">
        <div
          class="flex flex-col gap-8 p-4 sm:p-8 overflow-y-auto max-h-[70vh] scroll-smooth"
          style="scrollbar-width: thin;"
          ref="deviceContainer"
        >
          <!-- Desktop Section -->
          <div>
            <h3 class="text-lg font-semibold text-text-primary mb-4 border-l-4 border-accent pl-2">Desktop</h3>
            <div class="flex flex-col items-center">
              <div
                v-for="device in devices.filter(d => d.name === 'MacbookAir')"
                :key="device.name"
                class="relative group w-fit"
                :aria-label="`View ${device.label} preview`"
              >
                <span class="corner-dot top-0 left-0"></span>
                <span class="corner-dot top-0 right-0"></span>
                <span class="corner-dot bottom-0 left-0"></span>
                <span class="corner-dot bottom-0 right-0"></span>
                <div
                  class="bg-no-repeat screen-view relative ring-1 ring-border transition-all duration-300 hover:scale-105 hover:shadow-sm"
                  :style="{ width: device.width + 'px', height: device.height + 'px', transform: deviceScale(device.width) }"
                >
                  <div class="text-text-primary/90 font-semibold bg-bg-dark/90 px-3 py-1 border border-border absolute top-0 left-0 z-50 w-full -mt-6">
                    {{ device.label }}
                    <span class="text-xs ml-2 text-text-secondary">
                      {{ device.width }} x {{ device.height }}
                    </span>
                  </div>
                  <svg width="0" height="0">
                    <defs>
                      <clipPath :id="`screen-mask--${device.id}`">
                        <rect
                          :x="0"
                          :y="0"
                          :width="device.width"
                          :height="device.height"
                          :rx="device.radius"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <div
                    class="h-full flex flex-col overflow-hidden relative"
                    :style="{ width: device.width + 'px', height: device.height + 'px' }"
                  >
                    <img
                      v-if="!imageLoading[device.id]"
                      :src="getImagePath(device.file)"
                      :alt="`${activeSection} ${device.label}`"
                      :class="['w-full h-full transition-opacity duration-300', 'object-contain']"
                      :style="{ clipPath: `url(#screen-mask--${device.id})` }"
                      @load="imageLoading[device.id] = false"
                      @error="handleImageError($event, device.id)"
                    />
                    <div
                      v-if="imageLoading[device.id]"
                      class="w-full h-full flex items-center justify-center bg-bg-base/50"
                    >
                      <span class="text-text-secondary animate-pulse">Loading...</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Tablet Section -->
          <div>
            <h3 class="text-lg font-semibold text-text-primary mb-4 border-l-4 border-accent pl-2">Tablet</h3>
            <div class="flex flex-col items-center">
              <div
                v-for="device in devices.filter(d => d.name === 'iPadAir5')"
                :key="device.name"
                class="relative group w-fit"
                :aria-label="`View ${device.label} preview`"
              >
                <span class="corner-dot top-0 left-0"></span>
                <span class="corner-dot top-0 right-0"></span>
                <span class="corner-dot bottom-0 left-0"></span>
                <span class="corner-dot bottom-0 right-0"></span>
                <div
                  class="bg-no-repeat screen-view relative ring-1 ring-border transition-all duration-300 hover:scale-105 hover:shadow-sm"
                  :style="{ width: device.width + 'px', height: device.height + 'px', transform: deviceScale(device.width) }"
                >
                  <div class="text-text-primary/90 font-semibold bg-bg-dark/90 px-3 py-1 border border-border absolute top-0 left-0 z-50 w-full -mt-6">
                    {{ device.label }}
                    <span class="text-xs ml-2 text-text-secondary">
                      {{ device.width }} x {{ device.height }}
                    </span>
                  </div>
                  <svg width="0" height="0">
                    <defs>
                      <clipPath :id="`screen-mask--${device.id}`">
                        <rect
                          :x="0"
                          :y="0"
                          :width="device.width"
                          :height="device.height"
                          :rx="device.radius"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <div
                    class="h-full flex flex-col overflow-hidden relative"
                    :style="{ width: device.width + 'px', height: device.height + 'px' }"
                  >
                    <img
                      v-if="!imageLoading[device.id]"
                      :src="getImagePath(device.file)"
                      :alt="`${activeSection} ${device.label}`"
                      :class="['w-full h-full transition-opacity duration-300', 'object-cover']"
                      :style="{ clipPath: `url(#screen-mask--${device.id})` }"
                      @load="imageLoading[device.id] = false"
                      @error="handleImageError($event, device.id)"
                    />
                    <div
                      v-if="imageLoading[device.id]"
                      class="w-full h-full flex items-center justify-center bg-bg-base/50"
                    >
                      <span class="text-text-secondary animate-pulse">Loading...</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Mobile Section -->
          <div>
            <h3 class="text-lg font-semibold text-text-primary mb-4 border-l-4 border-accent pl-2">Mobile</h3>
            <div class="flex flex-col items-center gap-8">
              <div
                v-for="device in devices.filter(d => d.name !== 'MacbookAir' && d.name !== 'iPadAir5')"
                :key="device.name"
                class="relative group w-fit"
                :aria-label="`View ${device.label} preview`"
              >
                <span class="corner-dot top-0 left-0"></span>
                <span class="corner-dot top-0 right-0"></span>
                <span class="corner-dot bottom-0 left-0"></span>
                <span class="corner-dot bottom-0 right-0"></span>
                <div
                  class="bg-no-repeat screen-view relative ring-1 ring-border transition-all duration-300 hover:scale-105 hover:shadow-sm"
                  :style="{ width: device.width + 'px', height: device.height + 'px', transform: deviceScale(device.width) }"
                >
                  <div class="text-text-primary/90 font-semibold bg-bg-dark/90 px-3 py-1 border border-border absolute top-0 left-0 z-50 w-full -mt-6">
                    {{ device.label }}
                    <span class="text-xs ml-2 text-text-secondary">
                      {{ device.width }} x {{ device.height }}
                    </span>
                  </div>
                  <svg width="0" height="0">
                    <defs>
                      <clipPath :id="`screen-mask--${device.id}`">
                        <rect
                          :x="0"
                          :y="0"
                          :width="device.width"
                          :height="device.height"
                          :rx="device.radius"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <div
                    class="h-full flex flex-col overflow-hidden relative"
                    :style="{ width: device.width + 'px', height: device.height + 'px' }"
                  >
                    <img
                      v-if="!imageLoading[device.id]"
                      :src="getImagePath(device.file)"
                      :alt="`${activeSection} ${device.label}`"
                      :class="['w-full h-full transition-opacity duration-300', 'object-cover']"
                      :style="{ clipPath: `url(#screen-mask--${device.id})` }"
                      @load="imageLoading[device.id] = false"
                      @error="handleImageError($event, device.id)"
                    />
                    <div
                      v-if="imageLoading[device.id]"
                      class="w-full h-full flex items-center justify-center bg-bg-base/50"
                    >
                      <span class="text-text-secondary animate-pulse">Loading...</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'

const zeryawSection = ref(null)
const activeSection = ref('Home')
const sections = ['Home', 'Contact', 'Services', 'SingUp', 'Works']
const imageLoading = ref({})

const devices = [
  {
    name: 'MacbookAir',
    label: 'Macbook Air',
    file: 'Macbook-Air-1559x975',
    width: 1559,
    height: 975,
    radius: 20,
    id: 'macbookair'
  }, 
  {
    name: 'iPadAir5',
    label: 'iPad Air 5',
    file: 'iPad-Air-5-820x1180',
    width: 820,
    height: 1180,
    radius: 20,
    id: 'ipadair5'
  },
  {
    name: 'iPhone14Pro',
    label: 'iPhone 14 Pro',
    file: 'iPhone-14-Pro-393x852',
    width: 393,
    height: 852,
    radius: 40,
    id: 'iphone14pro'
  },
  {
    name: 'Pixel7Pro',
    label: 'Pixel 7 Pro',
    file: 'Pixel-7-Pro-480x1040',
    width: 480,
    height: 1040,
    radius: 40,
    id: 'pixel7pro'
  },
  {
    name: 'iPhone14ProMax',
    label: 'iPhone 14 Pro Max',
    file: 'iPhone-14-Pro-Max-430x932',
    width: 430,
    height: 932,
    radius: 40,
    id: 'iphone14promax'
  }
]

// Adjusted device scaling for better visibility
const deviceScale = (deviceWidth) => {
  const windowWidth = window.innerWidth
  if (windowWidth < 640) return deviceWidth > 800 ? 'scale(0.25)' : 'scale(0.4)'
  if (windowWidth < 1024) return deviceWidth > 800 ? 'scale(0.4)' : 'scale(0.6)'
  if (windowWidth < 1280) return deviceWidth > 800 ? 'scale(0.5)' : 'scale(0.7)'
  return deviceWidth > 1300 ? 'scale(0.6)' : 'scale(0.8)'
}

// Handle image path
const getImagePath = (deviceFile) => {
  const section = activeSection.value === 'Home' ? 'home' : activeSection.value
  if (deviceFile === 'iPhone-14-Pro-393x852' && activeSection.value === 'SingUp') {
    return `/images/SingUpPhone-14-Pro-393x852.png`
  }
  return `/images/${section}${deviceFile}.png`
}

// Fallback image with user-friendly message
const handleImageError = (event, deviceId) => {
  event.target.src = '/images/home-desktop.png'
  imageLoading.value[deviceId] = false
}

// Download PDF
const downloadPdf = () => {
  const link = document.createElement('a')
  link.href = '/pdfs/zeryaw.pdf'
  link.download = 'zeryaw.pdf'
  link.click()
}

// Initialize loading state
onMounted(() => {
  devices.forEach(device => {
    imageLoading.value[device.id] = true
  })
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      zeryawSection.value.classList.add('visible')
      observer.disconnect()
    }
  })
  observer.observe(zeryawSection.value)
})

// Tab class function
function tabClass(section) {
  return [
    'flex-1 py-2 border-r border-border last:border-r-0 transition-colors duration-200 text-sm sm:text-lg font-semibold text-center min-w-[100px]',
    activeSection.value === section ? 'bg-accent text-bg-dark' : 'bg-bg-base text-text-primary hover:bg-accent-hover'
  ]
}
</script>

<style scoped>
:root {
  --color-accent-hover: #205c6b;
}

button {
  border-radius: 0 !important;
}

.bg-accent-hover {
  background-color: var(--color-accent-hover);
}

.container {
  width: 100%;
  overflow-x: hidden;
}

.screen-view {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* Micro corner dots matching Card.vue */
.corner-dot {
  position: absolute;
  width: 5px;
  height: 5px;
  background: var(--color-border);
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.18s cubic-bezier(0.4,0,0.2,1);
  pointer-events: none;
}

.group:hover .corner-dot {
  opacity: 1;
}

.corner-dot.top-0.left-0    { top: 0; left: 0; transform: translate(-50%,-50%); }
.corner-dot.top-0.right-0   { top: 0; right: 0; transform: translate(50%,-50%); }
.corner-dot.bottom-0.left-0 { bottom: 0; left: 0; transform: translate(-50%,50%); }
.corner-dot.bottom-0.right-0{ bottom: 0; right: 0; transform: translate(50%,50%); }

img {
  display: block;
  width: 100%;
  height: 100%;
}

/* Scrollbar styling for vertical scroll */
.flex.flex-col {
  scrollbar-width: thin;
  scrollbar-color: var(--color-accent) var(--color-bg-base);
}

.flex.flex-col::-webkit-scrollbar {
  width: 8px;
}

.flex.flex-col::-webkit-scrollbar-track {
  background: var(--color-bg-base);
}

.flex.flex-col::-webkit-scrollbar-thumb {
  background: var(--color-accent);
  border-radius: 4px;
}

/* Tab styles for small screens */
@media (max-width: 640px) {
  .screen-view {
    margin-bottom: 1rem;
  }

  .flex.justify-center.mb-8 {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  .flex.justify-center.mb-8::-webkit-scrollbar {
    display: none;
  }

  .flex.justify-center.mb-8 button {
    flex: 0 0 auto;
    min-width: 70px;
    padding: 0.5rem 0.75rem;
    font-size: 0.75rem;
    white-space: nowrap;
    scroll-snap-align: center;
  }
}
</style>



