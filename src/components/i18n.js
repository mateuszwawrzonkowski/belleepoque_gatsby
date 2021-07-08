import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import index_en from "src/translations/en/index.json";
import index_pl from "src/translations/pl/index.json";
import index_fr from "src/translations/fr/index.json";

import menu_en from "src/translations/en/menu.json";
import menu_pl from "src/translations/pl/menu.json";
import menu_fr from "src/translations/fr/menu.json";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
const resources = {
  fr: {
    index: index_fr,
    menu: menu_fr,
  },
  en: {
    index: index_en,
    menu: menu_en,
  },
  pl: {
    index: index_pl,
    menu: menu_pl,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "fr", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
