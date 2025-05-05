import React from 'react'
import Navbar from '../components/Navbar'
import Greetings from '../components/home/Greetings'
import MiniCard from '../components/home/MiniCard'
import { BsCashCoin } from "react-icons/bs";
import { GrInProgress } from "react-icons/gr";
import RecentOrders from '../components/home/RecentOrders';
import PopularDishes from '../components/home/PopularDishes';

const Home = () => {
    return (
        // h-[calc(100vh-5rem)]
        <section className='bg-sky-700 overflow-hidden flex gap-3 overflow-scroll h-[calc(150vh-5rem)]'>
            {/* Left Div */}
            <div className='flex-[3] bg-sky-900'>
                <Greetings />
                <div className='flex item-center w-full gap-3 px-6 mt-8'>
                    <MiniCard title="Total Earnings" icon={<BsCashCoin />} number={500} footerNum={1.6} />
                    <MiniCard title="In Progress" icon={<GrInProgress />} number={10} footerNum={1.6} />
                </div>
                <RecentOrders />
            </div>

            {/* Right Div */}
            <div className='flex-[2] bg-sky-900'>
                <PopularDishes />
            </div>
            <Navbar />
        </section>
    )
}

export default Home