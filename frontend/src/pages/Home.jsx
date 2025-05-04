import React from 'react'
import Navbar from '../components/Navbar'

const Home = () => {
    return (
        <section className='bg-sky-700 h-[calc(100vh-5rem)] overflow-hidden flex gap-3'>
            {/* Left Div */}
            <div className='flex-[3] bg-sky-900'>

            </div>
            {/* Right Div */}
            <div className='flex-[2] bg-sky-900'>

            </div>
            <Navbar />
        </section>
    )
}

export default Home