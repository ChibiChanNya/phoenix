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
  scrollBehavior (to, from, savedPosition) {
    console.log(to,from);
    if(to.name !== from.name){
      if(to.hash){
        return { selector: to.hash, offset: { x: 0, y: 50 } } // scroll to the element
      }
      else{
        return { x: 0, y: 0 }

      }
    }
  }

})
