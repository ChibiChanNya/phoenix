<template>

  <div id="home">
    <!--========== HERO HEADER ==========-->

    <div id="hero" class="hero">
      <div class="text-center slogan">
        <div class="typer-container">
          <vue-typer :text='"Crea \n Transforma \n Evoluciona"' :repeat=0 :pre-type-delay=1500
                     :type-delay=150></vue-typer>
        </div>
        <a href="#service" v-smooth-scroll="scrollOptions" class="btn-theme btn-theme-sm btn-white-brd text-uppercase">Conócenos</a>
      </div>
    </div>
    <!--========== HERO HEADER ==========-->
    <!--========== PAGE LAYOUT ==========-->
    <!-- Service -->
    <div id="service">
      <div class="bg-lighter" data-auto-height="true">
        <div class="content-lg container">
          <div class="row margin-b-40">
            <div class="col-sm-6">
              <h2>Servicios</h2>
              <p>Para desarrollar proyectos que aporten valor a nuestros clientes, orientamos nuestro conocimiento a
                entender sus necesidades y las de sus consumidores ofreciendo soluciones en:</p>
            </div>
          </div>
          <!--// end row -->

          <div class="row row-space-1 margin-b-2">
            <div class="col-sm-4 sm-margin-b-2">
              <div class="service" data-height="height" v-vpshow>
                <div class="service-element">
                  <i class="fa fa-sm fa-file-code-o" aria-hidden="true"></i>
                </div>
                <div class="service-info">
                  <h3><span class="phoenix-text">Desarrollo</span> <span class="development-text">Web</span></h3>
                  <p class="margin-b-5">Diseño y desarrollo de:</p>
                  <ul>
                    <li>Sitios Web</li>
                    <li>E-Commerce</li>
                    <li>Plataformas Innovadoras</li>
                    <li>Sistemas Empresariales</li>
                  </ul>
                </div>
                <!--<a href="#" class="content-wrapper-link"></a>    -->
              </div>
            </div>
            <div class="col-sm-4">
              <div class="service" data-height="height" v-vpshow>
                <div class="service-element">
                  <i class="fa fa-sm fa-mobile" aria-hidden="true"></i>
                </div>
                <div class="service-info">
                  <h3><span class="phoenix-text">Desarrollo</span> <span class="development-text">Móvil</span></h3>
                  <p class="margin-b-5">Diseño y desarrollo de:</p>
                  <ul>
                    <li>Aplicaciones para iOS</li>
                    <li>Aplicaciones para Android</li>
                    <li>Aplicaciones Híbridas</li>
                  </ul>
                </div>
                <!--<a href="#" class="content-wrapper-link"></a>    -->
              </div>
            </div>
            <div class="col-sm-4 sm-margin-b-2">
              <div class="service" data-height="height" v-vpshow>
                <div class="service-element">
                  <i class="fa fa-sm fa-line-chart" aria-hidden="true"></i>
                </div>
                <div class="service-info">
                  <h3><span class="phoenix-text">Marketing</span><span class="development-text"> Digital</span></h3>
                  <p class="margin-b-5">Creación, desarrollo y ejecución de Estrategias de Marketing Digital
                    utilizando:</p>
                  <ul>
                    <li>Inbound Marketing</li>
                    <li>Posicionamiento Web SEO/SEM</li>
                    <li>Campañas publicitarias</li>
                    <li>Social Media</li>
                    <li>Marketing de contenidos</li>
                  </ul>
                </div>
                <!--<a href="#" class="content-wrapper-link"></a>    -->
              </div>
            </div>

          </div>
          <!--// end row -->

          <div class="row row-space-1">
            <div class="col-sm-4 sm-margin-b-2">
              <div class="service" data-height="height" v-vpshow>
                <div class="service-element">
                  <i class="fa fa-sm fa-suitcase" aria-hidden="true"></i>
                </div>
                <div class="service-info">
                  <h3><span class="phoenix-text">Imagen</span> <span class="development-text">Corporativa</span></h3>
                  <p class="margin-b-5">Desarrollamos la identidad de tu compañía a través de la creación de:</p>
                  <ul>
                    <li>Manual de Marca</li>
                    <li>Manual de Identidad Corporativa</li>
                    <li>Branding Corporativo</li>
                  </ul>
                </div>
                <!--<a href="#" class="content-wrapper-link"></a>    -->
              </div>
            </div>
            <div class="col-sm-4 sm-margin-b-2">
              <div class="service" data-height="height" v-vpshow>
                <div class="service-element">
                  <i class="fa fa-sm fa-slideshare" aria-hidden="true"></i>
                </div>
                <div class="service-info">
                  <h3><span class="phoenix-text">Consultoría</span></h3>
                  <p class="margin-b-5">Cursos y Capacitación en:</p>
                  <ul>
                    <li>Creación y Desarrollo de Negocios</li>
                    <li>Imagen Corporativa</li>
                    <li>Marketing Digital</li>
                  </ul>
                </div>
                <!--<a href="#" class="content-wrapper-link"></a>    -->
              </div>
            </div>

          </div>
          <!--// end row -->
        </div>
      </div>
    </div>
    <!-- End Service -->

    <!-- About -->
    <div id="about">
      <div class="content-lg container">
        <h3>Nuestra Innovadora Propuesta:<br class="mobile-only"> “The <span class="phoenix-text">Phoenix</span> <span
          class="development-text">Cycle</span>”</h3>

        <!-- Masonry Grid -->
        <div class="masonry-grid row">
          <!--<div class="masonry-grid-sizer col-6 col-sm-6 col-md-1"></div>-->
          <div class="masonry-grid-item col-12 col-sm-6 col-md-4 sm-margin-b-30">
            <div class="margin-b-60">
              <h2>Crea</h2>
              <p>Iniciamos desarrollando la <span class="phoenix-text">Imagen</span> <span class="development-text">Corporativa</span>
                de tu empresa para crear un negocio de alto impacto.</p>
            </div>
            <img class="full-width img-fluid wow fadeInUp" v-vpshow src="../assets/img/700x700/02.png"
                 alt="HTML Code in editor" data-wow-duration=".3" data-wow-delay=".2s">
          </div>
          <div class="masonry-grid-item col-12 col-sm-6 col-md-4">
            <div class="margin-b-60">
              <img class="full-width img-fluid wow fadeInUp" v-vpshow src="../assets/img/700x700/01.png"
                   alt="Drawing Board and Graph Paper" data-wow-duration=".3" data-wow-delay=".3s">
            </div>
            <h2>Transforma </h2>
            <p>Después, incorporamos las herramientas tecnológicas adecuadas para diferenciarte de la competencia y así
              transformar tu negocio <span class="phoenix-text">“tradicional”</span> a <span class="development-text">“digital”</span>
            </p>
          </div>
          <div class="masonry-grid-item col-12 col-sm-6 col-md-4">
            <div class="margin-t-60 margin-b-60">
              <h2>Evoluciona</h2>
              <p>Finalmente, evolucionamos tu forma de atraer nuevos clientes diseñando poderosas Estrategias de
                <span class="phoenix-text">Marketing</span><span class="development-text"> Digital</span>. </p>
            </div>
            <img class="full-width img-fluid wow fadeInUp" v-vpshow src="../assets/img/700x700/03.png"
                 alt="Coffee, Mobile Phone and Laptop" data-wow-duration=".3" data-wow-delay=".4s">
          </div>
        </div>
        <!-- End Masonry Grid -->
      </div>

      <div class="section-seperator">
        <div class="bg-color-sky-light">
          <div class="content-lg container">
            <div class="row">
              <div class="col-md-5 col-sm-5 md-margin-b-60">
                <div class="margin-t-50 margin-b-30">
                  <h2>¿Por qué elegirnos?</h2>
                  <p>Todos nuestros proyectos son desarrollados por <span class="phoenix-text">equipos</span><span
                    class="development-text"> multidisciplinarios</span> integrados por profesionales que aman lo que
                    hacen.</p>
                  <p>Somos expertos en:</p>
                  <ul>
                    <li><span class="phoenix-text">Diseño y Desarrollo</span><span class="development-text"> Web</span>
                    </li>
                    <li><span class="phoenix-text">Diseño y Desarrollo</span><span
                      class="development-text"> Móvil</span></li>
                    <li><span class="phoenix-text">Marketing Digital y</span><span class="development-text"> Comunicación</span>
                    </li>
                    <li><span class="phoenix-text">Imagen</span><span class="development-text"> Corporativa</span></li>
                    <li><span class="phoenix-text">Tecnologías de la</span><span
                      class="development-text"> Información</span></li>
                    <li><span class="phoenix-text">Innovación en</span><span class="development-text"> Negocios</span>
                    </li>
                  </ul>
                  <p>Y aplicamos nuestro conocimiento en cada uno de los proyectos para ofrecer soluciones que aporte
                    valor a tu negocio.</p>
                  <p>Nuestra metodología para desarrollar proyectos va acompañada de un proceso de consultoría.</p>
                </div>
                <!--<a href="#" class="btn-theme btn-theme-sm btn-white-bg text-uppercase">Explore</a>-->
              </div>
              <div class="col-md-5 col-sm-7 offset-md-2">
                <!-- Accordion -->
                <div class="accordion">
                  <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                    <div class="panel panel-default">
                      <div class="panel-heading" role="tab" id="headingOne">
                        <h4 class="panel-title">
                          <a class="panel-title-child" role="button" data-toggle="collapse" data-parent="#accordion"
                             href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Misión
                          </a>
                        </h4>
                      </div>
                      <div id="collapseOne" class="panel-collapse collapse show" role="tabpanel"
                           aria-labelledby="headingOne">
                        <div class="panel-body">
                          <b>Crear desde cero, transformar tu negocio y evolucionar al ritmo de las nuevas
                            tecnologías.</b>
                        </div>
                      </div>
                    </div>
                    <div class="panel panel-default">
                      <div class="panel-heading" role="tab" id="headingTwo">
                        <h4 class="panel-title">
                          <a class="collapsed panel-title-child" role="button" data-toggle="collapse"
                             data-parent="#accordion" href="#collapseTwo" aria-expanded="false"
                             aria-controls="collapseTwo">
                            Visión
                          </a>
                        </h4>
                      </div>
                      <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel"
                           aria-labelledby="headingTwo">
                        <div class="panel-body">
                          <b> Convertir a nuestros clientes en aliados a través del impacto positivo de nuestros
                            servicios en su negocio.</b>
                        </div>
                      </div>
                    </div>
                    <div class="panel panel-default">
                      <div class="panel-heading" role="tab" id="headingThree">
                        <h4 class="panel-title">
                          <a class="collapsed panel-title-child" role="button" data-toggle="collapse"
                             data-parent="#accordion" href="#collapseThree" aria-expanded="false"
                             aria-controls="collapseThree">
                            Valores
                          </a>
                        </h4>
                      </div>
                      <div id="collapseThree" class="panel-collapse collapse" role="tabpanel"
                           aria-labelledby="headingThree">
                        <div class="panel-body">
                          <b>Felicidad:</b> disfrutamos lo que hacemos. No nos vemos haciendo otra cosa que apoyándote a
                          transformar tu negocio.<br><br>
                          <b>Evolución:</b> aprendemos todos los días para poder transformar el conocimiento en
                          soluciones
                          que aporten valor a tu negocio.<br><br>
                          <b>Impacto:</b> nos enfocamos en resolver los problemas más importantes de tu negocio con
                          soluciones de alto impacto.<br><br>
                          <b>Innovación:</b> ofrecemos soluciones tecnológicas únicas e innovadoras que te ayuden a
                          optimizar los recursos y procesos de tu empresa.<br><br>
                          <b>Instruir:</b> disfrutamos enseñarte como funciona el mundo tecnológico.<br><br>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- End Accodrion -->
              </div>
            </div>
            <!--// end row -->
          </div>
        </div>
      </div>

    </div>
    <!-- End About -->

    <!-- Work -->
    <div id="work">
      <div class="section-seperator">
        <div class="content-md container">
          <div class="row margin-b-40">
            <div class="col-sm-6">
              <h2><a href="http://futhub.com">FUTHUB</a></h2>
              <p>FutHub fue reconocida como una de los 100 mejores proyectos de emprendimiento y desarrollo en
                Latinoamérica durante INC Acelerator 2017 del Tecnologico de Monterrey & Greater Phoenix Economic
                Council.</p>
              <p>FUTHUB es una aplicación web de fútbol creada por los fundadores de <span
                class="phoenix-text">Phoenix</span> <span class="development-text">Development</span> que busca conectar
                jugadores, entrenadores y clubes de profesionales y amateurs.</p>
            </div>
            <div class="col-sm-4 offset-sm-2">
              <!-- Social Media List -->
              <h3>En redes sociales</h3>
              <ul class="social-icons" itemscope itemtype="https://schema.org/Organization" style="padding:0">
                <link itemprop="url" href="http://www.futhub.com">
                <a itemprop="sameAs" href="https://www.facebook.com/FutHub/"
                   target="_blank" class="fa fa-facebook"></a>
                <a itemprop="sameAs" href="https://www.instagram.com/futhubcom/?hl=es-la"
                   target="_blank"
                   class="fa fa-instagram"></a>
                <a itemprop="sameAs" href="https://www.youtube.com/channel/UC1jsnt8KyYF3czEDr1cH4cg" target="_blank"
                   class="fa fa-youtube"></a>
              </ul>
            </div>
          </div>

          <!--// end row -->

          <!-- Masonry Grid -->
          <div class="masonry-grid row">
            <!--<div class="masonry-grid-sizer col-6 col-sm-6 col-md-1"></div>-->
            <div class="masonry-grid-item col-12 col-sm-6 col-md-8 margin-b-30">
              <!-- Work -->
              <div class="work work-popup-trigger">
                <div class="work-overlay">
                  <div style="position:relative;height:0;padding-bottom:56.25%" v-vpshow>
                    <iframe src="https://www.youtube.com/embed/ae4t6PVBJZI?ecver=2" width="640" height="360"
                            frameborder="0" style="position:absolute;width:100%;height:100%;left:0"
                            allowfullscreen></iframe>
                  </div>
                </div>

              </div>
              <!-- End Work -->
            </div>
            <div class="masonry-grid-item col-12 col-sm-6 col-md-4 margin-b-30">
              <!-- Work -->
              <div class="work work-popup-trigger">
                <div class="work-overlay">
                  <img class="full-width img-fluid" v-vpshow src="../assets/img/400x471/01.png"
                       alt="Mexican Amateur Soccer Player">
                </div>

              </div>
              <!-- End Work -->
            </div>
            <div class="masonry-grid-item col-12 col-sm-6 col-md-4 md-margin-b-30">
              <!-- Work -->
              <div class="work work-popup-trigger">
                <div class="work-overlay">
                  <img class="full-width img-fluid" v-vpshow src="../assets/img/400x300/01.jpg"
                       alt="Soccer Coach wearing Futhub Merchandise">
                </div>
                <!--<div class="work-popup-overlay">-->
                <!--<div class="work-popup-content">-->
                <!--<a href="javascript:void(0);" class="work-popup-close">Hide</a>-->
                <!--<div class="margin-b-30">-->
                <!--<h3 class="margin-b-5">Art Of Coding</h3>-->
                <!--<span>Clean &amp; Minimalistic Design</span>-->
                <!--</div>-->
                <!--<div class="row">-->
                <!--<div class="col-sm-8 work-popup-content-divider sm-margin-b-20">-->
                <!--<div class="margin-t-10 sm-margin-t-0">-->
                <!--<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>-->
                <!--<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>-->
                <!--<ul class="list-inline work-popup-tag">-->
                <!--<li class="work-popup-tag-item"><a class="work-popup-tag-link" href="#">Design,</a></li>-->
                <!--<li class="work-popup-tag-item"><a class="work-popup-tag-link" href="#">Coding,</a></li>-->
                <!--<li class="work-popup-tag-item"><a class="work-popup-tag-link" href="#">Portfolio</a></li>-->
                <!--</ul>-->
                <!--</div>-->
                <!--</div>-->
                <!--<div class="col-sm-4">-->
                <!--<div class="margin-t-10 sm-margin-t-0">-->
                <!--<p class="margin-b-5"><strong>Project Leader:</strong> John Doe</p>-->
                <!--<p class="margin-b-5"><strong>Designer:</strong> Alisa Keys</p>-->
                <!--<p class="margin-b-5"><strong>Developer:</strong> Mark Doe</p>-->
                <!--<p class="margin-b-5"><strong>Customer:</strong> Keenthemes</p>-->
                <!--</div>-->
                <!--</div>-->
                <!--</div>-->
                <!--</div>-->
                <!--</div>-->
              </div>
              <!-- End Work -->
            </div>
            <div class="masonry-grid-item col-12 col-sm-6 col-md-4 md-margin-b-30">
              <!-- Work -->
              <div class="work work-popup-trigger">
                <div class="work-overlay">
                  <img class="full-width img-fluid" v-vpshow src="../assets/img/400x300/02.jpg"
                       alt="Mexican Children Soccer Team">
                </div>

              </div>
              <!-- End Work -->
            </div>
            <div class="masonry-grid-item col-12 col-sm-6 col-md-4">
              <!-- Work -->
              <div class="work work-popup-trigger">
                <div class="work-overlay">
                  <img class="full-width img-fluid" v-vpshow src="../assets/img/400x300/03.jpg"
                       alt="Child Soccer Training">
                </div>

              </div>
              <!-- End Work -->
            </div>
          </div>
          <!-- End Masonry Grid -->
        </div>
      </div>

      <!-- Clients -->
      <div class="section-seperator" id="projects" style="padding-bottom: 50px">
        <div class="content-lg container">
          <h2>Nuestros proyectos</h2>

          <!-- BEGIN PROJECT SCREENSHOTS CAROUSEL-->
          <div id="projectsCarousel" class="carousel slide" data-ride="carousel" data-wrap="true">
            <!-- Indicators -->
            <ol class="carousel-indicators">
              <li data-target="#projectsCarousel" data-slide-to="0" class="active"></li>
              <li data-target="#projectsCarousel" data-slide-to="1"></li>
              <li data-target="#projectsCarousel" data-slide-to="2"></li>
              <li data-target="#projectsCarousel" data-slide-to="3"></li>
              <li data-target="#projectsCarousel" data-slide-to="4"></li>
            </ol>

            <div class="carousel inner">
              <!--FUTHUB-->
              <div class="carousel-item active">
                <div >
                  <h3 class="projects-title phoenix-text"><a href="http://www.futhub.com" target="_blank">FUTHUB</a></h3>
                </div>
                <div>
                  <div class="development-text projects-desc">Plataforma que conecta jugadores entrenadores y clubes de
                    fútbol profesional.<br class="mobile-only"><br>
                  </div>
                </div>
                <div class="col-md-8 flex" style="margin:auto">
                  <a href="http://www.futhub.com" target="_blank"><img class="img-fluid" src="../assets/img/projects/Futhub2-compressor.png"
                                                       alt="FutHub app and website screenshots"></a>
                </div>
              </div>

              <!--PROMTEL-->
              <div class="carousel-item">
                <div >
                  <h3 class="projects-title phoenix-text"><a href="http://promtel.phoenixdevelopment.mx" target="_blank">PROMTEL</a>
                  </h3>
                </div>
                <div >
                  <div class="development-text projects-desc">Propuesta para Sitio Informativo del Organismo Promotor de
                    Inversiones en Telecomunicaciones. Gobierno Federal.
                  </div>
                </div>
                <div class="col-md-8 flex" style="margin:auto">
                  <a href="http://promtel.phoenixdevelopment.mx" target="_blank"><img class="img-fluid" src="../assets/img/projects/Promtel-compressor.png"
                                                                                      alt="PROMTEL website screenshots"></a>
                </div>
              </div>


              <!--AFER-->
              <div class="carousel-item">
                <div>
                  <h3 class="projects-title phoenix-text"><a href="http://afer.phoenixdevelopment.mx" target="_blank">AFER</a></h3>
                </div>
                <div >
                  <div class="development-text projects-desc">Sitio Informativo AFER PLOMERÍA ESPECIALIZADA empresa de
                    la
                    Cd. de Chihuahua.
                  </div>
                </div>
                <div class="col-md-8 flex" style="margin:auto">
                  <a href="http://afer.phoenixdevelopment.mx" target="_blank"><img class="img-fluid" src="../assets/img/projects/AFER-compressor.png"
                                                                                   alt="AFER Plomeria Especializada Website"></a>
                </div>
              </div>

              <!--QUINIELA-->
              <div class="carousel-item">
                <div>
                  <h3 class="projects-title phoenix-text"><a href="http://quiniela.phoenixdevelopment.mx" target="_blank">QUINIELA RUSIA
                    2018</a></h3>
                </div>
                <div>
                  <div class="development-text projects-desc">Quiniela deportiva organizada para empleados de
                    corporativos
                    durante la Copa Mundial Rusia 2018.
                  </div>
                </div>
                <div class="col-md-8 flex" style="margin:auto">
                  <a href="http://quiniela.phoenixdevelopment.mx" target="_blank"><img class="img-fluid" src="../assets/img/projects/Quiniela-compressor.png"
                                                                                       alt="Website screenshots for Quiniela Russia FIFA World Cup 2018"></a>
                </div>
              </div>

              <!--GREEN PIT-->
              <div class="carousel-item">
                <div>
                  <h3 class="projects-title phoenix-text"><a href="http://greenpit.mx" target="_blank">GREEN PIT</a></h3>
                </div>
                <div>
                  <div class="development-text projects-desc">Máquinas francesas para descarbonizar por medio de
                    hidrógeno el motor de los automóviles.
                  </div>
                </div>
                <div class="col-md-8 flex" style="margin:auto">
                  <a href="http://greenpit.mx" target="_blank"><img class="img-fluid" src="../assets/img/projects/GREENPIT-compressor.png"
                                                                     alt="Website screenshots for Green Pit engine decarbonization services"></a>
                </div>
              </div>
            </div>

            <!-- Left and right controls -->
            <a class="carousel-control-prev" href="#projectsCarousel" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#projectsCarousel" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>

        </div>
      </div>

      <!-- End Clients -->
    </div>
    <!-- End Work -->


    <!-- Contact -->
    <div id="contact">
      <!-- Contact List -->
      <div class="section-seperator">
        <div class="content-lg container">
          <h2 style="margin-bottom:30px">Contáctanos</h2>
          <div class="row">
            <!-- Contact List -->
            <div class="col-sm-4 offset-sm-1 sm-margin-b-50">
              <h3><a href="#">Reforma</a> <span class="text-uppercase margin-l-20">Operaciones</span></h3>
              <p>AV PASEO DE LA REFORMA 389 PISO 10, COL CUAUHTEMOC, MEXICO, CIUDAD DE MEXICO C.P. 06500</p>
              <ul class="list-unstyled contact-list">
                <li><i class="margin-r-10 color-base icon-call-out"></i> (+52) 5980 3626</li>
                <!--<li><i class="margin-r-10 color-base icon-call-out"></i> (+52) 55 5259 0306</li>-->
                <li><i class="margin-r-10 color-base icon-envelope"></i> contacto@phoenixdevelopment.mx</li>
              </ul>
            </div>
            <!-- End Contact List -->

          </div>
          <!--// end row -->
        </div>
        <!-- Google Map -->
        <GmapMap v-vpshow
                 :center="center"
                 :zoom="15"
                 map-type-id="roadmap"
                 :options="map_options"
                 style="width: 100%; height: 300px; color: black"
        >
          <gmap-info-window :options="infoOptions" :position="infoWindowPos" :opened="infoWinOpen"
                            @closeclick="infoWinOpen=false">
            Av. Paseo de la Reforma 389 Piso 10, <br> Col. Cuauhtemoc CP 06500, <br> Ciudad de México, México
          </gmap-info-window>

          <gmap-marker :key="i" v-for="(m,i) in markers" :position="m.position" :clickable="true"
                       @click="toggleInfoWindow(m,i)"></gmap-marker>

        </GmapMap>
      </div>
      <!-- End Contact List -->

    </div>
    <!-- End Contact -->
    <!--========== END PAGE LAYOUT ==========-->
  </div>

</template>

<script>

  import {VueTyper} from 'vue-typer'

  export default {
    name: "Home",

    data() {
      return {

        scrollOptions: {
          duration: 2000,
          offset: -50
        },

        center: {lat: 19.426495, lng: -99.170212},
        map_options: {
          disableDefaultUI: true,
          styles: [{
            featureType: "all",
            stylers: [{
              saturation: -80
            }]
          }, {
            featureType: "road.arterial",
            elementType: "geometry",
            stylers: [{
              hue: "#00ffee"
            }, {
              saturation: 50
            }]
          }, {
            featureType: "poi.business",
            elementType: "labels",
            stylers: [{
              visibility: "off",
            }]
          }]
        },
        infoWindowPos: {lat: 19.426495, lng: -99.170212},
        infoWinOpen: true,
        currentMidx: null,
        //optional: offset infowindow so it visually sits nicely on top of our marker
        infoOptions: {
          pixelOffset: {
            width: 0,
            height: -35
          }
        },
        markers: [
          {
            position: {lat: 19.426495, lng: -99.170212},
          }
        ]
      }
    },

    components: {
      VueTyper,
    },

    methods: {
      toggleInfoWindow: function (marker, idx) {
        this.infoWindowPos = marker.position;
        this.infoContent = marker.infoText;
        //check if its the same marker that was selected if yes toggle
        if (this.currentMidx == idx) {
          this.infoWinOpen = !this.infoWinOpen;
        }
        //if different marker set infowindow to open and reset current marker index
        else {
          this.infoWinOpen = true;
          this.currentMidx = idx;
        }
      },
    },

    mounted() {

    },

  }
</script>

<style scoped>
  @import '../assets/style/animate.css';
  @import '../assets/vendor/swiper/css/swiper.min.css';

  .hero {
    min-height: 100vh;
    width: 100vw;
    background-image: url('../assets/img/1920x1080/phoenix-bg-compressed.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    padding: 30px;
    padding-top: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media (max-width: 1024px) {
    .slogan {
      margin-top: 30px;
    }
  }

  .hero .btn-theme {
    margin: 15px 0;
  }

  #home {
    margin-top: -100px;
  }

  #main-carousel .item {
    max-height: 100vh;
  }

  .form-control:focus {
    box-shadow: 0 0 1px #4097db;
  }

  @media (min-width: 900px) {
    .mobile-only {
      display: none;
    }
  }


</style>

