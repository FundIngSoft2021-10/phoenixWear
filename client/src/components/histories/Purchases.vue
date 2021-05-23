<template>
  <v-main>
    <div v-if="!isLoaded" class="loader">
      <v-progress-circular
        :size="100"
        :width="7"
        color="phoenix"
        indeterminate
      ></v-progress-circular>
    </div>
    <div v-else>
      <h2 class="tableTitle">Mis Compras</h2>
      <table class="productTable">
        <thead>
          <tr>
            <th>Nombre Producto</th>
            <th>Precio</th>
            <th>Talla</th>
            <th>Color</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, i) in products" :key="i">
            <td>{{ product.information.name }}</td>
            <td>{{ formatPrice(product.information.price) }}</td>
            <td class="productSize">{{ product.garment.size }}</td>
            <td>{{ product.information.color }}</td>
            <td>
              <router-link
                class="product_link"
                :to="`mis-productos/estado/${product._id}`"
                >{{ product.information.status }}</router-link
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </v-main>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      products: null,
      isLoaded: false,
    };
  },
    methods: {
    formatPrice(x) {
      x = Math.round((x + Number.EPSILON) * 100) / 100;
      const parts = x.toString().split(".");
      parts[0] = parts[0].replace(/(\d+)(?=\d{3})/g, "$ $1,");
      return parts.join(".");
    },
  },
  async mounted() {
    const token = await this.$auth.getTokenSilently();
    // Use Axios to make a call to the API
    const { data } = await axios.get(
      `https://n4mbc432.herokuapp.com/users/getMyPurchase/${this.$auth.user.email}`,
      {
        headers: {
          Authorization: `Bearer ${token}`, // send the access token through the 'Authorization' header
        },
      }
    );
    this.products = data;
    this.isLoaded = true;
  },
};
</script>

<style scoped lang="scss">
.tableTitle {
  text-align: center;
  padding: 10px;
  font-family: $montserratSemiBold-font;
  margin-bottom: 1rem;
}
.productTable {
  border-collapse: collapse;

  font-size: 15px;
  min-width: 400px;
  border-radius: 5px 5px 0 0;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}
.productTable thead tr {
  background-color: #ff8585;
  color: white;
  text-align: left;
  font-family: $montserratSemiBold-font;
}
.productTable th,
.productTable td {
  padding: 13px 50px;
}
.productTable tbody tr {
  border-bottom: 1px solid #dddd;
  font-family: $montserratRegular-font;
}
.productTable tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}
.product_link {
  text-decoration: none;
  color: #1b1a1a;
}

.product_link:hover {
  color: #ff8585;
}
.productSize {
  text-align: center;
}
.loader {
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
