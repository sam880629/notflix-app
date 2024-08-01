import { createRouter, createWebHistory } from "vue-router";
import home from "../views/home.vue";
import login from "../views/login.vue";
import index from "../views/index.vue";

const routers =[
    { path: "/", name: "home", component: home },
    { path: "/login", name: "login", component: login },
    { path: "/index", name: "index", component: index },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routers,
});

export default router;