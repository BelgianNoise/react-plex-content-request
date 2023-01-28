import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from './en/en-translation.json';
import nlTranslation from './nl/nl-translation.json';

export const resources = {
  en: { translation: enTranslation },
  nl: { translation: nlTranslation },
};

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: ['nl', 'en'],
    resources,
    // debug: true,
    detection: {
      order: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
      // caches: ['localStorage'],
      // excludeCacheFor: ['cimode'],
    },
  }, (err, t) => {
    if (err) return console.log('something went wrong loading translations', err);
    console.log(t('translation-loaded'));
  });

export const changeLanguage = (lang: string): void => {
  i18next.changeLanguage(lang, (err, t) => {
    if (err) return console.log('something went wrong loading translations', err);
    console.log(t('translation-loaded'));
  });
}

export default i18next;