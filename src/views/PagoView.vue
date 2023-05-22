<template>
  <MyPago />
  <MyFooter />
</template>

<script>
import MyPago from "../components/Pago.vue";
import MyFooter from "../components/Footer.vue";

export default {
  name: "App",
  components: {
    MyPago,
    MyFooter,
  },
};
</script>
