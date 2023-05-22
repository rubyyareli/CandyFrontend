<template>
  <MyLogin />
  <MyFooter />
</template>

<script>
import MyLogin from "../components/Login.vue";
import MyFooter from "../components/Footer.vue";

export default {
  name: "App",
  components: {
    MyLogin,
    MyFooter,
  },
};
</script>
