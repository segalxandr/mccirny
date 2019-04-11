<template>
  <aside class="border-right pt-16" id="sidebar-wrapper">
    <div class="sidebar-heading">{{ version }}</div>
    <div class="list-group list-group-flush bg-danger">
      <slot></slot>
    </div>
  </aside>
</template>

<script>
/* eslint-disable no-unused-vars */
// import { shuffle } from "lodash";
// import Vue from "vue";
// import { Component, Prop } from "vue-property-decorator";
// @Component({})
export default {
  props: ["version"],
  data() {
    return {
      expanded: true
    };
  }
  // @Prop({ version: "0.1.1" })
  // version;
  // functional: true,
  // render: (h, { children, props }) => (
  //   <article id="sidebar-wrapper" class="flex-grow p-4 bg-default">
  //     {shuffle(children.filter(node => node.tag))}
  //   </article>
  // )
};
</script>

<style>
#sidebar-wrapper {
  min-height: 100vh;
  margin-left: -15rem;
  -webkit-transition: margin 0.25s ease-out;
  -moz-transition: margin 0.25s ease-out;
  -o-transition: margin 0.25s ease-out;
  transition: margin 0.25s ease-out;
}

#sidebar-wrapper .sidebar-heading {
  padding: 0.875rem 1.25rem;
  font-size: 1.2rem;
}

#sidebar-wrapper .list-group {
  width: 15rem;
}

#page-content-wrapper {
  min-width: 100vw;
}

#wrapper.toggled #sidebar-wrapper {
  margin-left: 0;
}

@media (min-width: 768px) {
  #sidebar-wrapper {
    margin-left: 0;
  }

  #page-content-wrapper {
    min-width: 0;
    width: 100%;
  }

  #wrapper.toggled #sidebar-wrapper {
    margin-left: -15rem;
  }
}
</style>
