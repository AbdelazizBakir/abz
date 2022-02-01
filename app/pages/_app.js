import Layout from '../layouts/Layout'
import '../styles/globals.css'
import '../styles/Home.module.css'
import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
    )
}

export default MyApp
