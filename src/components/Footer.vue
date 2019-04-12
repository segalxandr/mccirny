<template>
  <footer>
    <div
      slot="footer"
      class="fixed-bottom bg-black py-2 text-muted text-center border-top border-danger"
    >
      <ul
        class="d-md-inline-flex flex-1 flex-row font-weight-lighter justify-content-between list-group mx-auto px-24 small"
      >
        <li
          class="bg-transparent border-0 list-group-item"
          v-for="(item, i) in footerObjects"
          :key="i"
        >
          <a
            class="hover:no-underline hover:text-grey text-grey-dark"
            :href="item.url"
          >
            {{ item.title }}
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>
<script>
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { footerObjects } from "../data/dataObjects.js";
@Component({})
export default class Footer extends Vue {
  footerObjects = footerObjects;
}
</script>
