<template>
  <v-main class="product-section">
    <v-row justify="left" class="fila">
      <v-col
        cols="3"
        v-for="(product, index) in products"
        :key="(product, index)"
      >
        <v-card class="mx-auto" max-width="350">
          <v-img
            src="https://santamariastore.com/wp-content/uploads/2020/06/63A1E028-AEE5-41B0-9B8F-41ED0A1A2B47-570x760.jpg"
            height="400px"
            width="750px"
          ></v-img>

          <v-card-title class="nombre">
            <router-link class="link" to="#">{{ product.information.name }}</router-link>
          </v-card-title>

          <v-card-subtitle class="sub">
            {{ `Precio: ${formatPrice(product.information.price)}` }}
          </v-card-subtitle>
          <v-card-text class="texto">
            {{ `Talla: ${product.garment.size}` }}<br/>
            {{ product.information.short_description }}<br />
          </v-card-text>

          <button>Agregar al carrito</button>

          <v-card-actions>
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
  text-align: center;
}
.nombre{
  height: 100px;
  text-align: left;
}
a.link{
  text-decoration: none;
  color: #2C363E; 
}
.sub{
  text-align: left;
}
.texto{
  text-align: left;
  height: 60px;
}
button{
  margin-top: 20px;
  text-align: center;
  border-radius: 10px;
  padding: 6px;
  background-color: #FF8585;
  color: white,
}
router-link{
  text-decoration: none;
}
</style>