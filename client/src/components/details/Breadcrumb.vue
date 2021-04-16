<template>
  <body>
    <ul class="breadcrumbs">
      <li class="breadcrumbs_item">
        <router-link class="breadcrumbs_link" to="/">INICIO</router-link>
      </li>
      <li class="breadcrumbs_item">
        <router-link class="breadcrumbs_link" to="/ropa">ROPA</router-link>
      </li>
      <li class="breadcrumbs_item">
        <a href="" class="breadcrumbs_link breadcrumbs_link--active">{{
          productName
        }}</a>
      </li>
    </ul>
  </body>
</template>

<script>
export default {
  props: {
    productName: String,
  },
};
</script>

<style scoped lang="scss">
.breadcrumbs {
  margin: 0 11.6% 0 11.6%;
  padding: 0;
  font-size: 12px;
  font-family: $montserratSemiBold-font;
}
.breadcrumbs_item {
  display: inline-block;
  padding: 10px;
}

.breadcrumbs_item:not(:last-of-type)::after {
  content: "\203a";
  font-size: 22px;
  padding: 10px;
  margin: 0 5px;
  color: #ff8585;
}

.breadcrumbs_link {
  text-decoration: none;
  color: #1b1a1a;
}

.breadcrumbs_link:hover {
  color: #ff8585;
}

.breadcrumbs_link--active {
  color: #ff8585;
}
</style>
