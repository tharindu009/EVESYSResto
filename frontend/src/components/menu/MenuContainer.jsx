import React, { useState } from 'react'
import { menus } from '../../constants'
import { GrRadialSelected } from "react-icons/gr";
import { FaShoppingCart } from "react-icons/fa";


const MenuContainer = () => {

    const [selected, setSelected] = useState(menus[0]);
    const [itemId, setItemId] = useState();
    const [itemCount, setItemCount] = useState(0);

    const increment = (id) => {
        setItemId(id);
        if (itemCount >= 4) return;
        setItemCount((prev) => prev + 1);
    };

    const decrement = (id) => {
        setItemId(id);
        if (itemCount <= 0) return;
        setItemCount((prev) => prev - 1);
    };

    return (
        <>
            <div className='grid grid-cols-4 gap-4 px-10 py-4 w-[100%]'>
                {menus.map((menu) => {
                    return (
                        <div key={menu.id} className='flex flex-col items-start justify-between p-4 rounded-lg h-[100px] 
                        cursor-pointer hover:shadow-xl' style={{ backgroundColor: menu.bgColor }}
                            onClick={() => {
                                setSelected(menu);
                                setItemId(0);
                                setItemCount(0);
                            }}>
                            <div className='flex items-center justify-between w-full'>
                                <h1 className='text-white text-lg font-semibold'>{menu.icon} {menu.name}</h1>
                                {selected.id === menu.id && <GrRadialSelected className='text-white' size={20} />}
                            </div>
                            <p className='text-gray-400'>{menu.items.length} Items</p>
                        </div>
                    )
                })
                }
            </div >
            <hr className='border-sky-800 border-t-2 mt-4' />
            <div className='grid grid-cols-4 gap-4 px-10 py-4 w-[100%]'>
                {selected?.items.map((item) => {
                    return (
                        <div
                            key={item.id}
                            className="flex flex-col items-start justify-between p-4 rounded-lg h-[150px] hover:bg-sky-800 bg-sky-600"
                        >
                            <div className="flex items-start justify-between w-full">
                                <h1 className="text-white text-lg font-semibold">
                                    {item.name}
                                </h1>
                                <button className="bg-[#2e4a40] text-[#02ca3a] p-2 rounded-lg"><FaShoppingCart size={20} /></button>
                            </div>
                            <div className="flex items-center justify-between w-full">
                                <p className="text-[#f5f5f5] text-lg font-bold">
                                    ${item.price}
                                </p>
                                <div className="flex items-center justify-between bg-sky-900 px-4 py-2 rounded-lg gap-4 w-[50%]">
                                    <button
                                        onClick={() => decrement(item.id)}
                                        className="text-yellow-400 text-2xl cursor-pointer hover:text-yellow-600"
                                    >
                                        &minus;
                                    </button>
                                    <span className="text-white">
                                        {itemId == item.id ? itemCount : "0"}
                                    </span>
                                    <button
                                        onClick={() => increment(item.id)}
                                        className="text-yellow-400 text-2xl cursor-pointer hover:text-yellow-600"
                                    >
                                        &#43;
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    )
}

export default MenuContainer