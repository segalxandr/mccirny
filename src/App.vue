<template>
  <Settings>
    <Layout slot-scope="{ header, footer }">
      <AppHeader slot="header" :header="header.title"></AppHeader>
      <Sidenav slot="sidenav" v-model="sidenavObjects">
        <div
          class="bg-light list-group-item list-group-item-action px-1"
          v-for="(item, i) in sidenavObjects"
          :key="i"
        >
          <a
            href="#"
            class="list-group-item list-group-item-action bg-light pl-2"
            v-b-toggle.collapse-a.collapse-b
            >{{ item.title }}</a
          >
          <a
            href="#"
            v-for="(itmChild, inx) in item.itemChildren"
            :key="inx"
            class="list-group-item list-group-item-action bg-light pl-4 small "
            >{{ itmChild.title }}</a
          >
        </div>
      </Sidenav>
      <Content slot="content" class="bg-blue-light pt-16"
        >Amazing Content</Content
      >
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
  @Prop({ version: "0.1.1" })
  message;
  sidenavitems = ["mindy", "john", "kim", "joel", "ben"];
  sidenavObjects = [
    {
      title: "Assignment and Carrier Data",
      itemChildren: [
        {
          title: "Compliance Investigation Information"
        },
        {
          title: "Assignment Purpose"
        },
        {
          title: "Motor Carrier Data"
        }
      ]
    },
    {
      title: "Sampled Drivers and Commercial Motor Vehicles"
    },
    {
      title: "Violation Data"
    },
    {
      title: "Commercial Motor Vehicle Statistics"
    }
  ];
}
</script>
