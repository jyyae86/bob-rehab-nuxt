const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Bob’s Traditional Body Rehabilitation Centre',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    // Load a Node.js module directly (here it's a Sass file)
    'bulma',
    // SCSS file in the project
    '@/assets/css/main.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: [
    ['nuxt-i18n', {
      locales: [
        {
        code: 'en-US',
        name: 'EN',
        iso: 'en',
        file: 'en-US.js'
        },
        {
          code: 'zh',
          name: '中',
          iso: 'zh',
          file: 'zh.js'
        }
      ],
      defaultLocale: 'en-US',
      lazy: true,
      langDir: 'lang/'
    }]
  ],

  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    }
  }
}
