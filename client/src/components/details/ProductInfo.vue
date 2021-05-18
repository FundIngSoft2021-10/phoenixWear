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
        <td>
          {{ product.information.color }}
          <i
            :style="`color : ${product.information.color}`"
            class="fas fa-circle"
          ></i>
        </td>
      </tr>
      <tr>
        <td class="TablaInfo">CANTIDAD :</td>
        <td>1</td>
      </tr>
    </table>

    <h3 class="Description line">Descripción</h3>
    <p class="Des-info">
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has
      roots in a piece of classical Latin literature from 45 BC, making it over
      2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
      College in Virginia, looked up one of the more obscure Latin words,
      consectetur, from a Lorem Ipsum passage, and going through the cites of
      the word in classical literature, discovered the undoubtable source. Lorem
      Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et
      Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This
      book is a treatise on the theory of ethics, very popular during the
      Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet..,
      comes from a line in section 1.10.32.
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
.circle {
  border-radius: 10px;
}
</style>
