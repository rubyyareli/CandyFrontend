<!---------------------Register----------------->
<template>
  <div class="container">
    <div class="backbox">
      <div class="signupMsg">
        <div class="textcontent">
          <p class="title">¿Ya tiene una cuenta?</p>
          <p>Inicia sesión para comprar nuestros productos.</p>
          <router-link to="/login" id="switch1"
            ><button class="custom-btn btn-15">
              Inicia sesión
            </button></router-link
          >
        </div>
      </div>
    </div>
    <!-- backbox -->
    <div class="frontbox">
      <div class="signup">
        <h2>Registrarse</h2>
        <div>
          <input
            class="logobrand form-control"
            type="text"
            placeholder="Nombre"
            id="USER_FULL_NAME"
            v-model="USER_FULL_NAME"
            required
          />
          <input
            class="logobrand form-control"
            type="email"
            placeholder="Correo"
            id="EMAIL"
            v-model="EMAIL"
            required
          />
          <input
            class="logobrand form-control"
            type="password"
            placeholder="Contraseña"
            id="USER_PWD"
            v-model="USER_PWD"
            required
          />
        </div>
        <router-link to=""></router-link>
        <button class="custom-btn btn-15" @click="registro(EMAIL)">
          Aceptar
        </button>
      </div>
    </div>
    <!-- frontbox -->
  </div>

  <div>
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
  </div>
</template>

<script>
import "../assets/css/login.css";
import axios from "axios";
import Swal from "sweetalert2";

export default {
  name: "MyRegister",
  data: function () {
    return {
      EMAIL: "",
      USER_PWD: "",
      error: false,
      error_msg: "",
      USER_FULL_NAME: null,
      PIC: "",
      TEL: "",
      TIPO: "",
      CALLE: "",
      NUMERO: null,
      COLONIA: "",
      MUNICIPIO: "",
      ESTADO: "",
      FK_ID_USER: 3,
      TOKEN: null,

      correo: [],
    };
  },
  created() {
    axios.get("http://localhost:9000/USER").then((data) => {
      console.log(data);
    });
  },
  methods: {
    registro(email) {
      let json = {
        EMAIL: this.EMAIL,
        USER_PWD: this.USER_PWD,
        USER_FULL_NAME: this.USER_FULL_NAME,
        PIC: this.PIC,
        TEL: this.TEL,
        TIPO: this.TIPO,
        CALLE: this.CALLE,
        NUMERO: this.NUMERO,
        COLONIA: this.COLONIA,
        MUNICIPIO: this.MUNICIPIO,
        ESTADO: this.ESTADO,
        FK_ID_USER: 3,
        TOKEN: this.TOKEN,
      };
      let igual = false;

      axios.get("http://localhost:9000/USER/", json).then((data) => {
        for (let correo of data.data) {
          if (correo.EMAIL == email) igual = true;
        }
        if (
          this.USER_FULL_NAME == "" ||
          this.EMAIL == "" ||
          this.USER_PWD == ""
        ) {
          Swal.fire("Datos vacios!", "", "error");
        } else {
          if (igual) {
            Swal.fire("Este correo ya existe!", "Ingrese otro correo", "error");
          } else {
            axios.post("http://localhost:9000/USER/", json).then((data) => {
              Swal.fire("Registro!", "", "success");

              console.log(data);
            });
          }
        }
        console.log(data);
      });
    },
  },
};
</script>
