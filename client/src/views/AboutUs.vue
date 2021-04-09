<template>
  <v-main>
    <Header />
    <SearchBar v-if="is_searchBar_open" />
    <AboutUsInfo class="width" />
    <AboutUsTeam class="team width" />
    <Footer />
  </v-main>
</template>

<script>
import Header from "../components/general/Header.vue";
import AboutUsInfo from "../components/aboutUS/AboutUsInfo";
import AboutUsTeam from "../components/aboutUS/AboutUsTeam";
import Footer from "../components/general/Footer";
import SearchBar from "@/components/general/SearchBar";
export default {
  components: {
    Header,
    AboutUsInfo,
    AboutUsTeam,
    SearchBar,
    Footer,
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
  font-family: $montserratRegular-font;
  @media screen and (max-width: $breakpoint-desktop) {
    width: 90vw;
  }
  @media screen and (max-width: $breakpoint-tablet) {
    width: 100vw;
    margin: 0;
  }
}
.team {
  margin-top: 3rem;
}
</style>
