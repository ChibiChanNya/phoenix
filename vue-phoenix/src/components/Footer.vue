<template>
  <!--========== FOOTER ==========-->
  <div id="global-footer">

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
                  <div class="d-flex">
                    <button id="contact-submit" type="submit" class="btn btn-blue">Enviar</button>
                    <span id="success" class="text-success" style="margin:0 20px"></span>
                  </div>

                </div>
              </form>
              <!-- End Form -->
            </div>
            <div class="col-sm-3 offset-sm-1 sm-margin-b-30">
              <!-- Social Media List -->
              <h3>Síguenos en redes sociales</h3>
              <ul class="social-icons" style="padding:0;margin:auto;text-align:center">
                <a href="https://www.facebook.com/Phoenix-Development-691184954595484/" target="_blank"
                   class="fa fa-facebook"></a>
                <a href="https://www.instagram.com/phoenixdevelopmentcompany/?hl=es-la" target="_blank"
                   class="fa fa-instagram"></a>
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
          <div class="col-md-6">
          </div>
          <div class="col-md-6 text-right">
            <p class="margin-b-0"> Powered by <span class="phoenix-text">Phoenix</span> <span class="development-text">Development</span>
            </p>
            <p>
              <router-link to="privacy-policy"><span class="phoenix-text">Aviso de</span> <span
                class="development-text">privacidad</span></router-link>
            </p>
          </div>
        </div>
        <!--// end row -->
      </div>
      <!-- End Copyright -->
    </div>
    <!--========== END FOOTER ==========-->
  </div>
  <!--END PAGE-->
</template>

<script>

  import axios from 'axios';

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
          fbq('track', 'contact');
          console.log("Sending mail...");
        axios.post(
          process.env.SERVER_URL + '/contact_mail', {
            name: this.contact.name,
            email: this.contact.mail,
            phone: this.contact.phone,
            message: this.contact.message
          }
        ).then((res) => {
          console.log("MAIL GOT SENT");
          $('#contact-submit').prop('disabled', true);
          $('#success').html("Tu mensaje fúe enviado exitosamente. Nos pondremos en contacto contigo muy pronto.");

        })
          .catch(e => {
            console.error(e);
            alert("¡Oops! Sucedió un error registrando tu mensaje. Por favor contáctanos directamente o intenta de nuevo mas tarde.")
          });
      },
    }

  }
</script>

<style scoped>

  #global-footer .content {
    padding: 20px;
  }

  #global-footer a:hover {
    text-decoration: underline;
  }

  .btn:disabled{
    cursor:not-allowed;
  }

</style>
