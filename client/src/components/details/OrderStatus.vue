<template>
  <section>
    <ul class="list">
      <li class="list_item">COMPRADO</li>
      <li class="list_item">ENVIADO</li>
      <li class="list_item">EN CAMINO</li>
      <li class="list_item active">ENTREGADO</li>
    </ul>
  </section>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
ul {
  padding: 0 !important;
}
.list {
  font-family: $montserratRegular-font;
  text-align: left;
}
.list_item {
  display: inline-block;
  color: #9b9797;
  text-decoration: none;
}
.active {
  color: $phoenix-color;
}
.list_item:not(:last-of-type)::after {
  content: "\2192";
  font-size: 22px;
  padding: 5px;
  margin: 0 5px;
  color: #9b9797;
}
</style>
