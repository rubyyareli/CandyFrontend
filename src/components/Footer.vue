<template>
  <!-- FOOTER -->
  <footer id="separar" class="footer">
    <div class="footer__addr">
      <h1 class="footer__logo">Choco-Candy</h1>
    </div>

    <ul class="footer__nav">
      <li class="nav__item">
        <h2 class="nav__title">Media</h2>

        <ul class="nav__ul">
          <li>
            <a>En línea</a>
          </li>

          <li>
            <a></a>
          </li>

          <li>
            <a>Anuncios alternativos</a>
          </li>
        </ul>
      </li>

      <li class="nav__item nav__item--extra">
        <h2 class="nav__title">Tecnología</h2>

        <ul class="nav__ul nav__ul--extra">
          <li>
            <a>Diseño de hardware</a>
          </li>

          <li>
            <a>Diseño de software</a>
          </li>

          <li>
            <a>Señalización digital</a>
          </li>

          <li>
            <a>Automatización</a>
          </li>

          <li>
            <a></a>
          </li>

          <li>
            <a></a>
          </li>
        </ul>
      </li>

      <li class="nav__item">
        <h2 class="nav__title">Legal</h2>

        <ul class="nav__ul">
          <li>
            <a>Política de privacidad</a>
          </li>

          <li>
            <a>Condiciones de uso</a>
          </li>

          <li>
            <a></a>
          </li>
        </ul>
      </li>
    </ul>

    <div class="legal">
      <p>&copy; 2023 Candy. Todos los derechos reservados.</p>

      <div class="legal__links">
        <span> <span class="heart"></span> </span>
      </div>
    </div>
  </footer>
</template>

<script>
import "../assets/css/footer.css";
export default {
  name: "MyFooter",
  props: {},
};
</script>
