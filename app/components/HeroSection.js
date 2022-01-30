import React from "react"
import Link from 'next/link'

function HeroSection() {
	return (
		<div className="flex justify-center items-center flex-col pt-40 text-center font-bold lg:text-8xl text-6xl space-y-2">
			<h1 className="text-gray-900 pb-10">ATLAS</h1>
			<div className="flex justify-center items-center cursor-pointer hover:shadow-lg  text-3xl font-semibold text-white bg-gray-900 rounded-lg w-64 h-16">
            <Link href='/register'><a className='text-center'>Inscririe</a></Link>
			</div>
		</div>
	);
}

export default HeroSection
