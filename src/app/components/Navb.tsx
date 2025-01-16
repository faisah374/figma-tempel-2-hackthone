import Image from "next/image";
import React from 'react';
import Link from "next/link";

const Navb = () => {
  return (
   <>
   
    <div  className=" flex flex-wrap md:flex-row justify-center items-center gap-[350px] mx-auto py-14 px-20">
      {/* <div className="w-16px h-16 top-26px left-28px "> */}
        <Image src='/Search.png'width={16} height={16} alt="secrh" className=" absolute left-[20px]"  />
      {/* </div> */}
      <div className="flex items-center">
      <div className="w-[65px] h-[30px ]top-[20px ]left-[667px]  items-center">
        <h1 className="text-24px font-clash leading-[29.52px] text-[#22202E] ml-3">Avion</h1></div>
        </div>
      <div className=" flex justify-center items-center absolute right-10 gap-3">
        <a href="../shoppingcart">
        <Image  src='/cart.png' width={16} height={16} alt="cart" className="top-26px left-[1364px] text-[#FFFFFF]"/> 
       </a>
        <Image src='/user.png' width={14} height={14} alt="user"   /> 
      </div>
      
    </div>
   <hr className="" />
<div className="   flex justify-center gap-[44px] text-[#726E8D] text-16px leading-[21.6px] font-normal ">
  <ul className="hidden md:block">
    <li className="space-x-5">
  <Link href='/'>Plant pots</Link>
  <Link href='/'>Ceramics</Link>
  <Link href='/'>Tables</Link>
  <Link href='/'>Crockery</Link>
  <Link href='/'>Chairs</Link>
  <Link href='/'>Tableware</Link>
  <Link href='/'>Cutlery</Link>
  </li>
   </ul>
</div>
   
   </> 
  )
    
}

export default Navb;
