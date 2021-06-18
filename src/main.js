import Vue from "vue";
import App from "./App.vue";
import "@/styles/_modules.scss";
import router from './router'

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");
