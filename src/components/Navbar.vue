<template>
  <!---------------------NAVBAR----------------->
  <nav
    class="navbar navbar-expand-lg navbar-light fixed-top"
    id="nav"
    v-if="navPublic"
  >
    <div class="container-fluid">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="espacioPadding">
        <li class="nav-item">
          <a class="nav-link active" id="espacioD"></a>
        </li>
      </ul>
      <a class="navbar-brand">
        <img src="../assets/imagenes/logo.png" alt="" width="50" height="50" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="espacioPadding">
          <li class="nav-item">
            <router-link
              to="/"
              class="nav-link active"
              aria-current="page"
              paddingleft="100px"
              style="color: white"
              >Inicio</router-link
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link active"
              aria-current="page"
              href="#producto"
              style="color: white"
              >Categorias</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link active" id="" aria-current="page"></a>
          </li>
        </ul>
        <input
          class="form-control"
          type="search"
          placeholder="Search"
          aria-label="Search"
          width="10px"
        />
        <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="espacioPadding">
          <li class="nav-item">
            <a
              class="nav-link active"
              id=""
              aria-current="page"
              href="#contacto"
              style="color: white"
              >Contacto</a
            >
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link" style="color: white"
              >Acceder</router-link
            >
          </li>
          <li class="nav-item">
            <a class="nav-link active" id="espacioD"></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!---------------------NAVBAR----------------->
  <nav
    class="navbar navbar-expand-lg navbar-light fixed-top"
    id="nav"
    v-if="navPriv"
  >
    <div class="container-fluid">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="espacioPadding">
        <li class="nav-item">
          <a class="nav-link active" id="espacioD"></a>
        </li>
      </ul>
      <a class="navbar-brand">
        <img src="../assets/imagenes/logo.png" alt="" width="50" height="50" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="espacioPadding">
          <li class="nav-item">
            <router-link
              to="/"
              class="nav-link active"
              aria-current="page"
              paddingleft="100px"
              style="color: white"
              >Inicio</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/settings" class="nav-link" style="color: white"
              >Ajustes</router-link
            >
          </li>
          <li class="nav-item">
            <a class="nav-link active" id="" aria-current="page"></a>
          </li>
        </ul>
        <input
          class="form-control"
          type="search"
          placeholder="Buscar"
          aria-label="Search"
          width="10px"
          @click="butonsearch()"
        />
        <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="espacioPadding">
          <li class="nav-item">
            <router-link to="/cart" class="nav-link" style="color: white">
              Carrito</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="/cart"
              class="nav-link"
              style="color: white"
              @click="Salir()"
            >
              Salir</router-link
            >
          </li>
          <li class="nav-item">
            <a class="nav-link active" id="espacioD"></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "MyNavbar",
  props: {
    msg: String,
  },
  data() {
    return {
      navPublic: true,
      navPriv: false,
    };
  },
  mounted() {
    if (localStorage.getItem("token_")) {
      this.navPriv = true;
      this.navPublic = false;
    } else {
      this.$router.push("/");
    }
  },
  methods: {
    butonsearch() {
      this.$router.push("/search");
    },
    Salir() {
      localStorage.removeItem("email_");
      localStorage.removeItem("total_");
      localStorage.removeItem("fkId_");
      localStorage.removeItem("token_");

      this.$router.push("/");
    },
  },
};
</script>

<style></style>
