import React from 'react'
import { FaCheck } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";

const OrderCard = () => {
    return (
        <div className='w-[450px] bg-sky-800 p-4 rounded-lg mb-4'>
            <div className='flex items-center gap-5'>
                <button className='bg-orange-400 p-3 text-xl font-bold rounded-lg'>AM</button>
                <div className='flex items-center justify-between w-[100%]'>
                    <div className='flex flex-col items-start gap-1'>
                        <h1 className='text-white text-lg font-semibold tracking-wide'>John Doe</h1>
                        <p className='text-gray-400 text-sm'>#101/Dine in</p>
                    </div>
                    <div className='flex flex-col items-end gpa-1'>
                        <p className='text-green-600 bg-emerald-900 px-2 py-1 rounded-lg'><FaCheck className='inline mr-2' />Ready</p>
                        <p className='text-gray-400 text-sm'><FaCircle className='inline mr-2 text-green-600' />Ready to serve</p>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-between mt-4 text-gray-400'>
                <p>May 05, 2025 10:00 AM</p>
                <p>8 Items</p>
            </div>
            <hr className='w-full mt-4 border-t-1 border-gray-500' />
            <div className='flex items-center justify-between mt-4'>
                <h1 className='text-white font-semibold text-lg'>Total</h1>
                <p className='text-white text-lg font-semibold'>$ 120.00</p>
            </div>
        </div>
    )
}

export default OrderCard