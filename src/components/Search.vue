<template>
  <br /><br /><br />
  <input
    class="variation"
    id="bluepurple"
    type="radio"
    value="1"
    name="color"
    checked="checked"
  /><label for="bluepurple" hidden></label>
  <main class="margen">
    <section class="results-header">
      <h1 class="text-center color">Find dogs near you.</h1>
    </section>
    <div class="filter-section__wrapper">
      <section class="filter-section">
        <h6>Filtros</h6>
        <div class="filters">
          <h5 class="filters__title">Ordenar</h5>
          <div class="filters__item">
            <div class="checkbox">
              <input
                id="checkbox-1"
                v-model="chb_asc"
                type="checkbox"
                @change="SecAsc()"
              />
              <label for="checkbox-1"
                >Precio bajo<span class="box"></span
              ></label>
            </div>
          </div>
          <div class="filters__item">
            <div class="checkbox">
              <input
                id="checkbox-2"
                v-model="chb_desc"
                type="checkbox"
                @change="SecDesc()"
              />
              <label for="checkbox-2"
                >Precio alto<span class="box"></span
              ></label>
            </div>
          </div>
          <div class="filters__item">
            <div class="checkbox">
              <input
                id="checkbox-3"
                v-model="chb_ascL"
                type="checkbox"
                @change="SecAscL()"
              />
              <label for="checkbox-3">Orden A-Z<span class="box"></span></label>
            </div>
          </div>
          <div class="filters__item">
            <div class="checkbox">
              <input
                id="checkbox-4"
                v-model="chb_descL"
                type="checkbox"
                @change="SecDescL()"
              />
              <label for="checkbox-4">Orden Z-A<span class="box"></span></label>
            </div>
          </div>
        </div>
        <div class="filters">
          <h5 class="filters__title">Categorías</h5>
          <div class="filters__item">
            <div class="checkbox">
              <input
                id="checkbox-5"
                v-model="chb_bloc"
                type="checkbox"
                @change="SecBlocs()"
              />
              <label for="checkbox-5">Blocs<span class="box"></span></label>
            </div>
          </div>
          <div class="filters__item">
            <div class="checkbox">
              <input
                id="checkbox-6"
                v-model="chb_color"
                type="checkbox"
                @change="SecColors()"
              />
              <label for="checkbox-6">Colores<span class="box"></span></label>
            </div>
          </div>
          <div class="filters__item">
            <div class="checkbox">
              <input
                id="checkbox-7"
                v-model="chb_libreta"
                type="checkbox"
                @change="SecLib()"
              />
              <label for="checkbox-7">Libretas<span class="box"></span></label>
            </div>
          </div>
          <div class="filters__item">
            <div class="checkbox">
              <input
                id="checkbox-8"
                v-model="chb_marcadores"
                type="checkbox"
                @change="SecMar()"
              />
              <label for="checkbox-8"
                >Marcadores<span class="box"></span
              ></label>
            </div>
          </div>
          <div class="filters__item">
            <div class="checkbox">
              <input
                id="checkbox-9"
                v-model="chb_marcatex"
                type="checkbox"
                @change="SecMarT()"
              />
              <label for="checkbox-9"
                >Marcatextos<span class="box"></span
              ></label>
            </div>
          </div>
          <div class="filters__item">
            <div class="checkbox">
              <input
                id="checkbox-10"
                v-model="chb_pluma"
                type="checkbox"
                @change="SecPluma()"
              />
              <label for="checkbox-10">Plumas<span class="box"></span></label>
            </div>
          </div>
        </div>
      </section>
    </div>

    <section class="results-section results--grid">
      <div class="card" v-for="post in pros" :key="post.PRODUCTOS_ID">
        <div class="col">
          <div class="image">
            <div class="view-details">
              <button v-on:click="GetProducto(post.PRODUCTOS_ID)">
                detail
              </button>
            </div>
            <img src="../assets/imagenes/bloc.png" alt="no hay imagen" />
            <!---<img src="../assets/imagenes/bloc.png"  alt="no hay imagen">    --->
          </div>
          <div class="mat">
            <h3 class="titulo">
              {{ post.TITULO }} <span class="price"></span>
            </h3>
            <h4 class="titulo">$ {{ post.PRECIO }} MXN.</h4>
          </div>
        </div>
      </div>
    </section>
  </main>
  <br /><br /><br /><br />
</template>

<script>
import "../assets/css/search.css";
import "../assets/css/productos.css";
import axios from "axios";

export default {
  name: "MySearch",
  data() {
    return {
      cats: [],
      pros: [],
      chb_bloc: false,
      chb_color: false,
      chb_libreta: false,
      chb_marcadores: false,
      chb_marcatex: false,
      chb_pluma: false,
      chb_asc: false,
      chb_desc: false,
      chb_ascL: false,
      chb_descL: false,
    };
  },
  created() {
    fetch("http://localhost:9000/PRODUCT")
      .then((res) => res.json())
      .then((data) => (this.pros = data));
  },
  methods: {
    SecBlocs() {
      if (this.chb_bloc == true) {
        axios.get("http://localhost:9000/PRODUCT/1").then((data) => {
          /*producto por categoria*/
          console.log(data);
          this.pros = data.data;
          //alert("entro");
        });
      } else {
        fetch("http://localhost:9000/PRODUCT")
          .then((res) => res.json())
          .then((data) => (this.pros = data));
      }
    },
    SecColors() {
      if (this.chb_color == true) {
        axios.get("http://localhost:9000/PRODUCT/6").then(
          (
            data // producto por categoria
          ) => {
            console.log(data);
            this.pros = data.data;
          }
        );
      } else {
        fetch("http://localhost:9000/PRODUCT")
          .then((res) => res.json())
          .then((data) => (this.pros = data));
      }
    },
    SecLib() {
      if (this.chb_libreta == true) {
        axios.get("http://localhost:9000/PRODUCT/5").then(
          (
            data // producto por categoria
          ) => {
            console.log(data);
            this.pros = data.data;
            //alert("entro");
          }
        );
      } else {
        fetch("http://localhost:9000/PRODUCT")
          .then((res) => res.json())
          .then((data) => (this.pros = data));
      }
    },
    SecMar() {
      if (this.chb_marcadores == true) {
        axios.get("http://localhost:9000/PRODUCT/4").then(
          (
            data // producto por categoria
          ) => {
            console.log(data);
            this.pros = data.data;
            //alert("entro");
          }
        );
      } else {
        fetch("http://localhost:9000/PRODUCT")
          .then((res) => res.json())
          .then((data) => (this.pros = data));
      }
    },
    SecMarT() {
      if (this.chb_marcatex == true) {
        axios.get("http://localhost:9000/PRODUCT/3").then(
          (
            data // producto por categoria
          ) => {
            console.log(data);
            this.pros = data.data;
            //alert("entro");
          }
        );
      } else {
        fetch("http://localhost:9000/PRODUCT")
          .then((res) => res.json())
          .then((data) => (this.pros = data));
      }
    },
    SecPluma() {
      if (this.chb_pluma == true) {
        axios.get("http://localhost:9000/PRODUCT/2").then(
          (
            data // producto por categoria
          ) => {
            console.log(data);
            this.pros = data.data;
            //alert("entro");
          }
        );
      } else {
        fetch("http://localhost:9000/PRODUCT")
          .then((res) => res.json())
          .then((data) => (this.pros = data));
      }
    },
    SecAsc() {
      if (this.chb_asc == true) {
        axios.get("http://localhost:9000/PRODUCT/asc").then(
          (
            data // producto por categoria
          ) => {
            console.log(data);
            this.pros = data.data;
            //alert("entro");
          }
        );
      } else {
        fetch("http://localhost:9000/PRODUCT")
          .then((res) => res.json())
          .then((data) => (this.pros = data));
      }
    },
    SecDesc() {
      if (this.chb_desc == true) {
        axios.get("http://localhost:9000/PRODUCT/desc").then(
          (
            data // producto por categoria
          ) => {
            console.log(data);
            this.pros = data.data;
            //alert("entro");
          }
        );
      } else {
        fetch("http://localhost:9000/PRODUCT")
          .then((res) => res.json())
          .then((data) => (this.pros = data));
      }
    },
    SecAscL() {
      if (this.chb_ascL == true) {
        axios.get("http://localhost:9000/PRODUCT/ascL").then(
          (
            data // producto por categoria
          ) => {
            console.log(data);
            this.pros = data.data;
            //alert("entro");
          }
        );
      } else {
        fetch("http://localhost:9000/PRODUCT")
          .then((res) => res.json())
          .then((data) => (this.pros = data));
      }
    },
    SecDescL() {
      if (this.chb_descL == true) {
        axios.get("http://localhost:9000/PRODUCT/descL").then(
          (
            data // producto por categoria
          ) => {
            console.log(data);
            this.pros = data.data;
            //alert("entro");
          }
        );
      } else {
        fetch("http://localhost:9000/PRODUCT")
          .then((res) => res.json())
          .then((data) => (this.pros = data));
      }
    },
    GetProducto(id) {
      this.$router.push("/detalle/" + id);
    },
  },
  mounted() {},
};
</script>
