<template>
  <div class="m-0 p-0 d-flex flex-column">
    <!-- <div class="h3 p-4 text-center">{{ title }}</div> -->
    <div class="mt-16 mx-auto">
      <img :src="image" />
    </div>
  </div>
</template>
<script>
const images = require.context("../../assets", false, /\.png$/);
export default {
  data() {
    return {
      title: "LANDING PAGE",
      image: images("./LandingView.png")
    };
  }
};
</script>
