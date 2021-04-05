<template>
  <v-app>
   <Header/>
    <Footer/>
   <!-- <img src="../assets/imgs/logo.png" alt="Phoenix-logo" height="200" width="200" /> --> 
  </v-app>
</template>

<script>
import Header from "../components/general/Header.vue";
import Footer from "@/components/general/Footer.vue";

export default {
 components: {
   Header,
   Footer,
 }
};

</script>

<style lang="scss" scoped>

</style>
