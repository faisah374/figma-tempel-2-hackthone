import React from "react";
import Image from "next/image";
const Hero2 = () => {
    return (
        <>
            <div className="mx-auto grid grid-cols-1 sm:grid-cols-2">
                <div className="w-auto h-auto">
                    <Image src="/image11.png" width={721} height={759}  alt="pic"/>
                </div>
                <div className="w-full sm:pl-10 px-4 lg:py-6 mt-6 lg:mt-0 ">
                    <h1 className="text-bold title-font text-[#2A254B] tracking-widest">The Dandy Chair</h1>
                    <h2 className="text-[#2A254B] text-3xl title-font font-medium mb-1">£250</h2>
                    <h3 className="text-mediam title-font text-[#2A254B] tracking-widest">Description</h3><br />
                    <p className="leading-relaxed text-[#505977] justify-between">A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.</p>
                    <div className="flex mt-6 items-center">
                        <div className="grid grid-cols-3 gap-6 items-center">
                            <h2 className="mr-3">Height</h2>
                            <h2 className="mr-3">Width</h2>
                            <h2 className="mr-3">Depth</h2>
                        </div>
                    </div>
                    <div className="flex mt-6 items-center ">
                        <div className="grid grid-cols-3 gap-6 items-center">
                            <span className="mr-3">110cm</span>
                            <span className="mr-3">75cm</span>
                            <span className="mr-3">50cm</span>
                        </div>
                    </div>
                    <div className="sm:flex justify-between items-center sm:space-x-4 my-2">
                        <div className="sm:flex items-center space-x-2">
                            <span className="text-lg font-medium text-gray-800 hidden sm:block">Amount:</span>
                            <span className="text-lg font-medium text-gray-800 block sm:hidden">Quantitity</span>
                            <div className="flex justify-center items-center border bg-gray-100 my-2">
                                <button className="px-3 py-2 text-gray-500 hover:text-gray-700">-</button>
                                <span className="px-4 py-2 text-gray-800">1</span>
                                <button className="px-3 py-2 text-gray-500 hover:text-gray-700">+</button>
                            </div>
                        </div>
                        <button className="w-full sm:w-auto my-2 px-6 py-3 bg-[#2A254B] text-white font-medium hover:bg-[#1e1b3c] ">
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Hero2;