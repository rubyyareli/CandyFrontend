<template>
  <MyCarousel />
  <MyCard />
  <MyCarrusel />
  <MyForm />
  <MyFooter />
</template>

<script>
import MyCarousel from "../components/Carousel.vue";
import MyCard from "../components/Card.vue";
import MyFooter from "../components/Footer.vue";
import MyForm from "../components/Form.vue";
import MyCarrusel from "../components/Carrusel.vue";

export default {
  name: "App",
  components: {
    MyCarousel,
    MyCard,
    MyFooter,
    MyForm,
    MyCarrusel,
  },
};
</script>
