
import { defineNuxtConfig } from 'nuxt/config';


export default defineNuxtConfig ({

  modules: [
    // '@nuxtjs/color-mode',
    '@nuxt/image',
    '@pinia/nuxt',
    '@nuxtjs/i18n'
  ],
  nitro: {
    compressPublicAssets: true,
    preset: 'github-pages'
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/index.scss" as *;'
        }
      }
    },
  },
  postcss: {
    plugins: {
      autoprefixer: {},
    },
  },
  app: {
    head: {
      title: 'Flower Business',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        {
          charset: 'utf-8'
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
        {
          name: 'description',
          content: 'Launch your dream flower shop successfully. Our complete guide covers business plans, startup costs, sourcing flowers, pricing strategies, marketing, and legal steps for aspiring florists.'
        },
        {
          name: 'keywords',
          content: 'start flower business, open a flower shop, florist business plan, flower shop startup costs, how to become a florist, floral design business, sourcing flowers, florist marketing ideas, flower shop license, profitable flower business'
        }
      ],
    },
     baseURL: '/flower-shop/',
  },
  image: {
    provider: 'ipx',
    dir: 'public',
    format: ['webp', 'jpg'],
  },
  i18n: {
    strategy: 'no_prefix',
    defaultLocale: "ru",
    langDir      : "locales",

    locales: [
      { code: "ru", name: "Ru", file: "ru.json" },
      { code: "en", name: "En", file: "en.json" },
    ],
  },
})