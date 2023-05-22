<template>
  <br /><br /><br /><br /><br />
  <div>
    <h1 class="text-center color">Marcadores</h1>
  </div>
  <br /><br />

  <div class="row row-cols-1 row-cols-md-3 g-4">
    <MyMarcadores />
  </div>
  <MyFooter />
</template>

<script>
import MyMarcadores from "../components/Marcadores.vue";
import MyFooter from "../components/Footer.vue";

export default {
  name: "App",
  components: {
    MyMarcadores,
    MyFooter,
  },
};
</script>
