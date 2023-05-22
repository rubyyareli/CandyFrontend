<template>
  <MyRegister />
  <MyFooter />
</template>

<script>
import MyRegister from "../components/Register.vue";
import MyFooter from "../components/Footer.vue";

export default {
  name: "App",
  components: {
    MyRegister,
    MyFooter,
  },
};
</script>
