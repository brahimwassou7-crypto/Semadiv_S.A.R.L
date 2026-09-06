import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/Router";
import i18n from "./i18n/i18n.js";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

createApp(App).use(i18n).use(router).mount("#app");
