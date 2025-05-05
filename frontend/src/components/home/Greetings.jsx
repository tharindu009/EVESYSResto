import { useState, useEffect } from "react"
import React from 'react'

const Greetings = () => {

    const [dateTime, setDateTime] = useState(new Date())


    useEffect(() => {
        const timer = setInterval(() => {
            setDateTime(new Date())
        }, 1000)

        return () => clearInterval(timer)

    }, []);

    const formatDate = (date) => {
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        return `${months[date.getMonth()]} ${String(date.getDate()).padStart(2, 0)}, ${date.getFullYear()}`; // 1st Jan 2023

    }
    const formatTime = (date) => `${String(date.getHours()).padStart(2, 0)}:${String(date.getMinutes()).padStart(2, 0)}:${String(date.getSeconds()).padStart(2, 0)}`;


    return (
        <div className='flex justify-between items-center px-8 mt-5'>
            <div>
                <h1 className='text-white text-2xl font-semibold tracking-wide pb-2'>Good Morning, john Doe</h1>
                <p className='text-gray-400 text-sm'>Welcome to your dashboard</p>
            </div>
            <div>
                <h1 className="text-white text-3xl font-bold tracking-wide w-[130px]">{formatTime(dateTime)}</h1>
                <p className="text-gray-400 text-sm">{formatDate(dateTime)}</p>
            </div>
        </div>
    )
}

export default Greetings