import React from 'react'

const Footer = () => {
  return (
      <footer className="w-[1200px] h-[348px] ml-[120px] mt-24">
           <hr className="h-px my-8 bg-neutral-200 border-1 dark:bg-neutral-200"/>   
           <div classNameName='flex flex-wrap mt-20'>
               <div className="md:flex md:justify-between">
                 <div className="mb-6 md:mb-0">
                     <a href="www.com" className="flex items-center">
                     <span className="font-sans text-2xl font-bold leading-8 tracking-normal h-8">A+</span>
                     <span className="self-center font-sans text-2xl font-normal leading-8 tracking-normal ml-2 whitespace-nowrap">Studio</span>
                     </a>
                     <p className='text-sm w-[270px] h-[88px] text-neutral-600 mt-5'>Leading digital agency with solid design and development expertise. We build readymade websites, mobile applications, and elaborate online business services.</p>
                     <div className="sm:flex sm:items-center sm:justify-between mt-5">
                          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                              <a href="www.com" className="w-[36px] h-[36px]">
                                  <img src="Images/facebook.png" alt="facebook"/>
                              </a>
                              <a href="www.com" className="w-[36px] h-[36px]">
                                  <img src="Images/twitter.png" alt="twitter"/>
                              </a>
                              <a href="www.com" className="w-[36px] h-[36px]">
                                  <img src="Images/linkedin.png" alt="linkedin"/>
                              </a>               
                          </div>
                     </div>
                 </div>
                 <div className="grid grid-cols-2 gap-8 space-x-10 sm:gap-6 sm:grid-cols-4">
                     <div>
                         <h2 className="mb-6 text-xl font-normal">What We Do</h2>
                         <ul className="text-sm font-normal ml-1">
                             <li className="mb-4">
                                 <a href="www.com" className="hover:underline">Web Design</a>
                             </li>
                             <li className="mb-4">
                                 <a href="www.com" className="hover:underline">App Design</a>
                             </li>
                             <li className="mb-4">
                                 <a href="www.com" className="hover:underline">Social Media Manage</a>
                             </li>
                             <li>
                                 <a href="www.com" className="hover:underline">Market Analysis Project</a>
                             </li>
                         </ul>
                     </div>
                     <div>
                         <h2 className="mb-6 text-xl font-normal">Company</h2>
                         <ul className="text-sm font-normal ml-1">
                             <li className="mb-4">
                                 <a href="www.com" className="hover:underline">About Us</a>
                             </li>
                             <li className="mb-4">
                                 <a href="www.com" className="hover:underline">Career</a>
                             </li>
                             <li className="mb-4">
                                 <a href="www.com" className="hover:underline">Become Investor</a>
                             </li>
                         </ul>
                     </div>
                     <div>
                         <h2 className="mb-6 text-xl font-normal">Support</h2>
                         <ul className="text-sm font-normal ml-1">
                             <li className="mb-4">
                                 <a href="www.com" className="hover:underline">FAQ</a>
                             </li>
                             <li className="mb-4">
                                 <a href="www.com" className="hover:underline">Policy</a>
                             </li>
                             <li className="mb-4">
                                 <a href="www.com" className="hover:underline">Business</a>
                             </li>
                         </ul>
                     </div>
                     <div>
                         <h2 className="mb-6 text-xl font-normal">Contact</h2>
                         <ul className="text-sm font-normal ml-1">
                             <li className="mb-4">
                                 <a href="www.com" className="hover:underline">WhatsApp</a>
                             </li>
                             <li className="mb-4">
                                 <a href="www.com" className="hover:underline">Support 24</a>
                             </li>
                         </ul>
                     </div>
                 </div>
             </div>
           <hr className="h-px my-8 bg-zinc-100 border-1 dark:bg-zinc-100"/>   
             <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 ml-[550px]">Copyright © 2022 Avi Yansah</span>
          </div>
       </footer>
    )
}

export default Footer
