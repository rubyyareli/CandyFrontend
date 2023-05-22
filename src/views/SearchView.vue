<template>
  <MySearch />
  <MyFooter />
</template>

<script>
import "../assets/css/search.css";

import MySearch from "../components/Search.vue";
import MyFooter from "../components/Footer.vue";
//import MyMarcadores from '../components/Marcadores.vue'

export default {
  name: "App",
  components: {
    MySearch,
    MyFooter, //MyMarcadores
  },
};
</script>
