import React from 'react'

const OurClient = () => {
  return (
    <div class="flex flex-row space-x-16  mt-5 border border-white w-[1200px] h-[124px] ml-[120px]">
    <div class="w-[336px] h-28 mt-1">
      <h1 class="font-sans text-[40px] -mt-3 font-semibold">Our Client</h1>
      <p class="text-neutral-500 text-base font-normal mt-3">Several selected clients, who already believe in our service.</p>
    </div>
    <div class="w-[150px] h-12 mt-14">
      <a href="www.com">
        <img src="Images/Google Logo.png" alt="Google Logo"/>
      </a>
  </div>
    <div class="w-[166px] h-14 mt-[50px]">
      <a href="www.com">
        <img src="Images/Airbnb Logo.png" alt="Airbnb Logo"/>
      </a>
    </div>
    <div class="w-[166px] h-7 mt-16">
      <a href="www.com">
        <img src="Images/Uber Eats Logo.png" alt="Uber Eats"/>
      </a>
    </div>
    <div class="w-[140px] h-11 mt-[70px]">
      <a href="www.com">
        <img src="Images/Amazon Logo.png" alt="Amazon Logo"/>
      </a>
    </div>
  </div>
  )
}

export default OurClient
