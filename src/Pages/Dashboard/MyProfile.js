import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import profile from '../../Images/profile.png'
import Loading from '../../Shared/Loading';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = async (data, event) => {
        const updatedUser = {
            email: user.email,
            mobileNumber: data.mobileNumber,
            address: data.address,
            education: data.education,
            linkedin: data.linkedinLink
        }
        fetch(`https://driller-tools.herokuapp.com/user/${user.email}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(updatedUser)
        }).then(res => res.json())
            .then(data => {
                console.log(data);
            })
        reset()
    }

    const { data: users, isLoading, refetch } = useQuery('users', () => fetch(`https://driller-tools.herokuapp.com/user/${user.email}`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    console.log(users)
    refetch()
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-4xl font-bold'>Welcome to my profile</h1>
            <div className='p-6 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 items-center'>
                <div className='my-6 w-full text-center card card-body shadow-lg bg-neutral'>
                    {user.photoURL ? <img src={user.photoURL} className="w-40 mx-auto rounded-full my-4" alt="" /> : <img src={profile} className="w-40 mx-auto rounded-full my-4" alt="" />}
                    <h1 className='text-2xl my-1'>Name :  {user.displayName}</h1>
                    <h1 className='text-2xl my-1'>Email :  {user.email}</h1>
                    <h1 className='text-2xl my-1'>Address :  {users?.address}</h1>
                    <h1 className='text-2xl my-1'>Education :  {users?.education}</h1>
                    <h1 className='text-2xl my-1'>Mobile Number :  {users?.mobileNumber}</h1>
                    <a className='text-2xl my-1 font-medium' href={users?.linkedin} target={'blank'}>Linkedin link</a>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className='my-6 card card-body shadow-lg bg-neutral'>
                    <input type="tel" placeholder="Mobile Number" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4 my-3' {...register("mobileNumber", { required: true, maxLength: 12 })} />
                    <input type="text" placeholder="Address" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4 my-3' {...register("address", {})} />
                    <input type="text" placeholder="Education" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4 my-3' {...register("education", {})} />
                    <input type="url" placeholder="linkedin Link" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4 my-3' required {...register("linkedinLink", {})} />

                    <input className='btn btn-outline my-3' type="submit" />
                </form>
            </div>
        </div>
    );
};

export default MyProfile;