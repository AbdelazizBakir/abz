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
	'/images/ap.jpg',
	'/images/cal.jpg',
	'/images/bk.jpg',
	'/images/st.jpg'
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
		<dev className='flex static justify-center p-0 mb-4 sm:h-auto'>
			<buuton className='flex justify-center items-center z-10 h-auto w-20 hover:bg-amber-50 text-4xl' onClick={handlePrev}>{'<'}</buuton>
				<div className='flex relative w-auto h-screen sm:h-auto sm:t-0'>
					<img className={` ${transL ? 'animate-slideR' : transR ? 'transition duration-500 ease-linear transform translate-x-full' : '' }`} src={images[index1]} alt="images"  />
				</div>
			<buuton className='flex justify-center items-center z-10 h-auto w-20 hover:bg-amber-50 text-4xl' onClick={handleNext}>{'>'}</buuton>
		</dev>

			<div className='flex absolute justify-center items-center z-10 cursor-pointer hover:shadow-lg text-2xl font-semibold text-white bg-slate-700 hover:bg-slate-800 rounded-3xl px-5 py-2'>
				<Link href='/register'>
					<a className='text-center bg-bleu-200  hover:text-blue-600 '>
						S'inscrire maintenant
						<FontAwesomeIcon icon={faFileAlt}  className='ml-2 mb-1 w-6 inline-block' />
					</a>
				</Link>
			</div>
		</>
	)
}

export default Carousel
