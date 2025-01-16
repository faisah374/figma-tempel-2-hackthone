import React from 'react';
import Image from 'next/image';
const Hero = () => {
  return (
    
       <div className='  w-[1440px] h-[704px] text-white bg-white my-[4px] mt-[auto] mb-[4px] mx-auto ml-[10px] py- '>
       <div className=' flex gap-56  w-[1280px] h-[584px]  bg-[#2A254B]'>
       <div className='w-[513px] h-[90px] mt-[60px] ml[80px]'>
       <span> <h2 className='text-[32px] font-normal leading-[44.8px] text-[#FFFF]'>
          The furniture brand for the future, with timeless designs</h2></span>
        {/* <button className='w-[170px] h-[56px] py-[16px] px[32px] flex gap-[10px] bg-blue-400 mb-[4px] my-[44px] ml-[20px]'>View collection</button> */}
      <a href="/about">  <button  className="bg-[#F9F9F926] text-white font-bold py-2 px-4 rounded ">View Collection</button></a>
      <span> <p className='w-[602px] h-[81px] my-[443px 60px] text-[18px] leading-[27px] font-normal my-[44px]'>A new era in eco friendly furniture with Avelon, the French luxury retail brand
with nice fonts, tasteful colors and a beautiful way to display things digitally 
using modern web technologies.</p></span>
       </div>
      
      
        <div className='w-[520px] h-[584px] absolute left-[760px]  '><Image src='/Right Image.png' width={520} height={584} alt='chair' /></div> 
     
        </div>
        </div>  
    
  );
}

export default Hero;
