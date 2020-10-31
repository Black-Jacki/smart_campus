import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login/Login'
import Error_404 from '@/pages/Error_404/Error_404'
import Details from '@/pages/Details/Details'

Vue.use(Router)

export default new Router({
  mode: "history",
  base: "/campus/",
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/details',
      name: 'Details',
      component: Details
    },
    {
      path: '*',
      name: 'Error_404',
      component: Error_404
    },
  ]
})
