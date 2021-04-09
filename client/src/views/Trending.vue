<template>
  <v-main>
    <Header />
    <SearchBar />
    <Footer />
    <!-- <img src="../assets/imgs/logo.png" alt="Phoenix-logo" height="200" width="200" /> -->
  </v-main>
</template>

<script>
import Header from "../components/general/Header.vue";
import Footer from "../components/general/Footer";
import SearchBar from "@/components/general/SearchBar";
export default {
  components: {
    Header,
    Footer,
    SearchBar,
  },
};
</script>

<style lang="scss" scoped>
.sad {
  height: 100vh;
}
</style>
