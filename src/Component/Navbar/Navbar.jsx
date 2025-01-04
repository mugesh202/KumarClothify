import React, { useContext, useState } from 'react';
import Logo from "../../assets/Logo.png"
import { ShoppingCart } from "lucide-react";
import { Link } from 'react-router-dom';
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi';
import Responsivemenubar from '../Responsivemenubar';
import { AppContext } from '../../Context/AppConext';

export default function Navbar() {
  const [showmenu,Setshowmenu]=useState(false)
  const {getTotalCartItem }=useContext(AppContext)
  function toggleMenu(){
    Setshowmenu(!showmenu)
  }
  return (
    <div className='bg-white px-4 fixed w-full z-50 shadow-sm top-0 shadow-gray-400'>
        <div className='max-w-7xl mx-auto py-2 px-5 flex justify-between items-center'>
          <Link to='/'><img src={Logo} alt="" className='md:w-24 w-20' /></Link>
        
        <div className='flex items-center gap-5'>
            <nav className='hidden md:block'>
            <ul className='flex items-center font-semibold text-xl gap-7'>
                <Link to="/"><li>Home</li></Link>
                <Link to="/mens"><li>Mens</li></Link>
                <Link to="/womans"><li>Womens</li></Link>
                <Link to="/kids"><li>Kids</li></Link>
                <Link to="/login"><button className='bg-red-500 py-1 px-4 rounded-md text-white'>Login</button></Link>
            </ul>
            </nav>
            <Link to="/cart" className='relative w-10'>
            <ShoppingCart/>
            <div className='bg-red-500 w-5 absolute -top-2 right-1 flex items-center justify-center
             rounded-full text-white'>{getTotalCartItem()}</div>
            </Link>
           {showmenu ? (
            <HiMenuAlt1 onClick={toggleMenu} className='cursor-pointer md:hidden transition-all ' size={30}/>
           ):(
            <HiMenuAlt3 onClick={toggleMenu} className='cursor-pointer md:hidden transition-all ' size={30}/>

           )}
        </div>
        </div>
        <Responsivemenubar showmenu={showmenu} Setshowmenu={Setshowmenu} />
    </div>
  )
}
