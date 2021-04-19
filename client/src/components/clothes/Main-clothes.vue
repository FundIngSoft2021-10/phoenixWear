<template>
  <v-main class="product-section">
    <v-row class="fila">
      <v-col
        cols="3"
        v-for="(product, index) in products"
        :key="(product, index)"
        ><router-link class="link" :to="`../producto/${product._id}`">
          <v-card class="mx-auto" max-width="350">
            <v-img
              :src="product.information.photo[0]"
              :lazy-src="product.information.photo[0]"
              height="400px"
              width="750px"
            ></v-img>
            <v-card-title class="nombre">
              {{ product.information.name }}
            </v-card-title>
            <v-card-subtitle class="sub">
              {{ `Precio: ${formatPrice(product.information.price)}` }}
            </v-card-subtitle>
            <v-card-text class="texto">
              {{ `Talla: ${product.garment.size}` }}<br />
              {{ `Descripcion: ${product.information.short_description}`
              }}<br />
            </v-card-text>
            <router-link class="link" to="/carrito"
              ><v-btn class="btn" color="phoenix" dark
                >Agregar al carrito</v-btn
              >
            </router-link>
            <v-card-actions> </v-card-actions>
            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>

                <v-card-text>
                  {{ product.information.description }}
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </router-link>
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
  text-align: center;
}
.nombre {
  height: 100px;
  font-family: $montserratBold-font;
  text-align: center;
}
a.link {
  text-decoration: none;
  color: #2c363e;
}
.sub {
  text-align: left;
  font-family: $montserratSemiBold-font;
}
.texto {
  text-align: left;
  height: 80px;
}
.btn {
  font-family: $montserratSemiBold-font;
}
</style>
