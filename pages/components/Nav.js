import React from 'react'

export default function Nav() {
    return (
        <div>
                <nav className="flex items-center justify-between flex-wrap bg-gray-100 p-4 drop-shadow-md">
    <div className="flex items-center flex-shrink-0 ml-4 mr-6">
      <span className="font-semibold text-3xl tracking-tight">Pose.</span>
    </div>
    <div className="block lg:hidden">
      <button className="flex items-center px-3 py-2 border rounded text-gray-400 border-teal-400 hover:text-white hover:border-white">
        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div className="text-sm lg:flex-grow">
      </div>
      <div>
      <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-gray-400 mr-4">
          Sign in
        </a>
        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-gray-400 mr-4">
          Bag
        </a>
      </div>
    </div>
  </nav>
        </div>
    )
}
