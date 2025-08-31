<template>
  <section class="py-16 bg-bg-base px-6">
    <div class="container mx-auto max-w-5xl">
      <h2 class="text-4xl font-bold text-center mb-12 text-text-primary">Services</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card
          title="Web Development"
          description="Cutting-edge websites built with Vue.js, Tailwind, and modern frameworks."
          iconClass="bx bx-code-alt"
          :borderColor="'#ffffff'"
        />
        <Card
          title="Mobile Apps"
          description="Seamless, responsive applications designed for all devices and platforms."
          iconClass="bx bx-mobile-alt"
          :borderColor="'#ffffff'"
        />
        <Card
          title="UI/UX & Prototyping"
          description="User-focused designs and Figma prototypes that bring ideas to life."
          iconClass="bx bx-palette"
          :borderColor="'#ffffff'"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import Card from '../components/Card.vue'
</script>


