import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faMapMarkedAlt, faMobileAlt, faMailBulk, faGlobe } from '@fortawesome/free-solid-svg-icons'
/*import { faFacebook } from '@fortawesome/free-brands-svg-icons'*/
/*import { faCoffee } from '@fortawesome/free-regular-svg-icons'*/

export default function about() {
  return (
    <> 
    <div className="min-h-screen my-6 py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h1 className="text-base text-blue-800 font-semibold tracking-wide uppercase">à Propos</h1>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          VOUS SOUHAITEZ NOUS CONTACTER!
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          L'ATLAS SCHOOL est un groupe scolaire créé en septembre 2021 et agréé par le Ministère de l'Education Nationale, composée de deux phases, 
          en maternelle, un cycle primaire et un cycle moyen, tandis que le cycle de lycée devrait ouvrir plus tard.          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-lg bg-blue-800 text-white">
                  <FontAwesomeIcon icon={faMapMarkedAlt}  className='h-8 w-8 inline-block' />
                  </div>
                  <p className="items-center justify-center ml-16 text-lg leading-6 font-medium text-gray-900">Cité espagnole (Cité l’aichi), Oulad aiche, Blida</p>
          </div>
        </div>
        <div className="mt-10">
          <div className="relative space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white">
                  <FontAwesomeIcon icon={faMobileAlt}  className=' h-8 w-8 inline-block' aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">0540646898</p>
          </div>
        </div>
        <div className="mt-10">
          <div className="relative space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white">
                  <FontAwesomeIcon icon={faMailBulk}  className=' h-8 w-8 inline-block' aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">contact.atlas.school@gmail.com</p>
          </div>
        </div>
        <div className="mt-10">
          <div className="relative space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white">
                  <FontAwesomeIcon icon={faGlobe}  className=' h-8 w-8 inline-block' aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Site web</p>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}
