import React, { useState } from 'react'
import { Transition } from '@headlessui/react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../public/atlas.png'
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'

function NavBar() { 
	const [isOpen, setIsOpen] = useState(false) 
	return (
			<nav className={styles.navbar}>
				<div className="shadow-md fixed w-full bg-slate-100 duration-500 z-10">
					<div className="flex items-center h-18 w-full">
						<div className="flex items-center  mx-10 my-1 p-1 justify-between w-full">
							<Link href='/' as={'Home'}>
								<a><Image src="/atlas.png" alt="ATLAS School Logo" width={69} height={45}
								className="flex justify-center items-center flex-shrink-0" /></a>
							</Link>
							<div className="hidden md:block">
								<div className="ml-10 flex items-baseline space-x-4">
									<Link href='/' as={'Home'}>
										<a className='text-blue-900 text-md hover:text-amber-500 duration-500 font-medium'>Accueil</a>
									</Link>
									<Link href='/about'>
										<a className="cursor-pointer hover:bg-amber-400 text-blue-900 hover:text-zinc-900 px-3 py-3 rounded-xl duration-500 text-md">A propos</a>
									</Link>
									<Link href='/activities'>
										<a className="cursor-pointer hover:bg-amber-400 text-blue-900 hover:text-zinc-900 px-3 py-3 rounded-xl duration-500 text-md ">Activités</a>
									</Link>
									<Link href='/blog'>
										<a className="cursor-pointer hover:bg-amber-400 text-blue-900 hover:text-zinc-900 px-3 py-3 rounded-xl duration-500 text-md">Blog</a>
									</Link>
									<Link href='/contact'>
										<a className="cursor-pointer hover:bg-amber-400 text-blue-900 hover:text-zinc-900 px-3 py-3 rounded-xl duration-500 text-md">Contact</a>
									</Link>
									<Link href='/login'>
										<a className="cursor-pointer bg-amber-400 text-slate-700 hover:text-blue-50 px-3 py-3 rounded-xl text-md duration-500 hover:bg-slate-700">Se connecter</a>
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
							<div ref={ref} className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3">
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
