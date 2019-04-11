/* eslint-disable no-unused-vars */
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "tailwindcss/dist/tailwind.css";
import "./css/site.css";
import Vue from "vue";
import App from "./App";
// import router from "./router";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
new Vue({
  el: "#app",
  render: h => <App />
});
