<template>
  <div class="card-carousel">
    <div class="card-img">
      <v-img
        class="mainImg"
        :lazy-src="currentImage"
        :src="currentImage"
        alt=""
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
      <div class="actions">
        <span @click="prevImage" class="prev"> &#8249; </span>
        <span @click="nextImage" class="next"> &#8250; </span>
      </div>
    </div>
    <div class="thumbnails">
      <div
        v-for="(image, index) in images"
        :key="image.id"
        :class="['thumbnail-image', activeImage == index ? 'active' : '']"
        @click="activateImage(index)"
      >
        <img :src="image.thumb" width="100" height="100" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  data() {
    return {
      activeImage: 0,
    };
  },
  computed: {
    currentImage() {
      return this.images[this.activeImage].big;
    },
  },
  methods: {
    nextImage() {
      var active = this.activeImage + 1;
      if (active >= this.images.length) {
        active = 0;
      }
      this.activateImage(active);
    },
    prevImage() {
      var active = this.activeImage - 1;
      if (active < 0) {
        active = this.images.length - 1;
      }
      this.activateImage(active);
    },
    activateImage(imageIndex) {
      this.activeImage = imageIndex;
    },
  },
  created() {
    if (
      this.startingImage &&
      this.startingImage >= 0 &&
      this.startingImage < this.images.length
    ) {
      this.activeImage = this.startingImage;
    }
  },
  props: ["startingImage", "images"],
};
</script>

<style lang="scss" scoped>
.card-carousel {
  width: 100%;
}
span {
  color: $phoenix-color;
}
.mainImg {
  height: 400px;
  width: 400px;
  @media screen and (max-width: $breakpoint-tablet) {
    height: 300px;
    width: 300px;
  }
}
.thumbnails {
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
}
.thumbnail-image {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 2px;
}
.thumbnail-image > .mainImg {
  width: 100%;
  height: auto;
  transition: all 250ms;
}
.thumbnail-image:hover > .mainImg,
.thumbnail-image.active > .mainImg {
  opacity: 0.6;
  box-shadow: 2px 2px 6px 1px rgba(0, 0, 0, 0.5);
}
.card-img {
  position: relative;
  margin-bottom: 15px;
}
.card-img > .mainImg {
  display: block;
  margin: 0 auto;
}
.actions {
  font-size: 1.5em;
  height: 40px;
  position: absolute;
  top: 50%;
  margin-top: -20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #585858;
}
.actions > span {
  cursor: pointer;
  transition: all 250ms;
  font-size: 45px;
}
.actions > span.prev {
  margin-left: 55px;
}
.actions > span.next {
  margin-right: 55px;
}
.actions > span:hover {
  color: #eee;
}
</style>
