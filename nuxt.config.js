export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'eiio.dev',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { property: 'og:title', content: 'Eliott Portfolio' },
      { property: 'og:description', content: 'A French Developper' },
      { property: 'og:image', content: 'https://github.com/pfevrety/Portfolio/blob/main/data/logo-big.PNG?raw=true' },
      { property: 'og:url', content: 'https://eiio.dev/' },
      { property: 'twitter:title', content: 'Eliott Portfolio' },
      { property: 'twitter:description', content: 'A French Developper' },
      { property: 'twitter:image', content: 'https://github.com/pfevrety/Portfolio/blob/main/data/logo-big.PNG?raw=true' },
      { property: 'twitter:url', content: 'https://eiio.dev/' },

    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    link: [{ rel: 'preconnect', href: 'https://fonts.gstatic.com' }],
    link: [{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap' }]
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@animxyz/core"],

  loading: true,
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: ["~/plugins/titl.ts", "~/plugins/animxyz.ts"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  target: 'static',
  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'fr',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
