<template>
  <br /><br /><br /><br /><br />
  <div>
    <h1 class="text-center color">Libretas</h1>
  </div>
  <br /><br />

  <div class="row row-cols-1 row-cols-md-3 g-4">
    <MyLibretas />
  </div>
  <MyFooter />
</template>

<script>
import MyLibretas from "../components/Libretas.vue";
import MyFooter from "../components/Footer.vue";

export default {
  name: "App",
  components: {
    MyLibretas,
    MyFooter,
  },
};
</script>
