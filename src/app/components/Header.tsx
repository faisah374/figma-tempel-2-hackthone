import React from 'react';

const Header = () => {
  return (
    <div className='max-w-[1440px] max-h-[277px] flex' >
      <div >
         <p className='py-24 px-32 text-[36px] font-clash Display text-[#2A254B] '>A brand built on the love of craftmanship,
        quality and outstanding customer service</p>

      </div>
      <div className='py-24 px-280 w-[128px] h-[24px]' >
        <button className='py-4 px-8  text-[16px] leading-6 font-satoshi text-[#2A254B] bg-[#F9F9F9]'>View our products</button>
      </div>
    </div>
  );
}

export default Header;
