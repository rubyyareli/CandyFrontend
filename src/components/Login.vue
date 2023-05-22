<!---------------------Login----------------->
<template>
  <div class="container">
    <div class="backbox">
      <div class="loginMsg">
        <div class="textcontent">
          <p class="title">¿No tienes una cuenta?</p>
          <p>¡Creala ahora mismo!</p>
          <router-link to="/register" id="switch1"
            ><button class="custom-btn btn-15">Regístrese</button></router-link
          >
        </div>
      </div>
    </div>
    <!-- backbox -->
    <div class="frontbox">
      <div class="login" v-show="form">
        <h2>Iniciar sesión</h2>
        <div class="inputbox">
          <input
            class="logobrand form-control"
            type="text"
            placeholder="Correo"
            v-model="form.EMAIL"
          />
          <input
            class="logobrand form-control"
            type="password"
            placeholder="Contraseña"
            v-model="form.USER_PWD"
          />
        </div>
        <p style="color: #3a4966"></p>
        <router-link to="" id="switch1"></router-link>
        <button
          type="submit"
          class="custom-btn btn-15"
          @click="login(form.EMAIL, form.USER_PWD, form.FK_ID_USER)"
        >
          Aceptar
        </button>
        <!-- Remind Passowrd -->
      </div>
    </div>
    <!-- frontbox -->
  </div>
  <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
</template>

<script>
import "../assets/css/login.css";
import axios from "axios";
import Swal from "sweetalert2";

export default {
  name: "MyLogin",
  props: {},
  data: function () {
    return {
      form: {
        EMAIL: "",
        USER_PWD: "",
        FK_ID_USER: 3,
        token: "",
      },
    };
  },
  methods: {
    login(email, pass, fkid) {
      if (email == "rubi170999@gmail.com" && pass == "goofy") {
        this.$router.push("/dashboard");
      }
      if (email == "" && pass == "") {
        Swal.fire(
          "Ingrese un correo y una contraseña",
          "Intente de nuevo",
          "error"
        );
      } else {
        axios
          .get("http://localhost:9000/USER/" + email + "/correo")
          .then((data) => {
            console.log(data);
            if (
              email == data.data[0].EMAIL &&
              pass == data.data[0].USER_PWD &&
              fkid == data.data[0].FK_ID_USER
            ) {
              axios.post("http://localhost:9000/signup").then((response) => {
                console.log(response);
                localStorage.setItem("email_", data.data[0].EMAIL);
                localStorage.setItem("token_", response.data.token);
                localStorage.setItem("fkId_", data.data[0].USER_ID);
              });
              Swal.fire("Bienvenido!", data.data[0].EMAIL, "success");
              this.$router.push("/search");
            } else {
              Swal.fire(
                "Correo o contraseña incorrectos",
                "Intente de nuevo",
                "error"
              );
            }
          });
      }
    },
  },
};
</script>
