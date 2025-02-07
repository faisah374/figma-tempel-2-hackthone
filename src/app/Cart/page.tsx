"use client"



import React, { useEffect, useState } from 'react';
import { getCartItems, removeFromCart, updatecartQuantity } from '../action/action';
import { Product } from '../../../types/produts';
import Swal from 'sweetalert2';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';


const Cartpage = () => {

    const [cartItems, setCartItems] =useState<Product[]>([])

    useEffect(()=>{
        setCartItems(getCartItems())
    },[]);


    const handleRemove = (id :string) =>{
        Swal.fire({
            title:"Are you sure?",
            text:"you will not able torecover this item! ",
            icon:"warning",
            showCancelButton:true,
            confirmButtonColor:"#3085d6",
            cancelButtonColor:"#d33",
            cancelButtonText:"yes, remove it!"

        })
        .then((result) =>{
       if((result.isConfirmed))
       removeFromCart (id)
     setCartItems(getCartItems())
     Swal.fire("Remove", "item has been removed","success")
        })
    

  const handleQuantityChange =(id :string,quantity: number) =>{
    updatecartQuantity(id,quantity)
    setCartItems(getCartItems())
  }

  const handelIncrement=(id :string) =>{

    const product =cartItems.find((item)=> item._id ===id);
    if(product)
        handleQuantityChange(id,product.quantity +1)
}
 
const handelDcrement=(id :string) =>{

    const product =cartItems.find((item)=> item._id ===id);
    if(product && product.quantity >1)
        handleQuantityChange(id,product.quantity - 1)
}
const calculatedTotal=()=>{
    return cartItems.reduce((total,item)=>total +item.price +item.quantity,0)
}
const handledproced= ()=>{
    Swal.fire({
        title:"procced to checkour",
        text: "please rewiew your cart brfore  checkout",
        icon:"question",
        showCancelButton:true,
        confirmButtonColor:"#d33",
        confirmButtonText:"yes,proceed"

    }).then((result)=>{
        if(result.isConfirmed){
            Swal.fire("sucess","your order has been sucessfully proceed", "success")
            setCartItems([])
        }
    })
}

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
    <h1 className="text-2xl font-bold mb-6 text-gray-800">Shopping Cart</h1>

    <div className="space-y-6">
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div
            key={item._id}
            className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md"
          >
            <div className="flex items-center">
              {item.image && (
                <Image
                  src={urlFor(item.image).url()}
                  className="w-16 h-16 object-cover rounded-lg"
                  alt="image"
                  width={500}
                  height={500}
                />
              )}
              <div className="ml-4">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-500">Price: ${item.price}</p>
                <div className="flex items-center mt-2">
                  <button
                    onClick={() => handelDcrement(item._id)}
                    className="px-2 py-1 bg-gray-300 rounded-md hover:bg-gray-400"
                  >
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    onClick={() => handelIncrement(item._id)}
                    className="px-2 py-1 bg-gray-300 rounded-md hover:bg-gray-400"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => handleRemove(item._id)}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-600 text-center">Your cart is empty.</p>
      )}
    </div>

    {cartItems.length > 0 && (
      <div className="mt-8 bg-white p-4 rounded-lg shadow-md">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Total:</h2>
          <p className="text-xl font-bold text-gray-800">
            ${calculatedTotal().toFixed(2)}
          </p>
        </div>
        <button
          onClick={handledproced}
          className="mt-4 w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
        >
          Proceed
        </button>
      </div>
    )}
  </div>
);
};
}   
export default Cartpage;
