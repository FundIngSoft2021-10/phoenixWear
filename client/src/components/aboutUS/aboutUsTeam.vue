<template>
  <section>
    <h2 class="border-gradient">Nuestro equipo</h2>
    <div class="team-section">
      <MemberCard
        v-for="n in 6"
        :key="n"
        :name="name[n - 1]"
        :info="info"
        :color="color[n - 1]"
      />
    </div>
  </section>
</template>

<script>
import MemberCard from "./aboutUsCard";
export default {
  components: {
    MemberCard,
  },
  data() {
    return {
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
};
</script>

<style scoped lang="scss">
section {
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
}
h2 {
  font-family: $montserratSemiBold-font;
  border-bottom: 10px solid;
  border-image-slice: 1;
  border-width: 2px;
  margin-bottom: 5rem;
  font-size: 1.5rem;
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
  grid-template-columns: 320px 320px 320px;
  grid-gap: 50px;
}
</style>
