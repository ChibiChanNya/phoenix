// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueSmoothScroll from 'vue-smooth-scroll'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false;
Vue.use(vueSmoothScroll);
Vue.use(require('vue-cookies'));
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBWPIxMlGvzCHcz0wEvJQk4zcdwrmpj6qs',
    libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)

    //// If you want to set the version, you can do so:
    // v: '3.26',
  },
});


// Global Directives
// Show on scroll
Vue.directive('vpshow', {
  inViewport (el) {
    var rect = el.getBoundingClientRect();
    return !(rect.bottom < 0 || rect.right < 0 ||
      rect.left > window.innerWidth ||
      rect.top > window.innerHeight)
  },

  bind(el, binding) {
    el.classList.add('before-enter');
    el.$onScroll = function() {
      if (binding.def.inViewport(el)) {
        el.classList.add('enter');
        el.classList.remove('before-enter');
        binding.def.unbind(el, binding)
      }
    };
    document.addEventListener('scroll', el.$onScroll)
  },

  inserted(el, binding) {
    el.$onScroll()
  },

  unbind(el, binding) {
    document.removeEventListener('scroll', el.$onScroll)
    delete el.$onScroll
  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});

