import { useState, useEffect, useCallback } from 'react';
import { LanguageContext } from './languageContextInstance';
import { translations } from '../i18n/translations';

const STORAGE_KEY = 'fertilizers_lang';

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'fr' || saved === 'en') {
        return saved;
      }
    } catch {
      // Ignore localStorage access errors
    }
    return 'en';
  });

  const setLanguage = useCallback((lang) => {
    const validLang = lang === 'fr' ? 'fr' : 'en';
    setLanguageState(validLang);
    try {
      localStorage.setItem(STORAGE_KEY, validLang);
    } catch {
      // Ignore localStorage errors
    }
    if (typeof document !== 'undefined') {
      document.documentElement.lang = validLang;
    }
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  }, [language, setLanguage]);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
    }
  }, [language]);

  const t = useCallback(
    (keyPath, fallback = '') => {
      if (!keyPath) return fallback;
      const keys = keyPath.split('.');
      let current = translations[language];

      for (const k of keys) {
        if (current && Object.prototype.hasOwnProperty.call(current, k)) {
          current = current[k];
        } else {
          // Fallback to English if missing in current language
          let enFallback = translations.en;
          for (const ek of keys) {
            if (enFallback && Object.prototype.hasOwnProperty.call(enFallback, ek)) {
              enFallback = enFallback[ek];
            } else {
              enFallback = undefined;
              break;
            }
          }
          return enFallback !== undefined ? enFallback : fallback;
        }
      }
      return current !== undefined ? current : fallback;
    },
    [language]
  );

  const value = {
    language,
    setLanguage,
    toggleLanguage,
    t,
    translations: translations[language],
    productsData: translations[language].productsData,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
