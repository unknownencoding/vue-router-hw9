import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShopView from "@/views/ShopView.vue"
import PayView from "@/views/PayView.vue"
import ContactView from '@/views/ContactView.vue'

import LaptopsList from "@/components/LaptopsList.vue"
import PhonesList from "@/components/PhonesList.vue"
import TvList from "@/components/TvList.vue"


import PhoneCard from '@/components/PhoneCard.vue'
import LaptopCard from '@/components/LaptopCard.vue'
const routes = [
  {
    path: '/',
    name: 'Головна',
    component: HomeView
  },
  {
    path: '/shop',
    name: 'Магазин',
    component: ShopView
  },
  {
    path: '/pay',
    name: 'Оплата',
    component: PayView
  },
  {
    path: '/contact',
    name: 'Контакти',
    component: ContactView
  },
  // ===
  {
    path: '/laptopslist',
    name: 'laptopslist',
    component: LaptopsList
  },
  
   {
    path: '/laptopslist/:laptopId', 
    name: 'laptopscard',
    component: LaptopCard
  },
 
  {
    path: '/phoneslist',
    name: 'phoneslist',
    component: PhonesList
  },
  {
    path: '/phoneslist/:phoneId',
    name: 'phonescard',
    component: PhoneCard
  },
  {
    path: '/tvlist',
    name: 'tvlist',
    component: TvList
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
