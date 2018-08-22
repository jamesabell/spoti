import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";
import Callback from "@/views/Callback.vue";
import ClientLogin from "@/views/ClientLogin.vue";
import UserHome from "@/views/UserHome.vue";
import ClientCallback from "@/views/ClientCallback.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
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
    },
    {
      path: "/callback",
      name: "callback",
      component: Callback
    },
    {
      path: "/client-callback",
      name: "client-callback",
      props: route => ({ authToken: route.query.code }),
      component: ClientCallback
    }
  ]
});

// very basic "setup" of a global guard
router.beforeEach((to, from, next) => {
  if (to.name == "callback") {
    // check if "to"-route is "callback" and allow access
    next();
  } else if (router.app.$auth.isAuthenticated()) {
    // if authenticated allow access
    next();
  } else {
    // trigger auth0 login
    router.app.$auth.login();
  }
});

export default router;
