<template>
  <section
    ref="heroSection"
    class="w-screen h-screen overflow-hidden bg-bg-base p-0 m-0 fixed inset-0 z-0 flex items-center justify-center"
  >
    <div
      class="relative group bg-bg-dark border border-border w-[90%] h-[85%] max-w-[1400px] rounded-none flex"
      :style="{ '--border-color': '#ffffff' }"
    >
      <!-- Corner dots -->
      <span class="corner-dot top-0 left-0"></span>
      <span class="corner-dot top-0 right-0"></span>
      <span class="corner-dot bottom-0 left-0"></span>
      <span class="corner-dot bottom-0 right-0"></span>

      <!-- Text area -->
      <div class="flex flex-col justify-center px-10 lg:px-14 w-5/12 text-center md:text-left z-10 overflow-hidden">
        <p class="mono-tag text-sm text-text-secondary mb-6">August 31, 2025</p>
        <h1 class="text-5xl lg:text-6xl font-extrabold text-text-primary mb-7 leading-tight">
          Meko's, <span class="text-accent">future profile</span>
        </h1>
        <p class="text-xl lg:text-2xl text-text-secondary mb-9">
          Master’s Student • Founder of Zeryaw • UX/UI Designer • Web & App Developer • AR/VR Enthusiast
        </p>
        <RouterLink to="/about">
          <button class="bg-accent text-bg-dark px-6 py-3 text-base font-semibold hover:bg-accent-hover transition">
            Explore My Journey
          </button>
        </RouterLink>
      </div>

      <!-- Divider -->
      <div class="divider"></div>

      <!-- Vimeo embed area -->
      <div class="w-7/12 relative overflow-hidden">
        <iframe
          src="https://player.vimeo.com/video/1114673393?autoplay=1&muted=1&loop=1&background=1"
          class="absolute inset-0 w-full h-full object-cover"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
          title="Embedded Vimeo Video"
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.mono-tag {
  font-family: monospace;
}
.corner-dot {
  position: absolute;
  width: 6px;
  height: 6px;
  background: var(--border-color);
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.18s ease;
  z-index: 20;
}
.group:hover .corner-dot {
  opacity: 1;
}
.corner-dot.top-0.left-0    { top: 0; left: 0; transform: translate(-50%, -50%); }
.corner-dot.top-0.right-0   { top: 0; right: 0; transform: translate(50%, -50%); }
.corner-dot.bottom-0.left-0 { bottom: 0; left: 0; transform: translate(-50%, 50%); }
.corner-dot.bottom-0.right-0{ bottom: 0; right: 0; transform: translate(50%, 50%); }

.divider {
  width: 1px;
  background-color: var(--border-color);
  opacity: 0.5;
  margin: 0 1rem;
}

@media (max-width: 1024px) {
  .group {
    flex-direction: column;
  }
  .divider {
    width: 100%;
    height: 1px;
    margin: 0.5rem 0;
  }
  .group > div.w-5\/12,
  .group > div.w-7\/12 {
    width: 100% !important;
    height: 50% !important;
  }
  .group > div.w-7\/12 iframe {
    height: 100% !important;
  }
}
</style>
