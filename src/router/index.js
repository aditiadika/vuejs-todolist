import Vue from "vue";
import Router from "vue-router";
import HellloWorld from "../components/HelloWorld.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HellloWorld
    }
  ]
});
