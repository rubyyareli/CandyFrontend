<template>
  <br /><br /><br /><br />
  <!---------------------Dashboard Productos----------------->
  <h1 class="text-center color">Productos</h1>
  <main role="main">
    <p>
      <button
        class="dash-btn btn-6"
        data-bs-toggle="collapse"
        href="#collapseProducts"
      >
        F
      </button>
    </p>
    <div class="collapse" id="collapseProducts">
      <!--------------------------- Agregar ------------------------------->
      <h4 class="text-center color">Agregar producto nuevo</h4>
      <br />
      <div class="" id="">
        <div id="" class="card card-body container text-center">
          <div class="row justify-content-center">
            <div class="col-md-6">
              <form>
                <div class="row g-3">
                  <div class="col-sm-6">
                    <label for="firstName" class="form-label">Nombre</label>
                    <input
                      type="text"
                      class="form-control"
                      maxLength="15"
                      id="TITULO"
                      v-model="form.TITULO"
                      required
                    />
                  </div>

                  <div class="col-sm-6">
                    <label for="lastName" class="form-label">Descripción</label>
                    <input
                      type="text"
                      class="form-control"
                      maxLength="25"
                      id="DESCRIPCION"
                      v-model="form.DESCRIPCION"
                      required
                    />
                  </div>

                  <div class="col-sm-6">
                    <label for="lastName" class="form-label">Categoría</label>
                    <select
                      class="form-select"
                      id="CATEGORIA"
                      v-model="form.FK_SECTION_ID"
                      required
                    >
                      <option value="1">Blocs</option>
                      <option value="6">Colores</option>
                      <option value="5">Libretas</option>
                      <option value="4">Marcadores</option>
                      <option value="3">Marcatextos</option>
                      <option value="2">Plumas</option></select
                    ><br />
                  </div>

                  <div class="col-sm-6">
                    <label for="lastName" class="form-label">Precio</label>
                    <input
                      type="number"
                      class="form-control"
                      min="0"
                      id="PRECIO"
                      v-model="form.PRECIO"
                      required
                    />
                  </div>

                  <div class="col-sm-6">
                    <label for="lastName" class="form-label">Stock</label>
                    <input
                      type="number"
                      class="form-control"
                      min="1"
                      id="STOCK"
                      v-model="form.STOCK"
                      required
                    />
                  </div>
                </div>
                <button class="dash-btn btn-7" v-on:click="guardar()">G</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <br /><br /><br />
      <article
        class="panel project"
        v-for="prod in posts"
        :key="prod.PRODUCTOS_ID"
      >
        <h1 class="project-name">
          {{ prod.TITULO }}
          <p hidden>{{ prod.PRODUCTOS_ID }}</p>
        </h1>
        <div class="project-controls">
          <router-link to="" id="switch1"
            ><button
              class="dash-btn btn-7"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              v-on:click="EditGetProducto(prod.PRODUCTOS_ID)"
            >
              E
            </button></router-link
          >
          <router-link to="" id="switch1"
            ><button
              class="dash-btn btn-7"
              v-on:click="eliminar(prod.PRODUCTOS_ID)"
            >
              D
            </button></router-link
          >
        </div>
        <ul class="project-meta">
          <li>
            Descripcion: <strong>{{ prod.DESCRIPCION }} </strong>
          </li>
          <li>
            Precio: <strong>{{ prod.PRECIO }}</strong>
          </li>
          <li>
            Stock: <strong>{{ prod.STOCK }}</strong>
          </li>
        </ul>
      </article>
    </div>
  </main>
  <br /><br /><br /><br />

  <!-------------Modal------------->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    v-show="form"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            Editar producto {{ form.PRODUCTOS_ID }}
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label">Nombre:</label>
              <input
                type="text"
                class="form-control"
                maxLength="15"
                id="TITULO"
                v-model="form.TITULO"
                required
              />
            </div>
            <div class="mb-3">
              <label for="message-text" class="col-form-label"
                >Descripción:</label
              >
              <input
                type="text"
                class="form-control"
                maxLength="25"
                id="DESCRIPCION"
                v-model="form.DESCRIPCION"
                required
              />
            </div>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label"
                >Categoría:</label
              >
              <select
                class="form-select"
                id="CATEGORIA"
                v-model="form.FK_SECTION_ID"
                required
              >
                <option value="1">Blocs</option>
                <option value="6">Colores</option>
                <option value="5">Libretas</option>
                <option value="4">Marcadores</option>
                <option value="3">Marcatextos</option>
                <option value="2">Plumas</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="message-text" class="col-form-label">Precio:</label>
              <input
                type="number"
                class="form-control"
                min="0"
                id="PRECIO"
                v-model="form.PRECIO"
                required
              />
            </div>
            <div class="mb-3">
              <label for="message-text" class="col-form-label">Stock:</label>
              <input
                type="number"
                class="form-control"
                min="1"
                id="STOCK"
                v-model="form.STOCK"
                required
              />
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Cerrar
          </button>
          <button
            type="button"
            class="btn btn-primary"
            data-bs-dismiss="modal"
            v-on:click="editar(form.PRODUCTOS_ID)"
          >
            Ok
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../assets/css/dashboard.css";
import axios from "axios";
import Swal from "sweetalert2";
export default {
  name: "MyDashboardProducts",

  data: function () {
    return {
      form: {
        PRODUCTOS_ID: 0,
        TITULO: null,
        DESCRIPCION: null,
        PIC: "",
        CATEGORIA: "",
        PRECIO: null,
        STOCK: null,
        FK_SECTION_ID: 1,
      },
      posts: [],
    };
  },

  methods: {
    guardar() {
      axios.post("http://localhost:9000/PRODUCT", this.form).then((data) => {
        console.log(data);
        if (
          this.form.TITULO == null ||
          this.form.DESCRIPCION == null ||
          this.form.FK_SECTION_ID == null ||
          this.form.PRECIO == null ||
          this.form.STOCK == null
        ) {
          Swal.fire("Los datos estan vacios!", "No se puede agregar.", "error");
        } else {
          Swal.fire("Se ha agregado!", "👍🏼", "success");
        }
      });
    },
    eliminar(id) {
      axios.delete("http://localhost:9000/PRODUCT/" + id).then((data) => {
        console.log(data);
        Swal.fire("Se ha eliminado!", "👍🏼", "success");
      });
    },
    EditGetProducto(id) {
      console.log(id);
      axios
        .get("http://localhost:9000/PRODUCT/" + id + "/detalle", this.form)
        .then((data) => {
          console.log(data);
          this.form.PRODUCTOS_ID = data.data[0].PRODUCTOS_ID;
          this.form.TITULO = data.data[0].TITULO;
          this.form.DESCRIPCION = data.data[0].DESCRIPCION;
          this.form.FK_SECTION_ID = data.data[0].FK_SECTION_ID;
          this.form.PRECIO = data.data[0].PRECIO;
          this.form.STOCK = data.data[0].STOCK;
        });
    },
    editar(id) {
      console.log(id);
      axios
        .put("http://localhost:9000/PRODUCT/" + id, this.form)
        .then((data) => {
          console.log(data);
          Swal.fire("Se ha actualizado!", "👍🏼", "success");
        });
    },
  },
  created() {
    fetch("http://localhost:9000/PRODUCT")
      .then((res) => res.json())
      .then((data) => (this.posts = data));
  },
};
</script>
