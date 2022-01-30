import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const error = () => {
    const router = useRouter()
    useEffect(() => {setTimeout(() => {router.push("/")}, 3000)}, [])
    return (
        <div>
            <h2>Page not found</h2>
            <Link href='/'><a className='btn btn-dark'> Home page </a></Link>
        </div>
    )
}
export default error