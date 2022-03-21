import Carousel from "../components/Carousel"
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
/*import { faFacebook } from '@fortawesome/free-brands-svg-icons'*/
/*import { faCoffee } from '@fortawesome/free-solid-svg-icons'*/
import React,{ useState, useEffect } from 'react'

export default function Home() {
  return (
    <>
    <div
    className="
        flex
        max-w-screen
        bg-gradient-to-r
        from-amber-200
        to-blue-200">
			<Carousel />
<div className="flex absolute">
        <div className="flex relative items-center sm:flex-row mt-5 md:mt-30 lg:mt-40 md:ml-10  ">
          <div className="p-8 text-center ">
            <h1 className='z-10 md:text-5xl text-left font-bold sm:text-2xl font-display text-amber-400 hover:text-blue-900'>
              Avec nous, 
              <span className='block text-left pl-2 text-amber-400 hover:text-blue-900'>
              Où la qualité de l'éducation avant tout
              </span>
            </h1>
            <p className="p-2 text-xs text-left text-blue-900 md:text-xl font-semibold hover:underline underline-offset-4 hover:text-amber-400">
              With an expert educational staff and new pedagogical structures
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-gray-50">
      <div className="py-12 px-6 mx-auto max-w-6xl">
        <div className="flex flex-col gap-5 md:flex-row">
          <div
            v-for="feature in features"
            className="flex flex-col p-8 space-y-4 bg-white rounded-lg border border-gray-200 transition-shadow duration-500 ease-out cursor-pointer hover:shadow-xl"
          >
            <div className="flex items-center space-x-3">
              <div className="relative">
                <span
                  
                  className="absolute top-0 left-4 w-3 h-3 rounded-full opacity-50"
                />
              </div>
              <div className="relative">
                <span
                  className="absolute right-0 bottom-1 w-12 h-1.5 opacity-60"
                />
                <h2 className="relative text-xl font-display">00000 H2 00000</h2>
              </div>
            </div>
</div>
</div>
</div>

    </div>
    </>
  )
}
