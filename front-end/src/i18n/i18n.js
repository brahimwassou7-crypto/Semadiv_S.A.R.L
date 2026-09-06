import { createI18n } from "vue-i18n";
import Fr from "@/i18n/fr";
import En from "@/i18n/en";
import Ar from "@/i18n/ar";

const i18n = createI18n({
  locale: "Fr",
  fallbackLocale: "Fr",
  legacy: false,
  messages: {
    Fr,
    En,
    Ar,
  },
});

export default i18n;
