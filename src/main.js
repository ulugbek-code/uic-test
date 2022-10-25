import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import TheButton from "./components/UI/TheButton.vue";
import TheFooter from "./components/UI/TheFooter.vue";
import VueLazyLoad from "vue3-lazyload";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  duration: 700,
});

const app = createApp(App);
app.use(router);
app.use(VueLazyLoad, {
  loading: "",
  error: "",
});
app.component("the-button", TheButton);
app.component("the-footer", TheFooter);
app.mount("#app");
