import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Devtool from '../views/Devtool.vue'
import LoginForm from '../views/LoginForm.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginForm,

      beforeEnter: (to, from, next) => {
        const token = localStorage.getItem("token")

        if (token !== null) {
          // Token is valid, allow access to the route
          next({
            name: "tasklist",
          })
        } else {
          // Token is null, redirect to the login page
          next()
        }
      }

    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,

      beforeEnter: (to, from, next) => {
        const token = localStorage.getItem("token")

        if (token !== null) {
          // Token is valid, allow access to the route
          next()
        } else {
          // Token is null, redirect to the login page
          next({
            name: "login",
          })
        }
      }
    },
    {
      path: '/tasklist',
      name: 'tasklist',
      component: HomeView,
      beforeEnter: (to, from, next) => {
        const token = localStorage.getItem("token")

        if (token !== null) {

          next()
        } else {

          next({
            name: "login",
          })
        }
      }


    },
    {
      path: '/DevTool',
      name: 'DevTool',
      component: Devtool,
      beforeEnter: (to, from, next) => {
        const token = localStorage.getItem("token")

        if (token !== null) {
          // Token is valid, allow access to the route
          next()
        } else {
          // Token is null, redirect to the login page
          next({
            name: "login",
          })
        }
      }


    }
  ]
})

export default router
