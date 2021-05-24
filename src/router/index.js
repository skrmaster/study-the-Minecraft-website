import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{ title:'MineCreateTest' }
  },
  {
    path: '/playmethods',
    name: 'playmethods',
    component: () => import('../views/PlayMethods.vue'),
    meta:{ title:'PlayMethods' }
  },
  {
    path: '/playmethods/javaversion',
    name: 'javaversion',
    component: () => import('../components/ThreeLevelPage/JavaVersion.vue'),
    meta:{ title:'javaversion' }
  },
  {
    path: '/community',
    name: 'community',
    component: () => import('../views/Community.vue'),
    meta:{ title:'Community' }
  },
  {
    path: '/minecraft',
    name: 'minecraft',
    component: () => import('../views/Minecraft.vue'),
    meta:{ title:'minecraft' }
  },
  {
    path: '/minecraft/lighttest',
    name: 'lighttest',
    component: () => import('../components/ThreeLevelPage/LightPage.vue'),
    meta:{ title:'lighttest' }
  },
  {
    path: '/minecraft/beepage',
    name: 'beepage',
    component: () => import('../components/ThreeLevelPage/BeePage.vue'),
    meta:{ title:'beepage' }
  },
  {
    path: '/minecraft/updataguide',
    name: 'updataguide',
    component: () => import('../components/ThreeLevelPage/UpdateGuide.vue'),
    meta:{ title:'updataguide' }
  },
  {
    path: '/Town',
    name: 'town',
    component: () => import('../components/ThreeLevelPage/Town.vue'),
    meta:{ title:'town' }
  },
  {
    path: '/Underwater',
    name: 'Underwater',
    component: () => import('../components/ThreeLevelPage/UnderWater.vue'),
    meta:{ title:'underwater' }
  }
  
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
