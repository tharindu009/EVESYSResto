import React from 'react'
import Navbar from '../components/Navbar'
import BackButton from '../components/orders/BackButton'
import { MdRestaurantMenu } from "react-icons/md";
import MenuContainer from '../components/menu/MenuContainer';

import CustomerInfo from '../components/menu/CustomerInfo';
import CartItems from '../components/menu/CartItems';
import BillInfo from '../components/menu/BillInfo';

const Menu = () => {
    return (
        <section className='bg-sky-700 overflow-hidden flex gap-3 overflow-scroll h-[calc(150vh-5rem)]'>
            {/* Left Div */}
            <div className='flex-[3] bg-sky-700'>
                <div className='flex items-center justify-between px-10 py-2'>
                    <div className='flex items-center gap-4'>
                        <BackButton />
                        <h1 className='text-white text-2xl font-bold tracking-wider '>Menu</h1>
                    </div>
                    <div className='flex items-center justify-around gap-4'>
                        <div className="flex items-center justify-around gap-4">
                            <div className="flex items-center gap-3 cursor-pointer">
                                <MdRestaurantMenu className="text-white text-4xl" />
                                <div className="flex flex-col items-start">
                                    <h1 className="text-md text-[#f5f5f5] font-semibold tracking-wide">
                                        Customer Name
                                    </h1>
                                    <p className="text-xs text-[#ababab] font-medium">
                                        Table : No
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <MenuContainer />
            </div>

            {/* Right Div */}

            <div className='flex-[1] bg-sky-900'>
                {/* Customer Info */}
                <CustomerInfo />
                <hr className="border-sky-700 border-t-2" />

                {/* Cart Items */}
                <CartItems />
                <hr className="border-sky-700 border-t-2" />

                {/* Bills */}
                <BillInfo />
            </div>


            <Navbar />
        </section>
    )
}

export default Menu