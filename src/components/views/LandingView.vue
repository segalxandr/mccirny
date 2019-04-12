<template>
  <div class="m-0 p-0 d-flex flex-column">
    <!-- <div class="h3 p-4 text-center">{{ title }}</div> -->
    <!-- <div class="mt-16 mx-auto">
      <img :src="image" />
    </div>-->
    <div class="card mt-16 mx-auto w-2/3">
      <div class="card-header">
        {{ title }}
        <!-- {{ this.$parent.$parent.$parent.contentTitle }} -->
      </div>
      <div class="card-body">
        <div class="text-4xl">Prototype Report Application</div>
        <div class="font-thin font-weight-lighter pt-3 text-2xl">
          Click here when prompted to continue to the next screen.
        </div>
        <div class="h-24"></div>
        <div class="d-flex justify-content-end mb-3 mr-3">
          <button
            @click="handleContinueClick()"
            class="btn btn-primary btn-lg px-8"
          >
            Continue
          </button>
        </div>
      </div>
      <!-- <div class="card-footer"></div> -->
    </div>
  </div>
</template>
<script>
const images = require.context("../../assets", false, /\.png$/);
export default {
  data() {
    return {
      title: "Motor Carrier Compliance Investigation Report",
      image: images("./LandingView.png")
    };
  },
  methods: {
    handleContinueClick() {
      this.$router.push(`/view/1_1`);
    }
  }
};
</script>
