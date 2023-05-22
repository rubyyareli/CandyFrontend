<template>
  <MySettings />
  <!---------<MyProductsFavs/>
  <MyProductsComp/>--------------->
  <MyFooter />
</template>

<script>
import MySettings from "../components/Settings.vue";
//import MyProductsComp from '../components/ProductosComprados.vue'
//import MyProductsFavs from '../components/ProductosFavs.vue'
import MyFooter from "../components/Footer.vue";

export default {
  name: "App",
  components: {
    MySettings,
    MyFooter,
    //,MyProductsFavs,MyProductsComp
  },
};
</script>
