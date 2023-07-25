import React from 'react'

const HeroHeadline = () => {
  return (
    <div className="flex flex-wrap border border-white justify-between items-center h-[608px] w-[1372px] mt-6 ml-14">
      <div className="flex flex-row">
        <div className="h-[608px] w-[686px]">
          <div className="ellipse w-32 h-32 ml-[623px]">
            <img src="../Images/Ellipse 85.png" alt="Ellipse" />
          </div>
          <h1 className="border border-white font-sans font-semibold h-12 mt-3 max-w-lg ml-32 text-[40px] tracking-normal">A Digital Product Agency</h1>
          <br />
          <p className="border border-white font-sans font-normal text-base ml-32 h-20 max-w-md tracking-normal text-gray-600">
            Leading digital agency with solid design and development expertise.
            We build readymade websites, mobile applications, and elaborate
            online business services.
          </p>
          <div className="dot w-[404px] h-[154px] mt-14 ml-[68px]">
            <img src="../Images/Dot Ornament.png" alt="Dot Ornament" />
          </div>
          <div className="ml-32 border border-white -mt-48 w-52 h-16">
             <button className="bg-blue-700 font-sans w-52 h-16 py-5 px-10 rounded-full text-white text-xl gap-2.5 font-semibold" >
               Contact Now
             </button>
          </div>
        </div>
        <div className="h-[608px] w-[686px]">
          <div className="border border-white h-44 w-44 rounded-br-3xl mt-[432px] ml-[402px]">
            <img src="../Images/Rectangle 23.png" alt="top-manu-rectangle"/>
          </div>
          <div className="border border-white h-[512px] mt-[-608px]">
            <img src="../Images/image 8.png" alt="top-manu-img" className="h-full -ml-1" /> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroHeadline
