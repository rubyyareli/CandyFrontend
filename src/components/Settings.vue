<template>
  <br /><br /><br /><br /><br />
  <!--------------------------- INFORMACION ------------------------------->
  <main role="main">
    <p>
      <button
        class="dash-btn btn-6"
        data-bs-toggle="collapse"
        href="#collapseInfo"
      >
        Informacion
      </button>
    </p>
    <h4 class="text-center color">Información</h4>
    <br />
    <div class="collapse" id="collapseInfo">
      <div id="" class="card card-body container text-center">
        <main>
          <div class="row justify-content-center">
            <div class="col-md-6">
              <div class="row g-3" v-show="form">
                <div class="col-sm-6">
                  <label for="firstName" class="form-label"> Correo</label>
                  <input
                    type="text"
                    class="form-control"
                    maxLength="100"
                    v-model="form.EMAIL"
                    disabled
                  />
                </div>
                <div class="col-sm-6">
                  <label for="firstName" class="form-label">Nombre</label>
                  <input
                    type="text"
                    class="form-control"
                    maxLength="100"
                    v-model="form.USER_FULL_NAME"
                    required
                  />
                </div>
                <div class="col-sm-6">
                  <label for="lastName" class="form-label">Teléfono</label>
                  <input
                    type="text"
                    class="form-control"
                    maxLength="10"
                    v-model="form.TEL"
                    required
                  />
                </div>
              </div>
              <button
                class="btn-guardar button"
                v-on:click="editarU(form.USER_ID)"
              >
                Guardar
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  </main>
  <br /><br /><br />

  <!--------------------------- TARJETA ------------------------------->
  <main role="main">
    <p>
      <button
        class="dash-btn btn-6"
        data-bs-toggle="collapse"
        href="#collapseTarjeta"
      >
        Tarjeta
      </button>
    </p>
    <h4 class="text-center color">Tarjeta</h4>
    <br />
    <div class="collapse" id="collapseTarjeta">
      <div id="conf" class="card card-body container text-center">
        <main>
          <div class="row justify-content-center">
            <div class="col-md-6">
              <div class="row g-3" v-show="tarjeta">
                <div class="col-sm-12">
                  <label for="firstName" class="form-label">Nombre</label>
                  <input
                    type="text"
                    class="form-control"
                    maxLength="100"
                    v-model="tarjeta.NOMBRE"
                    required
                  />
                  <div class="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>

                <div class="col-md-4">
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

                <div class="col-md-4">
                  <label for="state" class="form-label"
                    >Fecha de expiración</label
                  >
                  <input
                    type="month"
                    class="form-control"
                    min="2023-04-01"
                    v-model="tarjeta.FECHA"
                    max="2028-12-04"
                  />
                </div>

                <div class="col-md-4">
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
                  <input
                    type="text"
                    class="form-control"
                    maxLength="10"
                    v-model="tarjeta.FK_USER_ID"
                    hidden
                  />
                </div>
              </div>
              <br />
              <button class="btn-guardar button" v-on:click="editarT()">
                Editar
              </button>
              <button class="btn-guardar button" v-on:click="guardarT()">
                Guardar
              </button>
              <button class="btn-guardar button" v-on:click="eliminarT()">
                Eliminar
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  </main>
  <br /><br /><br />

  <!--------------------------- DOMICILIO ------------------------------->
  <main role="main">
    <p>
      <button
        class="dash-btn btn-6"
        data-bs-toggle="collapse"
        href="#collapseDomicilio"
      >
        Domicilio
      </button>
    </p>
    <h4 class="text-center color">Domicilio</h4>
    <br />
    <div class="collapse" id="collapseDomicilio">
      <div id="conf" class="card card-body container text-center">
        <main>
          <div class="row justify-content-center">
            <div class="col-md-6">
              <div class="row g-3" v-show="form">
                <div class="col-sm-6">
                  <label for="firstName" class="form-label">Calle</label>
                  <input
                    type="text"
                    class="form-control"
                    maxLength="30"
                    v-model="form.CALLE"
                    required
                  />
                </div>

                <div class="col-sm-6">
                  <label for="lastName" class="form-label">Número</label>
                  <input
                    type="text"
                    class="form-control"
                    maxLength="5"
                    v-model="form.NUMERO"
                    required
                  />
                </div>

                <div class="col-md-5">
                  <label for="country" class="form-label">Colonia</label>
                  <input
                    type="text"
                    class="form-control"
                    maxLength="30"
                    v-model="form.COLONIA"
                    required
                  />
                </div>

                <div class="col-md-4">
                  <label for="state" class="form-label">Municipio</label>
                  <select
                    class="form-select"
                    value=""
                    name="Municipio"
                    v-model="form.MUNICIPIO"
                    required
                  >
                    <option>Guadalupe</option>
                    <option>Monterrey</option>
                    <option>San Nicolás de los Garza</option>
                    <option>Apodaca</option>
                    <option>Escobedo</option>
                    <option>Santa Catarina</option>
                  </select>
                </div>

                <div class="col-md-3">
                  <label for="country" class="form-label">Estado</label>
                  <input
                    type="text"
                    class="form-control"
                    value="Nuevo León"
                    required
                    disabled
                  />
                </div>
              </div>
              <button
                v-on:click="editarD(form.USER_ID)"
                class="btn-guardar button"
              >
                Guardar
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  </main>
  <br /><br /><br /><br /><br /><br /><br /><br /><br />
</template>

<script>
import "../assets/css/settings.css";
import axios from "axios";
import Swal from "sweetalert2";

export default {
  name: "MySettings",
  props: {},
  data: function () {
    return {
      form: {
        USER_ID: 0,
        USER_FULL_NAME: "",
        PIC: "",
        TEL: "",
        CALLE: "",
        NUMERO: null,
        COLONIA: "",
        MUNICIPIO: "",
        ESTADO: "Nuevo León",
      },

      tarjeta: {
        NUM_TARJETA: null,
        NOMBRE: null,
        FECHA: null,
        CODIGO: null,
        FK_USER_ID: localStorage.getItem("fkId_"),
      },
    };
  },
  methods: {
    editarU(id) {
      if (this.form.USER_FULL_NAME == "" || this.form.TEL == "") {
        Swal.fire("Datos vacios", "Intente de nuevo", "error");
      } else {
        console.log(id);
        axios
          .put("http://localhost:9000/USER/" + id, this.form)
          .then((data) => {
            console.log(data);
            Swal.fire("Se ha actualizado!", "👍🏼", "success");
          });
      }
    },
    editarD(id) {
      if (
        this.form.CALLE == "" ||
        this.form.NUMERO == "" ||
        this.form.COLONIA == "" ||
        this.form.MUNICIPIO == ""
      ) {
        Swal.fire("Datos vacios", "Intente de nuevo", "error");
      } else {
        console.log(id);
        axios
          .put("http://localhost:9000/USER/" + id, this.form)
          .then((data) => {
            console.log(data);
            Swal.fire("Se ha actualizado!", "👍🏼", "success");
          });
      }
    },
    editarT() {
      if (
        this.tarjeta.NOMBRE == "" ||
        this.tarjeta.NUM_TARJETA == "" ||
        this.tarjeta.FECHA == "" ||
        this.tarjeta.CODIGO == ""
      ) {
        Swal.fire("Datos vacios", "Intente de nuevo", "error");
      } else {
        this.form.ESTADO = "Nuevo León";
        axios
          .put(
            "http://localhost:9000/CARD/" + localStorage.getItem("fkId_"),
            this.tarjeta
          )
          .then((data) => {
            console.log(data);
            Swal.fire("Editado!", "👍🏼", "success");
          });
      }
    },
    guardarT() {
      axios.post("http://localhost:9000/CARD/", this.tarjeta).then((data) => {
        console.log(data);
        Swal.fire("Guardado!", "👍🏼", "success");
      });
    },
    eliminarT() {
      axios
        .delete(
          "http://localhost:9000/CARD/" + localStorage.getItem("fkId_"),
          this.tarjeta
        )
        .then((data) => {
          console.log(data);
          Swal.fire("Eliminado!", "👍🏼", "success");
        });
    },
  },
  created() {
    //console.log(id);
    axios
      .get(
        "http://localhost:9000/USER/" +
          localStorage.getItem("email_") +
          "/correo",
        this.form
      )
      .then((data) => {
        //axios.get("http://localhost:9000/PRODUCT/"+ id + "/detalle", this.form).then( data =>{
        console.log(data);
        this.form.USER_ID = data.data[0].USER_ID;
        //localStorage.setItem('fkId_', data.data[0].USER_ID)
        this.form.EMAIL = data.data[0].EMAIL;
        this.form.USER_FULL_NAME = data.data[0].USER_FULL_NAME;
        this.form.TEL = data.data[0].TEL;

        this.form.CALLE = data.data[0].CALLE;
        this.form.NUMERO = data.data[0].NUMERO;
        this.form.COLONIA = data.data[0].COLONIA;
        this.form.MUNICIPIO = data.data[0].MUNICIPIO;
        this.form.ESTADO = "Nuevo León";
      });

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
};
</script>
