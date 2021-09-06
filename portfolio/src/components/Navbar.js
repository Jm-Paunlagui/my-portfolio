import React, { useState } from "react";
import { Transition } from "@headlessui/react";

// Email icon
import { HiOutlineMail } from 'react-icons/hi'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
               <HiOutlineMail/>
              <span class="font text-base ml-3">
                johnpaunlagui@gmail.com
              </span>
            </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md font-pages">Projects</a>
                  <a className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md font-pages">Resume</a>
                  <a className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md font-pages">Services</a>
                  <a className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md font-pages">Contact</a>
                </div>
              </div>
            <div className="-mr-2 flex md:hidden">
              <button aria-controls="mobile-menu" aria-expanded="false" type="button" onClick={() => setIsOpen(!isOpen)} 
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-gray-800">
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <Transition show={isOpen} enter="transition ease-out duration-100 transform" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="transition ease-in duration-75 transform" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a className="text-gray-500 hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md font-pages">Projects</a>
                <a className="text-gray-500 hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md font-pages">Resume</a>
                <a className="text-gray-500 hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md font-pages">Services</a>
                <a className="text-gray-500 hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md font-pages">Contact</a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
      <main>
      <div className="flex relative z-20 items-center">
        <div className="container mx-auto px-6 flex flex-col justify-between items-center relative py-4">
            <div className="flex flex-col">
                <img src="https://en.gravatar.com/userimage/151334469/30b21f5b2a8160efe9f032d3568695e9.png?size=200" className="rounded-full w-28 mx-auto"/>
                <p className="text-3xl my-6 text-center dark:text-white">
                    Hi, I&#x27;m Jm Paunlagui 🤘
                </p>
                <h2 className="max-w-3xl text-5xl md:text-6xl font-bold mx-auto dark:text-white text-gray-800 text-center py-2">
                    Building digital products, brands, and experiences.
                </h2>
                <div className="flex items-center justify-center mt-4">
                    <a href="#" className="uppercase py-2 my-2 px-4 md:mt-16 bg-transparent dark:text-gray-800 dark:bg-white hover:dark:bg-gray-100 border-2 border-gray-800 text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white text-md">
                        CONNECT WITH ME
                    </a>
                </div>
            </div>
        </div>
    </div>
      </main>
    </div>
  );
}