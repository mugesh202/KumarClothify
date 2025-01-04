import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../assets/Logo.png"
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
export default function Footer() {
    return (
        <footer className='bg-gray-900 text-gray-200 py-10'>
            <div className='max-w-7xl mx-auto md:flex md:justify-between px-4'>
                <div className='mb-6 md:mb-0'>
                    <Link to='/'>
                        <img src={Logo} alt="" className='w-32' />
                    </Link>
                    <p className='mt-2 text-sm'>High-quality, sustainable clothing at affordable prices.</p>
                    <p className='mt-2 text-sm'>167 Puthur Street, Khansai, 626133</p>
                    <p className='mt-1 text-sm'>Email : fashionkhansai@gmail.com</p>
                    <p className='text-sm'>Phone : +91 123-456-7890</p>
                </div>
                <div className='mb-6 md:mb-0'>
                    <h3 className='text-xl font-semibold'>Customer Services</h3>
                    <ul className='mt-2  space-y-2 text-sm '>
                        <li>Contact Us</li>
                        <li>Shipping & Returns</li>
                        <li>Order Tracking</li>
                        <li>Size Guide</li>
                    </ul>
                </div>
                <div className='mb-6 md:mb-0'>
                <h3 className='text-xl font-semibold'>Follow Us</h3>
                <div className='flex space-x-4 mt-2'>
                    <FaGithub/>
                    <FaLinkedin/>
                    <FaTwitter/>
                </div>
                </div>
                <div>
                    <h3 className='text-xl font-semibold'>Stay in the loop</h3>
                    <p className='mt-2 text-sm'>Subscribe to get special offers, free giveways and then more </p>
                    <form action="" className='mt-4 flex'>
                        <input type="email" placeholder='Enter Your Email Address'
                        className='w-full p-2 rounded-l-md bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 
                        focus:ring-gray-500' />
                        <button className='bg-red-600 text-white px-4 rounded-r-md hover:bg-red-700'>Subscribe</button>
                    </form>
                </div>
            </div>
            <div className='mt-8 border-t  border-gray-700 pt-6 text-center text-sm'>
                <p>&copy; {new Date().getFullYear()} <span className='text-red-600'>Clothify</span> All rights reserved</p>

            </div>
        </footer>
    )
}
