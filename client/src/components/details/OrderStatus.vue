<template>
  <section>
    <ul class="list">
      <li :class="status == 'Disponible' ? 'active' : ''" class="list_item">
        DISPONIBLE
      </li>
      <li :class="status == 'Enviado' ? 'active' : ''" class="list_item">
        ENVIADO
      </li>
      <li :class="status == 'Entregado' ? 'active' : ''" class="list_item">
        ENTREGADO
      </li>
      <li :class="status == 'Finalizado' ? 'active' : ''" class="list_item">
        FINALIZADO
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    status: String,
  },
};
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
