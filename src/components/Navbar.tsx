'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import logo from "@/assets/logoBlack.png"
import { FaSearch } from 'react-icons/fa'
import { IoCloseOutline } from 'react-icons/io5'
import { title } from 'process'
import { usePathname } from 'next/navigation'
import { HiMenuAlt2 } from 'react-icons/hi'


const Navbar = () => {
  const [searchQuery,setSearchQuery] = useState("")
  const pathname = usePathname()
  console.log(pathname)
  const navBarList =[
    {
      title:"Home",
      link:"/"

    },
    {
      title:"Shop",
      link:"/shop",
    },
    {
      title:"Cart",
      link:"/cart"
    },
    {
      title:"Profile",
      link:"/profile"
    },
    {
      title:"Studio",
      link:"/studio"
    }

  ]
  return (
    <div className='w-full h-20 bg-white border-b-[1px] border-b-gray-400 '>
      <nav className='h-full max-w-screen-xl mx-auto px-4 xl:px-0 flex items-center justify-between gap-2'>
        <Link href={"/"}>
          <Image src={logo} alt = "logo" className="w-20" />
        </Link>
        <div className='relative w-full hidden lg:inline-flex  lg:w-[600px] h-10 text-base text-primeColor border-[1px] border-black items-center justify-between px-6 rounded-md'>
          <input type="text" placeholder='Search you product here'  className='flex-1 h-full outline-none bg-transparent placeholder:text-gray-600'
          onChange={(e)=>setSearchQuery(e.target.value)}
          value={searchQuery}/>
          {searchQuery ? <IoCloseOutline className='w-5 h-5 hover:cursor-pointer hover:text-red-500 duration-200' onClick ={() =>setSearchQuery("")}   /> : <FaSearch className='w-5 h-5 hover:cursor-pointer' />}
        </div>
        <div className='hidden md:inline-flex items-center gap-2'>
          {
            navBarList.map((item)=>(
              <Link href={item?.link} key={item?.link}
              className={`flex hover:font-medium w-20 h-6 justify-center items-center px-12 text-gray-600 hover:underline underline-offset-4 decoration-[1px] md:border-r-[2px] border-r-gray-400 duration-200 last:border-r-0 ${pathname== item?.link && 'text-gray-950 underline'}`}
              >{item.title}</Link>
            ))
          }
        </div>
        <HiMenuAlt2 className='inline-flex md:hidden cursor-pointer w-8 h-8'/>
      </nav>

    </div>
  )
}

export default Navbar