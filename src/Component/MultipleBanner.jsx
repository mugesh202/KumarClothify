import React from 'react'

export default function MultipleBanner() {
  return (
    <div className='bg-gray-100 '>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4 md:px-0 gap-4 py-6 max-w-7xl mx-auto'>
            <div className='relative h-[250px]'>
            <img src="https://images.pexels.com/photos/7679656/pexels-photo-7679656.jpeg?auto-compress&cs-tinysrgb&w-1268&h=750dpr=1" alt="Waiting....." className='w-full h-full rounded-lg object-cover shadow-lg'/>
            <div className='flex flex-col items-center justify-center bg-gray-800 absolute inset-0 rounded-lg bg-opacity-50'>
            <h2 className='text-white text-2xl font-bold '>New Arrivals</h2>
            <button className='mt-2 px-3 py-1 bg-white text-green-800 hover:bg-gray-200 rounded-md shadow'>Discover</button>
            </div>
            </div>
            <div className='relative h-[250px]'>
            <img src="https://images.pexels.com/photos/5650023/pexels-photo-5650023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Waiting....." className='w-full h-full rounded-lg object-cover shadow-lg'/>
            <div className='flex flex-col items-center justify-center bg-blue-900 absolute inset-0 rounded-lg bg-opacity-50'>
            <h2 className='text-white text-2xl font-bold '>Limited Offer</h2>
            </div>
            </div>
            <div className='relative h-[250px] col-span-1 md:col-span-2'>
            <img src="https://images.pexels.com/photos/7679656/pexels-photo-7679656.jpeg?auto-compress&cs-tinysrgb&w-1268&h=750dpr=1" alt="Waiting....." className='w-full h-full rounded-lg object-cover shadow-lg'/>
            <div className='flex flex-col items-center justify-center bg-yellow-800 absolute inset-0 rounded-lg bg-opacity-50'>
            <h2 className='text-white text-4xl font-bold '>Season Sale</h2>
            <p className='text-white my-2 text-lg'>Up to 70% offer</p>
            <button className='text-white bg-yellow-600 px-3 py-2 hover:bg-yellow-500 rounded-md'>Shop Now</button>
            </div>
            </div>
            <div className='relative h-[250px] col-span-1 md:col-span-2'>
            <img src="https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Season sale" className='w-full h-full rounded-lg object-cover shadow-lg'/>
            <div className='flex flex-col items-center justify-center bg-orange-800 absolute inset-0 rounded-lg bg-opacity-50'>
            <h2 className='text-white text-4xl font-bold '>Season Sale</h2>
            <p className='text-white my-2 text-lg'>Up to 70% offer</p>
            <button className='text-white bg-orange-600 px-3 py-2 hover:bg-red-500 rounded-md'>Shop Now</button>
            </div>
            </div>
            <div className='relative h-[250px]'>
            <img src="https://images.pexels.com/photos/5622859/pexels-photo-5622859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Waiting....." className='w-full h-full rounded-lg object-cover shadow-lg'/>
            <div className='flex flex-col items-center justify-center bg-blue-900 absolute inset-0 rounded-lg bg-opacity-50'>
            <h2 className='text-white text-2xl font-bold '>Limited Offer</h2>
            </div>
            </div>
            <div className='relative h-[250px]'>
            <img src="https://images.pexels.com/photos/4210857/pexels-photo-4210857.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Waiting....." className='w-full h-full rounded-lg object-cover shadow-lg'/>
            <div className='flex flex-col items-center justify-center bg-gray-800 absolute inset-0 rounded-lg bg-opacity-50'>
            <h2 className='text-white text-2xl font-bold '>New Arrivals</h2>
            <button className='mt-2 px-3 py-1 bg-white text-green-800 hover:bg-gray-200 rounded-md shadow'>Discover</button>
            </div>
            </div>
        </div>

    </div>
  )
}
