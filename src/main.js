//modules
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//plugins
import "bootstrap/dist/css/bootstrap.css";

//components

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
