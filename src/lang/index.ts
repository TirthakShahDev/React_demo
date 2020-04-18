import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enLocale from './en'
import esLocale from './es'
import { store } from "../store";

const state = store.getState();

const resources = {
  en: {
    translation: {
      ...enLocale
    }
  },
  es: {
    translation: {
      ...esLocale
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: state.UserData?.language ? state.UserData.language : 'en',
    debug: false,
    resources,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
      formatSeparator : '.'
    }
  });


export default i18n;
