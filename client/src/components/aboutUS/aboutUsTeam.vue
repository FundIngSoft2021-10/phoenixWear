<template>
  <section>
    <h2 class="border-gradient">Nuestro equipo</h2>
    <div>
      <MemberCard />
    </div>
  </section>
</template>

<script>
import MemberCard from "./aboutUsCard";
export default {
  components: {
    MemberCard,
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
</style>
