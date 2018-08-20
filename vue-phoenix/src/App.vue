<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>

  import Navbar from './components/Navbar'
  import Footer from './components/Footer'
export default {
  name: 'App',
  components: {Navbar, Footer},

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
  color: #ccc;
}
</style>
