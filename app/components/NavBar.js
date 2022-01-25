import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export const NavBar = () => {
  return (
  <nav>
  <ul className='flex items-center bg-slate-400 p-3 flex-wrap'>
    <span>
      <Image src="/atlas.png" alt="ATLAS SCHOOL Logo" width={70} height={40} />
    </span>
    <li><Link href='/'><a className='p-3 m-2'>Accueil</a></Link></li>
    <li><Link href='/Activities'><a className='p-3 mr-2'>Activités</a></Link></li>
    <li><Link href='/about'><a className='p-3 m-2'>A propos</a></Link></li>
    <li><Link href='/register'><a className='p-3 m-2'>Préinscription</a></Link></li>
    <li><Link href='/blog'><a className='p-3 m-2'>Blog</a></Link></li>
    <li><Link href='/contact'><a className='p-3 m-2'>Contact</a></Link></li>
    <li><Link href='/login'><a className='p-3 m-2 bg-blue-500 shadow-lg shadow-blue-500/50'>Se connecter</a></Link></li>   
  </ul>
  </nav>
  )
}
export default NavBar