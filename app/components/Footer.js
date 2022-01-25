import Image from 'next/image'
import styles from '../styles/Home.module.css'

export const Footer = () => {
  return (
  <footer className={styles.footer}>
  <a
    href="https://www.facebook.com/abdelaziz.bakir.z"
    target="_blank"
    rel="noopener noreferrer">
    <h4>2022 &copy; Created by </h4>{' '}
    <span className={styles.logo}>
      <Image src="/abz.ico" alt="ABZ Logo" width={40} height={20} />
    </span>
  </a>
</footer>
  )
}
export default Footer