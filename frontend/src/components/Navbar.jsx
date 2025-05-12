import React, { useState, useEffect } from 'react'
import { FaHome } from "react-icons/fa";
import { MdOutlineReorder } from "react-icons/md";
import { MdOutlineTableBar } from "react-icons/md";
import { CiCircleMore } from "react-icons/ci";
import { BiSolidDish } from "react-icons/bi";
import { useNavigate, useLocation } from 'react-router-dom';
import Model from './Model';

const Navbar = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const [page, setPage] = useState('home');

    useEffect(() => {
        const pathToPage = {
            '/': 'home',
            '/orders': 'orders',
            '/tables': 'tables',
            '/more': 'more',
            '/menu': 'menu',
        };
        setPage(pathToPage[location.pathname] || 'home');
    }, [location.pathname]);

    const [isModelOpen, setIsModelOpen] = useState(false);
    const openModel = () => {
        setIsModelOpen(true);
    }
    const closeModel = () => {
        setIsModelOpen(false);
    }

    const [guestCount, setGuestCount] = useState(0);

    const increment = () => {
        if (guestCount >= 6) return;
        setGuestCount(guestCount + 1);
    }
    const decrement = () => {
        if (guestCount > 0) {
            setGuestCount(guestCount - 1);
        }
    }

    const isActive = (path) => location.pathname === path;

    return (
        <div className='fixed bottom-0 left-0 right-0 bg-sky-800 p-2 h-16 flex justify-around'>
            <button onClick={() => navigate("/")}
                className={`${page === "home" ? "text-gray-200 bg-sky-700 rounded-[20px]" : "text-gray-400"} cursor-pointer w-[200px] hover:text-gray-200`}>
                <FaHome className="inline mr-2" size={20} />Home
            </button>
            <button onClick={() => navigate("/orders")} className={`${page === "orders" ? "text-gray-200 bg-sky-700 rounded-[20px]" : "text-gray-400"} cursor-pointer w-[200px] hover:text-gray-200`}><MdOutlineReorder className="inline mr-2" size={20} />Orders</button>
            <button onClick={() => navigate("/tables")} className={`${page === "tables" ? "text-gray-200 bg-sky-700 rounded-[20px]" : "text-gray-400"} cursor-pointer w-[200px] hover:text-gray-200`}><MdOutlineTableBar className="inline mr-2" size={20} />Tables</button>
            <button onClick={() => navigate("/more")} className={`${page === "more" ? "text-gray-200 bg-sky-700 rounded-[20px]" : "text-gray-400"} cursor-pointer w-[200px] hover:text-gray-200`}><CiCircleMore className="inline mr-2" size={20} />More</button>

            <button
                disabled={page === "tables" || page === "menu"}
                onClick={openModel} className='absolute bottom-6 bg-yellow-600 hover:bg-yellow-800 text-white rounded-full p-3 items-center cursor-pointer'>
                <BiSolidDish size={30} />
            </button>
            <Model isOpen={isModelOpen} onClose={closeModel} title="Create New Order">
                <div>
                    <label className='block text-gray-200 mb-2 text-sm font-medium'>Customer Name</label>
                    <div className='className="flex items-center rounded-lg p-3 px-4 bg-sky-700'>
                        <input type="text" name='' placeholder='Enter customer name' className='bg-transparent flex-1 text-white focus:outline-none' />
                    </div>
                </div>
                <div>
                    <label className="block text-gray-200 mb-2 mt-3 text-sm font-medium">Customer Phone</label>
                    <div className="flex items-center rounded-lg p-3 px-4 bg-sky-700">
                        <input type="number" name="" placeholder="+1-9999999999" id="" className="bg-transparent flex-1 text-white focus:outline-none" />
                    </div>
                </div>
                <div>
                    <label className="block mb-2 mt-3 text-sm font-medium text-gray-400">Guest</label>
                    <div className="flex items-center justify-between bg-sky-700 px-4 py-3 rounded-lg">
                        <button onClick={decrement} className="text-yellow-500 text-2xl hover:text-yellow-900 cursor-pointer">&minus;</button>
                        <span className="text-white">{guestCount} Person</span>
                        <button onClick={increment} className="text-yellow-500 text-2xl hover:text-yellow-900 cursor-pointer">&#43;</button>
                    </div>
                </div>
                <button onClick={() => navigate("/tables")} className="w-full bg-[#F6B100] text-white rounded-lg py-3 mt-6 hover:bg-yellow-700 cursor-pointer">
                    Create Order
                </button>
            </Model>
        </div>
    )
}

export default Navbar