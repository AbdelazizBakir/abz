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
	if(transL) {
		setTimeout(() => {
			setTransL(false)
			setTransL((index + 1) % images.length)
			setTransL((index1 + 1) % images.length)
		} , 800 )
	}
}, [transL])

const images = [
	'/images/ap.jpg',
	'/images/bk.jpg',
	'/images/cal,jpg',
]
const handlePrev = () => {
	setTransR(true)
	setTransL(false)

	
}
const handleNext = () => {
	setTransL(true)
	setTransR(false)
}
			/// (`) pour les fonc js => alt + 96 
	return (
		<>
		<dev className='flex justify-center w-screen h-screen space-x-4 sm:p-t-20'>
			<buuton className='flex justify-center items-center h-auto w-10 hover:bg-yellow-50 extrablod text-4xl' onClick={handlePrev}>{'<'}</buuton>
				<div className='relative w-screen h-auto overflow-hidden rounded-xl'>
					<img className={`absolute object-contain z-0 w-full h-full p-4 ${transL ? 'animate-slideR' : '' }`} src={images[index1]} alt=""/>

					<img className={`absolute object-contain z-0 w-full h-full p-4 ${transL ? 'animate-slideR' : '' }`} src={images[index1]} alt=""  />
				</div>
			<buuton className='flex justify-center items-center h-auto w-10 hover:bg-yellow-50 extrablod text-4xl' onClick={handleNext}>{'>'}</buuton>
		</dev>


			<div className='flex absolute justify-center items-center -z-10 cursor-pointer hover:shadow-lg text-2xl font-semibold text-white bg-slate-700 hover:bg-slate-800 rounded-3xl px-5 py-2'>
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
