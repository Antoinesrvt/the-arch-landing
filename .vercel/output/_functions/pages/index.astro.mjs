/* empty css                                 */
import { b as createAstro, c as createComponent } from '../chunks/astro/server_DItPYgB8.mjs';
import 'kleur/colors';
import 'clsx';
import { d as defaultLang } from '../chunks/config_8lXGn2fN.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://thearch.fr");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return Astro2.redirect(`/${defaultLang}`);
}, "/Users/antoine/Documents/Code/the-arch-astro/src/pages/index.astro", void 0);

const $$file = "/Users/antoine/Documents/Code/the-arch-astro/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
