const withOffline = require('next-offline')

const config = {
  env: {
    API_URL: process.env.NEXT_PROD
      ? 'https://anne-bak-ne-ogrendim.herokuapp.com'
      : 'http://localhost:1337'
  },
  workboxOpts: {
    swDest: process.env.NEXT_PROD
      ? 'service-worker.js'
      : 'static/service-worker.js',
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'offlineCache',
          expiration: {
            maxEntries: 200
          }
        }
      }
    ]
  },
  experimental: {
    async rewrites() {
      return [
        {
          source: '/service-worker.js',
          destination: '/_next/static/service-worker.js'
        }
      ]
    }
  }
  // webpack(config) {
  //   config.resolve.modules.push(__dirname)
  //   return config
  // }
}

module.exports = withOffline(config)
