import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import TheButton from "./components/UI/TheButton.vue";
import TheFooter from "./components/UI/TheFooter.vue";
import VueLazyLoad from "vue3-lazyload";

const app = createApp(App);
app.use(router);
app.use(VueLazyLoad, {
  loading: "https://miro.medium.com/max/1080/0*DqHGYPBA-ANwsma2.gif",
  error: "https://static.thenounproject.com/png/504708-200.png",
});
app.component("the-button", TheButton);
app.component("the-footer", TheFooter);
app.mount("#app");
