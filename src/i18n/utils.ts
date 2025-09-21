// Utilitaires i18n pour Astro
import { ui, defaultLang, type Lang } from './config';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function getStaticPaths() {
  return Object.keys(ui).map((lang) => ({
    params: { lang },
    props: { lang },
  }));
}
