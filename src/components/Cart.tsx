'use client'
import React from 'react'
import Container from './Container'
import { useSelector } from 'react-redux'
import { StateProps } from '../../type'
import CartItem from './CartItem'

const Cart = () => {
    const {productData} = useSelector((state:StateProps)=>state.orebi)
  return (
    <Container>
        {
            productData?.length > 0 ? (<div className='pb-20'>
                <div className='w-full h-20 bg-[#f5f7f7] text-primeColor hidden lg:grid grid-cols-5 place-content-center px-6 text-lg font-semibold'>
                    <h2 className='col-span-2'>Product</h2>
                    <h2>Price</h2>
                    <h2>Quantity</h2>
                    <h2>Sub Total</h2>
                </div>
                <div>
                    {
                        productData.map((item)=>(
                            <div key = {item?._id}>
                                <CartItem item= {item} />
                            </div>
                        ))
                    }
                </div>
                
            </div>):
            <div>
                <p>no product available</p>
            </div>
        }
    </Container>
  )
}

export default Cart