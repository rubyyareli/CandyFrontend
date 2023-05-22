<template>
  <br /><br /><br /><br /><br />
  <div>
    <h1 class="text-center color">Colores</h1>
  </div>
  <br /><br />

  <div class="row row-cols-1 row-cols-md-3 g-4">
    <MyColores />
  </div>
  <MyFooter />
</template>

<script>
import MyColores from "../components/Colores.vue";
import MyFooter from "../components/Footer.vue";

export default {
  name: "App",
  components: {
    MyColores,
    MyFooter,
  },
};
</script>
