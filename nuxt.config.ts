import vuetify, { transformAssetUrls } from "vite-plugin-vuetify"
export default defineNuxtConfig({
  //...
  build: {
    transpile: ["vuetify"],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    //...
    "@pinia/nuxt",
  ],
  ssr: false,

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})
