import { createApp } from "vue";
import "../tailwind.css";
import "../index.css";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import home from "./views/home.vue";
import login from "./views/login.vue";
import index from "./views/index.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: home },
    { path: "/login", name: "login", component: login },
    { path: "/index", name: "index", component: index },
  ],
});

createApp(App).use(router).mount("#app");
