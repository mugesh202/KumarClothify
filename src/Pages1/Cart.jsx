import React, { useContext, useEffect } from 'react'
import { AppContext } from '../Context/AppConext'
import Emptycart from "../assets/EmptyCart.png"
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';
export default function Cart() {
  const {all_product,
    new_collections,
    cartItem,
    addTocart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItem,}=useContext(AppContext)

  useEffect(()=>{
    window.scrollTo(0,0)
  },[]);
  return (
    <div className='mt-32'>
      <div className='max-w-7xl mx-auto my-10 p-4'>
        {getTotalCartItem() === 0 ? (
          <div className='flex items-center justify-center'>
            <img src={Emptycart} alt="" />
          </div>
        ):(
          <div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-[0.5fr,2fr,1fr,1fr,1fr,1fr] items-center px-4'>
            <p>Products</p>
            <p>Title</p>
            <p className='hidden md:block'>Price</p>
            <p className='hidden md:block'>Quantity</p>
            <p className='hidden md:block'>Total</p>
            <p className='hidden md:block'>Remove</p>
            </div>
            <hr className='bg-gray-300 border-0 h-[2px] my-2'/>
            {all_product.map((e)=>{
              if(cartItem[e.id] > 0){
                return(
                <div key={e.id}>
                  <div className='text-gray-500 text-sm font-semibold sm:text-base grid grid-cols-2 sm:grid-cols-3
                  md:grid-cols-[0.5fr,2fr,1fr,1fr,1fr,1fr] px-4 gap-2'>
                    <img src={e.image} className='w-16 h-16 object-cover' alt="Product" />
                    <p>{e.name}</p>
                    <p className='hidden md:block'>${e.new_price}</p>
                    <button className='w-16 h-12 bg-white border border-gray-400 '>{cartItem[e.id]}</button>
                    <p className='hidden md:block'>${e.new_price * cartItem[e.id]}</p>
                    <X onClick={() => removeFromCart(e.id)} className='text-red-500 cursor-pointer'/>
                  </div>
                  <hr className='bg-gray-300 border-0 h-[2px] my-2'/>

                </div>
             ) }
              return null;
            })}
            <div className='flex flex-col lg:flex-row my-12 gap-10 md:gap-32'>
            <div className='flex flex-col flex-1 gap-4'>
            <h1 className='text-lg font-bold'>Cart Totals</h1>
            <div>
              <div className='flex justify-between py-2'>
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr className='bg-gray-300 border-0 h-[2px] my-2'/>
              <div className='flex justify-between py-2'>
              <p>Shipping Fee</p>
              <p>Free</p>
              </div>
              <hr className='bg-gray-300 border-0 h-[2px] my-2'/>
              <div className='flex justify-between text-xl font-semibold py-2'>
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
              </div>
            </div>
            <Link to="/login">
            <button className='w-full lg:w-64 h-14 bg-red-500 text-white font-semibold text-lg'>PROCEED TO CHECKOUT</button>
            </Link>
            
            </div>
            <div className='flex-1 w-full text-lg font-semibold'>
                <p className='text-gray-600'>If you have a promoo code, enter it here:</p>
                <div className='w-full lg:w-80 mt-2 flex'>
                  <input type="text" placeholder='Promo Code' className='flex-1 h-14 p-2 bg-gray-200' />
                  <button className='h-14 w-32 bg-black text-white'>Submit</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

