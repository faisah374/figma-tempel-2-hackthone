import React from 'react';
import Image from 'next/image';

const Feattures = () => {
  return (
    <div className=''>
      <div className='w-[1440px] h-355px py-16 px-20'>
<h3 className='w-[366px] h-[34px] ml-[529px] mt-[60px] text-[24px] font-satoshi leading-[33.6px] text-[#2A254B] py-16 px-[132]   '>
  What makes our brand different</h3>
      </div>
      <div className='flex gap-6'>
      <div>
        <Image src='/Delivery.png' width={24} height={24} alt='pic'   />
        <h4 className='w-[199px] h-[28px] text-[20px]  font-satoshi text-[#2A254B]'>Next day as standard</h4>
        <p className='w-[270px] h-[48px] font-medium text-[16px] leading-[24px] text-[#2A254B] py-36 px-20'>Order before 3pm and get your order
        the next day as standard</p>
      </div>
      <div>
       <Image src= '/pic.png' width={21} height={21} alt='pic' className='mx-[1.5] mt-[1.5] text-[#2A254B]' />
       <h4 className='w-[205px] h-[28px] text-[20px] leading-[28px] text-[#2A254B]'>Made by true artisans </h4>
       <p className='w-[266px] h-[48px] text-[16px] leading-[24px] text-[#2A254B]'>Handmade crafted goods made with
       real passion and craftmanship</p>
       <h4></h4>
      </div>
      <div>
      <Image src='/pic2.png' width={21} height={15} alt='pic' className='mt-[4.5px] ml-[1.5] text-[#2A254B]' />
      <h4 className='w-[196px] h-[28px] text-[20px] font-normal leading-[28px] text-[#2A254B]' >
        Unbeatable prices</h4>
      <p className='w-[235px] h-[48px] font-normal text-[15px] leading-[24px] text-[#2A254B]' >For our materials and quality you wonrt find better prices anywhere</p>
      </div>
      <div>
        <Image src='/pic3.png' width={16.5} height={21.42} alt='pic' className='mt-[1.5px] ml-[4.5px]' />
        <h4 className='w-[196px] h-[28px] font-normal text-[20px] leading-[28px] text-[#2A254B]'>Recycled packaging</h4>
        <p className='w-[265px] h-[48px] font-normal text-[16px] leading-[24px] text-[#2A254B] '>We use 100% recycled packaging to ensure our footprint is manageable</p>
      </div>
      </div>
    </div>
  );
}

export default Feattures;

