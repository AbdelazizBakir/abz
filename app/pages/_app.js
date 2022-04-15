import Layout from '../components/Layout'
import '../styles/globals.css'
import '../styles/Home.module.css'
//import { SessionProvider } from "next-auth/react";
import { UserProvider } from '@auth0/nextjs-auth0';

function MyApp({ Component, pageProps }) {
  return (
    //<SessionProvider session={pageProps.session}> </SessionProvider> 
    <UserProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
    )
}

export default MyApp
