<template>
  <v-main>
    <Header />
    <SearchBar v-if="is_searchBar_open" />
    <MiCarrito class="width" :products="products" />
    <Footer />
  </v-main>
</template>

<script>
import Header from "../components/general/Header.vue";
import Footer from "../components/general/Footer";
import SearchBar from "@/components/general/SearchBar";
import MiCarrito from "@/components/miCarrito/MiCarrito";

export default {
  components: {
    Header,
    Footer,
    SearchBar,
    MiCarrito,
  },
  data() {
    return {
      products: [
        {
          _id: "60653dd3cee1f513b44da5db",
          information: {
            name: "Camisa azul",
            price: 157895,
            short_description: "Camisa azul usada pocas veces por joven modelo",
            description:
              "Camisa azul usada pocas veces por joven modelo, Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          },
          tags: ["Azul", "Joven", "Estilo"],
        },
        {
          _id: "60653ed532c62508a4d9964f",
          information: {
            name: "Pantalon azul",
            price: 157895,
            short_description:
              "Pantalon azul usada pocas veces por joven modelo",
            description:
              "Camisa azul usada pocas veces por joven modelo, Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          },
          tags: ["Azul", "Joven", "Pantalon"],
        },
        {
          _id: "60653f5332c62508a4d99653",
          information: {
            name: "Collar Verde",
            price: 15855,
            short_description:
              "Collar verde usado pocas veces por joven modelo",
            description:
              "Camisa azul usada pocas veces por joven modelo, Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          },
          tags: ["Azul", "Joven", "Estilo"],
        },
        {
          _id: "60653f6532c62508a4d99657",
          information: {
            name: "Camisa azul",
            price: 157895,
            short_description: "Camisa azul usada pocas veces por joven modelo",
            description:
              "Camisa azul usada pocas veces por joven modelo, Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          },
          tags: ["Azul", "Joven", "Estilo"],
        },
      ],
    };
  },
  computed: {
    is_searchBar_open: function() {
      return this.$store.getters.get_is_searchBar_open;
    },
  },
};
</script>

<style lang="scss" scoped>
.width {
  width: 70vw;
  margin: auto;
  margin-top: 4.5rem;
}
</style>
