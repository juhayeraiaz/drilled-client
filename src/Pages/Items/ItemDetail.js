import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading';

const ItemDetail = () => {
    const { id } = useParams();
    const [user] = useAuthState(auth);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    // getting items
    const { data: item, isLoading, refetch } = useQuery(['items', user], () =>
        fetch(`https://drilled-tools.onrender.com/items/${id}`)
            .then(res => res.json())
    )

    // usestate for button handling
    const [error, setError] = useState(true);
    if (isLoading) {
        return <Loading></Loading>
    }
    // getting value from input via onckeyup function
    const getInput = event => {
        const quantityInput = event.target.value;
        console.log(quantityInput)
        const minimunQuantity = 50;
        const availableQuantity = parseInt(item.quantity);
        if (quantityInput < minimunQuantity) {
            setError(true);
        }
        else if (quantityInput > availableQuantity) {
            setError(true)
        }
        else {
            setError(false)
        }
    }

    const onSubmit = async (data, event) => {
        const quantityInput = data.quantity;
        const quantity = item.quantity - parseInt(quantityInput);

        const updatedItems = { quantity };

        // send data to the server
        const url = `https://drilled-tools.onrender.com/items/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedItems)
        })
            .then(res => res.json())
            .then(data => {
                refetch();
                event.target.reset();
            })
        const totalPrice = parseInt(quantityInput * item.price)
        const purchased = {
            buyerName: data.Name,
            buyer: user.email,
            address: data.Address,
            mobileNumber: data.mobileNumber,
            quantity: data.quantity,
            price: totalPrice
        }
        fetch('https://drilled-tools.onrender.com/purchased', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(purchased)
        })
            .then(res => res.json())
            .then(inserted => {
                if (inserted.insertedId) {
                    toast.success('Booked Successfully. Please Pay to complete purchase')
                    reset();
                }
                else {
                    toast.error('Failed to book')
                }
            })
    };
    return (
        <div className='py-20 px-8'>
            <div className='rounded-xl shadow-xl bg-neutral w-[85%] mx-auto'>
                <div className='w-full flex flex-col xl:flex-row justify-between'>
                    <div className='flex flex-col md:flex-row gap-x-3 xl:gap-x-10'>
                        <img className='w-80 lg:w-[380px] h-full rounded-xl md:rounded-r-none xl:rounded-br-none rounded-b-none xl:rounded-b-xl object-cover' src={item.img} alt="" />
                        <div className='flex flex-col gap-2 mt-5 p-5 md:p-4 md:mt-0 xl:mt-10'>
                            <h3 className='font-bold text-xl'>{item.name}</h3>
                            <p className='font-light'>{item.description}</p>
                            <p className='font-medium'>Available Quantity: {item.quantity}</p>
                            <p className='font-medium'>Must buy quantity: 50</p>
                            <p className='font-bold'>Price: ${item.price}</p>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className='p-5 xl:w-[35%] mr-10'>
                        <div className='w-full'>
                            <input type="text" placeholder='Full name' {...register("Name", {})} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4' />
                            <input type="text" placeholder={user.email} disabled {...register("Email", {})} className='bg-gray-50 border border-gray-300 rounded-lg w-full p-2.5 mb-4 placeholder-gray-900 block' />
                            <div>
                                <input type="tel" placeholder="mobileNumber" {...register("mobileNumber", {
                                    required: {
                                        value: true,
                                        message: ' Please provide a phone number'
                                    },
                                    minLength: 6, maxLength: 12
                                })}
                                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4' />
                                <label className="label">
                                    {errors.mobileNumber?.type === 'required' && <span className="label-text-alt text-red-500">{errors.mobileNumber.message}</span>}
                                </label>
                            </div>
                            <input type="text" placeholder="address" {...register("Address", {})} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4' />
                            <input type="number" onKeyUp={getInput} name='number' {...register("quantity", {})} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4' required />
                            <input type="submit" value='Buy Now' className='btn btn-outline' disabled={error} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;