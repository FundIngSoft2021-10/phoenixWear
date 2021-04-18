<template>
  <v-main>
    <Header />
    <SearchBar v-if="is_searchBar_open" />
    <MiCarrito />
    <Footer />
  </v-main>
</template>

<script>
import Header from "../components/general/Header.vue";
import Footer from "../components/general/Footer";
import SearchBar from "@/components/general/SearchBar";
import MiCarrito from "@/components/miCarrito/MiCarrito";

export default {
  components: {
    Header,
    Footer,
    SearchBar,
    MiCarrito,
  },
  computed: {
    is_searchBar_open: function() {
      return this.$store.getters.get_is_searchBar_open;
    },
  },
};
</script>

<style></style>
