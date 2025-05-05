import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import OrderCard from '../components/orders/OrderCard'
import BackButton from '../components/orders/BackButton'

const Orders = () => {

    const [status, setStatus] = useState('all')


    return (
        <section className='bg-sky-700 overflow-hidden overflow-scroll h-[calc(150vh-5rem)]'>
            <div className='flex items-center justify-between px-10 py-2'>
                <div className='flex items-center gap-4'>
                    <BackButton />
                    <h1 className='text-white text-2xl font-bold tracking-wider '>Orders</h1>
                </div>
                <div className='flex items-center justify-around gap-4'>
                    <button onClick={() => setStatus("all")} className={`text-lg ${status === "all" && "bg-sky-800 rounded-lg px-4 py-2 text-white"} text-gray-400 rounded-lg px-4 py-2 font-semibold cursor-pointer`}>All</button>
                    <button onClick={() => setStatus("progress")} className={`text-lg ${status === "progress" && "bg-sky-800 rounded-lg px-4 py-2 text-white"} text-gray-400 rounded-lg px-4 py-2 font-semibold cursor-pointer`}>In Progress</button>
                    <button onClick={() => setStatus("ready")} className={`text-lg ${status === "ready" && "bg-sky-800 rounded-lg px-4 py-2 text-white"} text-gray-400 rounded-lg px-4 py-2 font-semibold cursor-pointer`}>Ready</button>
                    <button onClick={() => setStatus("completed")} className={`text-lg ${status === "completed" && "bg-sky-800 rounded-lg px-4 py-2 text-white"} text-gray-400 rounded-lg px-4 py-2 font-semibold cursor-pointer`}>Completed</button>
                </div>
            </div>
            <div className='flex flex-wrap gap-6 items-center justify-center px-6 py-2 overfflow-y-scroll scrollbar-hide h-[calc(100vh-5rem-5rem)]'>
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <OrderCard />
            </div>
            <Navbar />
        </section>
    )
}

export default Orders