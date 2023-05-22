<template>
  <div class="card" v-for="post in posts" :key="post.PRODUCTOS_ID">
    <div class="col">
      <div class="image">
        <div class="view-details">
          <button v-on:click="GetProducto(post.PRODUCTOS_ID)">detail</button>
          <router-link to=""></router-link>
        </div>
        <img src="../assets/imagenes/bloc.png" alt="no hay imagen" />
      </div>
      <div class="mat">
        <h3 class="titulo">{{ post.TITULO }} <span class="price"></span></h3>
        <h4 class="titulo">$ {{ post.PRECIO }} MXN.</h4>
      </div>
    </div>
  </div>
</template>

<script>
import "../assets/css/productos.css";
//import axios from "axios";

export default {
  name: "MyColores",
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    GetProducto(id) {
      this.$router.push("/detalle/" + id);
      /*console.log(id);
      axios.get("http://localhost:9000/PRODUCT/"+ id + "/detalle", this.form).then( data =>{
      console.log(data);
    });*/
    },
  },
  created() {
    //este es id de la categoria
    fetch("http://localhost:9000/PRODUCT/6") //aqui va la url de la API
      .then((res) => res.json())
      .then((data) => (this.posts = data));
  },
};
</script>
