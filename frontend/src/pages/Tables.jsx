import React from 'react'
import Navbar from '../components/Navbar'
import BackButton from '../components/orders/BackButton'
import TableCard from '../components/tables/TableCard'
import { tables } from '../constants'

const Tables = () => {


    const [status, setStatus] = React.useState('all')

    return (
        <section className='bg-sky-700 overflow-hidden overflow-scroll h-[calc(150vh-5rem)]'>
            <div className='flex items-center justify-between px-10 py-2'>
                <div className='flex items-center gap-4'>
                    <BackButton />
                    <h1 className='text-white text-2xl font-bold tracking-wider '>Tables</h1>
                </div>
                <div className='flex items-center justify-around gap-4'>
                    <button onClick={() => setStatus("all")} className={`text-lg ${status === "all" && "bg-sky-800 rounded-lg px-4 py-2 text-white"} 
                    text-gray-400 rounded-lg px-4 py-2 font-semibold cursor-pointer`}>All</button>
                    <button onClick={() => setStatus("booked")} className={`text-lg ${status === "booked" && "bg-sky-800 rounded-lg px-4 py-2 text-white"} 
                    text-gray-400 rounded-lg px-4 py-2 font-semibold cursor-pointer`}>Booked</button>
                </div>
            </div>
            <div className='flex flex-wrap gap-6 items-center justify-center px-6 py-2 overfflow-y-scroll scrollbar-hide h-[calc(100vh-5rem-5rem)]'>
                {
                    tables.map((table) => {
                        return (
                            <TableCard key={table.id} name={table.name} status={table.status} initial={table.initial} />
                        )
                    })
                }
            </div>
            <Navbar />
        </section>
    )
}

export default Tables