<template>
  <MyConfirmacion />
  <MyFooter />
</template>

<script>
import MyConfirmacion from "../components/Confirmacion.vue";
import MyFooter from "../components/Footer.vue";

export default {
  name: "App",
  components: {
    MyConfirmacion,
    MyFooter,
  },
};
</script>
