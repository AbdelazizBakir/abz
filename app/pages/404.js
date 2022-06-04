import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const error = () => {
    const router = useRouter()
    useEffect(() => {setTimeout(() => {router.push("/")}, 2000)}, [])
    return (
<>
    <div
    className="
        flex
        items-center
        justify-center
        w-screen
        h-screen
        bg-gradient-to-r
        from-blue-600
        to-blue-300
    ">
    <div className="max-w-screen sm:px-6 sm:py-6 px-16 py-12 bg-white rounded-md shadow-xl">
        <div className="flex flex-col items-center">
        <h1 className="font-bold text-blue-600 text-9xl sm:text-lg">404</h1>

        <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl sm:text-lg">
            <span className="text-amber-500">Oops!</span> Page introuvable
        </h6>

        <p className="mb-8 text-center text-gray-500 md:text-lg sm:text-sm">
            La page que vous recherchez n'existe pas.
        </p>

        <Link href='/'><a className='px-6 py-2 text-sm font-semibold text-blue-600 bg-blue-100'> Retour à l'accueil </a></Link>
        </div>
    </div>
    </div>
          
</>
    )
}
export default error