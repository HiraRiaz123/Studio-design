import React from 'react'
const TopMenu = () =>{
    return (
        <nav>
        <div className="flex flex-wrap justify-between items-center max-w-6xl mt-10 ml-28 h-8">
          <a href="www.com" className="flex items-center w-32">
            <span className="font-sans text-2xl font-bold leading-8 tracking-normal h-8">A+</span>
            <span className="self-center font-sans text-2xl font-normal leading-8 tracking-normal ml-2 whitespace-nowrap">Studio</span>
          </a>
          <button data-collapse-toggle="mega-menu-full" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu-full" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
          <div className="items-center justify-between font-semibold font-sans text-base font-normal leading-5 tracking-wide hidden w-full md:flex md:w-auto md:order-1">
            <ul className="flex flex-col p-4 md:p-0 mt-4 border bg-white md:flex-row md:space-x-10 md:mt-0 md:border-0">
              <li>
                <a href="www.com" className="block py-2 pl-3 pr-4 md:p-0">Home</a>
              </li>
              <li>
                <a href="www.com" className="block py-2 pl-3 pr-4 md:p-0">What To Do</a>
              </li>
              <li>
                <a href="www.com" className="block py-2 pl-3 pr-4 md:p-0">Service</a>
              </li>
              <li>
                <a href="www.com" className="block py-2 pl-3 pr-4 md:p-0">Project</a>
              </li>
              <li>
                <a href="www.com" className="block py-2 pl-3 pr-4 md:p-0">Blog</a>
              </li>
              <li>
                <a href="www.com" className="block py-2 pl-3 pr-4 md:p-0">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}
export default TopMenu;
