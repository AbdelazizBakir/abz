import React, { useState } from 'react'
import { Transition } from '@headlessui/react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../public/atlas.png'
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'

function NavBar() { 
	const [isOpen, setIsOpen] = useState(false) 
	return (
			<nav className={styles.navbar}>
				<div className="shadow-md w-screen bg-slate-50 m-0 duration-500 bg-opacity-40">
					<div className="flex items-center h-18">
						<div className="flex items-center justify-between mx-10 my-1 w-full">
							<Link href='/' as={'Home'}>
								<a><Image src="/atlas.png" alt="ATLAS School Logo" width={69} height={45}
								className="flex justify-start items-center flex-shrink-0" /></a>
							</Link>
							<div className="hidden md:block justify-around" absolute z-20>
								<div className="inline-block space-x-3">
									<Link href='/' as={ 'Home'}>
										<a className='text-blue-900 text-md hover:text-amber-700 duration-100 font-medium'>Accueil</a>
									</Link>
									<Link href='/about'>
										<a className="cursor-pointer hover:border-amber-400 hover:border-r-2 hover:border-b-2 text-blue-900 hover:text-zinc-900 px-3 py-3 rounded-none text-md">A propos</a>
									</Link>
									<Link href='/activities'>
										<a className="cursor-pointer hover:border-amber-400 hover:border-b-2 text-blue-900 hover:text-zinc-900 m-3 p-3 rounded-xl text-md ">Activités</a>
									</Link>
									<Link href='/blog'>
										<a className="cursor-pointer hover:bg-amber-400 text-blue-900 hover:text-zinc-900 px-3 py-3 rounded-bl-xl text-md">Blog</a>
									</Link>
									<Link href='/contact'>
										<a className="cursor-pointer hover:bg-amber-400 text-blue-900 hover:text-zinc-900 px-3 py-3 rounded-xl duration-500 text-md">Contact</a>
									</Link>
									<Link href='/login'>
										<a className="cursor-pointer bg-amber-400 text-slate-700 hover:text-blue-50 px-3 py-3 rounded-xl text-md duration-500 hover:bg-slate-700">
											Se connecter
											<FontAwesomeIcon icon={faUser}  className='ml-1.5 h-4 inline-block' />
										 </a>
									</Link>
								</div>
							</div>
						</div>
						<div className="mr-7 flex md:hidden ">
							<button
								onClick={() => setIsOpen(!isOpen)}
								type="button"
								className="bg-blue-600 inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
								aria-controls="mobile-menu"
								aria-expanded="false"
								>
								{!isOpen ? (
									<svg
										className="block h-6 w-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								) : (
									<svg
										className="block h-6 w-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								)}
							</button>
						</div>
					</div>
				</div>

				<Transition
					show={isOpen}
					enter="transition ease-out duration-100 transform"
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="transition ease-in duration-75 transform"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95"
				>
					{(ref) => (
						<div className="md:hidden" id="mobile-menu">
							<div ref={ref} className="bg-white absolute z-50 px-2 pt-2 pb-3 space-y-1 sm:px-3">
								<Link href="/">
									<a className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">Accueil</a>
								</Link>
								<Link href="/about">
									<a className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">A propos</a> 
								</Link>
								<Link href="/activities">
									<a className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">Activités</a>
								</Link>
								<Link href="/blog">
									<a className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">Blog</a>
								</Link>
								<Link href="/contact">
									<a className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</a>
								</Link>
								<Link
									href='/login'
									offset={50}
									duration={500}
									href="/login">
									<a className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">Se connecter</a>
								</Link>
							</div>
						</div>
					)}
				</Transition>
			</nav>
	);
}

export default NavBar
