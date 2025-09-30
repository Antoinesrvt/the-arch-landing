/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DItPYgB8.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BFxYRTj8.mjs';
/* empty css                               */
export { renderers } from '../renderers.mjs';

const $$500 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Erreur serveur - 500", "description": "Une erreur est survenue sur le serveur.", "lang": "fr", "data-astro-cid-5v2qf5k4": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen flex items-center justify-center px-6 relative overflow-hidden" data-astro-cid-5v2qf5k4> <!-- Animated background --> <div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-red-900/20 to-slate-900" aria-hidden="true" data-astro-cid-5v2qf5k4></div> <div class="absolute inset-0 opacity-20" style="background-image: radial-gradient(circle at 2px 2px, rgba(239, 68, 68, 0.15) 1px, transparent 0); background-size: 40px 40px;" aria-hidden="true" data-astro-cid-5v2qf5k4></div> <div class="relative z-10 text-center max-w-2xl" data-astro-cid-5v2qf5k4> <!-- 500 Number with gradient --> <h1 class="text-9xl md:text-[200px] font-extrabold mb-6" data-astro-cid-5v2qf5k4> <span class="bg-gradient-to-r from-red-400 via-orange-500 to-red-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]" data-astro-cid-5v2qf5k4>
500
</span> </h1> <!-- Subtitle --> <h2 class="text-3xl md:text-4xl font-bold text-white mb-4" data-astro-cid-5v2qf5k4>
Erreur serveur
</h2> <!-- Description --> <p class="text-xl text-gray-300 mb-10" data-astro-cid-5v2qf5k4>
Nos serveurs rencontrent une petite difficulté technique. Nous travaillons déjà à résoudre le problème !
</p> <!-- Actions --> <div class="flex flex-col sm:flex-row gap-4 justify-center" data-astro-cid-5v2qf5k4> <button onclick="location.reload()" class="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-900 bg-white rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/50" data-astro-cid-5v2qf5k4> <span class="relative z-10 flex items-center gap-2" data-astro-cid-5v2qf5k4> <svg class="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-5v2qf5k4> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" data-astro-cid-5v2qf5k4></path> </svg>
Réessayer
</span> <div class="absolute inset-0 rounded-xl bg-gradient-to-r from-red-600 via-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" aria-hidden="true" data-astro-cid-5v2qf5k4></div> </button> <a href="/" class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white rounded-xl border-2 border-white/20 backdrop-blur-sm hover:border-red-400/50 hover:bg-white/5 transition-all" data-astro-cid-5v2qf5k4>
Retour à l'accueil
</a> </div> <!-- Support info --> <div class="mt-12 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm" data-astro-cid-5v2qf5k4> <p class="text-sm text-gray-400 mb-4" data-astro-cid-5v2qf5k4>Le problème persiste ?</p> <a href="mailto:contact@thearch.com" class="text-red-400 hover:text-red-300 transition-colors text-sm font-semibold flex items-center justify-center gap-2" data-astro-cid-5v2qf5k4> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-5v2qf5k4> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" data-astro-cid-5v2qf5k4></path> </svg>
Contactez-nous à contact@thearch.com
</a> </div> </div> </main> ` })} `;
}, "/Users/antoine/Documents/Code/the-arch-astro/src/pages/500.astro", void 0);

const $$file = "/Users/antoine/Documents/Code/the-arch-astro/src/pages/500.astro";
const $$url = "/500";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$500,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
