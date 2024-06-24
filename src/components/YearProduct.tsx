import React from 'react'
import Container from './Container'
import Image from 'next/image'
import productOfTheYear from "@/assets/productOfTheYear.webp"
import Link from 'next/link'

const YearProduct = () => {
  return (
    <div className='w-full bg-[#f3f3f3]'>
        <Container className='md:bg-transparent relative py-0 mb-10' >
            <Image src = {productOfTheYear}
            className='w-full h-full object-cover hidden md:inline-block'/>
        <div className='w-full md:w-2/3 xl:w-1/2 h-80 absolute px-4 md:px-0 top-0 right-0 flex flex-col items-start gap-6 justify-center'>
            <h1 className='font-semibold text-primeColor text-3xl'>
                Product of the year
            </h1>
            <p className='max-w-[600px] text-base font-normal text-primeColor mr-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum blanditiis cumque quasi iusto ab sapiente consequuntur magnam fugit dolorum ullam.</p>
            <Link href={'/shop'}
            className='bg-primeColor text-white text-lg w-[185px] h-[50px] hover:bg-black duration-300 font-bold flex items-center justify-center rounded-md'>
            Shop now
            </Link>
        </div>
        </Container>
    </div>
  )
}

export default YearProduct