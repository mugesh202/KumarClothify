import React, { useContext } from 'react'
import Item from "../Component/Item"
import { AppContext } from '../Context/AppConext'
export default function TopSeller() {
    const { all_product } = useContext(AppContext)
    return (
        <div className='mx-auto max-w-2xl px-4 py-16 sm:pt-24 lg:max-w-7xl lg:px-8'>
            <h2 className='text-4xl font-bold tracking-tight text-gray-900 text-center font-serif'>Top Sellers</h2>
            <p className='text-center mt-3 md:px-56'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem reprehenderit alias ullam consectetur repellat quis omnis,
                fuga pariatur doloremque iusto architecto debitis et labore iure.</p>
            <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-10 px-6 md:px-0 sm:grid-cols-2 lg:grid-cols-4
                xl:gap-x-8'>
                {all_product.slice(0,20).map((product) => {
                    return <Item key={product.id} product={product} />
                })}
            </div>
        </div>
    )
}
