<template>
  <div class="team-card">
    <v-img
      class="profile-img"
      :src="require(`../../assets/imgs/${name.replace(/\s/g, '')}.png`)"
      alt=""
      width="119"
      height="119"
      :style="`border: 5px solid ${color};`"
    />
    <h3>{{ name }}</h3>
    <p :style="`box-shadow: inset 5px 0px 4px ${color};`">
      {{ info }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    info: String,
    color: String,
  },
};
</script>

<style scoped lang="scss">
.team-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.profile-img {
  border-radius: 100px;
}
h3 {
  font-family: $montserratSemiBold-font;
  margin: 1rem 0;
}
p {
  padding: 1rem;
  background: rgba(229, 229, 229, 0.3);
  font-size: 0.8rem;
}
</style>
