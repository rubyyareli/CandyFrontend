<template>
  <MyDashboardUsers />
  <MyDashboardProducts />
  <MyFooter />
</template>

<script>
import MyDashboardUsers from "../components/DashboardUsers.vue";
import MyDashboardProducts from "../components/DashboardProducts.vue";
import MyFooter from "../components/Footer.vue";

export default {
  name: "App",
  components: {
    MyDashboardProducts,
    MyDashboardUsers,
    MyFooter,
  },
};
</script>
