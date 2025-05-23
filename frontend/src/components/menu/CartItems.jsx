import React, { useEffect, useRef } from 'react'
import { RiDeleteBin2Fill } from "react-icons/ri";
import { FaNotesMedical } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import { removeItem } from '../../redux/slices/cartSlice';
import { useDispatch } from 'react-redux';

const CartItems = () => {

    const cartData = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const scrolLRef = useRef();

    const handleRemove = (itemId) => {
        dispatch(removeItem(itemId));
    }

    useEffect(() => {
        if (scrolLRef.current) {
            scrolLRef.current.scrollTo({
                top: scrolLRef.current.scrollHeight,
                behavior: "smooth"
            })
        }
    }, [cartData]);


    return (
        <div className='px-4 py-2'>
            <h1 className="text-lg text-[#e4e4e4] font-semibold tracking-wide">
                Order Details
            </h1>

            <div className="mt-4 overflow-y-scroll scrollbar-hide h-[380px]" ref={scrolLRef} >

                {cartData.length === 0 ? (
                    <p className="text-gray-400 text-sm flex justify-center items-center h-[380px]">Your cart is empty. Start adding items!</p>
                ) : cartData.map((item, index) => {
                    return (
                        <div key={item.id || index} className='bg-sky-700 rounded-lg px-4 py-4 mb-2'>
                            <div className='flex items-center justify-between'>
                                <h1 className='text-gray-300 font-semibold tracking-wide text-md'> {item.name}</h1>
                                <p className='text-gray-300 font-semibold'>x{item.quantity}</p>
                            </div>
                            <div className='flex items-center justify-between mt-2'>
                                <div className='flex items-center gap-2'>
                                    <RiDeleteBin2Fill onClick={() => handleRemove(item.id)} className='border-black text-red-400 text-xl cursor-pointer' size={20} />
                                    <FaNotesMedical className='text-white text-xl cursor-pointer' size={20} />
                                </div>
                                <p className='text-white text-lg font-semibold'>${item.price}</p>
                            </div>

                        </div>
                    )
                })}


            </div>
        </div>
    )
}

export default CartItems