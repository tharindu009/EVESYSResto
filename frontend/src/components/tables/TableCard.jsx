import React from 'react'
import { useNavigate } from 'react-router-dom'

const TableCard = ({ id, name, status, initial, seats }) => {

    const navigate = useNavigate();
    const handleClick = () => {
        if (status === "Booked") return;
        navigate("/menu");
    }


    return (
        <div onClick={handleClick} key={id} className='w-[300px] bg-sky-800 p-4 rounded-lg mb-4 cursor-pointer hover:shadow-lg'>
            <div className='flex items-center justify-between'>
                <h1 className='text-white text-xl font-semibold'>{name}</h1>
                <p className={`${status === "Booked" ? "text-red-300 bg-red-600" : "text-green-600 bg-emerald-900"} px-2 py-1 rounded-lg`}>{status}</p>
            </div>
            <div className='flex items-center justify-center my-4'>
                <h1 className='bg-indigo-800 text-white rounded-lg p-4 tetx-xl'>{initial}</h1>
            </div>
            <p className='text-gray-400 text-sm'>Seats: <span className='tetx-white'>{seats}</span></p>
        </div>
    )
}

export default TableCard