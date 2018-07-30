import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main'
import Signup from '@/components/signup'
import Search from '@/components/search'
import Help from '@/components/help'
import Filter from '@/components/filter'
import Akmola from '@/components/regions/akmola'
import Akmola1 from'@/components/rayon/akmola1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
     path: '/signup',
      name: 'Signup',
      component: Signup 
    }, {
    path: '/search',
    name: 'Search',
    component: Search 
  },
  {
    path: '/help',
    name: 'Help',
    component: Help 
  },
   {
    path: '/filter',
    name: 'Filter',
    component: Filter 
  },
  {
    path: '/akmola',
    name: 'Akmola',
    component: Akmola 
  },
  {
    path: '/akmola1',
    name: 'Akmola1',
    component: Akmola1 
  }
  ],	
  mode:'history'
})

