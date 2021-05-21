<template>
  <v-main>
    <Header />
    <SearchBar v-if="is_searchBar_open" />
    <Selling class="sell" />
    <Footer />
  </v-main>
</template>

<script>
import Header from "../components/general/Header.vue";
import Footer from "../components/general/Footer";
import SearchBar from "@/components/general/SearchBar";
import Selling from "@/components/histories/Selling";

export default {
  components: {
    Header,
    Footer,
    SearchBar,
    Selling,
  },

  computed: {
    is_searchBar_open: function() {
      return this.$store.getters.get_is_searchBar_open;
    },
  },
};
</script>

<style lang="scss" scoped>
.sell {
  margin-top: 4rem;
}
</style>
