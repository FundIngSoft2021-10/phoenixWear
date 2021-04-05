<template>
  <v-app>
    <Header />
    <AboutUsInfo class="width" />
    <AboutUsTeam class="team width" />
  </v-app>
</template>

<script>
import Header from "../components/general/Header.vue";
import AboutUsInfo from "../components/aboutUS/aboutUsInfo";
import AboutUsTeam from "../components/aboutUS/aboutUsTeam";
export default {
  components: {
    Header,
    AboutUsInfo,
    AboutUsTeam,
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
