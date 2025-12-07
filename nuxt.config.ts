// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  ssr: false,
  nitro:{
    preset: 'static',    // <-- Best for GH Pages
    serveStatic: true,
  },
  devtools: { enabled: true },
  css:[
    "~/assets/styles/theme.css",
    "~/assets/styles/default.css",
    "~/assets/styles/main.css",
  ],
  app: {
    baseURL: '/nith-unofficial/',     // repo name
    buildAssetsDir: '_nuxt/',
    head: {
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com"
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: ""
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100..900;1,100..900&family=Roboto+Flex:opsz,wght@8..144,100..1000&display=swap"
        }
      ]
    }
  },
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/icon'
  ],


})