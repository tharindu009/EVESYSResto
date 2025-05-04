import React from 'react'
import logo from '../assets/images/logo.png'
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";
import { FaBell } from "@react-icons/all-files/fa/FaBell";
import { FaUserCircle } from "@react-icons/all-files/fa/FaUserCircle";
import { IoRestaurant } from "@react-icons/all-files/io5/IoRestaurant";

const Header = () => {
    return (
        <header className='flex justify-between items-center py-4 px-8 bg-sky-800'>
            {/* Logo */}

            <div className='flex items-center gap-2 space-x-2'>
                <IoRestaurant className='text-white text-2xl' />
                <img src={logo} alt="Logo" className='h-10 w-10' />
                <h1 className='text-lg font-semibold text-white'>EVESYS Resto</h1>
            </div>

            {/* Search */}
            <div className='flex items-center gap-4 bg-sky-700 rounded-[15px] py-2 px-5 w-[500px]'>

                <FaSearch className='text-white' />
                <input type="text" placeholder='search' className='bg-sky-700 text-white outline-none' />
            </div>

            {/* User Profile */}
            <div className='flex items-center gap-4'>
                <div className='bg-sky-700 rounded-[15px] p-3 cursor-pointer'>
                    <FaBell className='text-white text-2xl' />
                </div>
                <div className='flex items-center gap-3 cursor-pointer'>
                    <FaUserCircle className='text-white text-4xl' />
                    <div className='flex flex-col items-start'>
                        <h1 className='text-md text-white font-semibold'>John Doe</h1>
                        <p className='text-xs text-gray-400 font-medium'>Admin</p>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header