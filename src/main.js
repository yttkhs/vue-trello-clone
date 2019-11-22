import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import VueLocalStorage from "vue-localstorage";

Vue.config.productionTip = false;
Vue.use(VueLocalStorage);

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
