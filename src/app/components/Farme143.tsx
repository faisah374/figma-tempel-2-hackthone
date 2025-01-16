import React from 'react';
import Image from 'next/image';
const Farme143 = () => {
  return (
    <div className='max-w-[1440px] h-[209px]' >
        <div>
            <Image src="/farme143.png" width={1440} height={209} alt='pic'/>
        </div>
        <div className='w-[1440px] h-[64px] text-[#2A254B]' >
         <button className='w-[137px] h-[48px] rounded-xl'>Category </button>
         <button className='w-[137px] h-[48px] rounded'>Price</button>
         <button className='w-[137px] h-[48px] rounded'>Brand</button>

        </div>
      
    </div>
  );
}

export default Farme143;

