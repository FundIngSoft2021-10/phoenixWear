<template>
    <v-main>
        <Header/>
        <Credits class="width"/>
        <Footer/>        
    </v-main>
</template>
<script>
import Header from "../components/general/Header.vue";
import Footer from "../components/general/Footer";
import Credits from "../components/forms/GetPhoenixCredits"
export default {
  components: {
    Header,
    Footer,
    Credits,
  },
  computed: {
    is_searchBar_open: function() {
      return this.$store.getters.get_is_searchBar_open;
    },
  },
};
</script>
<style lang="stylus" scoped></style>