<!---------------------Register----------------->
<template>
  <br /><br /><br /><br /><br /><br />
  <!-- Setup outer frame container -->
  <div class="container" v-show="form">
    <!-- Align product card in the center of the frame -->
    <div class="row align-items-center justify-content-center">
      <!-- Product card starts -->
      <div class="col card product-card">
        <!-- Row 1 -->
        <div class="row justify-content-between"></div>
        <!-- Row 2 -->
        <h1 class="product-card-title">
          {{ form.TITULO }}
        </h1>
        <!-- Row 3 -->
        <!-- Row 4 -->
        <div class="container">
          <div class="row">
            <!-- Col 4.1 -->
            <div class="col-sm-6">
              <div>
                <!-- Product card detail image row-->
                <div class="container product-card-carousel">
                  <div id="carouselIndicators" class="carousel slide vertical">
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img
                          src="https://i.imgur.com/G4sM5dx.png"
                          class="d-block w-100"
                          alt="hi-res-apple"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--Col 4.2-->
            <div class="col-sm-6">
              <h1 id="new-price">$ {{ form.PRECIO }} MXN.</h1>
              <h5 id="instock">En stock: {{ form.STOCK }}</h5>

              <!-- Quantity selection row-->
              <div id="quantity-container">
                <div class="row align-items-center" id="quantity-row">
                  <div class="col-4">
                    <h6 class="product-card-subtitle">Cantidad:</h6>
                  </div>

                  <div class="col-4 quantity-button-col">
                    <input
                      type="number"
                      id="quantity-input"
                      v-model="cantidad"
                      class="form-control disable-focus"
                      min="1"
                      max="100"
                    />
                  </div>
                </div>
              </div>

              <!--Purchase row-->
              <div>
                <div class="row align-items-center" id="purchase-container">
                  <div class="col-9" style="padding: 0px 0px">
                    <router-link to="" id="switch1"></router-link>
                    <button class="custom-btn btn-15" v-on:click="AddCarrito()">
                      Comprar
                    </button>
                  </div>
                </div>
              </div>

              <!--Product card description row-->
              <div id="product-detail-container">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                  <li class="nav-item" role="presentation">
                    <a
                      class="nav-link product-detail-selection-nav active"
                      id="description-tab"
                      data-toggle="tab"
                      href="#description"
                      role="tab"
                      aria-controls="description"
                      aria-selected="true"
                      >Descripción</a
                    >
                  </li>

                  <li class="nav-item" role="presentation">
                    <a
                      class="nav-link product-detail-selection-nav"
                      id="qa-tab"
                      data-toggle="tab"
                      href="#qa"
                      role="tab"
                      aria-controls="qa"
                      aria-selected="false"
                      >Q & A</a
                    >
                  </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                  <div
                    class="tab-pane fade show active product-detail-content"
                    id="description"
                    role="tabpanel"
                    aria-labelledby="description-tab"
                  >
                    <ul style="padding-left: 1.2em">
                      <li>
                        {{ form.DESCRIPCION }}
                      </li>
                    </ul>
                  </div>

                  <div
                    class="tab-pane fade product-detail-content"
                    id="qa"
                    role="tabpanel"
                    aria-labelledby="qa-tab"
                  >
                    <p class="product-question">
                      Question: How many apples in a box?
                    </p>

                    <p>Answer: Approximately 6 apples.</p>
                    <p class="product-question">
                      Question: What can I do if many of the apples are bad?
                    </p>
                    <p>Answer: We can offer a full refund in this case.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import axios from "axios";
import "../assets/css/detalle.css";
export default {
  name: "MyDetalle",
  data: function () {
    return {
      producto_id: null,
      form: {},
      carrito: {},
      cantidad: null,
    };
  },

  mounted() {
    this.producto_id = this.$route.params.id;
    //console.log(this.producto_id);
    axios
      .get("http://localhost:9000/PRODUCT/" + this.producto_id + "/detalle")
      .then((datos) => {
        this.form = datos.data[0];
        console.log(this.form);
      });
  },

  methods: {
    AddCarrito() {
      if (localStorage.getItem("token_")) {
        this.carrito.TITULO = this.form.TITULO;
        this.carrito.DESCRIPCION = this.form.DESCRIPCION;
        this.carrito.PIC = this.form.PIC;
        this.carrito.PRECIO = this.form.PRECIO;
        this.carrito.PRODUCTOS_ID = this.form.PRODUCTOS_ID;
        this.carrito.CANTIDAD = this.cantidad;
        this.carrito.ACTIVO = 1;
        this.carrito.SUBTOTAL = this.carrito.CANTIDAD * this.carrito.PRECIO;
        this.carrito.TOTAL = this.carrito.SUBTOTAL;
        this.carrito.FK_USER_ID = localStorage.getItem("fkId_");

        axios
          .post("http://localhost:9000/CARRITO", this.carrito)
          .then((data) => {
            console.log(data);
            Swal.fire("Agregado!", "👍🏼", "success");
          });
      } else {
        Swal.fire(
          "Necesitas una cuenta para comprar!",
          "Vaya a la parte de Acceder",
          "error"
        );
      }
    },
  },
};
</script>
