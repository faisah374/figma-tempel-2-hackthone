import React from 'react';
import Image from 'next/image';
const Features2about = () => {
  return (
    <div className=' max-w-[1440px] max-h-[603px] flex gap-8'>
      <div>
        <Image src="/image6.png" width={720} height={603} alt='pic' />
      </div>
      <div className='w-[720px] h-[603px] bg-[#F9F9F9] mt-18 ml-18'>
        
            <p className='text-[24px] text-[#2A245B]'>Our service isnot just personal, its actually
            hyper personally exquisite</p>
            <br />
            <p className='text-[#2A254B] text-[16px] '>When we started Avion, the idea was simple. 
                Make high quality furniture affordable and available for the mass 
                market. <br/>Handmade, and lovingly crafted furniture and 
           
                homeware is what we live, breathe and design so our Chelsea 
                boutique become the hotbed for the London interior design community.</p>
        
        <button className=" mt-80 bg-[#F9F9F9] text-[#2A254B] font-bold py-2 w-full sm:w-auto sm:px-4 "
                        style={{ fontFamily: "Satoshi" }}
                    >
                        Get in touch
                    </button>
      </div>
    </div>
  );
}

export default Features2about;
