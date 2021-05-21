<template>
  <v-main>
    <Header />
    <SearchBar v-if="is_searchBar_open" />
    <Purchases class="purchases" />
    <Footer />
  </v-main>
</template>

<script>
import Header from "../components/general/Header.vue";
import Footer from "../components/general/Footer";
import SearchBar from "@/components/general/SearchBar";
import Purchases from "@/components/histories/Purchases";

export default {
  components: {
    Header,
    Footer,
    SearchBar,
    Purchases,
  },
};
</script>

<style lang="scss" scoped>
.purchases {
  margin-top: 5rem;
}
</style>
