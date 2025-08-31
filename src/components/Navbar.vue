<template>
  <nav class="fixed top-0 w-full bg-bg-dark/95 backdrop-blur-md z-50 hidden md:flex">
    <div class="container mx-auto flex items-center px-6 py-4 space-x-8">
      <RouterLink to="/" class="text-text-primary font-bold text-2xl flex-shrink-0">
        Meko
      </RouterLink>
      <div class="flex space-x-8">
        <RouterLink to="/" class="hover:text-accent transition">Home</RouterLink>
        <RouterLink to="/about" class="hover:text-accent transition">About</RouterLink>
        <RouterLink to="/services" class="hover:text-accent transition">Services</RouterLink>
        <RouterLink to="/portfolio" class="hover:text-accent transition">Portfolio</RouterLink>
        <RouterLink to="/contact" class="hover:text-accent transition">Contact</RouterLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>


