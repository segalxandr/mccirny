import Vue from 'vue';
<template>
  <div>
    <slot :header="header" :footer="footer" :sidenav="sidenav"></slot>
  </div>
</template>
<script>
import Vue from "vue";
import Component from "vue-class-component";
@Component({})
export default class Settings extends Vue {
  header = { title: "Carrier Certification", subtitle: "Sub Title" };
  footer = "Settings Footer";
  sidenav = "Side Nav";
}
</script>
