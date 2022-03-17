import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function contact() {
  return (
    <> 
    <div className='flex justify-center items-center md:col-span-1 mt-10 sm:mt-0 w-screen min-h-screen p-2 m-2 md:grid md:grid-cols-3 md:gap-6'>
        <h1 className='px-4 sm:px-0 first-line:max-w-2xl font-bold text-2xl py-16 lg:max-w-7xl lg:px-8'>Contact</h1>
    </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="first-name" className="block text-md font-medium text-gray-700">
                        Prénom
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-amber-300 border-2 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                        Nom
                      </label>
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="mt-1 focus:ring-blue-500 focus:border-blue-500 border-amber-300 border-2 block w-full shadow-sm sm:text-sm rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                       E-mail
                      </label>
                      <input
                        type="text"
                        name="email-address"
                        id="email-address"
                        autoComplete="email"
                        className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-amber-300 border-2 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="wilaya" className="block text-sm font-medium text-gray-700">
                        Wilaya
                      </label>
                      <select
                        id="wilaya"
                        name="wilaya"
                        autoComplete="wilaya"
                        className="mt-1 block w-full py-2 px-3 border-amber-300 border-2 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      >
                        <option>Blida</option>
                        <option>Alger</option>
                      </select>
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                        Ville
                      </label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        autoComplete="address-level2"
                        className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-amber-300 border-2 rounded-md"
                      />
                    </div>

                    <div className="col-span-6">
                      <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                        L'adresse
                      </label>
                      <input
                        type="text"
                        name="street-address"
                        id="street-address"
                        autoComplete="street-address"
                        className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-amber-300 border-2 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                        Code postal
                      </label>
                      <input
                        type="text"
                        name="postal-code"
                        id="postal-code"
                        autoComplete="postal-code"
                        className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-amber-300 border-2 rounded-md"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Envoyer
                  </button>
                </div>
              </div>
            </form>
          </div>
    </>
  )
}
