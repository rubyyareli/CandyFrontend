<template>
  <br /><br /><br /><br /><br />
  <br />
  <div id="" class="card-body container text-center">
    <h1 class="text-center color">Pago con tarjeta</h1>
    <br /><br />
    <main>
      <div class="row justify-content-center">
        <div class="col-md-6">
          <form method="post" role="form" class="contactForm" id="formguardar">
            <div class="row g-3" v-show="tarjeta">
              <div class="col-sm-6">
                <label for="firstName" class="form-label"
                  >Tipo de servicio</label
                >
                <input
                  type="text"
                  class="form-control"
                  maxLength="100"
                  name="name"
                  placeholder=""
                  value="Servicio a Domicilio"
                  disabled
                />
              </div>

              <div class="col-sm-6">
                <label for="lastName" class="form-label">Tipo de pago</label>
                <input
                  type="text"
                  class="form-control"
                  maxLength="10"
                  name="tel"
                  placeholder=""
                  value="Tarjeta"
                  disabled
                />
              </div>
              <div class="col-sm-6">
                <label for="firstName" class="form-label">Nombre</label>
                <input
                  type="text"
                  class="form-control"
                  maxLength="100"
                  v-model="tarjeta.NOMBRE"
                  required
                />
              </div>

              <div class="col-sm-6">
                <label for="country" class="form-label"
                  >Número de tarjeta</label
                >
                <input
                  type="text"
                  class="form-control"
                  maxLength="19"
                  v-model="tarjeta.NUM_TARJETA"
                  required
                />
              </div>

              <div class="col-sm-6">
                <label for="state" class="form-label"
                  >Fecha de expiración</label
                >
                <input
                  type="month"
                  class="form-control"
                  required
                  v-model="tarjeta.FECHA"
                  min="2023-04-01"
                  max="2028-12-04"
                />
              </div>

              <div class="col-sm-6">
                <label for="zip" class="form-label"
                  >Código de seguridad / CVV</label
                >
                <input
                  type="text"
                  class="form-control"
                  maxLength="10"
                  v-model="tarjeta.CODIGO"
                  required
                />
              </div>
            </div>
            <router-link to="/confirmacion"
              ><button type="submit" class="btn-pago button">Pagar</button>
            </router-link>
            <button
              type="submit"
              class="btn-pago button"
              v-on:click="ToPagar()"
            >
              Pagar
            </button>
          </form>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import "../assets/css/pago.css";
import axios from "axios";

export default {
  name: "MyPago",
  props: {},
  data: function () {
    return {
      tarjeta: [],
    };
  },
  created() {
    axios
      .get(
        "http://localhost:9000/CARD/" + localStorage.getItem("fkId_"),
        this.tarjeta
      )
      .then((data) => {
        console.log(data);
        this.tarjeta.NOMBRE = data.data[0].NOMBRE;
        this.tarjeta.NUM_TARJETA = data.data[0].NUM_TARJETA;
        this.tarjeta.FECHA = data.data[0].FECHA;
        this.tarjeta.CODIGO = data.data[0].CODIGO;
        this.tarjeta.FK_USER_ID = localStorage.getItem("fkId_");
      });
  },
  methods: {
    ToPagar() {
      this.$router.push("/confirmacion");
    },
  },
};
</script>
