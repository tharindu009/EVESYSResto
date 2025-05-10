import React from 'react'

const CustomerInfo = () => {
    return (
        <div className='flex items-center justify-between px-4 py-3'>
            <div className='flex flex-col items-start'>
                <h1 className='text-md text-white font-semibold tracking-wide'>Customer Name</h1>
                <p className='text-xs text-gray-400 font-medium mt-1'>#101 Dine In</p>
                <p className='text-xs text-gray-400 font-medium mt-2'>May 23, 2025 5:24pm</p>
            </div>
            <button className='bg-yellow-600 text-white p-3 text-xl font-bold rounded-lg'>CN</button>
        </div>
    )
}

export default CustomerInfo