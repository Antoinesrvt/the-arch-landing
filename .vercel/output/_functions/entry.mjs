import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_DXk1uI3k.mjs';
import { manifest } from './manifest_CdsT8YVt.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/_actions/_---path_.astro.mjs');
const _page2 = () => import('./pages/404.astro.mjs');
const _page3 = () => import('./pages/500.astro.mjs');
const _page4 = () => import('./pages/_lang_/live/_slug_.astro.mjs');
const _page5 = () => import('./pages/_lang_/live.astro.mjs');
const _page6 = () => import('./pages/_lang_/privacy.astro.mjs');
const _page7 = () => import('./pages/_lang_.astro.mjs');
const _page8 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["node_modules/astro/dist/actions/runtime/route.js", _page1],
    ["src/pages/404.astro", _page2],
    ["src/pages/500.astro", _page3],
    ["src/pages/[lang]/live/[slug].astro", _page4],
    ["src/pages/[lang]/live.astro", _page5],
    ["src/pages/[lang]/privacy.astro", _page6],
    ["src/pages/[lang]/index.astro", _page7],
    ["src/pages/index.astro", _page8]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_astro-internal_actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "e4ca1d17-7b44-4d95-b3b7-174fa1002842",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
