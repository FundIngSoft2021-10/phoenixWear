<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-container>
      <v-row justify="center">
        <v-col cols="6"
          ><v-text-field
            v-model="product_info.productName"
            :counter="50"
            label="Nombre del producto"
            required
            :rules="product_name_rule"
          />
          <v-text-field
            v-model="product_info.price"
            label="Precio"
            :rules="price_rule"
            required
          />
          <v-textarea
            outlined
            no-resize
            rows="6"
            v-model="product_info.description"
            :counter="500"
            label="Description"
            :rules="description_rule"
            required
          />
          <v-btn @click="isClose = !isClose" large rounded dark color="phoenix"
            >Escoger color
          </v-btn>
          <v-expand-transition
            ><v-color-picker
              v-show="isClose"
              v-model="product_info.color"
              label="Color"
              required
            />
          </v-expand-transition>
          <v-file-input
            v-for="n in 4"
            :key="n"
            v-model="product_info.img[n]"
            accept="image/png"
            prepend-icon="mdi-camera"
            :label="`Subir foto ${n} .png`"
          />
          <v-select
            :items="items"
            :menu-props="{ top: true, offsetY: true }"
            label="Tipo de producto"
            v-model="selectedItem"
            :placeholder="selectedItem"
          />
          <v-select
            :items="items_size"
            v-if="selectedItem == 'Ropa'"
            v-model="product_info.talla"
            label="Talla"
            required
          />
          <v-switch
            v-model="product_info.premium"
            color="phoenix"
            :label="`Premium : ${product_info.premium.toString()}`"
          />
          <v-btn
            :disabled="!valid"
            methos="POST"
            @click="submit"
            large
            rounded
            dark
            color="phoenix"
            >Crear producto!</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  props: {
    product_info: Object,
    isNewProduct: Boolean,
  },
  data() {
    return {
      valid: true,
      isClose: false,
      items_size: ["XS", "S", "M", "L", "XL"],
      items: ["Ropa", "Accesorio"],
      selectedItem: "Accesorio",
      product_name_rule: [
        (value) => !!value || "El campo es obligatorio",
        (value) =>
          value.length < 50 ||
          "El nombre del producto debe ser menor a 50 caracteres",
      ],
      description_rule: [
        (value) => !!value || "El campo es obligatorio",
        (value) =>
          value.length < 500 ||
          "El nombre del producto debe ser menor a 500 caracteres",
      ],
      price_rule: [
        (value) => !!value || "El campo es obligatorio",
        (value) => /^\d+/.test(value) || "Solo se pueden ingresar numeros",
        (value) => value >= 0 || "El precio no puede ser negativo",
      ],
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        if (this.isNewProduct) {
          this.postMethod();
        } else {
          this.updateMethod();
        }
      }
    },
    postMethod() {
      console.log("Post");
    },
    updateMethod() {
      console.log("Update");
    },
  },
};
</script>

<style></style>
