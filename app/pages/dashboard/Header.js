import React from "react";
import styles from '../../styles/Home.module.css';
import Image from 'next/image';

function Header() {
	return (
		<div className='flex w-screen h-36 bg-amber-50'>
				<div className='flex ml-56 mt-16 text-left'>
					<p className=" hover:text-blue-500 px-3 py-3 text-3xl duration-500  font-medium ">
					Bienvenue sur le tableau de bord
					</p>
				</div>
		</div>
	);
}

export default Header;