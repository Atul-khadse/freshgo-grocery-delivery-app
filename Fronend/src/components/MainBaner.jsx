import React from 'react'
import banner from '../assets/banne_veg.png'
import banner2 from '../assets/banne_veg_x.png'
import { Link } from 'react-router-dom'
import { FiArrowRight } from "react-icons/fi";


const MainBaner = () => {
  return (
    <div className='relative'>
      <img src={banner2} alt="banner" className='w-full h-[500px] lg:h-[600px] object-cover hidden md:block' />
      <img src={banner} alt="banner" className='w-full md:hidden' />
      <div className='absolute inset-0 flex flex-col items-center md:items-start justify-end md:justify-center pb-24 md:pl-18 lg:pl-24'>
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left max-w-72 md:max-w-80 lg:max-w-105 leading-tight lg:leading-15'
        >Freshness you can trust, Saving you will love!</h1>

        <div className='flex items-center mt-6 font-medium'>
          <Link to={"/products"} className='group flex items-center gap-2 px-7 md:px-9 py-3 bg-primary hover:bg-primary-dull transition rounded text-white cursor-pointer'>
            Shop now
            <FiArrowRight className="text-xl md:hidden transition group-focus:translate-x-1" />
          </Link>

          <Link to={"/products"} className='group hidden md:flex items-center gap-2 px-9 py-3 cursor-pointer'>
            Explore deals
            <FiArrowRight className="transition group-hover:translate-x-1" />
          </Link>
        </div>
      </div>


    </div>
  )
}

export default MainBaner
