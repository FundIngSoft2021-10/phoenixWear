<template>
  <section>
    <v-row justify="center">
      <v-col cols="4">
        <v-autocomplete
          v-model="model"
          :items="items"
          :loading="isLoading"
          :search-input.sync="search"
          hide-no-data
          hide-selected
          item-text="name"
          item-value="API"
          label="Buscador de producto"
          placeholder="Buscar producto"
          prepend-icon="mdi-magnify"
          color="phoenix"
        ></v-autocomplete>
      </v-col>
      <div v-if="model != ''" class="icons">
        <i @click="model = ''" class="fas fa-times"></i>
        <router-link :to="`/products/${model.replace(/\s/g, '')}`"
          ><i class="far fa-paper-plane"></i
        ></router-link>
      </div>
    </v-row>
  </section>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    products: [],
    isLoading: false,
    model: "",
    search: null,
  }),

  computed: {
    items() {
      return this.products.map((product) => {
        const name = product.information.name;
        return Object.assign({}, product, { name });
      });
    },
  },
  watch: {
    search() {
      if (this.products.length > 0) return;

      // Items have already been requested
      if (this.isLoading) return;

      this.isLoading = true;
      axios
        .get("https://n4mbc432.herokuapp.com/products")
        .then((response) => {
          this.products = response.data.product;
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => (this.isLoading = false));
    },
  },
};
</script>

<style lang="scss" scoped>
.icons {
  display: flex;
  align-items: center;
  i {
    padding: 0.5rem;
    color: $phoenix-color;
  }
}
</style>
