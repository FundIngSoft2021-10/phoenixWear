<template>
  <section>
    <h2 class="border-gradient">Nuestro equipo</h2>
    <div class="team-section" v-if="windowWidth > 769">
      <MemberCard
        v-for="n in 6"
        :key="n"
        :name="name[n - 1]"
        :info="info"
        :color="color[n - 1]"
      />
    </div>
    <v-card class="card-section" v-else elevation="24">
      <v-carousel
        :continuous="false"
        :cycle="false"
        :show-arrows="true"
        delimiter-icon="mdi-minus"
        height="550"
      >
        <v-carousel-item v-for="n in 6" :key="n">
          <v-sheet light color="card_bg" height="95%">
            <v-row align="center" justify="center">
              <MemberCard
                :name="name[n - 1]"
                :info="info"
                :color="color[n - 1]"
                class="memeber-card"
              />
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-card>
  </section>
</template>

<script>
import MemberCard from "./AboutUsCard";
export default {
  components: {
    MemberCard,
  },
  data() {
    return {
      windowWidth: 0,
      name: [
        "Nelson Mosquera",
        "Juliana Rojas",
        "Juan Motta",
        "Carlos Erazo",
        "Fabio Camargo",
        "Camilo Garcia",
      ],
      color: ["#81d8f3", "#81F38C", "#8E66FF", "#FA8888", "#8AEDDB", "#EB801E"],
      info:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    };
  },
  created() {
    this.setWindowWidth();
    window.addEventListener("resize", () => {
      this.setWindowWidth();
    });
  },
  methods: {
    setWindowWidth() {
      this.windowWidth = window.innerWidth;
    },
  },
};
</script>

<style scoped lang="scss">
section {
  display: flex;
  flex-flow: column;
  align-items: center;
}
.card-section {
  margin: 1rem 2rem;
}
h2 {
  font-family: $montserratSemiBold-font;
  border-bottom: 10px solid;
  border-image-slice: 1;
  border-width: 2px;
  margin-bottom: 5rem;
  font-size: 1.5rem;
  @media screen and (max-width: $breakpoint-tablet) {
    margin-bottom: 1rem;
  }
}
.memeber-card {
  margin: 4rem 1.2rem;
}

.border-gradient {
  border-image-source: linear-gradient(
    90deg,
    rgba(255, 187, 187, 1) 0%,
    rgba(142, 102, 255, 1) 33%,
    rgba(131, 200, 245, 1) 72%,
    rgba(210, 149, 205, 1) 100%
  );
}
.team-section {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 50px;
  @media screen and (max-width: $breakpoint-tablet) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    margin: 0 1rem;
  }
}
</style>
