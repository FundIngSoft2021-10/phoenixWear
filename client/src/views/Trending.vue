<template>
  <v-app>
    <Header/>
    <TrendingMain/>
    <Footer/>
  </v-app>
</template>

<script>
import Header from "../components/general/Header.vue";
import TrendingMain from "../components/trending/Trending-main.vue"
import Footer from "../components/general/Footer";
export default {
  components: {
    Header,
    TrendingMain,
    Footer,
  }
};
</script>

<style></style>
