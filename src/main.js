import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

//plugin
import router from "./router";
import VueSplide from '@splidejs/vue-splide';

//css
import "./assets/css/base.css";
import "./assets/css/typografi.css";

createApp(App).
use(router).
use(VueSplide).
use(createPinia()).
mount("#app");
