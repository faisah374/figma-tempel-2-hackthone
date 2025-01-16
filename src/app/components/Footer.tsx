import React from 'react'

const Footer = () => {
  return (
    <>
<div>
    <div className="py-10 bg-[#2A254B] text-white mx-3 mt-auto ">
    <div className="max-w-[1440px] mx-auto h-[380px] ">      
    <div className="grid grid-cols-4">
     <div>    
      <h3 className="text-lg font-normal mb-4  ">Menu</h3>    

      <ul className='space-y-2 font-normal text-14px  '>
      <li>New arrivals</li>
      <li>Best sellers</li>
      <li>Recently viewed</li>
      <li>Popular this week</li>
      <li>All products</li>
      </ul>
      </div>
      
      <div>
      <h1 className='text-lg font-normal mb-4 '>Categories</h1>
      <ul className='space-y-2 font-normal text-[14px]'>
        <li>Crockery</li>
        <li>Furniture</li>
        <li>Homeware</li>
        <li>Plant pots</li>
        <li>Chairs</li>
        <li>Crockery</li>
      </ul>
      </div>
      
      
      <div>
       <h1 className='text-14px font-normal mb-6'>Our company</h1>
      <ul className=' space-y-2 text-[14px] font-normal '>
        <li>About us</li>
        <li>Vacancies</li>
        <li>Vacancies</li>
        <li>Privacy</li>
        <li>Returns policy</li>
      </ul>
      </div>
      <div>
                <h3 className="w-[142px] h-[20px] text-[16px] font-normal mb-4">Join our mailing list</h3>
                <div>
                    
                <form className="flex gap-1">
                        <input className=" bg-[#4E4D93] mb-4 rounded " placeholder="your@email.com " type="text" />
                        <button className=" bg-[#FFFFFF] mb-4 rounded p-2 text-[#2A254b]  " type="submit">Signup</button>
                    </form>
      </div>

      </div>
      </div>
      </div>
      <div className='flex justify-between'>
      
        
     <div> <p className='text-white text-[14px] '>Copyright 2022 Avion LTD</p></div>
      <div className='space-x-5' >
       <a href="/"><i className="bi bi-linkedin"></i></a>
       <a href="/"> <i className="bi bi-instagram"></i></a>
       <a href="/"><i className="bi bi-skype"></i></a>
       <a href="/"> <i className="bi bi-youtube"></i></a>
       <a href="/"> <i className="bi bi-facebook"></i></a>
        <a href="/"><i className="bi bi-twitter"></i></a> 
        <a href="/"><i className="bi bi-pinterest"></i></a>
        </div>
        </div>
      
       </div>
    </div>
    
    
        
        
        
        </>
  )

}



export default Footer;
 