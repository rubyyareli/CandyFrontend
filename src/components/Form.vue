<!---------------------Form----------------->
<template>
  <div class="form">
    <div class="dentro">
      <div class="mensaje">
        <div class="texto">
          <p class="title">¿Tienes alguna duda?</p>
          <p>¡Escribenos!</p>
          <form
            action="https://formsubmit.co/rubi170999@gmail.com"
            method="POST"
          >
            <div class="espacios">
              <input
                class="logobrand form-control"
                type="text"
                name="Correo"
                placeholder="Correo"
              /><br />
              <textarea
                class="form-control"
                placeholder="Deja un comentario aquí"
                name="Comentario"
                id="floatingTextarea"
              ></textarea>
            </div>
            <button type="submit" class="form-btn btn-1">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  </div>

  <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
  <br /><br /><br /><br /><br />
  <h1 class="text-center" id="redes">Compartenos en tus redes sociales</h1>

  <div class="share">
    <a
      href="https://api.whatsapp.com/send?text=www.mipagina.com"
      target="_blank"
      class="whatsapp"
      >Whatsapp</a
    >
    <a
      href="http://www.facebook.com/sharer.php?u=www.mipagina.com&t=pagina de desarrollo web"
      target="_blank"
      class="facebook"
      >Facebook</a
    >
    <a
      href="https://twitter.com/intent/tweet?text=Choco-Candy&url=www.mipagina.com&hashtags=#miempresa"
      target="_blank"
      class="twitter"
      >Twitter</a
    >
  </div>

  <br /><br /><br /><br /><br />
</template>

<script>
import "../assets/css/form.css";
export default {
  name: "MyForm",
};
</script>
