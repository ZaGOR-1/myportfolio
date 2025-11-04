import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const fallbackLng = 'en';
const supportedLngs = ['en', 'pl', 'uk'];
const languageModules = import.meta.glob('./locales/*/translation.json');

const defaultLng = () => {
  if (typeof window === 'undefined') {
    return 'uk';
  }

  const stored = window.localStorage.getItem('language');
  if (stored && supportedLngs.includes(stored)) {
    return stored;
  }

  const browser = window.navigator.language.slice(0, 2);
  return supportedLngs.includes(browser) ? browser : fallbackLng;
};

const loadLocale = async (lng) => {
  const loader = languageModules[`./locales/${lng}/translation.json`];

  if (!loader) {
    throw new Error(`Missing translations for language: ${lng}`);
  }

  const module = await loader();
  return module.default ?? module;
};

const backend = {
  type: 'backend',
  init() {},
  read(language, namespace, callback) {
    if (namespace !== 'translation') {
      callback(null, {});
      return;
    }

    loadLocale(language)
      .then((resources) => {
        callback(null, resources);
      })
      .catch((error) => {
        callback(error, null);
      });
  },
};

let initialLanguage = defaultLng();
let initialResources;

try {
  initialResources = await loadLocale(initialLanguage);
} catch (error) {
  console.warn(`[i18n] Falling back to ${fallbackLng} translations`, error);
  initialLanguage = fallbackLng;
  initialResources = await loadLocale(fallbackLng);
}

await i18n
  .use(backend)
  .use(initReactI18next)
  .init({
    fallbackLng,
    lng: initialLanguage,
    supportedLngs,
    ns: ['translation'],
    defaultNS: 'translation',
    resources: initialResources ? { [initialLanguage]: { translation: initialResources } } : undefined,
    interpolation: {
      escapeValue: false,
    },
    returnObjects: true,
    react: {
      useSuspense: false,
    },
  });

i18n.on('languageChanged', (lng) => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem('language', lng);
    window.document.documentElement.setAttribute('lang', lng);
  }
});

export default i18n;
