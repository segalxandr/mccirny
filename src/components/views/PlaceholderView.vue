<template>
  <div class="m-0 p-0 d-flex flex-column">
    <!-- <div class="h3 p-4 text-center">{{ title }}</div> -->
    <div class="card mt-16 mx-auto w-2/3">
      <div class="card-header">
        {{ this.$parent.$parent.$parent.contentTitle }}
      </div>
      <div class="card-body"></div>
      <div class="card-footer"></div>
    </div>
  </div>
</template>
<script>
const images = require.context("../../assets", false, /\.png$/);
export default {
  data() {
    return {
      title: "Place holder",
      image: images("./PLACEHOLDER.png")
    };
  }
};
</script>
