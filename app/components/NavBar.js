import React, { useState } from 'react'
import { Transition } from '@headlessui/react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../public/atlas.png'

function NavBar() { 
	const [isOpen, setIsOpen] = useState(false) 
	return (
		<div>
			<nav className=" shadow-sm fixed w-full z-10">
				<div className="w-full">
					<div className="flex items-center h-20 w-full">
						<div className="flex items-center  mx-10  justify-between w-full">
							<Link href='/' as={'home.php'} className="flex justify-center items-center flex-shrink-0 ">
							<a><Image src="/atlas.png" alt="ATLAS School Logo" width={126} height={118} /></a>
							</Link>
							<div className="hidden md:block">
								<div className="ml-10 flex items-baseline space-x-4">
									<Link href='/' as={'home.php'}
										className='cursor-pointer text-blue-700 font-semibold px-3 py-2 text-md hover:font-black'>
										<a>Accueil</a>
									</Link>
									<Link
										href='/about'
										className="cursor-pointer hover:bg-blue-600 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium">
										<a>A propos</a>
									</Link>
									<Link
										href='/activities'
										className="cursor-pointer hover:bg-blue-600 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium">
										<a>Activités</a>
									</Link>
									<Link
										href='/blog'
										className="cursor-pointer hover:bg-blue-600 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium">
										<a>Blog</a>
									</Link>
									<Link
										href='/contact'
										className="cursor-pointer hover:bg-blue-600 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium">
										<a>Contact</a>
									</Link>
									<Link
										href='/login'
										className="cursor-pointer bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-black">
										<a>Se connecter</a>
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
							<div
								ref={ref}
								className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3">
								<Link
									href="/"
									className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
									<a>Accueil</a>
								</Link>
								<Link
									href="/about"
									className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
									<a>A propos</a> 
								</Link>
								<Link
									href="/activities"
									className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
									<a>Activités</a>
								</Link>
								<Link
									href="/blog"
									className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
									<a>Blog</a>
								</Link>
								<Link
									href="/contact"
									className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
									<a>Contact</a>
								</Link>
								<Link
									href='/login'
									offset={50}
									duration={500}
									href="/login"
									className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
									<a>Se connecter</a>
								</Link>
							</div>
						</div>
					)}
				</Transition>
			</nav>
		</div>
	);
}

export default NavBar
