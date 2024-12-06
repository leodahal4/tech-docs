import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import MarkdownView from '../components/MarkdownView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/docs/:type/:file',
    name: 'MarkdownView',
    component: MarkdownView,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
