import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4,
  },

  nitro: {
    compressPublicAssets: true,
    prerender: {
      failOnError: false,
      crawlLinks: true,
      routes: ['/'],
    },
  },

  css: ['@/style.css'],

  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
        },
      },
    },
  },

  features: {
    inlineStyles: true,
  },

  site: {
    url: 'https://xyzdev.vercel.app',
    name: 'XYZDev - Frontend Developer Portfolio | MFM-347',
  },
  siteConfig: {
    title: 'XYZDev - Frontend Developer Portfolio | MFM-347',
    description:
      'Discover the portfolio of Farhan Madni, a frontend developer specializing in web techs and solving to real-life problems.',
    url: 'https://xyzdev.vercel.app/',
  },
  schemaOrg: {
    identity: {
      type: 'Person',
      name: 'Farhan Madni',
      description: 'Frontend Web Developer and Open-Source Contributor',
      url: 'https://xyzdev.vercel.app/',
      sameAs: [
        'https://twitter.com/mfm347',
        'https://github.com/MFM-347',
        'https://dev.to/mfm-347',
        'https://codepen.io/MFM-347/',
        'https://xyzdev.vercel.app/',
      ],
    },
  },
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
  },

  experimental: {
    viewTransition: true,
    renderJsonPayloads: true,
  },

  modules: ['@nuxtjs/sitemap', 'nuxt-schema-org', '@nuxt/fonts'],
})
