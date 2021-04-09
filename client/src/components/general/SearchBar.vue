<template>
  <v-row>
    <v-col col="4">
      <v-autocomplete
        v-model="modelP"
        :items="items"
        :loading="isLoading"
        :search-input.sync="searchP"
        hide-no-data
        hide-selected
        item-text="name"
        item-value="API"
        label="Public APIs"
        placeholder="Buscar producto"
        prepend-icon="mdi-database-search"
        return-object
      ></v-autocomplete>
    </v-col>
  </v-row>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    descriptionLimit: 60,
    entries: [],
    products: [],
    isLoading: false,
    model: null,
    modelP: null,
    search: null,
    searchP: null,
  }),

  computed: {
    items() {
      return this.products.map((product) => {
        const name = product.information.name;
        console.log(Object.assign({}, product, { name }));
        return Object.assign({}, product, { name });
      });
    },
  },

  watch: {
    searchP() {
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

<style></style>
