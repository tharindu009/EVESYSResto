import React from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const BackButton = () => {

    const navigate = useNavigate();

    return (
        <button onClick={() => navigate(-1)} className='bg-yellow-600 hover:bg-yellow-700 p-2 rounded-lg text-xl font-bold cursor-pointer text-white'>
            <IoMdArrowRoundBack />
        </button>
    )
}

export default BackButton