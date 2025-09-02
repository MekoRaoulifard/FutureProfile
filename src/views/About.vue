<template>
  <section ref="aboutSection" class="py-20 px-6 md:px-16 lg:px-32 lg:py-32 bg-bg-base section-animate">
    <div class="container mx-auto max-w-6xl">
      <RouterLink to="/portfolio" class="bg-accent text-bg-dark px-4 py-1 rounded-full text-xs font-semibold hover:accent-hover transition">
        ← Back to portfolio
      </RouterLink>
      <h2 class="text-4xl lg:text-6xl font-bold text-justify mb-16 text-text-primary">My journey</h2>
      <div class="space-y-12">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card
            title="My journey"
            description="I am a master student with a background in data and multimedia. My short-term plan is to secure a full-time job within three months after graduation. If not, I will dedicate myself to Zeryaw, my independent project. With Zeryaw, I plan to start small, connect with communities, and explore opportunities in Norway, Scandinavia, and beyond."
            image="/images/me1.png"
            :borderColor="'#ffffff'"
            class="custom-card"
          />
          <Card
            title="Zeryaw digital innovation"
            description="Zeryaw is my company. It was created to bypass the three to five years of job experience that many roles demand. It provides digital solutions like apps, websites, and software with strong user experience (UX). The prototype is a Vue.js single page application (SPA) with role-based dashboards and a clean, ocean-inspired design."
            image="/images/logo.png"
            :borderColor="'#ffffff'"  
            class="custom-card"
          />
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card
            title="Dream job"
            description="My dream is to run my own projects and work independently with creative freedom. I aim to prove my skills by building real solutions rather than waiting for traditional roles."
            :borderColor="'#ffffff'"
            class="custom-card"
          />
          <Card
            title="Competence gaps"
            description="I am improving my skills in AR, VR, and AI development, client communication, and project management by creating my own projects and gaining hands-on experience."
            :borderColor="'#ffffff'"
            class="custom-card"
          />
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card
            title="Future profile"
            description="I do not use platforms like Upwork or Fiverr for my work. Polywork and Lunchclub are networking alternatives I am aware of."
            :borderColor="'#ffffff'"
            class="custom-card"
          />
          <Card
            title="Learning strategy"
            description="I am using my master courses to improve my user experience (UX) and augmented and virtual reality (AR/VR) skills, and I continuously try to keep my knowledge up to date. My master thesis explores AR/VR simulations, and this connects to future goals for Zeryaw."
            :borderColor="'#ffffff'"
            class="custom-card"
          />
        </div>
        <Card
          title="Reflection statement"
          description="My title as founder of Zeryaw shows my independence. I use keywords like user interface (UI), user experience (UX), prototyping, augmented reality (AR), and virtual reality (VR) to describe my skills. My main audience is small businesses and startups in Norway and Scandinavia."
          :borderColor="'#ffffff'"
          class="custom-card"
        />
      </div>
      <!-- CV Expandable Section -->
      <Card
        title="Example of my CV"
        description=""
        :borderColor="'#ffffff'"
        class="custom-card cursor-pointer mt-8"
        @click="toggleExpand"
      />
      <transition name="fade">
        <div v-if="expanded" class="mt-4 bg-bg-dark p-8 border border-border md">
          <div class="flex border-b border-border mb-6">
            <button
              @click="activeTab = 'en'"
              :class="tabClass('en')"
              class="flex-1 py-3 border-r border-border last:border-r-0 uppercase text-xs tracking-widest transition-colors duration-150"
            >
              English
            </button>
            <button
              @click="activeTab = 'no'"
              :class="tabClass('no')"
              class="flex-1 py-3 uppercase text-xs tracking-widest transition-colors duration-150"
            >
              Norsk Bokmål
            </button>
          </div>

          <!-- English CV Tab -->
          <div v-if="activeTab === 'en'" class="min-h-[200px] pt-2 cv-content" @contextmenu.prevent>
            <div class="cv-header">
              <div class="left">
                <h1>Meko Rasoulifard</h1>
                <p class="text-sm">My address </p>
                <p class="text-sm">Norway</p>
              </div>
              <div class="right">
                <p class="text-sm">Date: 02.09.2025</p>
                <p class="text-sm">meko[...]@gmail.com</p>
              </div>
            </div>
            <h2>Summary</h2>
            <p>I am a web developer with experience in technologies like JavaScript, Node.js, React, and C# (.NET). I’m currently working part-time at Evenstad Music Distribution AS, and I’m looking for new opportunities to apply my backend development skills.</p>
            <p>I hold a bachelor’s degree in multimedia and another in computer science, and I am currently a master’s student at UiA. I have good experience with PostgreSQL databases and use Figma for prototyping. I’m always interested in learning more and taking on new tasks.</p>
            <h2>Skills</h2>
            <ul class="skill-list">
              <li v-for="(skill, index) in skills.en" :key="index" :class="{'bg-gray-50': index % 2 === 0}">{{ skill }}</li>
            </ul>
            <h2>Education</h2>
            <ul class="education-list">
              <li v-for="(degree, index) in education.en" :key="index" :class="{'bg-gray-50': index % 2 === 0}">{{ degree }}</li>
            </ul>
            <h2>Experience</h2>
            <ul class="experience-list">
              <li v-for="(exp, index) in experiences.en" :key="index">{{ exp }}</li>
            </ul>
            <h2>Contact Info</h2>
            <p>Email: meko[...]@gmail.com</p>
            <p>Phone:+47 ... .. ...</p>
            <p>LinkedIn: http://www.linkedin.com/in/mekor</p>
            <h2>Languages</h2>
            <ul>
              <li v-for="(lang, index) in languages.en" :key="index">{{ lang }}</li>
            </ul>
            <div class="cv-footer">
              <p>Meko, Rasoulifard, CV og søknad</p>
              <p>Page 1 of 1</p>
            </div>
          </div>

          <!-- Norsk Bokmål CV Tab -->
          <div v-if="activeTab === 'no'" class="min-h-[200px] pt-2 cv-content" @contextmenu.prevent>
            <div class="cv-header">
              <div class="left">
                <h1>Meko Rasoulifard</h1>
                <p class="text-sm">My address </p>
                <p class="text-sm">Norway</p>
              </div>
              <div class="right">
                <p class="text-sm">Dato: 02.09.2025</p>
                <p class="text-sm">meko[...]@gmail.com</p>
              </div>
            </div>
            <h2>Litt om meg</h2>
          <p>Jeg er en webutvikler med erfaring i teknologier som JavaScript, Node.js, React og C# (.NET). For tiden jobber jeg deltid hos Evenstad Music Distribution AS, og jeg er på utkikk etter nye muligheter hvor jeg kan bruke mine ferdigheter innen backend-utvikling.</p>
<p>Jeg har en bachelorgrad i multimedia og en annen i Data, og jeg er for øyeblikket masterstudent ved UiA. Jeg har god erfaring med PostgreSQL-databaser og bruker Figma til prototyping. Jeg er alltid interessert i å lære mer og ta på meg nye oppgaver.</p>
<p>Jeg trives godt med å jobbe i team, men tar også ansvar for egne oppgaver.</p>
            <h2>Kompetanse</h2>
            <ul class="skill-list">
              <li v-for="(skill, index) in skills.no" :key="index" :class="{'bg-gray-50': index % 2 === 0}">{{ skill }}</li>
            </ul>
            <h2>Utdanning</h2>
            <ul class="education-list">
              <li v-for="(degree, index) in education.no" :key="index" :class="{'bg-gray-50': index % 2 === 0}">{{ degree }}</li>
            </ul>
            <h2>Erfaring</h2>
            <ul class="experience-list">
              <li v-for="(exp, index) in experiences.no" :key="index">{{ exp }}</li>
            </ul>
            <h2>Kontaktinfo</h2>
       <p>Email: meko[...]@gmail.com</p>
            <p>Phone:+47 ... .. ...</p>
            <p>LinkedIn: http://www.linkedin.com/in/meekor</p>
            <h2>Språk</h2>
            <ul>
              <li v-for="(lang, index) in languages.no" :key="index">{{ lang }}</li>
            </ul>
            <div class="cv-footer">
              <p>Meko, Rasoulifard, CV og søknad</p>
              <p>Page 1 of 1</p>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { ref, onMounted } from 'vue'
import Card from '../components/Card.vue'

const aboutSection = ref(null)
const expanded = ref(false)
const activeTab = ref('en')

const toggleExpand = () => {
  expanded.value = !expanded.value
}

const tabClass = (tab) => {
  return activeTab.value === tab
    ? 'bg-accent text-bg-dark font-semibold'
    : 'bg-bg-base text-text-primary hover:bg-accent-hover hover:text-bg-dark'
}

const skills = {
  en: [
    "Web Development: JavaScript, Node.js, C# (.NET), HTML5,React, CSS, Bootstrap",
    "Database Management: PostgreSQL",
    "3D Modeling: Autodesk Fusion 360, Blender, ZBrush, Adobe Substance 3D",
    "2D: Figma,Adobe illustrator,Photoshop,InDesign , Lightroom,Captivate",
    " Video: After Effects, Premiere Pro, Audition,Media Encoder",
    "Version Control: Git, GitHub, and AWS for deployment",
  ],
  no: [
    "Programmeringsspråk: JavaScript, Node.js, C# (.NET), HTML5,React, CSS, Bootstrap",
    "Databasestyring: PostgreSQL",
    "Metoder: Fullstack-utvikling, API-integrasjoner",
    "3D-modellering: Autodesk Fusion 360, Blender, ZBrush, Adobe Substance 3D",
    "2D: Figma,Adobe illustrator,Photoshop,InDesign , Lightroom,Captivate",
    " Video: After Effects, Premiere Pro, Audition,Media Encoder",
    "Version Control: Git, GitHub, npm, and Amazon web services(AWS)",
  ]
}

const education = {
  en: [],
  no: [
    "August 2024 (present)-Universitetet i Agder(UiA) Master I Multimedia and Educational Technology",
    "August 2021-Juni 2024-Universitetet i Agder(UiA) Multimedieteknologi og-design",
  ]
}

const experiences = {
  en: [
    "Currently working part-time at Evenstad Music Distribution AS.",
    "I enjoy learning new things and improving my skills. I also like taking on new challenges and tasks.",
  ],
  no: [
    "01.06-2021 – present: Evenstadmusikk (AS): Jeg startet praksis hos Evenstad Musikk sommeren 2021, og jobber nå deltid én dag i uken hos Evenstad Music Distribution AS.",
  ]
}

const languages = {
  en: [
    "Norwegian",
    "English",
    "Driver's License: Class B",
  ],
  no: ["Norsk", "Engelsk", "Førerkort: Klasse B"]
}

onMounted(() => {
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      aboutSection.value.classList.add('visible')
      observer.disconnect()
    }
  })
  observer.observe(aboutSection.value)
})
</script>

<style scoped>
.custom-card p {
  text-align: start;
  white-space: normal;
  overflow-wrap: break-word;
}

.custom-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: auto;
  max-width: 100%;
}

.card .card-body p {
  text-align: justify;
}

.cv-content {
  font-family: 'Times New Roman', Garamond, Georgia, serif;
  font-size: 0.875rem; /* approx 11pt */
  line-height: 1.5;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  color: #5f5e5e;
  pointer-events: none; /* Prevent interaction to make copying harder */
}

.cv-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.cv-header h1 {
  font-size: 1.25rem; /* approx 16pt */
  font-weight: bold;
}

.cv-header .left p {
  margin: 0.125rem 0;
}

.cv-header .right {
  text-align: right;
}

.cv-header .right p {
  margin: 0.125rem 0;
}

h2 {
  font-size: 1rem; /* approx 14pt */
  font-weight: bold;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}

p {
  margin-bottom: 0.5rem;
  text-align: justify;
}

.skill-list,
.education-list,
.experience-list {
  list-style-type: none;
  padding: 0;
}

.skill-list li,
.education-list li,
.experience-list li {
  padding: 0.5rem;
  border-bottom: 1px solid #e0e0e0;
}

.skill-list li:last-child,
.education-list li:last-child,
.experience-list li:last-child {
  border-bottom: none;
}

.cv-footer {
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  font-size: 0.75rem; /* approx 10pt */
  color: #969696;
}

button {
  border-radius: 0 !important;
}

:root {
  --color-accent-hover: #205c6b;
}

.bg-accent-hover {
  background-color: var(--color-accent-hover) !important;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* Disable print for CV content */
@media print {
  .cv-content {
    display: none !important;
  }
}
</style>