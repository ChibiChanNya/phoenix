<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view/>
    <Footer></Footer>
    <!-- Back To Top -->
    <span @click="scroll_top" id="return-to-top"><i class="fa fa-chevron-up"></i></span>
    <transition name="slide-fade">
      <div id="cookies-warn" v-if="!accepted_cookies">
        <div class="header">
          <h3>Este sitio web utiliza cookies</h3>
          <div class="close-btn" @click="accept_cookies"><i class="fa fa-times"></i></div>
        </div>
        <p>Utilizamos cookies para garantizarte la mejor experiencia nevgando nuestro sitio. Al continuar navegando sin hacer ningun cambio o al cerrar esta notificación aceptas implícitamente nuestro uso de cookies.</p>
        <p>Si tienes alguna duda sobre como utilizamos las cookies, visita nuestro <router-link to="privacy-policy">aviso de privacidad</router-link>. También puedes  <a href="https://www.wikihow.com/Disable-Cookies" target="_blank">aprender como deshabilitarlas</a>.</p>
      </div>
    </transition>

  </div>

</template>

<script>

  import Navbar from './components/Navbar'
  import Footer from './components/Footer'

  //Return to top code
  // ===== Scroll to Top ====
  $(window).scroll(function() {
    if ($(this).scrollTop() >= 200) {        // If page is scrolled more than 50px
      $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
      $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
  });


  export default {
    name: 'App',
    components: {Navbar, Footer},

    data(){
      return{
        accepted_cookies: true,
      }
    },

    methods:{
      scroll_top: function(){
        $('body,html').animate({
          scrollTop : 0 // Scroll to top of body
        }, 500);
      },

      accept_cookies: function(){
        this.$cookies.set("accepted_cookies","GH1.1.1689020474.1484362313", Infinity);  // never expire
        this.accepted_cookies = true;
      }
    },

    mounted(){
      this.accepted_cookies = this.$cookies.get("accepted_cookies");
    }

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

  #cookies-warn{
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 10px 20px;
    background: rgba(23,190,210,0.95);
    box-shadow: 0 0 1px black;
  }

  #cookies-warn h3{
    margin-bottom: 0.5rem;
  }

  #cookies-warn .header{
    display: flex;
    justify-content: space-between;
  }

  #cookies-warn .close-btn i{
    cursor: pointer;
    color: white;
    border: none;
  }

  #cookies-warn .close-btn:hover i{
    cursor: pointer;
    color: #ccc;
    border: none;
  }

  #cookies-warn p{
    color: #222;
    margin-bottom: 0.5rem;
  }

  #cookies-warn a{
    color: white;
  }

  #cookies-warn a:hover, #cookies-warn a:active{
    color: #ccc;
  }

  /* Enter and leave animations can use different */
  /* durations and timing functions.              */
  .slide-fade-enter-active {
    transition: all .8s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateY(30px);
    opacity: 0;
  }

</style>
