<template>
  <v-main>
    <Header />
    <SearchBar v-if="is_searchBar_open" />
    <MiCarrito class="width"/>
    <!--pre>{{ JSON.stringify(products, null, 2) }}</pre-->
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
  data() {
    return {
      products:"",
      lengthP:"",
    };
  },
  computed: {
    is_searchBar_open: function() {
      return this.$store.getters.get_is_searchBar_open;
    },
  },
};
</script>

<style lang="scss" scoped>
.width {
  width: 70vw;
  margin: auto;
  margin-top: 4.5rem;
}
</style>
