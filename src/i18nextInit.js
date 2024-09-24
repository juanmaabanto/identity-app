import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const fallbackLng = ['es'];
const supportedLngs = ['en', 'es', 'pt', 'qu'];

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng,
        supportedLngs,
        detection: {
            lookupCookie: false,
            lookupHeader: false,
            lookupLocalStorage: false,
            lookupQuerystring: 'lng'
        },
        debug: false,
        interpolation: {
            escapeValue: false
        },
        backend: {
            loadPath: 'assets/locales/{{lng}}/{{ns}}.json'
        },

    });

export default i18n;