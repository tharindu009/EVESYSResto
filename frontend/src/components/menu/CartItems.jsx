import React from 'react'
import { RiDeleteBin2Fill } from "react-icons/ri";
import { FaNotesMedical } from "react-icons/fa6";

const CartItems = () => {
    return (
        <div className='px-4 py-2'>

            <div className='mt-4 overflow-y-scroll scrollbar-hide h-[380px]'>
                <div className='bg-sky-700 rounded-lg px-4 py-4 mb-2'>
                    <div className='flex items-center justify-between'>
                        <h1 className='text-gray-300 font-semibold tracking-wide text-md'>Chicken</h1>
                        <p className='text-gray-300 font-semibold'>x2</p>
                    </div>
                    <div className='flex items-center justify-between mt-2'>
                        <div className='flex items-center gap-2'>
                            <RiDeleteBin2Fill className='border-black text-red-400 text-xl cursor-pointer' size={20} />
                            <FaNotesMedical className='text-white text-xl cursor-pointer' size={20} />
                        </div>
                        <p className='text-white text-lg font-semibold'>$25.50</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CartItems