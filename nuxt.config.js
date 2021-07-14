import { sortRoutes } from '@nuxt/utils'
const storyblokConfig = {
  accessToken: process.env.SB_CLIENT_ACCESS_TOKEN
}

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'my-cool-website-project',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',

    '@nuxtjs/composition-api/module',
    '@nujek/ui',
    [
      '@nujek/storyblok', { storyblokConfig, debug: true }
    ]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  router: {
    extendRoutes (routes, resolve) {
      const routesToAdd = [
        {
          name: 'index',
          path: '/',
          component: resolve(__dirname, 'pages/_slug/index.vue'),
          chunkName: 'pages/index'
        }
      ]

      const existingRoutesToRemove = routesToAdd.map(route => route.name)

      const generateRoutes = routes.filter((route) => {
        return !existingRoutesToRemove.includes(route.name)
      })

      routesToAdd.forEach(({ name, path, component, chunkName }) => {
        generateRoutes.push({
          name,
          path,
          component,
          chunkName
        })
      })

      routes.splice(0, routes.length, ...generateRoutes) // set new array

      sortRoutes(routes)
    }
  }
}
