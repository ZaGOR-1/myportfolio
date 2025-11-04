import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en/translation.json';
import pl from './locales/pl/translation.json';
import uk from './locales/uk/translation.json';

const resources = {
  en: { translation: en },
  pl: { translation: pl },
  uk: { translation: uk },
};

const fallbackLng = 'en';
const defaultLng = () => {
  if (typeof window === 'undefined') {
    return 'uk';
  }
  const stored = window.localStorage.getItem('language');
  if (stored && Object.prototype.hasOwnProperty.call(resources, stored)) {
    return stored;
  }
  const browser = window.navigator.language.slice(0, 2);
  return Object.prototype.hasOwnProperty.call(resources, browser) ? browser : fallbackLng;
};

i18n.use(initReactI18next).init({
  resources,
  lng: defaultLng(),
  fallbackLng,
  supportedLngs: ['en', 'pl', 'uk'],
  interpolation: {
    escapeValue: false,
  },
  returnObjects: true,
});

i18n.on('languageChanged', (lng) => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem('language', lng);
    window.document.documentElement.setAttribute('lang', lng);
  }
});

export default i18n;
