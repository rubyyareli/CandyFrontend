<template>
  <!---------------------Cards----------------->
  <div id="abajo" class="text-center">
    <div class="text-center">
      <h1 class="animate__animated animate__backInLeft" id="producto">
        Nuestros productos
      </h1>
    </div>

    <div class="division text-center">
      <div class="contorno">
        <div class="content">
          <router-link to="/marcadores" class="nav-link" style="color: white">
            <div class="content-overlay"></div>
            <img class="content-image" src="../assets/imagenes/marcador.png" />
            <div class="content-details fadeIn-bottom">
              <h3 class="content-title">Marcadores</h3>
            </div>
          </router-link>
        </div>
      </div>
    </div>

    <div class="division text-center">
      <div class="contorno">
        <div class="content">
          <router-link to="/marcatextos" class="nav-link" style="color: white">
            <div class="content-overlay"></div>
            <img
              class="content-image"
              src="../assets/imagenes/marcatexto.png"
            />
            <div class="content-details fadeIn-bottom">
              <h3 class="content-title">Marcatextos</h3>
            </div>
          </router-link>
        </div>
      </div>
    </div>

    <div class="division text-center">
      <div class="contorno">
        <div class="content">
          <router-link to="/plumas" class="nav-link" style="color: white">
            <div class="content-overlay"></div>
            <img class="content-image" src="../assets/imagenes/pluma.png" />
            <div class="content-details fadeIn-bottom">
              <h3 class="content-title">Plumas</h3>
            </div>
          </router-link>
        </div>
      </div>
    </div>

    <div class="division text-center">
      <div class="contorno">
        <div class="content">
          <router-link to="/libretas" class="nav-link" style="color: white">
            <div class="content-overlay"></div>
            <img class="content-image" src="../assets/imagenes/libreta.png" />
            <div class="content-details fadeIn-bottom">
              <h3 class="content-title">Libretas</h3>
            </div>
          </router-link>
        </div>
      </div>
    </div>

    <div class="division text-center">
      <div class="contorno">
        <div class="content">
          <router-link to="/blocs" class="nav-link" style="color: white">
            <div class="content-overlay"></div>
            <img class="content-image" src="../assets/imagenes/bloc.png" />
            <div class="content-details fadeIn-bottom">
              <h3 class="content-title">Bloc de notas</h3>
            </div>
          </router-link>
        </div>
      </div>
    </div>

    <div class="division text-center">
      <div class="contorno">
        <div class="content">
          <router-link to="/colores" class="nav-link" style="color: white">
            <div class="content-overlay"></div>
            <img class="content-image" src="../assets/imagenes/color.png" />
            <div class="content-details fadeIn-bottom">
              <h3 class="content-title">Colores</h3>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>

  <div class="contacto">
    <h1 class="text-center" id="contacto">Contáctanos</h1>
    <h4 class="separarmenos">+52 812 368 00 69</h4>
    <h4 class="separarmenos">Lunes a Sábado 6 a.m. a 6 p.m.</h4>
  </div>
  <br /><br /><br /><br />
</template>

<script>
export default {
  name: "MyCard",
};
</script>
