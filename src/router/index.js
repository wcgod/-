import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Shop from '../views/Shop.vue'
import Contact from '../views/Contact.vue'
import Company01 from '../views/Company01.vue'
import Company02 from '../views/Company02.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/shop',
    name: 'shop',
    component: Shop
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/Company01',
    name: 'company01',
    component: Company01
  },
  {
    path: '/Company02',
    name: 'company02',
    component: Company02
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
