<template>
  <Settings>
    <Layout slot-scope="{ header, footer }">
      <AppHeader slot="header" :header="header.title"></AppHeader>
      <Sidenav
        slot="sidenav"
        :version="version"
        @itemSelected="handleItemSelected"
        @contentTitleSet="handleContentTitleSet"
        @navigationChanged="handleNavigationChanged"
      ></Sidenav>
      <Content slot="content">
        <router-view></router-view>
      </Content>
      <AppFooter slot="footer" :footer="footer"></AppFooter>
    </Layout>
  </Settings>
</template>

<script>
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import Settings from "./Settings";
import Layout from "./Layout";
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
  @Prop({ default: "0.1.1" })
  version;
  contentTitle = "Content Title";
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
    console.log(
      "TCL: App -> handleNavigationChanged -> this.contentNavigation ",
      JSON.stringify(this.contentNavigation)
    );
  }
}
</script>
