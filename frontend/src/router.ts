import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import ClientLogin from "./views/ClientLogin.vue";
import UserHome from "./views/UserHome.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/client-login",
      name: "client-login",
      component: ClientLogin
    },
    {
      path: "/user-home",
      name: "user-home",
      component: UserHome
    }
  ]
});
