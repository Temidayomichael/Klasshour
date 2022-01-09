import '../styles/globals.css'
import '../styles/board.css'
import '../styles/Home.module.css'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/Layout'
import getConfig from 'next/config'
import Router from 'next/router'
import { parseCookies } from 'nookies'
import NProgress from 'nprogress'
import UserContext from '../contexts/UserContext'
import axios from 'axios'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import {
	ApolloClient,
	createHttpLink,
	InMemoryCache,
	ApolloProvider,
} from '@apollo/client'
import { GetTutor } from '../Queries/tutor'
import { setContext } from '@apollo/client/link/context'
import { GetStudent } from '../Queries/student'

const queryClient = new QueryClient()
const { publicRuntimeConfig } = getConfig()

Router.events.on('routeChangeStart', (url) => {
	console.log(`Loading: ${url}`)
	NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())
export default function MyApp({ Component, pageProps, userData }) {
		const httpLink = createHttpLink({
			uri: publicRuntimeConfig.GRAPHQL_ENDPOINT,
		})
		const authLink = setContext((_, { headers }) => {
			// return the headers to the context so httpLink can read them
			return {
				headers: {
					...headers,
					Authorization: `Bearer ${jwt}`,
				},
			}
		})

		const client = new ApolloClient({
			link: authLink.concat(httpLink),
			cache: new InMemoryCache(),
		})
	
	console.log('userData:', userData)
	return (
		<ApolloProvider client={client}>
		<QueryClientProvider client={queryClient}>
			<ChakraProvider>
				<UserContext.Provider value={userData}>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</UserContext.Provider>
			</ChakraProvider>
			</QueryClientProvider>
		</ApolloProvider>
	)
}

function redirectUser(ctx, location) {
	if (ctx.req) {
		ctx.res.writeHead(302, { Location: location })
		ctx.res.end()
	} else {
		Router.push(location)
	}
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
	let pageProps = {}
	let data = ''
	let uData = ''
	let role = ''
	const jwt = parseCookies(ctx).jwt

	if (!jwt) {
		if (ctx.pathname === '/dashboard') {
			redirectUser(ctx, '/login')
		}
	} else {
		if (ctx.pathname === '/login' || ctx.pathname == '/register') {
			redirectUser(ctx, '/')
		}
		await axios
			.get('http://localhost:1337/users/me', {
				headers: {
					Authorization: `Bearer ${jwt}`,
				},
			})
			.then(async (res) => {
				data = res.data
				console.log('data:', data)
				if (data.role.type == 'tutor') {

					const httpLink = createHttpLink({
						uri: publicRuntimeConfig.GRAPHQL_ENDPOINT,
					})

					const authLink = setContext((_, { headers }) => {
						// return the headers to the context so httpLink can read them
						return {
							headers: {
								...headers,
								Authorization: `Bearer ${jwt}`,
							},
						}
					})

					const client = new ApolloClient({
						link: authLink.concat(httpLink),
						cache: new InMemoryCache(),
					})
					const resp = await client.query({
						query: GetTutor,
						variables: {
							id: data._id,
						}
					})

					// console.log('New tutor data:' + JSON.stringify(resp.data))
					uData = resp.data
					// console.log('uData:', uData)
					// await axios
					// 	.get(`http://localhost:1337/tutors?user=${data.id}`, {
					// 		headers: {
					// 			Authorization: `Bearer ${jwt}`,
					// 		},
					// 	})
					// 	.then((res) => (uData = res.data[0]))
				} else {
						const httpLink = createHttpLink({
							uri: publicRuntimeConfig.GRAPHQL_ENDPOINT,
						})

						const authLink = setContext((_, { headers }) => {
							// return the headers to the context so httpLink can read them
							return {
								headers: {
									...headers,
									Authorization: `Bearer ${jwt}`,
								},
							}
						})

						const client = new ApolloClient({
							link: authLink.concat(httpLink),
							cache: new InMemoryCache(),
						})
						const resp = await client.query({
							query: GetStudent,
							variables: {
								id: data._id,
							},
						})

						// console.log('New tutor data:' + JSON.stringify(resp.data))
						uData = resp.data
					// await axios
					// 	.get(`http://localhost:1337/students?user=${data.id}`, {
					// 		headers: {
					// 			Authorization: `Bearer ${jwt}`,
					// 		},
					// 	})
					// 	.then((res) => (uData = res.data[0]))
				}
			})
	}
	if (Component.getInitialProps) {
		pageProps = await Component.getInitialProps(ctx)
	}

	return {
		pageProps,
		userData: {
			...uData,
			role: data ? data.role.name : 'public',
		},
	}
}
