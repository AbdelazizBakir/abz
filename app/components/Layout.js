import Head from 'next/head'
import NavBar from './NavBar.js'
import Footer from './Footer/Footer'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useSession } from "next-auth/react";

const Layout = ({children}) => {
  const [isOpen, setIsOpen] = useState(false) 
	const { data: session, status } = useSession()
	const loading = status === "loading"

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
          <div
            className="
                w-screen
                h-full
                bg-gradient-to-r
                from-amber-200
                to-blue-200
            ">
              <NavBar />
            </div>
            <div className=''>  </div>
          <main className={styles.main}>{children}</main>
          <div className='relative w-screen bottom-0'> <Footer /></div>
        </>
    )
}

export default Layout