import React from 'react';
import logo from '../Images/tailus.svg'
import google from '../Images/social/google.png'
import github from '../Images/social/github.png'
import { Link } from 'react-router-dom';
const Signup = () => {
    return (
        <div>
            <div class="flex items-center justify-center">
                <div class="relative h-full lg:w-6/12">
                    <div class="m-auto py-12 px-6 sm:p-20 xl:w-10/12">
                        <div class="space-y-4">
                            <Link to='/'>
                                <img src={logo} class="w-40" alt="tailus logo" />
                            </Link>
                            <p class="font-medium text-lg">Welcome to tailus ! Signup first</p>
                        </div>
                        <form action="" class="space-y-8 py-6">
                            <div>
                                <input
                                    type="name"
                                    placeholder="Enter Full name"
                                    class="w-full py-3 px-6 ring-1 ring-gray-300 rounded-lg placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    placeholder="Enter Email"
                                    class="w-full py-3 px-6 ring-1 ring-gray-300 rounded-lg placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                                />
                            </div>

                            <div class="flex flex-col items-end">
                                <input
                                    type="password"
                                    placeholder="Enter Password"
                                    class="w-full py-3 px-6 ring-1 ring-gray-300 rounded-lg placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                                />
                            </div>

                            <div>
                                <Link to='/login' className='text-sm'>Already a user?</Link>
                                <button class="w-full px-6 py-3 my-4 rounded-lg bg-sky-500 transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800">
                                    <span class="font-semibold text-white text-lg">Sign Up</span>
                                </button>
                            </div>
                        </form>
                        <div className='divider my-8 lg:mt-12'>OR</div>
                        <div class="mt-12 grid gap-6 sm:grid-cols-2">
                            <button class="h-12 px-6 border border-blue-100 rounded-lg bg-blue-50 hover:bg-blue-100 focus:bg-blue-100 active:bg-blue-200">
                                <div class="flex items-center space-x-4 justify-center">
                                    <img src={google} class="w-5" alt="" />
                                    <span class="block w-max font-medium tracking-wide text-sm text-blue-700">Sign In with  Google</span>
                                </div>
                            </button>
                            <button class="h-12 px-6 rounded-lg bg-gray-900 transition hover:bg-gray-800 active:bg-gray-600 focus:bg-gray-700">
                                <div class="flex space-x-4 items-center justify-center text-white">
                                    <img src={github} className='w-5' alt="" />
                                    <span class="block w-max font-medium tracking-wide text-sm text-white">Sign In with Github</span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;