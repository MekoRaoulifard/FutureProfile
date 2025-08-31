<template>
  <section ref="contactSection" class="py-16 lg:py-32 bg-bg-base px-6 lg:px-32 text-text-primary section-animate">
    <div class="container mx-auto max-w-2xl">
      <div class="flex items-center mb-8">
        <RouterLink to="/portfolio" class="bg-accent text-bg-dark px-4 py-1 text-xs font-semibold hover:accent-hover transition">
          ← Back to Portfolio
        </RouterLink>
      </div>
      <h2 class="text-4xl lg:text-6xl font-bold text-center mb-6">Connect With Me</h2>
      <div class="bg-bg-dark p-6 border border-border">
        <div class="flex border-b border-border">
          <button
            @click="activeTab = 'login'"
            :class="tabClass('login')"
            class="flex-1 py-2 border-r border-border last:border-r-0"
          >
            Login
          </button>
          <button
            @click="activeTab = 'register'"
            :class="tabClass('register')"
            class="flex-1 py-2 border-r border-border last:border-r-0"
          >
            Register
          </button>
          <button
            @click="activeTab = 'contact'"
            :class="tabClass('contact')"
            class="flex-1 py-2"
          >
            Contact
          </button>
        </div>

        <!-- Login -->
        <div v-if="activeTab === 'login'" class="min-h-[200px] pt-6">
          <h3 class="text-xl lg:text-2xl font-bold mb-4">Login (Demo Only)</h3>
          <input
            type="email"
            placeholder="Email"
            disabled
            class="w-full p-2 mb-4 border bg-bg-base text-text-primary border-border"
          />
          <input
            type="password"
            placeholder="Password"
            disabled
            class="w-full p-2 mb-4 border bg-bg-base text-text-primary border-border"
          />
          <button
            disabled
            class="w-full bg-border text-text-secondary py-2 cursor-not-allowed"
          >
            Login Disabled
          </button>
        </div>

        <!-- Register -->
        <div v-if="activeTab === 'register'" class="min-h-[200px] pt-6">
          <h3 class="text-xl lg:text-2xl font-bold mb-4">Register (Demo Only)</h3>
          <input
            type="text"
            placeholder="Full Name"
            disabled
            class="w-full p-2 mb-4 border bg-bg-base text-text-primary border-border"
          />
          <input
            type="email"
            placeholder="Email"
            disabled
            class="w-full p-2 mb-4 border bg-bg-base text-text-primary border-border"
          />
          <input
            type="password"
            placeholder="Password"
            disabled
            class="w-full p-2 mb-4 border bg-bg-base text-text-primary border-border"
          />
          <button
            disabled
            class="w-full bg-border text-text-secondary py-2 cursor-not-allowed"
          >
            Register Disabled
          </button>
        </div>

        <!-- Contact -->
        <div v-if="activeTab === 'contact'" class="min-h-[200px] pt-6">
          <h3 class="text-xl lg:text-2xl font-bold mb-4">Get in Touch</h3>
          <form @submit.prevent="handleSubmit">
            <input
              v-model="form.name"
              type="text"
              placeholder="Full Name"
              class="w-full p-2 mb-4 border bg-bg-base text-text-primary border-border"
              required
            />
            <input
              v-model="form.email"
              type="email"
              placeholder="Email"
              class="w-full p-2 mb-4 border bg-bg-base text-text-primary border-border"
              required
            />
            <textarea
              v-model="form.message"
              rows="4"
              placeholder="Message"
              class="w-full p-2 mb-4 border bg-bg-base text-text-primary border-border"
              required
            ></textarea>
            <button
              type="submit"
              class="w-full bg-accent text-bg-dark py-2 hover:accent-hover transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { ref, onMounted } from 'vue'

const activeTab = ref('contact')
const form = ref({
  name: '',
  email: '',
  message: ''
})

function tabClass(tab) {
  return [
    'flex-1 py-2 border-r border-border last:border-r-0 transition-colors duration-200',
    activeTab.value === tab ? 'bg-accent text-bg-dark' : 'bg-bg-base text-text-primary hover:bg-accent-hover'
  ]
}

function handleSubmit() {
  console.log('Form submitted:', form.value)
  form.value = { name: '', email: '', message: '' }
  alert('Message sent! (Demo: Check console for form data)')
}

const contactSection = ref(null)

onMounted(() => {
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      contactSection.value.classList.add('visible')
      observer.disconnect()
    }
  })
  observer.observe(contactSection.value)
})
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
</style>


