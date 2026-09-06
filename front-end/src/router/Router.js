import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/pages/HomeView.vue";
import ContactView from "@/pages/Contact.vue";
import agglos from "@/pages/agglos.vue";
import poutrelle_precontaint from "@/pages/poutrelle-Precontrainte.vue";
import poutrelle_trielleçsoudé from "@/pages/Trillé-Soudé.vue";
import pavée from "@/pages/pavé.vue";
import bordure_des_rutes from "@/pages/bordure.vue";
import hourdis from "@/pages/hourdis.vue";
import HomeProduct_page from "@/pages/ProductsHome.vue";


const routes = [
  { path: "/home", component: HomeView },
  { path: "/Contact", component: ContactView },
  { path: "/agglos", component: agglos },
  { path: "/poutrelle-Precontrainte", component: poutrelle_precontaint },
  { path: "/Trillé-Soudé", component: poutrelle_trielleçsoudé },
  { path: "/pavé", component: pavée },
  { path: "/bordure", component: bordure_des_rutes },
  { path: "/hourdis", component: hourdis },
  { path: "/homeproductpage", component: HomeProduct_page },

];

const router = createRouter({
  history: createWebHistory(),
  routes,

  scrollBehavior() {
    return { top: 0, behavior: "smooth" };
  },
});

export default router;
