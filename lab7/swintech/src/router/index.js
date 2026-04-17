import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Travel from '../views/Travel.vue'
import About from '../views/About.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/travel', component: Travel },
  { path: '/about', component: About }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
