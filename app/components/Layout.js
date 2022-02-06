import Head from 'next/head'
import NavBar from './NavBar.js'
import Footer from './Footer'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'

const Layout = ({children}) => {
  const router = useRouter()
  const { id } = router.query
    return (
        <> 
          <Head>
            <title>ATLAS School {id}</title>
            <meta name="description" content="The Ministry of Education, private school atlas school" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" href="../styles/Home.module.css" />  
          </Head>
          <NavBar />
          <main className={styles.main}>{children}</main>
          <Footer />
        </>
    )
}

export default Layout