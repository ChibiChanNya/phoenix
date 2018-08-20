<template>
  <!--========== HEADER ==========-->
  <nav class="navbar navbar-expand-lg sticky-top navbar-light">
    <router-link class="navbar-brand" to="/">
      <img src="../assets/img/logo-horizontal-metal.png"  class="d-inline-block align-top" alt="Phoenix Logo">
    </router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link class="nav-item nav-link" v-smooth-scroll to="/#home">Inicio <span class="sr-only">(current)</span></router-link>
        <router-link class="nav-item nav-link" v-smooth-scroll to="/#about">Sobre Nosotros</router-link>
        <router-link class="nav-item nav-link" v-smooth-scroll  to="/#work">Trabajo</router-link>
        <router-link class="nav-item nav-link" v-smooth-scroll to="/#service">Servicios</router-link>
        <router-link class="nav-item nav-link" v-smooth-scroll to="/#contact">Contacto</router-link>
      </div>
    </div>
  </nav>
  <!--========== END HEADER ==========-->
</template>

<script>
  export default {
    name: "Navbar",

    data(){
      return{
        scrollPosition: null,
      }
    },

    methods: {
      updateScroll() {
        this.scrollPosition = window.scrollY;
        let $nav = $(".navbar");
        $nav.toggleClass('scrolled', this.scrollPosition > $nav.height()+100);
      },
    },

    mounted() {
      window.addEventListener('scroll', this.updateScroll);
    },

    destroy() {
      window.removeEventListener('scroll', this.updateScroll)
    }

  }


</script>

<style scoped>

  .navbar{
    padding: 2px 50px;
    background: transparent;
    transition: background-color 200ms linear;
  }

  .navbar-nav{
    padding: 10px;
  }

  .navbar.scrolled{
    background: #343434;
    box-shadow: 0 0 1px rgba(0,0,0,0.4);
  }

  .navbar-brand img{
    max-height: 80px;
  }

  .nav-item.nav-link {
    font-size: 15px;
    font-weight: 600;
    font-family: Hind, sans-serif;
    color: #fff;
    text-shadow: 0 0 1px black;
    text-transform: uppercase;
    line-height: 55px;
    padding: 0 15px;
    transition-duration: 300ms;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.7, 1, 0.7, 1);
  }


  .navbar.scrolled .nav-item.nav-link{
    text-shadow: none;
  }
  .nav-item.nav-link:hover, .nav-item.nav-link:active{
    color:white;
    text-shadow: 0 0 1px #17bed2 !important;
  }


</style>
