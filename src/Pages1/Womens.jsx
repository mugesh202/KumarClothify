import React, { useContext } from 'react'
import Item from "../Component/Item"
import banner from "../assets/WomensBanner.png";
import  { AppContext } from '../Context/AppConext';

export default function Womens() {
    
    const {all_product,number}=useContext(AppContext)
    const womensProduct=all_product.filter((product)=>product.category === "women")
    console.log(all_product)
    console.log(number)
  return (
    <div className='md:mt-32 mt-20 max-w-7xl mx-auto'>
    <div>
      <img src={banner} alt="" className='w-screen px-6'/>
    </div>
    <div className='max-w-2xl mx-auto px-4 py-16 sm:pt-24 lg:max-w-7xl lg:px-8'>
      <h2 className='text-2xl font-bold tracking-tight text-gray-900 md:text-start text-center'>Women's Collection</h2>
      <div className='mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 px-6 md:px-0 xl:gap-x-8 '>
      {
        womensProduct.map((product)=>{
          return (<Item key={product.id} product={product} /> )
        })
      }
      </div>
    </div>
  </div>
  )
}
