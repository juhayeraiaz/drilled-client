import React from 'react';
import { useNavigate } from 'react-router-dom';

const Item = ({ item }) => {
    const { _id, name, img, description, price, quantity } = item;
    const navigate = useNavigate();

    const navigateToItemDetail = id => {
        navigate(`/items/${id}`);
    }
    return (
        <div className='rounded-2xl shadow-2xl p-6 gap-6 bg-neutral flex flex-col items-center justify-center w-[350px] mx-auto'>
            <img className='w-60 h-30 bg-white p-8 rounded-xl' src={img} alt="" />
            <h3 className='font-bold text-xl mt-3'>{name}</h3>
            <p className='text-center'>{description}</p>
            <p className='font-medium'>Available Quantity: {quantity}</p>
            <p className='font-bold'>Price: ${price}</p>
            <button onClick={() => navigateToItemDetail(_id)} className='btn btn-outline'>Buy Now: {name}</button>
        </div>
    );
};

export default Item;