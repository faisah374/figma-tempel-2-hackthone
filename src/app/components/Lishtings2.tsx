import React from 'react';
import Image from 'next/image';
const Lishtings2 = () => {
  return (
    <div>
        <div className=' w-[1440] h-[744px]'>
            <div className='w-[330px] h-[45px] mt-[64px] ml-[80px]'>
              <h2 className='font-normal text-[32px] leading-[44.8px] text-[#2A254B]'>
              Our popular products </h2>
            </div>
            <div className=' grid cols-1 sm:grid-cols-2  
      lg:grid-cols-3 xl:grid-cols-3 my-[50px] gap-[24px]'>
           
    <div className='w-full xl:w-[630px] h-[462px] mt-[134px] ml-[80px] gap-[24px] text-[20px] font-normal leading-[28px] text-[#2A254B]'>
                            
    <Image src='/Large.png' width={630}  height={375} alt='c' />
                              
    <p>The Poplar suede sofa
    </p>
    <p>£980</p>                      
    </div>
    <div className='w-full xl:w-[305px] h-[462px] mt-[134px] ml-[80px] gap-[24px] text-[20px] font-normal leading-[28px] text-[#2A254B]'>
                            
     <Image src='/Photo (6).png' height={375} width={305} alt='chair' />
                              
                              
                              <p>The Dandy chair</p>
                              <p>£250</p>
                              </div>
                            
     <div className='w-full xl:w-[305px] h-[462px] mt-[134px] ml-[80px] gap-[24px] text-[24px] font-normal leading-[28px] tex-[#2A254B]'>
      <Image  src= '/photo5.png' height={375} width={305} alt='pic'     />
      <p>The Dandy chair</p>
      <p>£250</p>
      </div> 
      <div className='w-[170px] h-[56] mt-[100px] ml-[625px] '>
        <button className='font-normal text-[16px] text-[#2A254B bg-[#F9F0F9]'>View collection</button>
        </div>                        
            
              
          
            </div>
      
          </div>
           </div> 

    
  );
}

export default Lishtings2;
