<template>
  <div class="bg-bg-base text-text-primary min-h-screen font-sans">
    <MobileNav />
    <Navbar />
    <main class="pt-16 pb-20 md:pt-20 md:pb-0">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import MobileNav from './components/MobileNav.vue'
</script>

