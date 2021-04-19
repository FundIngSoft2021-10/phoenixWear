<template>
  <v-main>
    <Header />
    <SearchBar v-if="is_searchBar_open" />
    <Info class="width inf" />
    <div class="questions">
      <Question v-for="i in 6" :key="i" :title="titles[i - 1]" :ans="ans" />
    </div>

    <Footer />
  </v-main>
</template>

<script>
import Header from "../components/general/Header.vue";
import Footer from "../components/general/Footer";
import Info from "../components/Q&A/Info";
import Question from "../components/Q&A/Question";
import SearchBar from "@/components/general/SearchBar";
export default {
  components: {
    Header,
    Footer,
    Info,
    Question,
    SearchBar,
  },
  data() {
    return {
      titles: [
        "¿Puedo devolver un objeto?",
        "¿Comó puedo administrar mi cuenta?",
        "¿Comó puedo vender?",
        "¿Qué metodos de pago puedo usar?",
        "¿Comó puedo crear una cuenta?",
        "¿Cuál es la cobertura de los envíos?",
      ],
      ans:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
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
  padding-top: 4rem;
}
.questions {
  padding-top: 2rem;
}
</style>
