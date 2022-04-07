import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faEllipsisH, faEllipsisV } from '@fortawesome/free-solid-svg-icons'

const user = {
  name: 'abdelaziz bakir',
  email: 'bakir@atlas.com',

  }
const navigation = [
]
const userNavigation = [
  { name: 'Déconnexion', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function dash() {
  return (    
      <div className="relative min-h-screen mt-16">
        <header className="bg-white shadow-md w-screen ">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="static left-4 text-3xl font-bold text-gray-900">Tableau de bord</h1>
          
                      {/* Profile dropdown */}
                      <Menu as="div" className="m-2 right-2 static">
                        <div>
                          <Menu.Button className="max-w-sm bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span className="sr-only">Ouvrir le menu utilisateur</span>
                            <img className="h-10 w-10 rounded-full" src={'/user.jpg'} alt="" />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                    href={item.href}
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
            </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {/* Replace with your content */}
            <div className="px-4 py-6 sm:px-0">
              <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
              ppppp
              </div>
            </div>
            {/* /End replace */}
          </div>
        </main>
      </div>
  )
}
