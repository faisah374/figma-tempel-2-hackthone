
import { Product } from '../../../../types/produts';


import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
import Image from 'next/image';

import { urlFor } from '@/sanity/lib/image';
import { features } from 'process';

interface productPageProps {
    params:Promise<{slug :string}>;
}

async function getProduct(slug :string):Promise<Product> {
   return client.fetch(
    groq`*[_type == "product" && slug.current == $slug ][0]{
    _id,
    name,
    _type,
    image,
    price,
    description,
    tags,
    dimensions,
    quantity,
    features

    } `, {slug}
   )
    
}
export default async function productPage({params} :productPageProps){
    const {slug} =await params;
    const product =await  getProduct(slug)


    return(
        <div className=' max-w-7xl- mx-auto px-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                <div className='aspect-square '>
                    {product.image && (
                        <Image 
                        src={urlFor(product.image).url()}
                        alt={product.name}
                        width={700}
                        height={800}
                        className='rounded-lg shadow-md'
                        
                        />
                    )}

                </div>
                <div className='flex flex-col gap-8'>
                    <h1 className='text-4xl font-bold'>
                        {product.name}
                    </h1>
                    <p className='text-2xl '>
                     price:${product.price}
                    </p>

                    <p className=' text-2xl'>
                      {product.description}  

                    </p>
                    <p className='text-3x1'>
                        {product.tags}
                    </p>
                    <p className='text-3x1'>
                    qauntity available    {product.quantity}
                    </p>
                    <p className='text-3xl'>
                        {product.features}
                    </p>
                </div>

            </div>

        </div>
    )
}