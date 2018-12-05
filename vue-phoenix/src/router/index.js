import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Privacy from '../components/Privacy'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/privacy-policy',
      name: 'Privacy Policy',
      component: Privacy
    },
  ],
})
