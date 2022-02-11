import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
/*import { faFacebook } from '@fortawesome/free-brands-svg-icons'*/
/*import { faCoffee } from '@fortawesome/free-solid-svg-icons'*/
import { useState } from 'react'

function HeroSection() {
const [index , setIndex] = useState(0)
const [index1 , setIndex1] = useState(1)
const images = [
	'ap.jpg',
	'bk.jpg',
	'cal,jpg',
	'cl.jpg'
]
const handlePrev = () => {

}
const handleNext = () => {
	setIndex((index + 1) % images.length)
	setIndex1((index1 + 1) % images.length)
}
	return (
		<>
		<flex className='flex justify-center w-screen h-screen sm:p-t-20'>
			<buuton className='flex justify-center  items-center h-auto w-10 hover:bg-yellow-50 extrablod text-4xl' onClick={handlePrev}>{'<'}</buuton>
				<div className='relative w-full h-auto overflow-hidden rounded-xl'>
					<Image className={'absolute object-contain z-20 w-full h-full p-4'} src='/public/images/cal.jpg' alt='cal' width={100} height={400} />
					<Image className={'absolute object-contain z-20 w-full h-full p-4'} src='/public/images/st.jpg' alt='st' width={100} height={400} />
				</div>
			<buuton className='flex justify-center items-center h-auto w-10 hover:bg-yellow-50 extrablod text-4xl' onClick={handleNext}>{'>'}</buuton>
		</flex>

		<Image src="/images/bk.jpg" alt="ATLAS School" width={1450} height={800} className='' />
		<div className='text-xs text-left'>ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff</div>

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

export default HeroSection
