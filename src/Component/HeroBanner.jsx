import React from 'react'
import banner from "../assets/HeroBanner.jpg"

export default function HeroBanner() {
  return (
    <div className='bg-gray-100 lg:pt-24 pt-16'>
        <div className='relative max-w-7xl mx-auto md:rounded-2xl pt-28 bg-cover bg-center h-[350px] md:h-[600px]'
        style={{backgroundImage:`url(${banner})`, backgroundPosition:"top"}}>
            <div className='absolute inset-0 bg-black md:rounded-2xl bg-opacity-50 flex items-center justify-center'>
    <div className='text-center text-white px-4'>
    <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold mb-4'>Discover Your Style</h1>
    <p className='text-lg md:text-xl mb-6'>Shop the latest trends and find your perfect look</p>
    <button className='bg-red-500 hover:bg-red-600 font-semiboldpy-2 px-4 md:py-3 md:px-6
     text-white rounded-lg transition duration-300'>Shop Now</button>
    </div>
            </div>
        </div>
    </div>
  )
}
