import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Services from '../views/Services.vue'
import Portfolio from '../views/Portfolio.vue'
import Contact from '../views/Contact.vue'
import Zeryaw from '../views/Zeryaw.vue'
import Student from '../views/Student.vue'
import Arvr from '../views/Arvr.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/services', component: Services },
  { path: '/portfolio', component: Portfolio },
  { path: '/contact', component: Contact },
  { path: '/zeryaw', component: Zeryaw },
  { path: '/student', component: Student },
  { path: '/arvr', component: Arvr },
]

export default createRouter({
  history: createWebHistory('/FutureProfile/'),  
  routes,
})
