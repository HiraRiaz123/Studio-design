import React from 'react'

const NewsLetter = () => {
  return (
    <div className='flex w-[1272px] h-[387px] ml-[82px] mt-16'>
        <div>
          <img src="Images/dot.png" alt="dots" className='ml-[1090px] w-[175px] h-[154px]'/>
          <img src="Images/Rectangle 32.png" alt="rectangle-last" className=" w-[178px] h-[178px] mt-[55px]"/>
          <img src="Images/Rectangle 30.png" alt="big-rect" className="-mt-[330px] ml-8"/>  
          <img src="Images/Rectangle 31.png" alt="big-rect" className="-mt-[292px] ml-[732px]"/>  
          <div className="flex-wrap w-full h-24  text-center -mt-52 -ml-80">
            <h1 className='font-sans font-semibold tracking-normal text-[40px]'>Subscribe Newsletter</h1>
            <p className='font-sans font-normal text-neutral-500 tracking-normal text-[16px] mt-2 ml-7'>I will update good news and promotion service not spam</p>
          </div>  
        </div>
          <input type="text" id="email" class="rounded-[60px] p-7 w-[479px] h-[80px] -ml-[650px] mt-40 placeholder-neutral-500  font-sans font-normal text-[16px]" placeholder="Enter your email address.." required/>
          <button className="bg-blue-700 font-sans w-[188px] h-[60px] py-5 px-10 rounded-[60px] text-white text-[16px] gap-2.5 font-semibold mt-[170px] -ml-[197px]" >
             Contact Now
          </button>
    </div>
  )
}

export default NewsLetter
