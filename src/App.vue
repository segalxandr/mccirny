<template>
  <Settings>
    <Layout slot-scope="{ header, footer }">
      <AppHeader slot="header" :header="header.title"></AppHeader>
      <Sidenav slot="sidenav" v-model="sidenavObjects" :version="version">
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
              :key="inx"
              class="list-group-item list-group-item-action pl-4 py-1 small border-0"
              >{{ itmChild.title }}</a
            >
          </div>
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
  @Prop({ default: "0.1.1" })
  version;
  toggleNode(e) {
    console.log("TOGGLING", e.title, e.expanded);
    e.expanded = !e.expanded;
  }

  sidenavitems = ["mindy", "john", "kim", "joel", "ben"];
  sidenavObjects = [
    {
      title: "Assignment and Carrier Data",
      expanded: false,
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
      title: "Sampled Drivers and Commercial Motor Vehicles",
      expanded: true,
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
      title: "Violation Data",
      expanded: true,
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
      title: "Commercial Motor Vehicle Statistics",
      expanded: true,
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
    }
  ];
}
</script>
