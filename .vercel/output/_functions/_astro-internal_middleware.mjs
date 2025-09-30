import { d as defineMiddleware, s as sequence } from './chunks/index_DpsKJRqY.mjs';
import { d as defaultLang } from './chunks/config_8lXGn2fN.mjs';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_xbiF7iSF.mjs';
import 'kleur/colors';
import './chunks/astro/server_DItPYgB8.mjs';
import 'clsx';
import 'cookie';

const onRequest$1 = defineMiddleware((context, next) => {
  const { url, redirect } = context;
  const { pathname } = url;
  if (pathname === "/") {
    return redirect(`/${defaultLang}/`);
  }
  if (pathname === "/live") {
    return redirect(`/${defaultLang}/live`);
  }
  if (pathname.startsWith("/live/")) {
    const slug = pathname.replace("/live/", "");
    return redirect(`/${defaultLang}/live/${slug}`);
  }
  if (pathname === "/privacy") {
    return redirect(`/${defaultLang}/privacy`);
  }
  return next();
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
