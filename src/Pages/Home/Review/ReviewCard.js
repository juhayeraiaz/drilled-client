import React from 'react';
import ReactStars from 'react-rating-stars-component';

const ReviewCard = ({ review }) => {
    return (
        <div class="mx-auto overflow-hidden bg-neutral my-6 rounded-3xl shadow">
            <div class="w-[300px] p-6 md:p-4 flex flex-col items-center justify-center">
                <h1 class="text-2xl font-bold">{review.name}</h1>
                <p class="mt-2 text-sm">{review.description}</p>
                <div class="flex mt-2 item-center">
                    <ReactStars
                        edit={false}
                        count={5}
                        value={review.rating}
                        size={34}
                        activeColor="#ffd700"
                    />
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;