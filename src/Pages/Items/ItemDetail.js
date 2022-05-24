import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading';

const ItemDetail = () => {
    const { id } = useParams();
    const [user] = useAuthState(auth);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    // getting items
    const { data: item, isLoading, refetch } = useQuery(['items', user], () =>
        fetch(`http://localhost:5000/items/${id}`)
            .then(res => res.json())
    )
    // usestate for button handling
    const [error, setError] = useState(true);
    if (isLoading) {
        return <Loading></Loading>
    }
    // getting value from input via onchange function
    const getInput = event => {
        const quantityInput = event.target.value;
        const minimunQuantity = 50;
        const availableQuantity = item.quantity;
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
    // submitting data in onsubmit btn
    const handleBuy = event => {
        event.preventDefault()
        const quantityInput = event.target.number.value;
        const quantity = item.quantity - quantityInput;

        const updatedUser = { quantity };

        // send data to the server
        const url = `http://localhost:5000/items/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
            .then(res => res.json())
            .then(data => {
                alert('Item Delivered');
                refetch();
                event.target.reset();
            })
    }
    return (
        <div className='py-20 px-8'>
            <div className='mt-4 rounded-2xl shadow-2xl p-6 gap-6 bg-neutral w-[150] lg:w-[1350px] mx-auto flex flex-col lg:flex-row items-center'>
                <img className='w-80 lg:w-[380px] bg-white p-6 rounded-xl' src={item.img} alt="" />
                <div className='flex flex-col items-center justify-center text-center gap-4'>
                    <h3 className='font-bold text-xl mt-3'>{item.name}</h3>
                    <p className='text-center'>{item.description}</p>
                    <p className='font-medium'>Available Quantity: {item.quantity}</p>
                    <p className='font-medium'>Must buy quantity: 50</p>
                    <p className='font-bold'>Price: ${item.price}</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" placeholder="Name" {...register("Name", {})} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4' />
                    <input type="text" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4' />
                    <input type="tel" placeholder="Mobile number" {...register("Mobile number", { required: true, minLength: 6, maxLength: 12 })} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4' />
                    <input type="text" placeholder="Address" {...register("Address", {})} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4' />
                    <input onChange={getInput} type="number" name='number' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4' required />
                    <input type="submit" value='Buy Now' className='btn btn-outline' disabled={error} />
                </form>
                <form onSubmit={handleBuy}>
                    <input onChange={getInput} type="number" name='number' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4' required />
                    <input type="submit" value='Buy Now' className='btn btn-outline' disabled={error} />
                </form>
            </div>
        </div>
    );
};

export default ItemDetail;