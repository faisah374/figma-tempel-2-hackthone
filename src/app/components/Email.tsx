import React from "react";

export const Email = () => {
    return (
        <>
            <div className="bg-[#F9F9F9] p-8">
                <div className="bg-[#FFFFFF] text-[#2A254B] font-bold py-4 px-8 m-4">
                    <h2 className="p-5 text-2xl font-bold mb-4 text-[#2A254B] text-center" style={{ fontFamily: "Clash Display" }}>Join the club and get the benefits</h2>
                    <p className=" mb-4 text-[#2A254B] text-center" style={{ fontFamily: "Clash Display" }}>Sign up for our newsletter and receive exclusive offers on new <br />ranges, sales, pop up stores and more.</p><br /><br />
                    <form className="flex text-[#F9F9F9] w-1/3 mx-auto justify-center">
                        <input type="email" placeholder="your@email.com" className="flex-1 border border-gray-300 p-2" />
                        <button type="submit" className="bg-[#2A254B] text-white font-bold py-2 px-4" style={{ fontFamily: "Clash Display" }}>Sign Up</button>
                    </form>

                </div>
            </div>
        </>
    )
}
export default Email;