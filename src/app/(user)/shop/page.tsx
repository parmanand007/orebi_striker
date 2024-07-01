'use client'
import Container from '@/components/Container'
import React, { useState } from 'react'
import { BsGridFill } from 'react-icons/bs'

const ShopPage = () => {
  const [showGrid,setShowGrid] = useState(true)
  const [showList,setShowList] = useState(false)
  return (
    <Container>
      <div className='flex items-center justify-between pb-10'>
        <h2 className='text-2xl text-primeColor font-bold'>
          All Products
        </h2>
        <div>
           <span className={`${showGrid ?'bg-primeColor text-white':'border-[1px] border-grey-300 text-[#737373]'} w-8 h-8 text-lg flex items-center justify-center cursor-pointer`}><BsGridFill /></span>
        </div>
      </div>
    </Container>
  )
}

export default ShopPage 