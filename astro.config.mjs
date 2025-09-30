// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://thearch.fr', // Update with your actual domain
  output: 'server', // Enable SSR for Vercel deployment with actions
  adapter: vercel(),
  integrations: [
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: 'fr',
        locales: {
          fr: 'fr-FR',
          en: 'en-US',
        },
      },
      filter: (page) => !page.includes('/404') && !page.includes('/500'),
    })
  ],
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    routing: {
      prefixDefaultLocale: true
    }
  },
  build: {
    format: 'file'
  }
});