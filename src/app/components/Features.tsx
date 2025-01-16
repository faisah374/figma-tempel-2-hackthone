import React from 'react';
import Image from 'next/image';
const Features = () => {
  return (
    <div>
    <div className='max-w-[1440px] max-h[603px] flex ml-[15px] mx-[5px] mb-[auto]'>
     <div>
        <p className='w-[514px] h-[68px] font-normal text-[24px] text-[#2A254B]'>
            From a studio in London to a global brand with
        over 400 outlets</p><br />
        <p className='w-[536px] h-[132px] text-[16px] font-normal text-[#505977]'>
            When we started Avion,
             the idea was simple. Make high quality furniture affordable and available for the mass market.</p>
             
            <p className='w-[536px] h-[132px] text-[16px] font-normal text-[#505977]'> Handmade,
             and lovingly crafted furniture and homeware is what we live, 
             breathe and design so our Chelsea boutique become the hotbed for
              the London interior design community.</p>
              <button className=' text-[16px] rounded-3xl text-[#2A254B] ml-[30px] mx-[auto] mb-[24px] my-[44px] '>Get in touch</button>
     </div>
     <div className='w-[720px] h-[603]' >
        <Image  src="/image5.png" width={720}  height={603} alt='pic'/>
     </div>
        </div>
     </div>
  );
}

export default Features;
