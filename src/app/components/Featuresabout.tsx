import React from 'react';
import Image from 'next/image';
const Featuresabout = () => {
  return (
    <div className=' w-[1440px] h-[598px] py-15 px-20 flex gap-4'>
      <div className='w-[634px] h-[478px] bg-[#2A254B]'>
        <p className=' ml-16 mt-5 w-[383px] h-[39px] font-Clash Display text-[32px] text-[#FFFFFF]'>It started with a small idea</p>
        <br />
        <p className=' ml-16 w-[495px] h-[48px] font-Satoshi text-[18px] text-[#FFFF] '>A global brand with local beginnings, our story begain in a small studio in South London in early 2014</p>
      <button className='m-80 ml-16 bg-[#F9F9] text-white'>View collection</button></div>
      
      <div> 
        <Image  src="/Image Block.png" width={630} height={478} alt='pic'  />
      </div>
    </div>
  );
}

export default Featuresabout;
