import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
/*import { faFacebook } from '@fortawesome/free-brands-svg-icons'*/
/*import { faCoffee } from '@fortawesome/free-solid-svg-icons'*/
import React,{ useState, useEffect } from 'react'

function Carousel() {
const [index , setIndex] = useState(0)
const [index1 , setIndex1] = useState(1)

const [transL , setTransL ] = useState(false)
const [transR , setTransR ] = useState(false)

useEffect(() => {

	if(transR) {
		setTimeout(() => {
			setTransR(false)
		} , 500 )
	}

	if(transL) {
		setTimeout(() => {
			setTransL(false)
			setIndex((index + 1) % images.length)
			setIndex1((index1 + 1) % images.length)
		} , 500 )
	}
}, [ transL , transR])

const images = [
	'/images/apl.jpg',
	'/images/cal.jpg',
	'/images/bk.jpg',
]
const handlePrev = () => {
	setTransR(true)
	setTransL(false)

	const nextIndex = index - 1;
	const nextIndex1 = index1 - 1;
	
	if(nextIndex < 0) {
		setIndex(images.length - 1)
	}
	else {
		setIndex(nextIndex)
	}
	if(nextIndex < 0) {
		setIndex1(images.length - 1)
	}
	else {
		setIndex1(nextIndex1)
	}
	}

const handleNext = () => {
	setTransL(true)
	setTransR(false)
}
			/// (`) pour les fonc js => alt + 96 
								/*<img className={`max-w-screen h-screen ${transL ? 'transition duration-500 ease-linear transform -translate-x-full' : transR ? 'animate-slideL' : '' }`} src={images[index]} alt="images" />*/
	return (
		<>
		<dev className='flex static justify-center top-0 left-0 right-0 max-w-screen mb-4'>
			<div className='flex relative'>
			<button className='flex absolute justify-center items-center top-0 left-0 z-20 h-full w-20 hover:bg-amber-50 opacity-10 text-4xl' onClick={handlePrev}>{'<'}</button>
				<div className='flex  z-5'>
					<img className={` ${transL ? 'animate-slideR' : transR ? 'transition duration-200 ease-linear transform translate-x-full' : '' }`} src={images[index1]} alt="images"  />
				</div>
			<button className='flex absolute justify-center items-center top-0 right-0 z-20 h-full w-20 hover:bg-amber-50 opacity-10 text-4xl' onClick={handleNext}>{'>'}</button>
			</div>
		</dev>

		</>
	)
}

export default Carousel
