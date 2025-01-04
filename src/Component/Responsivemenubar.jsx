import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Responsivemenubar({showmenu,Setshowmenu}) {
  return (
    <div className={`${showmenu ? "left-0" : "-left-[100%]"} fixed bottom-0 top-0 z-20 h-screen flex w-[75%]
    flex-col justify-between bg-white px-8 pb-6 pt-16 text-black md:hidden rounded-r-xl shadow-md`}> 
        <div>
            <div className='flex items-center justify-start gap-3'>
            <FaUserCircle size={50}/>
            <div>
                <h1>Hello User</h1>
                <h1 className='text-sm text-slate-500'>Premium User</h1>
            </div>
            </div>
            <nav className='mt-12'>
            <ul className='flex flex-col space-y-3  text-xl'>
                <Link to="/"><li>Home</li></Link>
                <Link to="/mans"><li>Mans</li></Link>
                <Link to="/womans"><li>Womans</li></Link>
                <Link to="/kids"><li>Kids</li></Link>
                <Link to="/login"><button className='bg-red-500 py-1 px-4 rounded-md text-white'>Login</button></Link>
            </ul>
            </nav>
        </div>
    </div>
  )
}
