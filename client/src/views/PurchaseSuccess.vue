<template>
  <v-main>
    <Header />
    <SearchBar v-if="is_searchBar_open" />
    <p-confirmation/>
    <Footer />
    <!-- <img src="../assets/imgs/logo.png" alt="Phoenix-logo" height="200" width="200" /> -->
  </v-main>
</template>

<script>
import Header from "../components/general/Header.vue";
import pConfirmation from "../components/Purchase/purchaseConfirmation.vue";
import Footer from "../components/general/Footer";
import SearchBar from "@/components/general/SearchBar";
export default {
  components: {
    Header,
    Footer,
    pConfirmation,
    SearchBar,
  },
  computed: {
    is_searchBar_open: function() {
      return this.$store.getters.get_is_searchBar_open;
    },
  },
};
</script>

<style lang="scss" scoped>
.sad {
  height: 100vh;
}
</style>
