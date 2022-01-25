import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>



      <main className={styles.main}>
        <div className={styles.grid}>
        <h1 className="text-3xl font-bold">
          Hello world!
        </h1>
        </div>
        <a href='/' login className='p-3 m-2 bg-blue-500 shadow-lg shadow-blue-500/50'>Se connecter</a>    
        </main>

      <footer className={styles.footer}>
        <a
          href="https://www.facebook.com/abdelaziz.bakir.z"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by{' '}
          <span className={styles.logo}>
            <Image src="/abz.ico" alt="ABZ Logo" width={40} height={20} />
          </span>
        </a>
      </footer>
    </div>
  )
}
