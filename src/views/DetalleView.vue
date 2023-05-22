<template>
  <MyDetalle />
  <br /><br /><br />
  <MyFooter />
</template>

<script>
import MyFooter from "../components/Footer.vue";
import MyDetalle from "../components/Detalle.vue";

export default {
  name: "App",
  components: {
    MyDetalle,
    MyFooter,
  },
};
</script>
