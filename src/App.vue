<template>
  <Settings>
    <Layout slot-scope="{ header, footer }">
      <AppHeader slot="header" :header="header.title"></AppHeader>
      <Sidenav
        slot="sidenav"
        :version="ver"
        @itemSelected="handleItemSelected"
        @contentTitleSet="handleContentTitleSet"
        @navigationChanged="handleNavigationChanged"
        @slecteItemIdChange="handleSelectedItemIdChanged"
      ></Sidenav>
      <Content slot="content">
        <router-view></router-view>
      </Content>
      <AppFooter slot="footer" :footer="footer"></AppFooter>
    </Layout>
  </Settings>
</template>

<script>
import { version } from "../package.json";
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import Settings from "./Settings";
import Layout from "./Layout";
import { sidenavObjects } from "@/data/dataObjects.js";
import { Header, Footer, Content, Sidenav } from "./components";
@Component({
  components: {
    Settings,
    Layout,
    AppHeader: Header,
    AppFooter: Footer,
    Sidenav,
    Content
  }
})
export default class App extends Vue {
  @Prop({ default: version })
  ver;
  contentTitle = "Content Title";
  selectedItemId = "0";
  contentNavigation = {
    title: "Main Title",
    subTitle: "Main Sub Title"
  };
  toggleNode(e) {
    console.log("TOGGLING", e.title, e.expanded);
    e.expanded = !e.expanded;
  }
  handleItemSelected(i) {
    console.log("Selected: ", i);
  }
  handleContentTitleSet(t) {
    this.contentTitle = t;
  }
  handleNavigationChanged(n) {
    this.contentNavigation = n;
    // console.log(
    //   "TCL: App -> handleNavigationChanged -> this.contentNavigation ",
    //   JSON.stringify(this.contentNavigation)
    // );
    // console.log(
    //   "TCL: App -> handleNavigationChanged -> this.slectedItem",
    //   this.slectedItem
    // );
  }
  handleSelectedItemIdChanged(i) {
    this.selectedItemId = i;
  }

  // Computed
  get slectedItem() {
    // console.log("LOOKING UP: ", this.selectedItemId);

    let x = sidenavObjects
      .filter(p => {
        return p.itemChildren.find(s => s.id === this.selectedItemId);
      })[0]
      .itemChildren.find(item => item.id === this.selectedItemId);

    // console.log("FOUND ", x.id);
    return x;
  }
}
// export function navigateToStart() {
//   this.$router.push("/");
// }
</script>
