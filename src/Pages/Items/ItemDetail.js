import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetail = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/items/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [id])
    const handleBuy = event => {
        event.preventDefault()
        const quantityInput = event.target.number.value;
        const minimunQuantity = 50;
        const availableQuantity = item.quantity;
        if (quantityInput < minimunQuantity) {
            return alert('please fullfill minimum Quantity')
        }
        else if (quantityInput > availableQuantity) {
            return alert('Purchase Amount Crosses total quantity')
        }
        else {
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
                    event.target.reset();
                })
        }
    }
    const handleRestock = event => {
        // event.preventDefault();
        const number = event.target.number.value;
        const quantity = item.quantity + parseInt(number);

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
                console.log('success', data);
                event.target.reset();
            })
    }
    return (
        <div className='my-28 rounded-2xl shadow-2xl p-6 gap-6 bg-neutral w-[150] lg:w-[750px] mx-auto flex flex-col lg:flex-row items-center'>
            <img className='w-80 lg:w-full bg-white p-6 rounded-xl' src={item.img} alt="" />
            <div className='flex flex-col items-center justify-center text-center gap-4'>
                <h3 className='font-bold text-xl mt-3'>{item.name}</h3>
                <p className='text-center'>{item.description}</p>
                <p className='font-medium'>Available Quantity: {item.quantity}</p>
                <p className='font-medium'>Must buy quantity: 50</p>
                <p className='font-bold'>Price: ${item.price}</p>
                <form onSubmit={handleBuy}>
                    <input type="number" name='number' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4' required />
                    <input type="submit" value='Buy Now' className='btn btn-outline' />
                </form>
            </div>
        </div>
    );
};

export default ItemDetail;