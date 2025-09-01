<template>
  <section class="py-16 bg-bg-base px-6">
    <div class="container mx-auto max-w-5xl">
      <h2 class="text-4xl font-bold text-center mb-12 text-text-primary">Services</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <!-- Web Development -->
        <Card
          title="Web Development"
          description="Cutting-edge websites and applications built with Vue.js, React, C# (.NET), and SQL for scalable and reliable solutions."
          iconClass="bx bx-code-alt"
          :borderColor="'#ffffff'"
        />

        <!-- Mobile Apps -->
        <Card
          title="Mobile Apps"
          description="Seamless and responsive mobile applications designed for all devices and platforms with modern frameworks."
          iconClass="bx bx-mobile-alt"
          :borderColor="'#ffffff'"
        />

        <!-- UI/UX & Prototyping -->
        <Card
          title="UI/UX & Prototyping"
          description="User-focused designs and Figma prototypes that bring ideas to life, improving usability and engagement."
          iconClass="bx bx-palette"
          :borderColor="'#ffffff'"
        />

        <!-- Full-Stack Integration (large full-width card) -->
        <div class="md:col-span-3">
          <Card
            title="Full-Stack Integration"
            description="End-to-end solutions combining front-end (Vue.js, React, JS), back-end (C#, .NET), and database management (SQL, PostgreSQL). This ensures robust, scalable, and secure systems for clients."
            iconClass="bx bx-layer"
            :borderColor="'#ffffff'"
          />
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import Card from '../components/Card.vue'
</script>
