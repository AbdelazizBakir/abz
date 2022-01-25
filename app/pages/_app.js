import Layout from '../layouts/Layout';
import '../styles/globals.css';
import '../styles/Home.module.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
    )
}

export default MyApp
