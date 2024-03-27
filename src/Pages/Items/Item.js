import React from 'react';
import { useNavigate } from 'react-router-dom';

const Item = ({ item }) => {
    const { _id, name, img, description, price, quantity } = item;
    const navigate = useNavigate();

    const navigateToItemDetail = id => {
        navigate(`/items/${id}`);
    }
    return (
        <div className='rounded-2xl transition delay-150 duration-300 ease-in-out shadow-md p-6 gap-1 bg-neutral flex flex-col w-[350px] mx-auto'>
            <img className='w-72 h-48 rounded-md' src={img} alt="" />
            <h3 className='font-bold text-xl mt-3'>{name}</h3>
            <p className='text-base font-light'>{description}</p>
            <p className='font-medium'>Available Quantity: {quantity}</p>
            <p className='font-bold'>Price: ${price}</p>
            <button onClick={() => navigateToItemDetail(_id)} className='btn btn-outline'>Buy Now: {name}</button>
        </div>
    );
};

export default Item;