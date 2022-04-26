import Layout from '../components/Layout'
import '../styles/globals.css'
import '../styles/Home.module.css'
import { SessionProvider } from "next-auth/react";
import { UserProvider } from '@auth0/nextjs-auth0';

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider loginUrl="/foo/api/auth/login" profileUrl="/foo/api/auth/me">
      <SessionProvider session={pageProps.session}> 
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </SessionProvider> 
    </UserProvider>
    )
}

export default MyApp
