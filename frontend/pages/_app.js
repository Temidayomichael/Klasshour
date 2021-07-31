import '../styles/globals.css'
import '../styles/board.css'
import { ChakraProvider } from "@chakra-ui/react"
import Layout from '../components/Layout'
import getConfig from 'next/config'
import Router from 'next/router'
import { parseCookies } from 'nookies'
import NProgress from 'nprogress';
import UserContext from '../contexts/UserContext'
import axios from 'axios'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import Carousel from 'nuka-carousel'

const queryClient = new QueryClient()

Router.events.on('routeChangeStart', (url) => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

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
}
const { publicRuntimeConfig } = getConfig()

function redirectUser(ctx, location) {
  if (ctx.req) {
    ctx.res.writeHead(302, { Location: location })
    ctx.res.end()
  } else {
    Router.push(location);
  }
  
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {}
  let data = ''
  const jwt = parseCookies(ctx).jwt
  if (!jwt) {
    if (ctx.pathname === '/dashboard') {
      redirectUser(ctx, '/login');
    }
  } else {
    if (ctx.pathname === '/login' || ctx.pathname=='/register') {
      redirectUser(ctx, '/');
    }
      const res = await axios.get('http://localhost:1337/users/me', {
  headers: {
    Authorization: `Bearer ${jwt}`,
  },
      })
    data=res.data
  }
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  
  return {
    pageProps,
    userData: data
  }
}