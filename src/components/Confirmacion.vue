<template>
  <main id="cart" style="max-width: 960px">
    <h1 class="text-center color">Confirmacion de datos</h1>
    <br />
    <div class="container-fluid">
      <div class="row align-items-start">
        <div class="col-12 col-sm-8 items">
          <!--Carrito-->
          <div class="cartItem row align-items-start">
            <!---->
            <div class="col-5 mb-2">
              <h5 class="">Datos de compra</h5>
            </div>

            <!---->
            <div class="col-7" v-show="datos">
              <h5 class="">{{ datos.USER_FULL_NAME }}</h5>
            </div>
          </div>
          <hr />

          <div class="cartItem row align-items-start">
            <!---->
            <div class="col-5 mb-2">
              <h5 class="">Direccion de envio</h5>
            </div>

            <!---->
            <div class="col-7" v-show="datos">
              <p class="">
                Calle {{ datos.CALLE }} #{{ datos.NUMERO }}, Col.
                {{ datos.COLONIA }}, {{ datos.MUNICIPIO }}, {{ datos.ESTADO }}
              </p>
            </div>
          </div>
          <hr />
          <div class="cartItem row align-items-start">
            <!---->
            <div class="col-5 mb-2">
              <h5 class="">Fecha y hora de entrega</h5>
            </div>

            <!---->
            <div class="col-5">
              <h5 class="">falta poner</h5>
            </div>
          </div>
          <hr />
          <div class="cartItem row align-items-start">
            <!---->
            <div class="col-5 mb-2">
              <h5 class="">Metodo de pago</h5>
            </div>

            <!---->
            <div class="col-5">
              <h5 class="">Tarjeta</h5>
            </div>
          </div>
          <hr />
          <div class="cartItem row align-items-start">
            <!---->
            <div class="col-5 mb-2">
              <h5 class="">Tipo de Servicio</h5>
            </div>

            <!---->
            <div class="col-5">
              <h5 class="">Servicio a Domicilio</h5>
            </div>
          </div>
          <hr />
        </div>

        <!--total y subtotal-->
        <div class="col-12 col-sm-4 p-3 proceed form">
          <div class="row mx-0 mb-2">
            <div class="col-sm-8 p-0 d-inline">
              <h5>Total:</h5>
            </div>
            <div class="col-sm-4 p-0">
              <p id="total">$ {{ total }} MXN.</p>
            </div>
          </div>
          <div class="medio">
            <button id="" class="btn-confirmar button" v-on:click="Realizar()">
              Realizar pedido
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
  <br /><br /><br /><br />
</template>

<script>
import "../assets/css/confirmacion.css";
import axios from "axios";
import Swal from "sweetalert2";

export default {
  name: "MyConfirmacion",
  props: {},
  data: function () {
    return {
      datos: [],
      total: 0,
      carrito: {},
    };
  },
  created() {
    var email = localStorage.getItem("email_");
    axios
      .get("http://localhost:9000/USER/" + email + "/correo")
      .then((data) => {
        console.log(data);
        this.datos = data.data[0];
        this.total = localStorage.getItem("total_");
      });
  },
  methods: {
    Realizar() {
      Swal.fire("Pedido Listo!", "👍🏼", "success");

      localStorage.removeItem("total_");

      this.$router.push("/");

      var id = localStorage.getItem("fkId_");

      this.carrito.ACTIVO = 0;
      axios
        .put("http://localhost:9000/CARRITO/" + id, this.carrito)
        .then((data) => {
          console.log(data);
        });
    },
  },
};
</script>
