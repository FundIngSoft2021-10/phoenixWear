<template>
  <body>
    <h2>{{ product.name }}</h2>
    <h3 class="Price">{{ formatPrice(product.price) }} Phoenix Credits</h3>
    <h3 class="Info line">Información</h3>
    <table>
      <tr>
        <td class="TablaInfo">TALLA :</td>
        <td>{{ product.size }}</td>
      </tr>
      <tr>
        <td class="TablaInfo">COLOR :</td>
        <td>{{ product.color }}</td>
      </tr>
      <tr>
        <td class="TablaInfo">CANTIDAD :</td>
        <td>1</td>
      </tr>
    </table>

    <h3 class="Estado line">Estado</h3>
    <Status />
  </body>
</template>

<script>
import Status from "./OrderStatus";
export default {
  components: {
    Status,
  },
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
.Estado {
  padding: 1rem 0;
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
