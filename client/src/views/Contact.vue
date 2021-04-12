<template>
  <v-app>
    <Header />
    <SearchBar v-if="is_searchBar_open" />
    <Contact class="width" />
    <Footer />
  </v-app>
</template>

<script>
import Header from "../components/general/Header.vue";
import Contact from "../components/contact/Main-contact";
import Footer from "../components/general/Footer";
import SearchBar from "@/components/general/SearchBar";
export default {
  components: {
    Header,
    Contact,
    SearchBar,
    Footer,
  },
  data() {
    return {};
  },
  computed: {
    is_searchBar_open: function() {
      return this.$store.getters.get_is_searchBar_open;
    },
  },
};
</script>
<style scoped lang="scss">
.width {
  width: 70vw;
  margin: auto;
  padding-top: 0;
}
</style>
