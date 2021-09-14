import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { NavLink  } from "react-router-dom"

// Email icon
import { AiFillAppstore } from 'react-icons/ai'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <NavLink exact to="/" 
              activeStyle={{
                color:'black'
              }}
              className="flex items-center text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md">
              <AiFillAppstore/>
              <a class="font text-xl ml-3">JmPaunlagui</a>
            </NavLink>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <NavLink exact to ="/projects"
                    className="text-gray-500 hover:text-gray-900 px-3 py-2 font-pages"
                    activeStyle = {{
                      color:'black'
                    }}>Projects</NavLink>
                  <NavLink exact to ="/resume"
                    className="text-gray-500 hover:text-gray-900 px-3 py-2 font-pages"
                    activeStyle = {{
                      color:'black'
                    }}>Resume</NavLink>
                  <NavLink exact to ="/services"
                    className="text-gray-500 hover:text-gray-900 px-3 py-2 font-pages"
                    activeStyle = {{
                      color:'black'
                    }}>Services</NavLink>
                  <NavLink exact to ="/contact"
                    className="text-gray-500 hover:text-gray-900 px-3 py-2 font-pages"
                    activeStyle = {{
                      color:'black'
                    }}>Contact</NavLink>
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
                 
                <NavLink exact to ="/projects"
                  className="text-gray-500 hover:text-gray-900 block px-3 py-2 font-pages"
                  activeStyle = {{
                    color:'black'
                  }}>Projects</NavLink>
                <NavLink exact to ="/resume" 
                  className="text-gray-500 hover:text-gray-900 block px-3 py-2 font-pages"
                  activeStyle = {{
                    color:'black'
                  }}>Resume</NavLink>
                <NavLink exact to ="/services"
                  className="text-gray-500 hover:text-gray-900 block px-3 py-2 font-pages" 
                  activeStyle = {{
                    color:'black'
                  }}>Services</NavLink>
                <NavLink exact to ="/contact"
                  className="text-gray-500 hover:text-gray-900 block px-3 py-2 font-pages" 
                  activeStyle = {{
                    color:'black'
                  }} >Contact</NavLink>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Navbar