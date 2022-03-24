import Carousel from "../components/Carousel"
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
/*import { faFacebook } from '@fortawesome/free-brands-svg-icons'*/
/*import { faCoffee } from '@fortawesome/free-solid-svg-icons'*/
import React,{ useState, useEffect } from 'react'

export default function Home() {
  return (

    <>

      <div
      className="
          flex
          relative
          max-w-screen
          bg-gradient-to-r
          from-amber-200
          to-blue-200">
        <Carousel />
  <div className="flex absolute">
          <div className="flex items-center sm:flex-row mt-5 md:mt-30 lg:mt-40 md:ml-10  ">
            <div className="p-8 text-center ">
              <h1 className='z-10 md:text-5xl text-left font-bold sm:text-2xl font-display text-amber-400 hover:text-blue-900'>
                Avec nous, 
                <span className='block text-left pl-2 text-amber-400 hover:text-blue-900'>
                Où la qualité de l'éducation avant tout
                </span>
              </h1>
              <p className="p-2 text-xs text-left text-blue-900 md:text-xl font-semibold hover:underline underline-offset-4 hover:text-amber-400">
              Avec une équipe éducative experte et de nouvelles structures pédagogiques
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex static justify-center items-center m-1 space-x-6">
      <div className="flex relative lg:relative md:relative py-4 px-2">
          <div className="flex relative flex-col gap-5 md:flex-row ">
            <div
              className="flex static flex-col p-4 space-y-4 bg-white rounded-lg border border-gray-200 transition-shadow duration-500 ease-out cursor-pointer hover:shadow-xl"
            >
              <div className="flex relative justify-center items-center space-x-3">
                <div className="justify-center items-center">
                  <span
                    className="relative justify-center items-center top-0 left-4 w-3 h-3 rounded-full opacity-50"
                  />
                  <h3 className="flex justify-center items-center relative py-2">divisé en deux phases</h3>
                  <Image src="/cl.jpg" alt="img" width={290} height={175}
                  className="block object-cover object-center justify-center items-center w-full h-full rounded-lg " />
                  </div>
                </div>
                <div className="flex relative justify-center items-center">
                  <span
                    className="absolute justify-center items-center right-0 bottom-1 w-12 h-1.5 opacity-60"
                  />
                  <h2 className="relative justify-center items-center text-xl font-display">Niveau maternelle</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="flex relative flex-col gap-5 md:flex-row py-4 px-2">
            <div
              className="flex relative flex-col p-4 space-y-4 bg-white rounded-lg border border-gray-200 transition-shadow duration-500 ease-out cursor-pointer hover:shadow-xl"
            >
              <div className="flex relative justify-center items-center space-x-3">
                <div className="justify-center items-center">
                  <span
                    className="relative justify-center items-center top-0 left-4 w-3 h-3 rounded-full opacity-50"
                  />
                  <h3 className="flex justify-center items-center relative py-2">divisé en cinq ans</h3>
                  <Image src="/images/pr.jpg" alt="img" width={290} height={175}
                  className="block object-cover object-center justify-center items-center w-full h-full rounded-lg " />
                  </div>
                </div>
                <div className="flex relative justify-center items-center">
                  <span
                    className="absolute justify-center items-center right-0 bottom-1 w-12 h-1.5 opacity-60"
                  />
                  <h2 className="relative justify-center items-center text-xl font-display">Niveau moyen</h2>
                </div>
              </div>
            </div>
          <div className="flex relative flex-col gap-5 md:flex-row py-4 px-2">
            <div
              className="flex relative flex-col p-4 space-y-4 bg-white rounded-lg border border-gray-200 transition-shadow duration-500 ease-out cursor-pointer hover:shadow-xl"
            >
              <div className="flex relative justify-center items-center space-x-3">
                <div className="justify-center items-center">
                  <span
                    className="relative justify-center items-center top-0 left-4 w-3 h-3 rounded-full opacity-50"
                  />
                  <h3 className="flex justify-center items-center relative py-2">divisé en quatre ans</h3>
                  <Image src="/images/sc.jpg" alt="img" width={290} height={175}
                  className="block object-cover object-center justify-center items-center w-full h-full rounded-lg " />
                  </div>
                </div>
                <div className="flex relative justify-center items-center">
                  <span
                    className="absolute justify-center items-center right-0 bottom-1 w-12 h-1.5 opacity-60"
                  />
                  <h2 className="relative justify-center items-center text-xl font-display">l'enseignement moyenne</h2>
                </div>
              </div>
          </div>
        </div>

        <div class="flex w-screen text-center h-96 object-cover object-center bg-[url('/images/call.jpg')]">
          <p className="flex justify-center text-center p-6 items-center w-screen font-medium  lg:text-3xl md:text-xl sm:text-md text-amber-600">
          L'école ATLAS SCHOOL est située à Blida, Cité Al-Aichée (cité espagnol),  a une capacité maximale de 400 élèves. Il occupe une superficie de 1 500 mètres carrés, dont 600 construire, composés d'un rez-de-chaussée et d'un premier étage, dans lesquels se trouvent 21 salles d'enseignement, une salles des réunions, un restaurant, une salle des professeurs et une salle de prière, un escalier principal et un escalier de secours, et l'école comprend également un total de 26 toilettes.
          il y a 21 enseignants employer dans cette école soigneusement sélectionnés et supervisés par un inspecteur pédagogique.
          </p>
        </div>
        <div class="flex w-screen h-96 backdrop-blur-sm bg-white/30">
          <p className="flex justify-center text-left items-center w-3/4 p-4 font-medium  lg:text-3xl md:text-xl sm:text-md text-blue-600">            
          <ul class="list-disc list-inside">
            <h3>Les services assurés par cette école </h3> <br/>
            <li>La crèche en deux phases</li>
            <li>l'enseignement primaire</li>
            <li>l'enseignement moyenne</li>
            <li>Organiser des formations pour les enseignants</li>
            <li>Organiser des formations pédagogique pour les élèves</li>
            <li>Organiser des cours de soutien pour différents niveaux</li>
          </ul>
          </p>      
        </div>
        <div className="flex w-screen h-auto m-2 object-cover object-center backdrop-contrast-50 bg-white/20">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="md:shrink-0">
            <Image src="/images/sc.jpg" width={290} height={275} className="h-48 w-full object-cover md:h-full md:w-48" alt="image" />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">NOTRE STRATÉGIE</div>
              <p className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Progrès continu et création de succès</p>
              <p className="mt-2 text-slate-500">Offrant un environnement multiculturel et convivial dans lequel les étudiants peuvent apprendre avec succès les compétences de base et le contenu académique de base, développer leurs talents et leurs compétences sociales.</p>
            </div>
          </div>
        </div>
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="md:shrink-0">
            <Image src="/images/pr.jpg" width={290} height={275} className="h-48 w-full object-cover md:h-full md:w-48" alt="image" />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">NOS VALEURS</div>
              <p className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">C’EST PLUS QU’UNE ÉCOLE!</p>
              <p className="mt-2 text-slate-500">Élargir les valeurs au-delà de la salle de classe en s'assurant que les compétences et les concepts enseignés dans la salle de classe sont authentiquement utiles dans le monde au-delà de l'école.Des valeurs fortes sont au cœur de notre Ecole.</p>
            </div>
          </div>
        </div>
        </div>

      </>
  )
}
