import Vue from "vue";
import Router from "vue-router";
import LandingView from "@/components/views/LandingView";
import PlaceholderView from "@/components/views/PlaceholderView";
import View1_1 from "@/components/views/View1_1";
import View1_2 from "@/components/views/View1_2";
import View1_3 from "@/components/views/View1_3";
import View2_1 from "@/components/views/View2_1";
import View2_2 from "@/components/views/View2_2";
import View3_1 from "@/components/views/View3_1";
import View3_2 from "@/components/views/View3_2";
import View3_3 from "@/components/views/View3_3";
import View3_4 from "@/components/views/View3_4";
import View3_5 from "@/components/views/View3_5";
import View3_6 from "@/components/views/View3_6";
import View3_7 from "@/components/views/View3_7";
import View4_1 from "@/components/views/View4_1";
Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/",
      name: "Landing",
      components: {
        default: LandingView
      }
    },
    {
      path: "/view/Placeholder",
      name: "Placeholder",
      components: {
        default: PlaceholderView
      }
    },
    {
      path: "/view/1_1",
      name: "view_1_1",
      components: {
        default: View1_1
      }
    },
    {
      path: "/view/1_2",
      name: "view_1_2",
      components: {
        default: View1_2
      }
    },
    {
      path: "/view/1_3",
      name: "view_1_3",
      components: {
        default: View1_3
      }
    },
    {
      path: "/view/2_1",
      name: "view_2_1",
      components: {
        default: View2_1
      }
    },
    {
      path: "/view/2_2",
      name: "view_2_2",
      components: {
        default: View2_2
      }
    },
    {
      path: "/view/3_1",
      name: "view_3_1",
      components: {
        default: View3_1
      }
    },
    {
      path: "/view/3_2",
      name: "view_3_2",
      components: {
        default: View3_2
      }
    },
    {
      path: "/view/3_3",
      name: "view_3_3",
      components: {
        default: View3_3
      }
    },
    {
      path: "/view/3_4",
      name: "view_3_4",
      components: {
        default: View3_4
      }
    },
    {
      path: "/view/3_5",
      name: "view_3_5",
      components: {
        default: View3_5
      }
    },
    {
      path: "/view/3_6",
      name: "view_3_6",
      components: {
        default: View3_6
      }
    },
    {
      path: "/view/3_7",
      name: "view_3_7",
      components: {
        default: View3_7
      }
    },
    {
      path: "/view/4_1",
      name: "view_4_1",
      components: {
        default: View4_1
      }
    }
  ]
});
