import React from 'react'

const HappyClient = () => {
  return (
    <div className="flex flex-wrap w-[1264px] h-[597px] ml-[107px]">
      <div className="flex-none w-full h-24  text-center">
          <h1 className='font-sans font-semibold tracking-normal text-[36px]'>What our happy client say</h1>
          <p className='font-sans font-normal text-neutral-500 tracking-normal text-[16px] mt-2'>Several selected clients, who already believe in our service.</p>
      </div>
      <div className='w-[480px]'>
         <div className='flex flex-wrap'>
             <img src="Images/dot.png" alt="dots" className='ml-[215px] w-[260px] h-[190px] mt-10'/>
             <img src="Images/Ellipse 87.png" alt="elipse-pink" className='w-[140px] h-[140px] mt-24 ml-8'/>
           <img src="Images/unsplash_MTZTGvDsHFY.png" alt="happy-client" className='-mt-[405px] ml-6 w-[450px] h-[450px]'/>
           </div>
      </div>
      <div className='w-[380px] mt-[198px]'>
      <h1 className='font-sans font-semibold tracking-normal text-[24px] ml-3'>Matthew Paul</h1>
      <div className="flex flex-row h-10 space-x-8 mt-28 ml-3">
      <span className="flex-end w-4 h-4 bg-blue-700 rounded-full"></span>
        <span className="flex-end w-4 h-4 bg-sky-100 rounded-full"></span>
        <span className="flex-end w-4 h-4 bg-sky-100 rounded-full"></span>
        <span className="flex-end w-4 h-4 bg-sky-100 rounded-full"></span>
        <span className="flex-end w-4 h-4 bg-sky-100 rounded-full"></span>
      </div>
      </div>
      <div className='w-[400px]'>
      <p className='font-sans font-normal w-[399px] mt-[240px] -ml-[368px] text-neutral-500 tracking-normal text-[16px] mt-3'>Perfect, very good job! Thank you for the amazing design and work. Really impressed with the high quality and quick turnaround time. Highly recommend.</p>
      <div>
        <img src="Images/Ellipse 86.png" alt="elipse-lightpink" className='w-[184px] h-[184px] -mt-24 ml-16'/>
        <img src='Images/Group 71.png' alt="group-img" className='-mt-[290px] ml-12'/>
      </div>
      </div>
    </div>
  )
}

export default HappyClient
