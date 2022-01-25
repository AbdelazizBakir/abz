import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const error = () => {
    return (
        <div>
            <h2>Page not found</h2>
            <Link href='/'><a className='btn btn-dark'> Home page </a></Link>
        </div>
    )
}
export default error