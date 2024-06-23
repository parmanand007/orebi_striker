import React from 'react'
import { ProductProps } from '../../type';
import { urlForImage } from '../../sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';

interface Props{
    product:ProductProps[]
}

const Product = ({product}:Props) => {

  return (
    
    <div className='w-full relative group border-[1px] border-black hover:shadow-lg duration-200 shadow-gray-500 overflow-hidden '>
        <div className='w-full h-80 flex items-center justify-center bg-white overflow-hidden'>
            <div className='relative'>
                <Link href={'/'}>
                <Image src={urlForImage(product?.image)} alt='product image'
                    width={700}
                    height={700}
                    className='w-72 h-72 object-fit'
                />
                </Link>
                <div className=' bottom-0 flex items-center gap-5 justify-center translate-y-[110%] group-hover:-translate-y-2  transition-transform duration-300'>
                    <Link href= {'/'} className='bg-gray-800 text-gray-200 px-4 py-2 text-xs rounded-full flex items-center gap-1 hover:bg-gray-950 hover:text-white duration-200'>
                    <span><AiOutlineShopping /></span>
                    Add to bag
                    </Link>
                    <Link href= {'/'} className='bg-gray-800 text-gray-200 px-4 py-2 text-xs rounded-full flex items-center gap-1 hover:bg-gray-950 hover:text-white duration-200'>
                    <span><AiOutlineShopping /></span>
                    Quick view
                    </Link>
                </div>
            {
                product?.isnew &&
                 (<div className='absolute top-2 right-2 z-50'>
                    <p className='bg-primeColor px-4 py-1 text-white flex justify-center items-center text-sm font-semibold hover:bg-black duration-300 cursor-pointer rounded-md'>New</p>

                    </div>)
            }
            </div>
        </div>
        <div className='max-w-80 py-6 flex flex-col gap-1 px-4'>
            <div className='flex items-center justify-between gap-2'>
                <h2 className='text-lg text-primeColor font-bold'>{product?.title.substring(0,15)}</h2>
                <div>
                    <p>${product?.rowprice} </p>
                    <p>${product?.price} </p>
                </div>
            </div>
        </div>
    </div  >

  )
}

export default Product;