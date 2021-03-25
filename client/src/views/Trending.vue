<template>
  <v-app>
   <Header/>
   <!-- <img src="../assets/imgs/logo.png" alt="Phoenix-logo" height="200" width="200" /> --> 
   <Trending/>
   <Footer/>
  </v-app>
</template>

<script>
import Header from "../components/general/Header.vue";
import Trending from "../components/trending/Trending-main";
import Footer from "../components/general/Footer.vue";

export default {
 components: {
   Header,
   Trending,
   Footer,
 }
};

</script>

<style lang="scss" scoped>

</style>
