<template>
  <div 
    class="relative group p-6 min-h-[300px] bg-bg-dark border transition-all duration-300 flex flex-col justify-between"
    :style="{ '--border-color': borderColor }"
  >
    <!-- Four micro corner dots – visible only on hover -->
    <span class="corner-dot top-0 left-0"></span>
    <span class="corner-dot top-0 right-0"></span>
    <span class="corner-dot bottom-0 left-0"></span>
    <span class="corner-dot bottom-0 right-0"></span>

    <!-- Icon -->
    <div v-if="iconClass" class="mb-6 text-center">
      <i :class="[iconClass, 'text-5xl', 'text-accent']"></i>
    </div>

    <!-- Image section -->
    <div v-else-if="image" class="mb-6">
      <img :src="image" :alt="title" class="w-full object-contain" />
    </div>
    
    <!-- Card content -->
    <div class="flex-1 flex flex-col">
      <h3 class="text-xl font-bold text-text-primary mb-3">{{ title }}</h3>
      <p class="text-text-secondary text-sm leading-relaxed flex-1">{{ description }}</p>
    </div>
    
    <!-- Button section -->
    <div v-if="pdf" class="mt-6 pt-4">
      <a
        :href="pdf"
        download
        class="inline-flex items-center justify-center gap-2 bg-accent text-bg-dark px-4 py-2 text-sm font-semibold hover:bg-accent-hover transition-all duration-300 w-full"
      >
        {{ buttonText }} →
      </a>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  iconClass: String,
  image: String,
  pdf: String,
  buttonText: { type: String, default: "VIEW PDF" },
  borderColor: { type: String, default: '#ffffff' }
})
</script>

<style scoped>

.group {
  border-width: 1px;
  border-style: solid;
  border-radius: 0 !important;
  box-shadow: none !important;
  border-color: var(--border-color);
}

.group:hover {
  border-color: var(--border-color);
}

.corner-dot {
  position: absolute;
  width: 5px;
  height: 5px;
  background: var(--border-color);
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
</style>


