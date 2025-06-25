import React from 'react'
import Loginimage from "../assets/images/restaurant-img.jpg"
import logo from '../assets/images/logo.png'

const Login = () => {
    return (
        <div className='flex min-h-screen w-full'>
            {/* Left Section */}
            <div className='w-1/2 relative flex items-center justify-center bg-cover'>
                {/* BG Image */}
                <img className='w-full h-full object-cover' src={Loginimage} alt="" />

                {/* Back Overlay */}
                <div className='absolute inset-0 bg-opacity-50'>

                </div>

                {/*  */}
                <blockquote className='absolute bottom-10 px-8 mb-10 text-2xl italic'>
                    "Where great food meets smart management — your kitchen’s new best friend."
                    <br />
                    <span className='block mt-4 text-yellow-400'> - EVESYS Technologies</span>
                </blockquote>
            </div>
            {/* Right Section */}
            <div className='w-1/2 min-h-screen bg-[#1a1a1a] p-10'>
                <div className='flex flex-col items-center gap-2'>
                    <img src={logo} alt="" className='h-20 w-20 border-2 rounded-full p-1' />
                    <h1 className='text-lg font-semibold text-[#f5f5f5] tracking-wide'>EVERESTO</h1>
                </div>
                <h2 className='text-4xl text-center mt-10 font-semibold text-yellow-400 mb-10'>Employee Registration</h2>
                {/* components */}


                <div className='flex justify-center mt-6'>
                    <p className='text-sm text-[#ababab]'>Already have an account?
                        <a className='text-yellow-400 font-semibold hover:text-yellow-800 ml-2' href="">
                            Sign in
                        </a>
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Login