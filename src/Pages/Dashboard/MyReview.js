import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import ReactStars from 'react-rating-stars-component';

const MyReview = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [rating, setRating] = useState(0);

    const ratingChanged = (event) => {
        setRating(event)
    };
    const onSubmit = async data => {
        data["rating"] = rating;
        const getReviews = {
            name: data.name,
            description: data.description,
            rating: rating
        }
        fetch(`https://driller-tools.herokuapp.com/reviews`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(getReviews)
        }).then(res => res.json())
            .then(data => {
                console.log(data);
            })
        reset()
    }
    return (
        <div>
            <h1 className='text-3xl font-bold'>Add a Review</h1>
            <div className='w-1/2 mx-auto'>
                <form onSubmit={handleSubmit(onSubmit)} className='my-6 card card-body shadow-lg bg-neutral'>
                    <input required className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4 my-3' type="text" placeholder="name" {...register("name", {})} />
                    <textarea required className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4 my-3' {...register("description", {})} />
                    <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={34}
                        activeColor="#ffd700"
                    />
                    <input className='btn btn-outline' type="submit" />
                </form>
            </div>
        </div>
    );
};

export default MyReview;