import React from 'react'
import { Truck,Lock,RotateCcw,Clock } from 'lucide-react'


export default function Features() {
    const features=[
        {icon:Truck, text:"Free Shipping", subtext:"On orders over $100"},
        {icon:Lock, text:"Secure Payment", subtext:"100% protected payments"},
        {icon:RotateCcw, text:"Easy Returns", subtext:"30-day return policy"},
        {icon:Clock, text:"24/7 Support", subtext:"Dedicated customer service"}
    ]
  return (
    <div className='bg-gray-200 px-4 py-8 sm:px-6 lg:px-8'>
    <div className='max-w-7xl mx-auto'>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 lg:gap-x-8'>
        {features.map((features,index)=> {
         return(
            <div key={index} className='flex items-center justify-center text-center sm:text-left'>
                <features.icon className='flex-shrink-0 h-10 w-10 text-gray-600' aria-hidden="true"/>
                <div className='ml-4'>
                    <p className='text-base font-medium text-gray-900'>{features.text}</p>
                    <p className='mt-1 text-sm text-gray-500'>{features.subtext}</p>
                </div>
            </div>
         )   
        })}
    </div>
    </div>
    </div>
  )
}
