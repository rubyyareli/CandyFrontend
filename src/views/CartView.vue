<template>
  <MyCart />
  <MyFooter />
</template>

<script>
import MyCart from "../components/Cart.vue";
import MyFooter from "../components/Footer.vue";

export default {
  name: "App",
  components: {
    MyFooter,
    MyCart,
  },
};
</script>
