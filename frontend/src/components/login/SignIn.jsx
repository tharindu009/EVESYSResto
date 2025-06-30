import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react'
import { login } from '../../https';
import { useSnackbar } from "notistack";
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/slices/userSlice';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

const SignIn = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch()
    const { enqueueSnackbar } = useSnackbar();
    const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : false);

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
        loginMutation.mutate(formData);
    }

    const loginMutation = useMutation({
        mutationFn: (reqData) => login(reqData),
        onSuccess: (res) => {
            const { data } = res;
            console.log(data);
            const { _id, name, email, role } = data.data;
            dispatch(setUser({ _id, name, email, role }));
            setToken(data.token);
            // if (token) {
            //     navigate('/')
            // }
        },
        onError: (error) => {
            console.log(error);
            const { response } = error;
            enqueueSnackbar(response.data.message, { variant: "error" })
        }
    })

    useEffect(() => {
        if (token) {
            navigate('/');
        }
    }, [token])

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