import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  alias: {
    "@": "/<rootDir>",
  },
  css: [
    "~/assets/scss/vendor/_normalize.scss",
    "~/assets/scss/vendor/_skeleton.scss",
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          charset: false,
          additionalData: `@import "../assets/scss/main.scss";`,
        },
      },
    }, 
  }
})
