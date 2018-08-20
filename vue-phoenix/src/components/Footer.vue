<template>
  <!--========== FOOTER ==========-->
  <div>

    <div class="footer">
      <!-- Links -->
      <div class="section-seperator">
        <div class="content-md container">
          <div class="row">
            <div class="col-sm-6 offset-sm-1 sm-margin-b-30">
              <h3>Envíanos un mensaje</h3>
              <!-- Contact Form -->
              <form class="contact-form" id="contact-form" v-on:submit.prevent="submit_contact">
                <div class="form-group">
                  <input class="form-control" required type="text" title="name" name="name" id="name"
                         placeholder="Nombre" v-model="contact.name"/>
                  <input class="form-control" required type="email" title="email" name="email" id="email"
                         placeholder="Dirección de Correo" v-model="contact.mail"/>
                  <input class="form-control" type="text" title="phone" name="phone" id="phone" placeholder="Teléfono"
                         v-model="contact.phone"/>
                  <textarea class="form-control" required rows="4" maxlength="255" title="message" name="message"
                            id="message" placeholder="Mensaje" v-model="contact.message"></textarea>
                  <button type="submit" class="btn btn-blue">Enviar</button>
                  <span id="success" class="text-success" style="margin:0 20px"></span>
                </div>
              </form>
              <!-- End Form -->
            </div>
            <div class="col-sm-3 offset-sm-1 sm-margin-b-30">
              <!-- Social Media List -->
              <h3>Síguenos en redes sociales</h3>
              <ul class="social-icons" style="padding:0;margin:auto;text-align:center">
                <a href="https://www.facebook.com/Notecodec/" target="_blank" class="fa fa-facebook"></a>
                <a href="https://www.linkedin.com/company/25045739/" target="_blank" class="fa fa-linkedin"></a>
              </ul>
            </div>
            <!-- End List -->
          </div>
        </div>
        <!--// end row -->
      </div>
      <!-- End Links -->

      <!-- Copyright -->
      <div class="content container">
        <div class="row">
          <div class="col-6">
          </div>
          <div class="col-6 text-right">
            <p class="margin-b-0"> Powered by <span class="phoenix-text">Phoenix</span> <span class="development-text">Development</span>
            </p>
            <p><router-link to="privacy-policy" >Aviso de privacidad</router-link></p>
          </div>
        </div>
        <!--// end row -->
      </div>
      <!-- End Copyright -->
    </div>
    <!--========== END FOOTER ==========-->

    <!-- Back To Top -->
    <a href="javascript:void(0);" class="js-back-to-top back-to-top">Top</a>
  </div>
  <!--END PAGE-->
</template>

<script>

  import {get_test} from './../../utils/mailgun';

  export default {
    name: "Footer",

    data() {
      return {
        contact: {
          name: null,
          email: null,
          phone: null,
          message: null,
        }
      }
    },

    methods: {
      submit_contact: function () {
        // send_contact(this.contact.name, this.contact.email, this.contact.phone, this.contact.message);
        get_test();
        return false;
      }
    },
  }
</script>

<style scoped>

</style>
