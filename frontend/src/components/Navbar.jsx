import React, { use } from 'react'
import { FaHome } from "react-icons/fa";
import { MdOutlineReorder } from "react-icons/md";
import { MdOutlineTableBar } from "react-icons/md";
import { CiCircleMore } from "react-icons/ci";
import { BiSolidDish } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate();

    return (
        <div className='fixed bottom-0 left-0 right-0 bg-sky-800 p-2 h-16 flex justify-around'>
            <button onClick={() => navigate("/")} className=' text-gray-200 cursor-pointer bg-sky-700 w-[200px] rounded-[20px]'><FaHome className="inline mr-2" size={20} />Home</button>
            <button onClick={() => navigate("/orders")} className='text-gray-400 w-[200px] cursor-pointer'><MdOutlineReorder className="inline mr-2" size={20} />Orders</button>
            <button onClick={() => navigate("/tables")} className='text-gray-400 w-[200px] cursor-pointer'><MdOutlineTableBar className="inline mr-2" size={20} />Tables</button>
            <button className='text-gray-400 w-[200px] cursor-pointer'><CiCircleMore className="inline mr-2" size={20} />More</button>

            <button className='absolute bottom-6 bg-yellow-600 text-white rounded-full p-3 items-center cursor-pointer'><BiSolidDish size={30} /></button>
        </div>
    )
}

export default Navbar