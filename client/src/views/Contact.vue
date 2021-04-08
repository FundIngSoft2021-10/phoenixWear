<template>
  <v-app>
    <Header />
    <Contact />
    <Footer />
  </v-app>
</template>

<script>
import Header from "../components/general/Header.vue";
import Contact from "../components/contact/Main-contact";
import Footer from "../components/general/Footer";
export default {
  components: {
    Header,
    Contact,
    Footer,
  },
  data() {
    return {};
  },
};
</script>
<style scoped lang="scss"></style>
