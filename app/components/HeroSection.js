import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
/*import { faFacebook } from '@fortawesome/free-brands-svg-icons'*/
/*import { faCoffee } from '@fortawesome/free-solid-svg-icons'*/

function HeroSection() {
	return (
		<>
		<div className="flex justify-center items-center flex-col pt-40 text-center font-bold lg:text-8xl text-6xl space-y-2">
			<h1 className="text-gray-900 pb-10">ATLAS</h1>
			<div className='flex justify-center items-center cursor-pointer hover:shadow-lg  text-2xl font-semibold text-white bg-slate-700 hover:bg-slate-800 rounded-3xl px-5 py-2'>
            
			<Link href='/register'>
				<a className='text-center bg-bleu-200  hover:text-blue-600 '>
					S'inscrire maintenant
					<FontAwesomeIcon icon={faFileAlt}  className='ml-2' />
				</a></Link>
			</div>
		</div>
		</>
	)
}

export default HeroSection
