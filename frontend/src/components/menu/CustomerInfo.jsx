import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { formatDate, getAvatarName } from '../../utils';

const CustomerInfo = () => {

    const [dateTime, setDateTime] = useState(new Date());

    const customerData = useSelector((state) => state.customer);

    return (
        <div className='flex items-center justify-between px-4 py-3'>
            <div className='flex flex-col items-start'>
                <h1 className='text-md text-white font-semibold tracking-wide'>{customerData.customerName || "Customer Name"}</h1>
                <p className='text-xs text-gray-400 font-medium mt-1'>#{customerData.orderId || "N/A"} - Dine In</p>
                <p className='text-xs text-gray-400 font-medium mt-2'>
                    {formatDate(dateTime)}
                </p>
            </div>
            <button className='bg-yellow-600 text-white p-3 text-xl font-bold rounded-lg'>
                {getAvatarName(customerData.customerName) || "CN"}
            </button>
        </div>
    )
}

export default CustomerInfo