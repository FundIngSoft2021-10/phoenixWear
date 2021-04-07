<template>
  <div>
    <Header />
    <Contact />
  </div>
</template>

<script>
import Header from "../components/general/Header.vue";
import Contact from "../components/contact/Main-contact";

export default {
  components: {
    Header,
    Contact,
  },
  data() {
    return {};
  },
};
</script>
<style scoped lang="scss"></style>
