import React from 'react';

const Sigup = () => {
  return (
    <div className='w-[1440px] h-[481px] bg-[#F9F9F9]'>
      <div className='w-[1273] h-[364px] mt-[52px] ml-[93px] bg-white'>
       <h1 className=' w-[571px] h-[50px] mt-[140px] ml-[230px] font-normal text-[36px] leading-[50.4px] text-center text-[#2A254B]' >
        Join the club and get the benefits</h1>
        <p className='w-[470px] h-[48px] text-[16px] font-normal text-center text-[#2A254B] ml-[270px]'>  Sign up for our newsletter and receive exclusive offers on new ranges, sales, 
            pop up stores and more</p>
            <div className='text-center w-[472px] h-[56px] mt-[100px] ml-[400px] '>
    <form id="signupForm">
      <input className='w-[354px] h-[56px] bg-[#F9F9F9]' type="email" id="email" placeholder="your@email.com" required />
      <button className="w-[118px] h-[56px] text-white bg-[#2A254B] text-[16px]">Sign Up</button>
    </form>
    </div>
      </div>
    
    </div>
  );
}

export default Sigup;
