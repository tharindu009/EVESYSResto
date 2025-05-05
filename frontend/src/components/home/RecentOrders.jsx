import React from 'react'
import { FaSearch } from "react-icons/fa";
import OrderList from './OrderList';

const RecentOrders = () => {
    return (
        <div className='px-6 mt-6'>
            <div className='bg-sky-800 w-full h-[500px] rounded-lg'>
                <div className='flex items-center justify-between px-5 py-4'>
                    <h1 className='text-white text-lg font-smibold tracking-wide'>Recent Orders</h1>
                    <a className='text-cyan-400 text-sm font-semibold' href="">View all</a>
                </div>

                {/* Search */}
                <div className='flex items-center gap-4 bg-sky-700 rounded-[15px] py-2 px-4 mx-8'>
                    <FaSearch className='text-white' />
                    <input type="text" placeholder='search recent orders' className='bg-sky-700 text-white outline-none' />
                </div>

                {/* Order list */}
                <div className='mt-4 px-6 overflow-y-scroll h-[350px] scrollbar-hide'>
                    <OrderList />
                    <OrderList />
                    <OrderList />
                    <OrderList />
                    <OrderList />
                    <OrderList />
                    <OrderList />
                    <OrderList />
                </div>
            </div>
        </div>
    )
}

export default RecentOrders