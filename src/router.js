import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
const About = () => import("./pages/AboutPage.vue");
const Service = () => import("./pages/ServicePage.vue");

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomePage },
    { path: "/about", component: About },
    { path: "/service", component: Service },
  ],
});

export default router;
