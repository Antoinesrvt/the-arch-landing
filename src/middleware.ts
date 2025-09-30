import { defineMiddleware } from 'astro:middleware';
import { defaultLang } from './i18n/config';

export const onRequest = defineMiddleware((context, next) => {
  const { url, redirect } = context;
  const { pathname } = url;
  
  // Handle root redirects
  if (pathname === '/') {
    return redirect(`/${defaultLang}/`);
  }
  
  // Handle /live redirects
  if (pathname === '/live') {
    return redirect(`/${defaultLang}/live`);
  }
  
  // Handle /live/[slug] redirects
  if (pathname.startsWith('/live/')) {
    const slug = pathname.replace('/live/', '');
    return redirect(`/${defaultLang}/live/${slug}`);
  }
  
  // Handle /privacy redirects
  if (pathname === '/privacy') {
    return redirect(`/${defaultLang}/privacy`);
  }
  
  return next();
});
