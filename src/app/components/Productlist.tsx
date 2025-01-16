import React from 'react';
import Image from 'next/image';

const Productlist = () => {
  return (
    <>
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4">
            <Image src="/Right image.png" width={375} height={305}  alt="The Dandy Chair" className="w-full h-auto md:h-96 mb-4" />
            <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "Clash Display" }}>The Dandy Chair</h3>
            <p className="text-sm" style={{ fontFamily: "Satoshi" }}>£250</p>
        </div>
        <div className="bg-white p-4 ">
            <Image src="/pic1.png" alt="Rustic Vase Set" width={375} height={305} className="w-full h-auto md:h-96 mb-4" />
            <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "Clash Display" }}>Rustic Vase Set</h3>
            <p className="text-sm" style={{ fontFamily: "Satoshi" }}>£155</p>
        </div>
        <div className="bg-white p-4 ">
            <Image src="/photo3.png" alt="The Silky Vase" width={375} height={305}  className="w-full h-auto md:h-96 mb-4" />
            <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "Clash Display" }}>The Silky Vase</h3>
            <p className="text-sm" style={{ fontFamily: "Satoshi" }}>£125</p>
        </div>
        <div className="bg-white p-4 ">
            <Image src="/photo4.png" width={375} height={305} alt="The Lucy Lamp" className="w-full h-auto md:h-96 mb-4" />
            <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "Clash Display" }}>The Lucy Lamp</h3>
            <p className="text-sm" style={{ fontFamily: "Satoshi" }}>£399</p>
        </div>
        <div className="bg-white p-4">
            <Image src="/Photo7.png" width={375} height={305}   alt="The Dandy Chair" className="w-full h-auto md:h-96 mb-4" />
            <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "Clash Display" }}>The Dandy Chair</h3>
            <p className="text-sm" style={{ fontFamily: "Satoshi" }}>£250</p>
        </div>
        <div className="bg-white p-4 ">
            <Image src="/Photo8.png" width={375} height={305} alt="Rustic Vase Set" className="w-full h-auto md:h-96 mb-4" />
            <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "Clash Display" }}>Rustic Vase Set</h3>
            <p className="text-sm" style={{ fontFamily: "Satoshi" }}>£155</p>
        </div>
        <div className="bg-white p-4 ">
            <Image src="/Photo9.png"width={375} height={305}  alt="The Silky Vase" className="w-full h-auto md:h-96 mb-4" />
            <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "Clash Display" }}>The Silky Vase</h3>
            <p className="text-sm" style={{ fontFamily: "Satoshi" }}>£125</p>
        </div>
        <div className="bg-white p-4 ">
            <Image src="/photo10.png" width={375} height={305} alt="The Lucy Lamp" className="w-full h-auto md:h-96 mb-4" />
            <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "Clash Display" }}>The Lucy Lamp</h3>
            <p className="text-sm" style={{ fontFamily: "Satoshi" }}>£399</p>
        </div>
        <div className="bg-white p-4">
            <Image src="/Right image.png"width={375} height={305} alt="The Dandy Chair" className="w-full h-auto md:h-96 mb-4" />
            <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "Clash Display" }}>The Dandy Chair</h3>
            <p className="text-sm" style={{ fontFamily: "Satoshi" }}>£250</p>
        </div>
        <div className="bg-white p-4 ">
            <Image src="/pic1.png"width={375} height={305} alt="Rustic Vase Set" className="w-full h-auto md:h-96 mb-4" />
            <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "Clash Display" }}>Rustic Vase Set</h3>
            <p className="text-sm" style={{ fontFamily: "Satoshi" }}>£155</p>
        </div>
        <div className="bg-white p-4 ">
            <Image src="/photo3.png"width={375} height={305} alt="The Silky Vase" className="w-full h-auto md:h-96 mb-4" />
            <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "Clash Display" }}>The Silky Vase</h3>
            <p className="text-sm" style={{ fontFamily: "Satoshi" }}>£125</p>
        </div>
        <div className="bg-white p-4 ">
            <Image src="/photo4.png"width={375} height={305} alt="The Lucy Lamp" className="w-full h-auto md:h-96 mb-4" />
            <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "Clash Display" }}>The Lucy Lamp</h3>
            <p className="text-sm" style={{ fontFamily: "Satoshi" }}>£399</p>
        </div>
    </div>
    <div className="text-center md:text-center mt-4 m-10">
        <button className="bg-[#F9F9F9] text-[#2A254B] font-bold py-2 w-full sm:w-auto sm:px-4 "
            style={{ fontFamily: "Satoshi" }}
        >
            View Collection
        </button>
    </div>
</>
    )
}


export default Productlist;

