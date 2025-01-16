import Image from 'next/image'

const Listings = () => {
  return (
    
    <div className=' w-[1440] h-[761px]'>
      <div className='w-[217px] h-[39px] mt-[80px] ml-[80px]'>
        <h2 className='font-normal text-[32px] leading-[39.3px] text-[#2A254B]'>New ceramics </h2>
      </div>
      <div className='grid cols-1 sm:grid-cols-2
     lg:grid-cols-4 xl:grid-cols-4 my-[50px] gap-[24px]'>
        <div className='w-full xl:w-[305px] h-[462px]mt-[152px] ml-[80px] gap-[24px] text-[20px] font-normal leading-[28px] text-[#2A254B]'>
                      
                        <Image src='/Photo.png'height={305} width={375} alt='chair' />
                        
                        
                        <p>The Dandy chair</p>
                        <p>£250</p>
                        </div>
                        <div className='w-full xl:w-[305px] h-[462px]mt-[152px] ml-[80px] gap-[24px] text-[20px] font-normal leading-[28px] text-[#2A254B]'>
                      
                        <Image src='/pic1.png'height={305} width={375} alt='chair' />
                        
                        
                        <p>Rustic Vase Set</p>
                        <p>£155</p>
                        </div>
                        <div className='w-full xl:w-[305px] h-[462px]mt-[152px] ml-[80px] gap-[24px] text-[20px] font-normal leading-[28px] text-[#2A254B]'>
                      
                        <Image src='/photo3.png'height={305} width={375} alt='chair' />
                        
                        
                        <p>The Silky Vase
              </p>
                        <p>£125</p>
                        </div>
                        <div className='w-full xl:w-[305px] h-[462px]mt-[152px] ml-[80px] gap-[24px] text-[20px] font-normal leading-[28px] text-[#2A254B]'>
                      
                        <Image src='/photo4.png'height={305} width={375} alt='chair' />
                        
                        
                        <p>The Lucy Lamp
                        </p>
                        <p>
                        £399</p>
                        </div>
                        
      
        
      <div className='w-[170px] h-[56px] mt-[152px]   ml-[625px]'>
        <button className='font-normal text-[16px] leading-[24px] text-[#2A254B] bg-[#F9F9F9] '>
          View collection</button>
      </div>

   
     </div>
       
    </div>
  );
}

export default Listings;
