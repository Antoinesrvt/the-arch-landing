import { u as ui, d as defaultLang } from './config_8lXGn2fN.mjs';

function useTranslations(lang) {
  return function t(key) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}
function getStaticPaths() {
  return Object.keys(ui).map((lang) => ({
    params: { lang },
    props: { lang }
  }));
}

export { getStaticPaths as g, useTranslations as u };
