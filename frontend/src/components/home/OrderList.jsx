import React from 'react'
import { FaCheck } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";

const OrderList = () => {
    return (
        <div className='flex items-center gap-5 mb-2'>
            <button className='bg-orange-400 p-3 text-xl font-bold rounded-lg'>AM</button>
            <div className='flex items-center justify-between w-[100%]'>
                <div className='flex flex-col items-start gap-1'>
                    <h1 className='text-white text-lg font-semibold tracking-wide'>John Doe</h1>
                    <p className='text-gray-400 text-sm'>8 Items</p>
                </div>
                <div>
                    <h1 className='text-yellow-500 font-semibold border border-yellow-500 rounded-lg p-1'>Table No: 3</h1>
                </div>
                <div className='flex flex-col items-end gpa-1'>
                    <p className='text-green-600'><FaCheck className='inline mr-2' />Ready</p>
                    <p className='text-gray-400 text-sm'><FaCircle className='inline mr-2 text-green-600' />Ready to serve</p>
                </div>
            </div>
        </div>
    )
}

export default OrderList