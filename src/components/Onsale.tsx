import React from 'react'
import { ProductProps } from '../../type'
import Image from 'next/image'
import Link from 'next/link'
import { urlForImage } from '../../sanity/lib/image'
import Price from './Price'

interface Props {
  products:ProductProps []
}

const Onsale = ({products}:Props) => {
  return (
    <div>
      <h3 className='text-xl font-semibold mb-6 underline underline-offset-4 decoration-[1px]'>Products on a sale</h3>
      <div className='flex flex-col justify-normal gap-2'>
        {products?.map((item:ProductProps)=>(
          <Link key ={item?._id} href={`/product/${item.slug?.current}`} className='flex items-center gap-4 border-b-[1px] border-b-gray-300 py-2'>
           
            <Image  src = {urlForImage(item?.image)} alt="product image"
            className='w-24 object-contain' width={200} height={200}/>
            <div className='flex flex-col gap-2'>
              <p className='text-sm tracking-tighter font-medium'>{item?.title.substring(0,7)}</p>
              <p className='text-sm font-semibold'>
              <Price amount= {item?.price} />
              </p>
            </div>
           
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Onsale