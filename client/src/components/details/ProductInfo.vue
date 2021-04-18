<template>
  <body>
    <h2>{{ product.information.name }}</h2>
    <h3 class="Price">
      {{ formatPrice(product.information.price) }} Phoenix Credits
    </h3>
    <h3 class="Info line">Información</h3>
    <table>
      <tr>
        <td class="TablaInfo">TALLA :</td>
        <td>{{ product.garment.size }}</td>
      </tr>
      <tr>
        <td class="TablaInfo">COLOR :</td>
        <td>{{ product.information.color }}</td>
      </tr>
      <tr>
        <td class="TablaInfo">CANTIDAD :</td>
        <td>1</td>
      </tr>
    </table>

    <h3 class="Description line">Descripción</h3>
    <p class="Des-info">
      {{ product.information.description }}
    </p>
    <router-link class="AddToCart" to="/carrito">
      <v-btn class="btn" color="phoenix" dark rounded>Añadir al Carrito</v-btn>
    </router-link>
  </body>
</template>

<script>
export default {
  props: {
    product: Object,
  },
  methods: {
    formatPrice(x) {
      x = Math.round((x + Number.EPSILON) * 100) / 100;
      const parts = x.toString().split(".");
      parts[0] = parts[0].replace(/(\d+)(?=\d{3})/g, "$ $1,");
      return parts.join(".");
    },
  },
};
</script>

<style scoped lang="scss">
td {
  text-align: center;
}
body {
  font-family: $montserratRegular-font;
}
h2,
h3,
.Price,
.Info,
.TablaInfo {
  font-family: $montserratSemiBold-font;
  text-align: left;
}

.Description,
.Info {
  padding-top: 0.8rem;
}
.Price {
  margin-bottom: 1rem;
}
.Des-info,
table {
  padding: 1rem 0;
}

.line {
  width: 100%;
  border-top: solid 2px $phoenix-color;
}

td {
  text-align: center;
}
</style>
