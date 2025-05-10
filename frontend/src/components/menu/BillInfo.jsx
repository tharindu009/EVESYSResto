import React, { useState } from 'react'

const BillInfo = () => {


    const [paymentMethod, setPaymentMethod] = useState("Cash");

    return (
        <>
            <div className='flex items-center justify-between px-5 mt-2'>
                <p className='text-xs text-gray-400 font-medium mt-2'>Items(4)</p>
                <h1 className='text-white text-md font-bold'>$124.54</h1>
            </div>
            <div className='flex items-center justify-between px-5 mt-2'>
                <p className='text-xs text-gray-400 font-medium mt-2'>Tax(6.0%))</p>
                <h1 className='text-white text-md font-bold'>$2.34</h1>
            </div>
            <div className="flex items-center justify-between px-5 mt-2">
                <p className="text-xs text-[#ababab] font-medium mt-2">
                    Total Payable
                </p>
                <h1 className="text-[#f5f5f5] text-md font-bold">
                    $126.88
                </h1>
            </div>
            <div className="flex items-center gap-3 px-5 mt-4">
                <button
                    onClick={() => setPaymentMethod("Cash")}
                    className={`bg-green-800 text-white px-4 py-3 w-full rounded-lg text-[#ababab] cursor-pointer hover:bg-green-500 font-semibold ${paymentMethod === "Cash" ? "bg-[#383737]" : ""
                        }`}
                >
                    Cash
                </button>
                <button
                    onClick={() => setPaymentMethod("Online")}
                    className={`bg-[#1f1f1f] px-4 py-3 w-full rounded-lg text-[#ababab] cursor-pointer text-white hover:bg-gray-600 font-semibold ${paymentMethod === "Online" ? "bg-[#383737]" : ""
                        }`}
                >
                    Online
                </button>
            </div>
            <div className="flex items-center gap-3 px-5 mt-4">
                <button className="bg-[#025cca] px-4 py-3 w-full rounded-lg text-[#f5f5f5] cursor-pointer hover:bg-blue-500 font-semibold text-lg">
                    Print Receipt
                </button>
                <button

                    className="bg-[#f6b100] px-4 py-3 w-full rounded-lg cursor-pointer text-[#1f1f1f] hover:bg-yellow-300 font-semibold text-lg"
                >
                    Place Order
                </button>
            </div>
        </>
    )
}

export default BillInfo