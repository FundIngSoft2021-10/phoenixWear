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
    <Status :status="product.status" />
    <v-btn
      v-if="show"
      @click="updateStatus"
      class="btn"
      color="phoenix"
      dark
      rounded
      >Siguiente paso</v-btn
    >
  </body>
</template>

<script>
import Status from "./OrderStatus";
import axios from "axios";
export default {
  components: {
    Status,
  },
  props: {
    product: Object,
    isBuyer: Boolean,
  },
  data() {
    return {
      show: false,
    };
  },
  mounted() {
    if (this.product.status == "Disponible" && this.isBuyer) {
      this.show = true;
    } else if (
      (this.product.status == "Enviado" ||
        this.product.status == "Entregado") &&
      !this.isBuyer
    ) {
      this.show = true;
    }
  },
  methods: {
    formatPrice(x) {
      x = Math.round((x + Number.EPSILON) * 100) / 100;
      const parts = x.toString().split(".");
      parts[0] = parts[0].replace(/(\d+)(?=\d{3})/g, "$ $1,");
      return parts.join(".");
    },
    async updateStatus() {
      await axios.put(
        `https://n4mbc432.herokuapp.com/products/updateStatus/${this.$route.params.id}`
      );
      window.location.reload();
    },
  },
};
</script>

<style scoped lang="scss">
.btn {
  margin: 2rem 0;
}
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
