<template>
  <v-main>
    <Header />
    <SearchBar v-if="is_searchBar_open" />
    <section>
      <Breadcrumb :productName="'PRODUCT NAME'" />
      <div class="detail-section">
        <div class="right-section">
          <Carousel :starting-image="0" :images="images" />
        </div>
        <ProductInfo class="right-section" :product="product" />
      </div>
    </section>
    <Footer />
  </v-main>
</template>

<script>
import Header from "../components/general/Header.vue";
import Breadcrumb from "../components/details/Breadcrumb.vue";
import ProductInfo from "../components/details/ProductInfo.vue";
import Footer from "../components/general/Footer";
import SearchBar from "@/components/general/SearchBar";
import Carousel from "../components/details/Carousel";
export default {
  components: {
    Breadcrumb,
    Carousel,
    Header,
    ProductInfo,
    Footer,
    SearchBar,
  },
  data() {
    return {
      product: {
        name: "CAMISA AZUL",
        price: 50000,
        size: "M",
        color: "Azul",
        description:
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32. ",
      },
      images: [
        {
          id: "1",
          big:
            "https://www.all4o.com/image/cache/data/brand/TrueStory/TRUE-STORY-Elite-orienteering-shirt-Men-Deep-BLUE-800x800.jpg",
          thumb:
            "https://www.all4o.com/image/cache/data/brand/TrueStory/TRUE-STORY-Elite-orienteering-shirt-Men-Deep-BLUE-150x150.jpg",
        },
        {
          id: "2",
          big:
            "https://www.all4o.com/image/cache/data/brand/TrueStory/TRUE-STORY-Classic-o-shirt-MEN-BLACK-STERLING-back-800x800.jpg",
          thumb:
            "https://www.all4o.com/image/cache/data/brand/TrueStory/TRUE-STORY-Classic-o-shirt-MEN-BLACK-STERLING-back-150x150.jpg",
        },
        {
          id: "3",
          big:
            "https://www.all4o.com/image/cache/data/brand/TrueStory/TRUE%20STORY-Classic-o-shirt-WOMEN-LAVENDER-PIE-800x800.jpg",
          thumb:
            "https://www.all4o.com/image/cache/data/brand/TrueStory/TRUE%20STORY-Classic-o-shirt-WOMEN-LAVENDER-PIE-back-150x150.jpg",
        },
        {
          id: "4",
          big:
            "https://www.all4o.com/image/cache/data/brand/FRENSON/Shirts/frenson-o-division-orienteering-mesh-shirt-white-front-800x800.jpg",
          thumb:
            "https://www.all4o.com/image/cache/data/brand/FRENSON/Shirts/frenson-o-division-orienteering-mesh-shirt-white-front-150x150.jpg",
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
section {
  margin-top: 3rem;
}
.detail-section {
  width: 80vw;
  margin: auto;
  display: flex;
  flex-direction: row;
}
.left-section {
  width: 40%;
}
.right-section {
  width: 60%;
  align-self: center;
  margin: 0;
}
</style>
