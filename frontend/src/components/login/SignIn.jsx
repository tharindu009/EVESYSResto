import React, { useState } from 'react'

const SignIn = () => {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="" className='block text-[#ababab] mb-2 mt-3 text-sm font-medium'>
                        Email
                    </label>
                    <div className="flex item-center rounded-lg p-5 px-4 bg-[#1f1f1f]">
                        <input
                            type="email"
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            placeholder='Enter Employee email'
                            className='gb-transparent flex-1 text-white focus:outline-none'
                            required />
                    </div>
                </div>
                <div>
                    <label htmlFor="" className='block text-[#ababab] mb-2 mt-3 text-sm font-medium'>
                        Password
                    </label>
                    <div className="flex item-center rounded-lg p-5 px-4 bg-[#1f1f1f]">
                        <input
                            type="password"
                            name='password'
                            value={formData.password}
                            onChange={handleChange}
                            placeholder='Enter Password'
                            className='gb-transparent flex-1 text-white focus:outline-none'
                            required />
                    </div>
                </div>

                <button type='submit' className='w-full mt-6 py-3 rounded-lg text-lg bg-yellow-400 text-gray-900 font-bold'>
                    Log In
                </button>
            </form>
        </div>
    )
}

export default SignIn