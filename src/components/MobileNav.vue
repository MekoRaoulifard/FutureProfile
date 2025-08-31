<template>
  <div>
    <!-- Top bar -->
    <nav class="fixed top-0 left-0 right-0 bg-black text-text-primary flex items-center px-6 py-4 md:hidden z-50 border-b border-border">
      <RouterLink to="/" class="text-text-primary font-bold text-2xl">Meko</RouterLink>
    </nav>

    <!-- Bottom nav -->
    <nav class="fixed bottom-0 left-0 right-0 bg-black text-text-primary flex justify-around py-2 md:hidden z-50 border-t border-border">
      <RouterLink to="/" class="flex flex-col items-center text-xs hover:text-accent transition">
        <i class="bx bx-home text-2xl"></i><span>Home</span>
      </RouterLink>
      <RouterLink to="/services" class="flex flex-col items-center text-xs hover:text-accent transition">
        <i class="bx bx-desktop text-2xl"></i><span>Services</span>
      </RouterLink>
      <RouterLink to="/portfolio" class="flex flex-col items-center text-xs hover:text-accent transition">
        <i class="bx bx-briefcase text-2xl"></i><span>Portfolio</span>
      </RouterLink>
      <RouterLink to="/contact" class="flex flex-col items-center text-xs hover:text-accent transition">
        <i class="bx bx-envelope text-2xl"></i><span>Contact</span>
      </RouterLink>
      <RouterLink to="/about" class="flex flex-col items-center text-xs hover:text-accent transition">
        <i class="bx bx-user text-2xl"></i><span>About</span>
      </RouterLink>
    </nav>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

