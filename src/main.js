import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import TheButton from "./components/UI/TheButton.vue";
import TheFooter from "./components/UI/TheFooter.vue";

const app = createApp(App);
app.use(router);
app.component("the-button", TheButton);
app.component("the-footer", TheFooter);
app.mount("#app");
