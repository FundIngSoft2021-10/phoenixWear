<template>
  <v-main class="Favorites">
    <Header />
    <SearchBar v-if="is_searchBar_open" />
    <Favorites class="width" :products="products"/>
    <Footer />
  </v-main>
</template>

<script>
import Header from "../components/general/Header";
import Footer from "../components/general/Footer";
import SearchBar from "@/components/general/SearchBar";
import Favorites from '../components/favorites/Favorites.vue';

export default {
  components: {
    Header,
    Footer,
    SearchBar,
    Favorites,
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
            img:
              "https://ae01.alicdn.com/kf/H82d67bba1dc840478584b063e86ac31fw.jpg_q50.jpg",
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
            img:
              "https://modaconlocura.com/613-large_default/pantalon-mujer-drill-azul-rey.jpg",
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
            img:
              "https://d2r9epyceweg5n.cloudfront.net/stores/001/306/306/products/collar-josefina-degradado-verde-081-500fc1e901c42eb9e815981573277315-640-0.jpg",
            description:
              "Camisa azul usada pocas veces por joven modelo, Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          },
          tags: ["Azul", "Joven", "Estilo"],
        },
        {
          _id: "60653f6532c62508a4d99657",
          information: {
            name: "vestido rosado",
            price: 157895,
            short_description: "Camisa azul usada pocas veces por joven modelo",
            img:
              "https://i.pinimg.com/originals/9c/cd/b4/9ccdb40f746789ee0b6b446b137a1b57.jpg",
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

<style></style>