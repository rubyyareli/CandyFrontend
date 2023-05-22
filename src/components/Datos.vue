<template>
  <br /><br /><br /><br /><br />
  <br /><br />
  <div id="conf" class="container text-center">
    <h1 class="text-center color">Datos de compra</h1>
    <br /><br />
    <main>
      <div class="row justify-content-center">
        <div class="col-md-6">
          <form method="post" role="form" class="contactForm" id="formguardar">
            <div class="row g-3">
              <div class="col-sm-12">
                <label for="firstName" class="form-label">Mi pedido</label>
                <input
                  type="text"
                  class="form-control"
                  maxLength="100"
                  name="nombre"
                  disabled
                />
              </div>
              <div class="col-sm-12">
                <label for="firstName" class="form-label">Domicilio</label>
                <input
                  type="text"
                  class="form-control"
                  maxLength="100"
                  name="nombre"
                  disabled
                />
              </div>

              <div class="col-md-4">
                <label for="firstName" class="form-label">Nombre</label>
                <input
                  type="text"
                  class="form-control"
                  maxLength="100"
                  name="name"
                  placeholder=""
                  value=""
                  disabled
                />
              </div>

              <div class="col-md-4">
                <label for="lastName" class="form-label">Tarjeta</label>
                <input
                  type="text"
                  class="form-control"
                  maxLength="10"
                  name="tel"
                  placeholder=""
                  value=""
                  disabled
                />
              </div>

              <div class="col-md-4">
                <label for="zip" class="form-label">Total</label>
                <input
                  type="text"
                  class="form-control"
                  maxLength="10"
                  name="codigo"
                  placeholder=""
                  value="$ 00.00 MXN."
                  disabled
                />
              </div>
            </div>
            <br />
            <button id="" type="submit" name="" class="btn-datos button">
              <h8>Continuar</h8>
            </button>
          </form>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import "../assets/css/datos.css";

export default {
  name: "MyDatos",
  props: {},
};
</script>
