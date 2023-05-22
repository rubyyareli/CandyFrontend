<template>
  <br /><br /><br /><br /><br />
  <div>
    <h1 class="text-center color">Marcatextos</h1>
  </div>
  <br /><br />

  <div class="row row-cols-1 row-cols-md-3 g-4">
    <MyMarcaTextos />
  </div>
  <MyFooter />
</template>

<script>
import MyMarcaTextos from "../components/MarcaTextos.vue";
import MyFooter from "../components/Footer.vue";

export default {
  name: "App",
  components: {
    MyMarcaTextos,
    MyFooter,
  },
};
</script>
