import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>     
        <div className={styles.grid}>
        <h1 className="text-3xl font-bold">
          Hello world!
        </h1>
        </div>
    </div>
  )
}
