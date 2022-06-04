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
          from-amber-100
          to-blue-100">
        <Carousel />
  <div className="flex absolute">
          <div className="flex items-center sm:flex-row mt-5 md:mt-30 lg:mt-40 md:ml-10  ">
            <div className="p-8 text-center ">
              <h1 className='z-10 md:text-5xl text-left font-bold sm:text-2xl font-display text-amber-500 hover:text-amber-400'>
                Avec nous, 
                <span className='block text-left pl-2 text-amber-500 hover:text-amber-400'>
                Où la qualité de l'éducation avant tout
                </span>
              </h1>
              <p className="p-2 text-xs text-left text-amber-600 md:text-xl font-semibold hover:underline underline-offset-4 hover:text-amber-400">
              Avec une équipe éducative experte et de nouvelles structures pédagogiques
              </p>
            </div>
          </div>
        </div>
      </div>
        <div className="grid lg:grid-cols-3 pt-2">
        <div className="m-2  rounded-lg shadow-xl lg:flex lg:max-w-lg">
            <Image src="/images/nv1.jpg" className="w-1/1 lg:w-1/2 rounded-l-2xl" width={600} height={275} />
            <div className="p-6 bg-gray-50">
                <h2 className="mb-2 text-2xl font-bold text-gray-900">Crèche</h2>
                <p className="text-gray-600">Les crèches et jardins d'enfants ont un rôle éducatif en cohérence avec les caractéristiques 
                de la tranche d'âge vécue par les enfants qui en font partie et qui l'intègrent entre 3 et 6 ans.</p>
            </div>
        </div>
        <div className="m-2  rounded-lg shadow-xl lg:flex lg:max-w-lg">
        <Image src="/images/nv2.jpg" className="w-1/1 lg:w-1/2 rounded-l-2xl" width={600} height={275} />
            <div className="p-6 bg-gray-50">
                <h2 className="mb-2 text-2xl font-bold text-gray-900">Prémaire</h2>
                <p className="text-gray-600">C'est la première étape de l'école qui entraîne l'enfant à penser correctement 
                et lui fournit un minimum de compétences, de connaissances et d'expérience.</p>
            </div>
        </div>
        <div className="m-2 rounded-lg shadow-xl lg:flex lg:max-w-lg">
        <Image src="/images/nv3.jpg" className="w-1/1 lg:w-1/2 rounded-l-2xl" width={600} height={275} />
            <div className="p-6 bg-gray-50">
                <h2 className="mb-2 text-2xl font-bold text-gray-900">CEM</h2>
                <p className="text-gray-600">la phase cem est considérée comme faisant partie de l'enseignement 
                secondaire et comme une étape de transition entre l'enseignement primaire et l'école primaire.</p>
            </div>
        </div>
        </div>

        <div className="flex w-screen text-center mt-6 h-96 object-cover object-center bg-[url('/images/tableau.jpg')]">
          <p className="flex justify-center text-center p-6 items-center w-screen font-medium  lg:text-xl md:text-xl sm:text-md text-amber-500">
          L'école ATLAS SCHOOL est située à Blida, Cité Al-Aichée (cité espagnol),  a une capacité maximale de 400 élèves. Il occupe une superficie de 1 500 mètres carrés, dont 600 construire, composés d'un rez-de-chaussée et d'un premier étage, dans lesquels se trouvent 21 salles d'enseignement, une salles des réunions, un restaurant, une salle des professeurs et une salle de prière, un escalier principal et un escalier de secours, et l'école comprend également un total de 26 toilettes.
          il y a 21 enseignants employer dans cette école soigneusement sélectionnés et supervisés par un inspecteur pédagogique.
          </p>
        </div>
        <div className="flex w-screen h-96 backdrop-blur-sm">
          <p className="flex justify-center text-left items-center w-3/4 p-4 font-medium  lg:text-xl md:text-xl sm:text-md text-blue-600">            
          <ul className="list-disc list-inside">
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
        <div className="flex w-screen h-auto object-cover object-center justify-center items-center">
        <div className="max-w-md mx-2 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="flex md:shrink-0 justify-center items-center">
            <Image src="/images/sc.jpg" width={290} height={275} className="h-48 w-full object-cover md:h-full md:w-48" alt="image" />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">NOTRE STRATÉGIE</div>
              <p className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Progrès continu et création de succès</p>
              <p className="mt-2 text-slate-500">Offrant un environnement multiculturel et convivial dans lequel les étudiants peuvent apprendre avec succès les compétences de base et le contenu académique de base, développer leurs talents et leurs compétences sociales.</p>
            </div>
          </div>
        </div>
        <div className="max-w-md mx-2 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="flex md:shrink-0 justify-center items-center">
            <Image src="/images/sc.jpg" width={290} height={275} className="h-48 w-full object-cover md:h-full md:w-48" alt="image" />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">NOTRE STRATÉGIE</div>
              <p className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Progrès continu et création de succès</p>
              <p className="mt-2 text-slate-500">Offrant un environnement multiculturel et convivial dans lequel les étudiants peuvent apprendre avec succès les compétences de base et le contenu académique de base, développer leurs talents et leurs compétences sociales.</p>
            </div>
          </div>
        </div>
        </div>

        <div className="flex w-screen mt-8 mb-8 text-center h-96 object-center bg-[url('/images/book.jpg')]">
          <p className="flex justify-center text-center p-6 items-center w-screen  lg:text-5xl md:text-3xl font-bold sm:text-md text-blue-800">
          Des moyens modernes pour assurer une meilleure éducation
         </p>
        </div>
        <div className="flex justify-center m-10">
          <div className="px-20 py-28 space-y-4 font-semibold tracking-tight text-6xl hover:text-blue-600">Notre vision à l'éducation</div>
        </div>
        <div className="grid lg:grid-cols-4 mb-6">
          <div className="max-w-xs mx-4 mb-2 rounded-lg border-2 hover:shadow-2xl">
              <Image src="/images/ecole1.jpg" width={290} height={275} alt="" className="w-full h-48" />
              <div className="px-6 py-4">
                  <h4 className="mb-3 text-xl font-semibold tracking-tight text-gray-800 text-center">Développement de l'éducation</h4>
                  <p className="leading-normal text-gray-700 text-justify ">Allouer un budget à l'éducation pour la développer à chaque époque, améliorer la situation économique de l'enseignant et lui assurer un niveau de vie convenable, c'est la base du progrès de toute nation, comment pas, et c'est lui qui y contribue à l'établissement des savants et des penseurs.</p>
              </div>
          </div>
          <div className="max-w-xs mx-4 mb-2 rounded-lg border-2 hover:shadow-2xl">
          <Image src="/images/ecole2.jpg" width={290} height={275} alt="" className="w-full h-48" />
              <div className="px-6 py-4">
                  <h4 className="mb-3 text-xl font-semibold tracking-tight text-gray-800 text-center">Le professeur est la base</h4>
                  <p className="leading-normal text-gray-700 text-justify ">Le début au Collège d'éducation devrait passer par la bonne préparation de l'enseignant, le développement de ses compétences et capacités, et sa formation de manière avancée pour communiquer avec les étudiants, résoudre les problèmes intelligemment et traiter avec tous les types d'étudiants. l'enseignant est la base du processus d'apprentissage.</p>
              </div>
          </div>
          <div className="max-w-xs mx-4 mb-2 rounded-lg border-2 hover:shadow-2xl">
          <Image src="/images/ecole3.jpg" width={290} height={275} alt="" className="w-full h-48" />
              <div className="px-6 py-4">
                  <h4 className="mb-3 text-xl font-semibold tracking-tight text-gray-800 text-center">Réforme de l'institution scolaire</h4>
                  <p className="leading-normal text-gray-700 text-justify">
                  La détérioration des institutions affecte la société dans son ensemble et empêche l'existence d'un système éducatif solide capable de produire des individus efficaces capables de construire la société et d'améliorer ses conditions dans tous les domaines. La fondation signifie la réforme de la société.</p>
              </div>
          </div>
          <div className="max-w-xs mx-4 mb-2 rounded-lg border-2 hover:shadow-2xl">
          <Image src="/images/cl.jpg" width={290} height={275} alt="" className="w-full h-48" />
              <div className="px-6 py-4">
                  <h4 className="mb-3 text-xl font-semibold tracking-tight text-gray-800 text-center">Un projet pour l’école, c’est un projet pour la société </h4>
                  <p className="leading-normal text-gray-700 text-justify">
                  Le système scolaire doit être transformé en profondeur pour former les générations futures aux problèmes qui les attendent tout en restaurant la justice sociale, plaident, dans une tribune au « Monde », les responsables éducation des partis de la Nupes et des experts issus de la communauté éducative.</p>
              </div>
          </div>
      </div>
      </>
  )
}
