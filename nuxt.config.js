const pkg = require('./package');
const axios = require('axios');

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Things I forget',//pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:400,700' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#FFFFFF' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    // '@nuxtjs/axios'
    ['storyblok-nuxt', {
      accessToken: process.env.NODE_ENV == 'production' ? '6AphBoDZQyaHfCJEbUVVEQtt' : 'GuL1VR92D4FRGA5A4AF4pAtt',
      cacheProvider: 'memory'
    }]
  ],

  generate: {
     routes: function () {
        return axios
          .get('https://api.storyblok.com/v1/cdn/stories?version=published&token=6AphBoDZQyaHfCJEbUVVEQtt&starts_with=blog&cv=' + Math.floor(Date.now() / 1e3))
          .then(res => {
            console.log(res.data.stories);
            const blogPosts = res.data.stories.map(bp => bp.full_slug);
            return [
              '/',
              '/blog',
              '/about',
              ...blogPosts
            ]
        });
     }
  },

  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
