<template>
  <aside class="border-right pt-16" id="sidebar-wrapper">
    <div class="pl-3 text-grey text-xs">{{ version }}</div>
    <div class="list-group list-group-flush bg-danger">
      <div
        class="list-group-item list-group-item-action p-0 border-0"
        v-for="(item, i) in sidenavObjects"
        :key="i"
      >
        <div class="w-100 rounded-0 m-0 p-0">
          <a
            href="#"
            class="list-group-item list-group-item-action pl-2 py-1 border-0 bg-blue-lighter"
            v-b-toggle.collapse-a.collapse-b
            @click="item.expanded = !item.expanded"
            >{{ item.title }}</a
          >
        </div>
        <div v-if="item.expanded">
          <a
            href="#"
            v-for="(itmChild, inx) in item.itemChildren"
            @click="childItemClick(itmChild)"
            :key="inx"
            class="list-group-item list-group-item-action pl-4 py-1 small border-0"
            >{{ itmChild.title }}</a
          >
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
// import { shuffle } from "lodash";
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { sidenavObjects } from "../data/dataObjects.js";
@Component({})
export default class Sidenav extends Vue {
  @Prop({ default: 0 })
  version;
  selectedItemId = 0;
  expanded = false;
  sidenavObjects = sidenavObjects;
  childItemClick(itemChild) {
    this.selectedItemId = itemChild.id;
    // console.log("SLECTED ", id, this.slectedItem);
    const arrPlaceholder = ["3.3", "3.4", "3.5", "3.6", "3.7", "4.1"];
    // let navigateTarget = arrPlaceholder.find(x => x === id)
    //   ? "Placeholder"
    //   : id.replace(".", "_");
    let navigateTarget = "";
    if (arrPlaceholder.find(x => x === itemChild.id)) {
      navigateTarget = "Placeholder";
    } else {
      navigateTarget = itemChild.id.replace(".", "_");
    }
    this.$emit("contentTitleSet", itemChild.title);
    this.$router.push(`/view/${navigateTarget}`);
  }
  get slectedItem() {
    // console.log("LOOKING UP: ", this.selectedItemId);

    let x = sidenavObjects
      .filter(p => {
        return p.itemChildren.find(s => s.id === this.selectedItemId);
      })[0]
      .itemChildren.find(item => item.id === this.selectedItemId);

    // console.warn("FOUND ", x.id);
    return x;
  }
}
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
