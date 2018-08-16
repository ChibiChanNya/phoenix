<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view/>
  </div>
</template>

<script>

  import Navbar from './components/Navbar'
export default {
  name: 'App',
  components: {Navbar},

}
</script>

<style>
  @import './assets/style/layout.css';
  @import './assets/vendor/swiper/css/swiper.min.css';

  #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}
</style>
