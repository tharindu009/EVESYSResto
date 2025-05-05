import React from 'react'
import { popularDishes } from "../../constants/index";

const PopularDishes = () => {
    return (
        <div className='mt-4 px-4'>
            <div className='bg-sky-800 w-full rounded-lg'>
                <div className='flex items-center justify-between px-5 py-4'>
                    <h1 className='text-white text-lg font-smibold tracking-wide'>Popular Dishes</h1>
                    <a className='text-cyan-400 text-sm font-semibold' href="">View all</a>
                </div>
                <div className='overflow-y-scroll h-[680px] scrollbar-hide'>
                    {
                        popularDishes.map((dish, index) => {
                            return (
                                <div
                                    key={dish.id}
                                    className="flex items-center gap-4 bg-sky-900 rounded-[15px] px-4 py-4 mt-4 mx-2">
                                    <h1 className='text-white font-bold text-xl'>{dish.id < 10 ? `0${dish.id}` : dish.id}</h1>
                                    <img
                                        src={dish.image}
                                        alt={dish.name}
                                        className="w-[50px] h-[50px] rounded-full"
                                    />
                                    <div>
                                        <h1 className="text-white font-semibold tracking-wide">{dish.name}</h1>
                                        <p className="text-white text-sm font-semibold">
                                            <span className="text-gray-400">Orders: </span>
                                            {dish.numberOfOrders}
                                        </p>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div >
    )
}

export default PopularDishes