import { createRouter, createWebHistory } from 'vue-router'


import  predict from '../show_views/predict'
import  introduce from '../show_views/introduce'
import  history from '../show_views/history'
import  history2 from '../show_views/history2'
import  weather from '../show_views/weather'
import  weather2 from '../show_views/weather2'
import  weather3 from '../show_views/weather3'

const routes = [


  {
    path: '/',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/login.vue')
  },
  {
    path: '/register',
    name: 'register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/register.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import(/* webpackChunkName: "about" */ '../views/main.vue'),
    children:[
      {
        path: '/predict',
        name: 'predict',
        component: predict
      },
      {
        path: '/introduce',
        name: 'introduce',
        component: introduce
      },
      {
        path: '/history',
        name: 'history',
        component: history
      },
      {
        path: '/history2',
        name: 'history2',
        component: history2
      },
      {
        path: '/weather',
        name: 'weather',
        component: weather
      },
      {
        path: '/weather2',
        name: 'weather2',
        component: weather2
      },
      {
        path: '/weather3',
        name: 'weather3',
        component: weather3
      }
    ]

  },
  {
    path: '/admin',
    name: 'admin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/admin.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import(/* webpackChunkName: "about" */ '../views/test.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
