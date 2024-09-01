import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Page404 from '../views/Page404.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'page404',
      component: Page404
    }
  ],
  scrollBehavior (to, from, savedPosition){
    if (to.hash){
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    else{
      return {
        top:0
      }
    }
    
  }
})


export default router
