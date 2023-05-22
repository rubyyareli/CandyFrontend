<template>
  <p>
    <button
      class="dash-btn btn-6"
      data-bs-toggle="collapse"
      href="#collapseCom"
    >
      Comprados
    </button>
  </p>
  <h4 class="text-center color">Productos comprados</h4>
  <br />

  <div class="collapse" id="collapseCom">
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="card" v-for="post in pros" :key="post.PRODUCTOS_ID">
        <div class="col">
          <div class="image">
            <div class="view-details">
              <!-------<button v-on:click="GetProducto(post.PRODUCTOS_ID)">detail</button>------->
              <router-link to=""></router-link>
            </div>
            <img src="../assets/imagenes/bloc.png" alt="no hay imagen" />
          </div>
          <div class="mat">
            <h3 class="titulo">
              {{ post.TITULO }} <span class="price"></span>
            </h3>
            <h4 class="titulo">$ {{ post.PRECIO }} MXN.</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br /><br /><br />
</template>

<script>
import "../assets/css/productos.css";
export default {
  name: "MyProductsComp",
  props: {},
  data() {
    return {
      pros: [],
    };
  },
  created() {
    fetch("http://localhost:9000/PRODUCT")
      .then((res) => res.json())
      .then((data) => (this.pros = data));
  },
};
</script>
