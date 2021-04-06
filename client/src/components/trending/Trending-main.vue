<template>
  <v-main class="product-section">
    <v-row justify="center">
      <v-col
          cols="4"
          v-for="(product, index) in products"
          :key="(product, index)"
      >
        <v-card class="mx-auto" max-width="344">
          <v-img
              src="https://santamariastore.com/wp-content/uploads/2020/06/63A1E028-AEE5-41B0-9B8F-41ED0A1A2B47-570x760.jpg"
              height="300px"
              width="760px"
          ></v-img>

          <v-card-title>
            {{ product.information.name }}
          </v-card-title>

          <v-card-subtitle>
            {{ formatPrice(product.information.price) }}
          </v-card-subtitle>
          <v-card-text>
            {{ product.information.short_description }}<br />
            {{ `Tags : ${product.tags.toString()}` }}
          </v-card-text>

          <v-card-actions>
            <v-btn color="phoenix" text>
              Explorar
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn icon @click="show = !show">
              <v-icon>{{
                  show ? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text>
                {{ product.information.description }}
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>

    <!-- <img src="../assets/imgs/logo.png" alt="Phoenix-logo" height="200" width="200" /> -->
  </v-main>
</template>

<script>
export default {
  props: {
    products: Array,
  },
  data() {
    return {
      show: false,
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
};
</script>

<style lang="scss" scoped>
.product-section {
  margin-top: 5rem;
}
</style>