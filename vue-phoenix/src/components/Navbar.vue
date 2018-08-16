<template>
  <!--========== HEADER ==========-->
  <nav class="navbar navbar-expand-lg sticky-top navbar-light">
    <a class="navbar-brand" href="#">
      <img src="../assets/img/phonix-logo-reviele-para-espacio-negro-h.png"  class="d-inline-block align-top" alt="Phoenix Logo">
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-item nav-link" v-smooth-scroll href="#">Inicio <span class="sr-only">(current)</span></a>
        <a class="nav-item nav-link" v-smooth-scroll href="#about">Sobre Nosotros</a>
        <a class="nav-item nav-link" v-smooth-scroll  href="#work">Trabajo</a>
        <a class="nav-item nav-link" v-smooth-scroll href="#service">Servicios</a>
        <a class="nav-item nav-link" v-smooth-scroll href="#contact">Contacto</a>
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
        $nav.toggleClass('scrolled', this.scrollPosition > $nav.height()+200);
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
    padding: 5px 50px;
    background: transparent;
    transition: background-color 200ms linear;
  }

  .navbar-nav{
    padding: 10px;
  }

  .navbar.scrolled{
    background: #343434;
    box-shadow: 0 0 1px rgba(0,0,0,0.2);
  }


  .navbar-brand img{
    max-height: 70px;
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
