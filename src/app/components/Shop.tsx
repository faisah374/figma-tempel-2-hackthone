"use client"
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Product } from '../../../types/produts';
import { client } from '@/sanity/lib/client';
import { allProducts } from '@/sanity/lib/quries';

import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';

import { addToCart } from '../action/action';
import Swal from 'sweetalert2';


   const Shop=() =>{



    const [ product, setProduct]= useState <Product[]>([])
    
  useEffect(() =>{
  async function fectchproduct(){
   const fecthedProduct :Product[] =await client.fetch(allProducts)
   setProduct(fecthedProduct)
    }
    fectchproduct()
  },[])

  const handleAddToCart=(e:React.MouseEvent,product:Product)=> {
    e.preventDefault()
    Swal.fire({
        position: "top-right",
        icon:"success",
        title:`${product.name}added to cart`,
        showConfirmButton:false,
        timer:1000
    })

    addToCart(product)
  
  }
return(
    <div className='max-w-6x1 mx-auto px-4 py-8'>

        <h1>Our Latest Products</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>

        
        {product.map((product) =>(
         <div key={product._id}
          className='border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200'>
        
        <Link href={`/product/${product.slug.current}`}>

            {product.image &&(
                <Image
               src ={urlFor(product.image).url()}
               alt='image'
               width={700}
               height={800}
               className='w-full h-48 object-cover rounded-md'
                />
             

            )}  
            <h1 className='text-lg font-semibold mt-4'>
                {product.name}
            </h1>
            <p className='text-gray-500 mt-2'>
                {product.price ? `$${product.price}`:"price not available"}
            </p>
            <p className='text-gray-500 mt-2'>
                {product.description}

            </p> 
            <p className='text-gray-500 mt-2'>
                {product.quantity ? `quantity pec avaiable${product.quantity}`:"are not avaible"}

            </p>

            <p className='text-gray-500 mt-2'>
                {product.tags}

            </p>

            <button 
            className='bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py2 px-4 rounded-lg shadow-md hover:scale-110
            transition-transform duration-300 ease-in-out'
            onClick={(e)=>handleAddToCart(e,product)}
            >
            Add to cart
            </button>
            </Link>

            </div>
        ))}
    </div>
    
    </div>
)

 }
 export default Shop