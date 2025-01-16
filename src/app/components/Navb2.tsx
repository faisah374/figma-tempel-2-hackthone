import React from 'react';
import  Image from 'next/image';
const Navb2 = () => {
  return (
    <div className='w-[1440px] h-[134px] '>
     <div className='flex justify-between items-center'>
     < div><h1 className=' font-Clash Display text-[24px] text-[#22202E] '>Avion</h1>
      </div>
      <div className='flex gap-[32px] text-[#726E8D]'>
    
        <a href='/'>About us</a>
     <a href='/'> Contact</a>
      <a href='/'>Blog</a>
      
      </div>
      <div className='flex gap-[16px] py-8 p-28' >
        <Image src="/Search.png" alt='' width={10} height={10} />
        <Image src="/cart.png" alt='' width={10} height={10} />
        <Image src="/user.png" alt='' width={10} height={10} />
    
      </div>
     </div>
      <div className='bg-[#F9F9F9] text-[16px] font-satoshi text-[#726E8D] flex gap-[44px] py-5 px-80 '>
        <a href="../Allproduct">All products</a>
        <a href="/">Plant pots</a>
        <a href="">Ceramics</a>
        <a href="">Tables</a>
        <a href="">Chairs</a>
        <a href="">Crockery</a>
        <a href="">Tableware</a>
        <a href="">Cutlery</a>
      </div>
    </div>
  );
}

export default Navb2;
