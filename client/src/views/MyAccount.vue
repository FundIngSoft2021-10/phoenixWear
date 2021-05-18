<template>
  <v-main>
    <Header />
    <SearchBar v-if="is_searchBar_open" />
    <MiCuenta/>
    <Footer />
  </v-main>
</template>

<script>
import Header from "../components/general/Header.vue";
import Footer from "../components/general/Footer";
import SearchBar from "@/components/general/SearchBar";
import MiCuenta from "../components/miCuenta/MiCuenta";

export default {
  components: {
    Header,
    MiCuenta,
    Footer,
    SearchBar,
  },
  computed: {
    is_searchBar_open: function() {
      return this.$store.getters.get_is_searchBar_open;
    },
  },
};
</script>

<style>
</style>
