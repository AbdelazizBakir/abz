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
        items-center
        justify-center
        w-screen
        h-screen
        bg-gradient-to-r
        from-amber-200
        to-blue-200">
			<Carousel />

<div className="flex absolute px-6 mx-auto max-w-6xl">
        <div className="flex flex-col-reverse items-center md:flex-row lg:items-end">
          <div className="pt-24 pr-8 pb-24 text-center md:pb-12 md:w-1/2 md:text-left">
            <h1 className="relative z-10 text-5xl font-bold md:text-6xl font-display">
              Learn the
              <span
                className="relative after:content-[url(/img/scratch.svg)] after:absolute after:-top-2 after:-right-6 after:-z-1"
              >
                best
              </span>
              ways for staying
              <span
                className="relative after:content-[url(/img/decoration.svg)] after:absolute after:-bottom-2 after:-right-8 after:-z-1"
              >
                productive
              </span>
            </h1>
            <p className="pt-8 text-lg leading-relaxed text-gray-500 md:max-w-md md:text-xl">
              Working at home is definitely a convenient option and makes sense in these
              unprecedented times.
            </p>
          </div>
          <div className="flex items-end w-1/2 border-b border-gray-400">
            <img src="../public/images/cal.jpg" alt="aaa" />
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
