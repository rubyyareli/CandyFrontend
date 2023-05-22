<template>
  <MyNavbar msg=""/>
  <nav hidden>
    <router-link to="/">home</router-link> |
    <router-link to="/login">login</router-link>|
  </nav> 
  <router-view/>
</template>

<script>


import MyNavbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    MyNavbar
  }
}
</script>


