import '../styles/globals.css'
import '../styles/board.css'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/Layout'
import getConfig from 'next/config'
import Router from 'next/router'
import { parseCookies } from 'nookies'
import NProgress from 'nprogress'
import UserContext from '../contexts/UserContext'
import axios from 'axios'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
<<<<<<< HEAD
import io from 'socket.io-client'
import { useEffect, useRef, useState } from 'react'
=======
import Carousel from 'nuka-carousel'
>>>>>>> 12e3d0a94e7bc951f524d6b4d80c0b9ae5c10fe8

const queryClient = new QueryClient()
const { publicRuntimeConfig } = getConfig()

Router.events.on('routeChangeStart', (url) => {
	console.log(`Loading: ${url}`)
	NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())
<<<<<<< HEAD
export default function MyApp({ Component, pageProps, userData }) {
		
	return (
		<QueryClientProvider client={queryClient}>
			<ChakraProvider>
				<UserContext.Provider value={userData}>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</UserContext.Provider>
			</ChakraProvider>
		</QueryClientProvider>
	)
=======

export default function MyApp({ Component, pageProps,userData }) {
 console.log("Userdata:",userData)
  return (
     <QueryClientProvider client={queryClient}>
    <ChakraProvider>
       <UserContext.Provider value={userData}>
      <Layout>
       
          <Component {...pageProps} />
      </Layout>
      
       </UserContext.Provider>
      </ChakraProvider>
      </QueryClientProvider>
  )
>>>>>>> 12e3d0a94e7bc951f524d6b4d80c0b9ae5c10fe8
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
				if (data.role.type == 'tutor') {
					await axios
						.get(`http://localhost:1337/tutors?user=${data.id}`, {
							headers: {
								Authorization: `Bearer ${jwt}`,
							},
						})
						.then((res) => (uData = res.data[0]))
				} else {
					await axios
						.get(`http://localhost:1337/students?user=${data.id}`, {
							headers: {
								Authorization: `Bearer ${jwt}`,
							},
						})
						.then((res) => (uData = res.data[0]))
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
