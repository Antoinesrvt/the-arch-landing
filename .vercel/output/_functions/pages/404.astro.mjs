/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DcA3QZaD.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CpGKXbGN.mjs';
/* empty css                               */
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Page non trouv\xE9e - 404", "description": "La page que vous recherchez n'existe pas.", "lang": "fr", "data-astro-cid-zetdm5md": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen flex items-center justify-center px-6 relative overflow-hidden" data-astro-cid-zetdm5md> <!-- Animated background --> <div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900" aria-hidden="true" data-astro-cid-zetdm5md></div> <div class="absolute inset-0 opacity-20" style="background-image: radial-gradient(circle at 2px 2px, rgba(139, 92, 246, 0.15) 1px, transparent 0); background-size: 40px 40px;" aria-hidden="true" data-astro-cid-zetdm5md></div> <div class="relative z-10 text-center max-w-2xl" data-astro-cid-zetdm5md> <!-- 404 Number with gradient --> <h1 class="text-9xl md:text-[200px] font-extrabold mb-6" data-astro-cid-zetdm5md> <span class="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]" data-astro-cid-zetdm5md>
404
</span> </h1> <!-- Subtitle --> <h2 class="text-3xl md:text-4xl font-bold text-white mb-4" data-astro-cid-zetdm5md>
Page non trouvée
</h2> <!-- Description --> <p class="text-xl text-gray-300 mb-10" data-astro-cid-zetdm5md>
Oops! La page que vous recherchez semble s'être perdue dans le Web3...
</p> <!-- Actions --> <div class="flex flex-col sm:flex-row gap-4 justify-center" data-astro-cid-zetdm5md> <a href="/" class="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-900 bg-white rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50" data-astro-cid-zetdm5md> <span class="relative z-10 flex items-center gap-2" data-astro-cid-zetdm5md> <svg class="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-zetdm5md> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" data-astro-cid-zetdm5md></path> </svg>
Retour à l'accueil
</span> <div class="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" aria-hidden="true" data-astro-cid-zetdm5md></div> </a> <a href="/#contact" class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white rounded-xl border-2 border-white/20 backdrop-blur-sm hover:border-purple-400/50 hover:bg-white/5 transition-all" data-astro-cid-zetdm5md>
Nous contacter
</a> </div> <!-- Fun suggestion --> <div class="mt-12 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm" data-astro-cid-zetdm5md> <p class="text-sm text-gray-400 mb-4" data-astro-cid-zetdm5md>Pendant que vous êtes ici, découvrez :</p> <div class="flex flex-wrap justify-center gap-4" data-astro-cid-zetdm5md> <a href="/#services" class="text-purple-400 hover:text-purple-300 transition-colors text-sm font-semibold" data-astro-cid-zetdm5md>
Nos services
</a> <span class="text-gray-600" data-astro-cid-zetdm5md>•</span> <a href="/fr/live" class="text-purple-400 hover:text-purple-300 transition-colors text-sm font-semibold" data-astro-cid-zetdm5md>
Nos émissions
</a> <span class="text-gray-600" data-astro-cid-zetdm5md>•</span> <a href="/#founders" class="text-purple-400 hover:text-purple-300 transition-colors text-sm font-semibold" data-astro-cid-zetdm5md>
Notre équipe
</a> </div> </div> </div> </main> ` })} `;
}, "/Users/antoine/Documents/Code/the-arch-astro/src/pages/404.astro", void 0);

const $$file = "/Users/antoine/Documents/Code/the-arch-astro/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
