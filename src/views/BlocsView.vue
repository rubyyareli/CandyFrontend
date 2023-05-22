<template>
  <br /><br /><br /><br /><br />
  <div>
    <h1 class="text-center color">Blocs</h1>
  </div>
  <br /><br />

  <div class="row row-cols-1 row-cols-md-3 g-4">
    <MyBlocs />
  </div>
  <MyFooter />
</template>

<script>
import MyBlocs from "../components/Blocs.vue";
import MyFooter from "../components/Footer.vue";

export default {
  name: "App",
  components: {
    MyBlocs,
    MyFooter,
  },
};
</script>
