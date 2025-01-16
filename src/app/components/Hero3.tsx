import React from "react";
import Image from "next/image";
const Hero3 = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center px-10 py-12 bg-white">
        <div className="text-[#2A254B] text-center md:text-left sm:max-w-lg">
          <h1 className="text-3xl md:text-4xl font-medium leading-relaxed" style={{ fontFamily: "Clash Display" }}>
            A brand built on the love of craftmanship quality and outstanding customer service
          </h1>
        </div>
        <div className="mt-8 md:mt-0">
          <button className="px-6 py-3 bg-gray-100 text-[#2A254B] font-medium rounded-md shadow-sm hover:bg-gray-200">
            View our products
          </button>
        </div>
      </div>
      <div className="grid sm:grid-cols-2  gap-4 p-14">
        <div className="bg-[#2A254B] p-3">
          <h1 className="text-2xl font-bold text-[#FFFFFF] p-3" style={{ fontFamily: "Clash Display" }}>It started with a small idea</h1>
          <p className="text-[#FFFFFF] sm:mb-72 mb-24 p-3 " style={{ fontFamily: "Satoshi" }}>A global brand with local beginnings, our story begain in a small studio in South London in early 2014</p>
          <button className="bg-[#F9F9F926] text-white font-bold py-2 px-4 sm:m-3 w-full sm:w-auto " style={{ fontFamily: "Satoshi" }}>View Collection</button>
        </div>
        <div>
          <Image src="/Photo.png" alt="Chair" width={200} height={200} />
        </div>
      </div>
    </>
  )
}

export default Hero3;