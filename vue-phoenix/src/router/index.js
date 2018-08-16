import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import White from '../components/White'

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
      path: '/white',
      name: 'Home-White',
      component: White
    }
  ],
})
