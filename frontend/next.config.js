const path = require('path')
const { config } = require('process')

module.exports = {
	swcMinify: true,

	env: {
		API_URL: process.env.API_URL,
		PAYSTACK_PUBLICKEY: process.env.PAYSTACK_PUBLICKEY,
		WIZIQ_ACCESS_KEY: process.env.WIZIQ_ACCESS_KEY,
		WIZIQ_SECRET_KEY: process.env.WIZIQ_SECRET_KEY,
		WIZIQ_API_URL: process.env.WIZIQ_API_URL,
	},
	publicRuntimeConfig: {
		API_URL: process.env.API_URL,
		GRAPHQL_ENDPOINT: process.env.STRAPI_GRAPHQL_URL,
	},
	webpack: (config, isServer) => {
		config.resolve.alias['components'] = path.join(__dirname, 'components')
		config.resolve.alias['public'] = path.join(__dirname, 'public')
		config.resolve.fallback = {
			...config.resolve.fallback, // if you miss it, all the other options in fallback, specified
			// by next.js will be dropped. Doesn't make much sense, but how it is
			fs: false, // the solution
		}
		return config
	},

	// experimental: {
	concurrentFeatures: true,
	// 	urlImports: [
	// 		'https://cdnjs.cloudflare.com/ajax/libs/',
	// 	],
	// },
}
