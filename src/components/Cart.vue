<template>
  <main id="cart" style="max-width: 960px" v-if="sihay">
    <h1 class="text-center color">Mi Carrito</h1>
    <br /><br /><br />
    <div class="container-fluid">
      <div class="row align-items-start">
        <div class="col-12 col-sm-8 items">
          <!--Carrito-->
          <div
            class="cartItem row align-items-start"
            v-for="post in pros"
            :key="post.FK_USER_ID"
          >
            <!--Productos-->
            <div class="col-5 mb-2">
              <h5 class="">Producto</h5>
              <h6 class="">{{ post.TITULO }}</h6>
            </div>
            <!--Precio-->
            <div class="col-2">
              <h5 class="">Precio</h5>
              <p id="cartItem1Price">{{ post.PRECIO }}</p>
            </div>
            <!--Cantidad-->
            <div class="col-2">
              <h5 class="">Cantidad</h5>
              <p id="cartItem1Price">{{ post.CANTIDAD }}</p>
            </div>
            <!--Subtotal-->
            <div class="col-2">
              <h5 class="">Subtotal</h5>
              <p id="cartItem1Price">$ {{ post.SUBTOTAL }} MXN.</p>
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
            <button id="" class="btn-pago button" v-on:click="ToPago()">
              Ir a pago
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
  <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

  <div v-if="nohay">
    <h1 style="text-align: center">Todavía no hay productos :(</h1>
  </div>
  <br /><br /><br /><br /><br /><br /><br /><br /><br />
</template>

<script>
import "../assets/css/cart.css";
import axios from "axios";

export default {
  name: "MyCart",
  props: {},
  data: function () {
    return {
      pros: [],
      total: null,
      nohay: false,
      sihay: false,
      activo: [],
    };
  },
  created() {
    axios.get("http://localhost:9000/CARRITO/").then((data) => {
      console.log(data);

      for (let activo of data.data) {
        if (activo.ACTIVO == 0) {
          this.nohay = true;
          this.sihay = false;
        } else {
          this.sihay = true;
          this.nohay = false;
        }
      }

      if (this.sihay) {
        axios
          .get("http://localhost:9000/CARRITO/" + localStorage.getItem("fkId_"))
          .then((data) => {
            console.log(data);
            this.pros = data.data;

            const sumall = this.pros
              .map((item) => item.SUBTOTAL)
              .reduce((prev, curr) => prev + curr, 0);
            this.total = sumall;
            localStorage.setItem("total_", this.total);

            console.log(this.total);
          });
      }
    });
  },
  methods: {
    ToPago() {
      this.$router.push("/pago");
    },
  },
};
</script>
