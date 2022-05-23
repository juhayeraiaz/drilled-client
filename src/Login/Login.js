import React, { useEffect } from 'react';
import logo from '../Images/drilled.png'
import google from '../Images/social/google.png'
import github from '../Images/social/github.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.init'
import Loading from '../Shared/Loading'
import { useSignInWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import useToken from '../Shared/Hooks/useToken';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [signInWithGithub, gitUser, gitLoading, gitError] = useSignInWithGithub(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [token] = useToken(user || gUser || gitUser)

    let signInError;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])

    if (loading || gLoading || gitLoading) {
        return <Loading></Loading>
    }

    if (error || gError || gitError) {
        signInError = <p className='text-red-500'><small>{error?.message || gError?.message}</small></p>
    }

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
    }
    return (
        <div>
            <div className="flex items-center justify-center">
                <div className="relative h-full lg:w-6/12">
                    <div className="m-auto py-12 px-6 sm:p-20 xl:w-10/12">
                        <div className="space-y-4">
                            <Link to='/'>
                                <img src={logo} className="w-40" alt="tailus logo" />
                            </Link>
                            <p className="font-medium text-lg">Welcome to tailus ! Login first</p>
                        </div>

                        <div className="mt-12 grid gap-6 sm:grid-cols-2">
                            <button onClick={() => signInWithGoogle()} className="h-12 px-6 border border-blue-100 rounded-lg bg-blue-50 hover:bg-blue-100 focus:bg-blue-100 active:bg-blue-200">
                                <div className="flex items-center space-x-4 justify-center">
                                    <img src={google} className="w-5" alt="" />
                                    <span className="block w-max font-medium tracking-wide text-sm text-blue-700">Sign in with  Google</span>
                                </div>
                            </button>
                            <button onClick={() => signInWithGithub()} className="h-12 px-6 rounded-lg bg-gray-900 transition hover:bg-gray-800 active:bg-gray-600 focus:bg-gray-700">
                                <div className="flex space-x-4 items-center justify-center text-white">
                                    <img src={github} className='w-5' alt="" />
                                    <span className="block w-max font-medium tracking-wide text-sm text-white">Sign in with Github</span>
                                </div>
                            </button>
                        </div>
                        <div className='divider my-8 lg:mt-12'>OR</div>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 py-6">
                            <div>
                                <input
                                    type="email"
                                    placeholder="Enter Email"
                                    className="w-full py-3 px-6 ring-1 ring-gray-300 rounded-lg placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Email is Required'
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'Provide a valid Email'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                </label>
                            </div>

                            <div className="flex flex-col items-end">
                                <input
                                    type="password"
                                    placeholder="Enter Password"
                                    className="w-full py-3 px-6 ring-1 ring-gray-300 rounded-lg placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: 'Password is Required'
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Must be 6 characters or longer'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                </label>
                            </div>
                            {signInError}
                            <input className='w-full px-6 py-3 my-4 rounded-lg bg-sky-500 transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800' type="submit" value="Login" />
                        </form>
                        <Link to='/signup' className='text-sm'>Create a New Account</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;