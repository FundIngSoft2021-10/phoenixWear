<template>
  <v-main>
    <Header />
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
export default {
  components: {
    Header,
    Footer,
    Info,
    Question,
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
};
</script>

<style lang="scss" scoped>
.width {
  width: 70vw;
  margin: auto;
  padding-top: 5rem;
}
.questions {
  padding-top: 2rem;
}
</style>
