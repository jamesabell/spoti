import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import store from "@/store";
import "./registerServiceWorker";
import Toasted from 'vue-toasted';

import auth from "@/auth";

Vue.use(auth);

Vue.use(Toasted)

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
