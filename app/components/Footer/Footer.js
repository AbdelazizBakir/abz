import React from "react";
import ItemsContainer from "./ItemsContainer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
    <ItemsContainer />
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <span >© 2022  {"  "}
        <a href="https://www.facebook.com/abdelaziz.bakir.z" className="text-amber-500">
          Abdelaziz Bakir,</a>{"  "}
        All rights reserved.</span>
        <span>Conditions · Politique de confidentialité</span>
        <div className="text-amber-500">
        <span className='cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-amber-400
        duration-300'>
        <a href='https://www.facebook.com/ATLASschool09' className="w-10 h-10">
        <FontAwesomeIcon icon={faFacebook} /></a>
        </span> </div> 
      </div>
    </footer>

  )
}

export default Footer;