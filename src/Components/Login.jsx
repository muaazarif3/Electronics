import React, { useState } from 'react';
import { FaFacebookSquare, FaGoogle } from 'react-icons/fa';

const LoginPage = () => {
    const [isSignIn, setIsSignIn] = useState(true);

    return (
        <>
            <div className='w-full '>
                <div className='w-full flex  max-md:flex-col max-md:px-2 justify-between px-12  mt-10 items-center'>
                    <div className='w-1/2 ml-12 max-md:ml-2 max-md:w-full flex flex-col gap-4'>
                        <div className="">
                            <div className="bg-white p-8 rounded  max-w-md">
                                <div className="flex justify-between mb-4">
                                    <button
                                        className={`text-lg font-semibold ${isSignIn ? 'text-main' : 'text-gray'}`}
                                        onClick={() => setIsSignIn(true)}
                                    >
                                        Sign in
                                    </button>
                                    <button
                                        className={`text-lg font-semibold ${!isSignIn ? 'text-main' : 'text-gray'}`}
                                        onClick={() => setIsSignIn(false)}
                                    >
                                        Sign up
                                    </button>
                                </div>
                                <div className="mb-4">
                                    <input
                                        type="text"
                                        placeholder="Username"
                                        className="w-full p-2 border border-gray-300 rounded mb-2"
                                    />
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        className="w-full p-2 border border-gray-300 rounded mb-2"
                                    />
                                    <div className='flex justify-between items-center'>
                                    <a href="#" className="text-sm text-blue-500 hover:underline">Forgot password</a>
                                <button className="w-[100px] bg-main text-White font-bold p-2 rounded">Login</button>

                                    </div>
                                </div>
                                <div className="flex items-center my-4">
                                    <div className="flex-grow border-t border-gray-300"></div>
                                    <span className="mx-2 text-gray-500">OR</span>
                                    <div className="flex-grow border-t border-gray-300"></div>
                                </div>
                                <div className="flex justify-center space-x-4">
                                    <button className="bg-main text-White p-2 rounded-full">
                                    <FaGoogle />
                                    </button>
                                    <button className="bg-main text-White p-2 rounded-full">
                                    < FaFacebookSquare />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-1/2 max-md:w-full max-md:mt-4'>
                        <img src="img/same.png" className='w-full h-full object-contain' alt="" />
                    </div>
                </div>
            </div>

        </>
    );
};

export default LoginPage;
