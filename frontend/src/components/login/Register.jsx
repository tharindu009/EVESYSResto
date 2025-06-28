import React from 'react'

const Register = () => {
    return (
        <div>
            <form>
                <div>
                    <label htmlFor="" className='block text-[#ababab] mb-2 text-sm font-medium'>
                        Employee Name
                    </label>
                    <div className="flex item-center rounded-lg p-5 px-4 bg-[#1f1f1f]">
                        <input type="text" name='name' placeholder='Enter Employee name' className='gb-transparent flex-1 text-white focus:outline-none' required />
                    </div>
                </div>
                <div>
                    <label htmlFor="" className='block text-[#ababab] mb-2 mt-3 text-sm font-medium'>
                        Employee Email
                    </label>
                    <div className="flex item-center rounded-lg p-5 px-4 bg-[#1f1f1f]">
                        <input type="email" name='name' placeholder='Enter Employee email' className='gb-transparent flex-1 text-white focus:outline-none' required />
                    </div>
                </div>
                <div>
                    <label htmlFor="" className='block text-[#ababab] mb-2 mt-3 text-sm font-medium'>
                        Password
                    </label>
                    <div className="flex item-center rounded-lg p-5 px-4 bg-[#1f1f1f]">
                        <input type="password" name='name' placeholder='Enter Password' className='gb-transparent flex-1 text-white focus:outline-none' required />
                    </div>
                </div>
                <div>
                    <label htmlFor="" className='block text-[#ababab] mb-2 mt-3 text-sm font-medium'>
                        Enter role
                    </label>
                    <div className="flex items-center gap-3 mt-4">
                        {["Waiter", "Cashier", "Admin"].map((role) => {
                            return (
                                <button
                                    key={role}
                                    type='button'
                                    className='bg-[#1f1f1f] px-4 py-3 w-full rounded-lg text-[#ababab] cursor-pointer hover:border border-indigo-600'>
                                    {role}
                                </button>
                            )
                        })}
                    </div>
                </div>
                <button type='submit' className='w-full mt-6 py-3 rounded-lg text-lg bg-yellow-400 text-gray-900 font-bold'>
                    Register
                </button>
            </form>
        </div>
    )
}

export default Register