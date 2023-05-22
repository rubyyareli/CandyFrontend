<template>
  <br /><br /><br /><br /><br />
  <div>
    <h1 class="text-center color">Plumas</h1>
  </div>
  <br /><br />

  <div class="row row-cols-1 row-cols-md-3 g-4">
    <MyPlumas />
  </div>
  <MyFooter />
</template>

<script>
import MyPlumas from "../components/Plumas.vue";
import MyFooter from "../components/Footer.vue";

export default {
  name: "App",
  components: {
    MyPlumas,
    MyFooter,
  },
};
</script>
