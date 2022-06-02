import Layout from '../components/Layout'
import '../styles/globals.css'
import '../styles/Home.module.css'
import { SessionProvider } from "next-auth/react";
import { UserProvider } from '@auth0/nextjs-auth0';

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}> 
      <UserProvider loginUrl="/foo/api/auth/login" profileUrl="/foo/api/auth/me">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserProvider>
    </SessionProvider> 
  )
}

export default MyApp
