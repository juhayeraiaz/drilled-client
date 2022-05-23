import React, { useEffect, useState } from 'react';
import ReactStars from 'react-rating-stars-component';

const Reviews = () => {
    // const ratingChanged = (newRating) => {
    //     const rating = newRating;
    //     console.log(rating)
    // };
    return (
        <div>
            <h1 className='text-center text-3xl font-bold mb-6'>User Reviews</h1>
            <div className='grid grid-cols-1 lg:grid-cols-4 my-6 gap-6 lg:gap-0'>
                <div class="mx-auto overflow-hidden bg-neutral rounded-3xl shadow-lg">
                    <div class="w-[300px] p-6 md:p-4 flex flex-col items-center justify-center">
                        <h1 class="text-2xl font-bold">Jhayer Ayaz</h1>
                        <p class="mt-2 text-sm">Fast delivery and good packeging</p>
                        <div class="flex mt-2 item-center">
                            <ReactStars
                                count={5}
                                value={4}
                                size={34}
                                activeColor="#ffd700"
                            />
                        </div>
                    </div>
                </div>
                <div class="mx-auto overflow-hidden bg-neutral rounded-3xl shadow-lg">
                    <div class="w-[300px] p-6 md:p-4 flex flex-col items-center justify-center">
                        <h1 class="text-2xl font-bold">Motiullah</h1>
                        <p class="mt-2 text-sm">Very good products. I love it</p>
                        <div class="flex mt-2 item-center">
                            <ReactStars
                                count={5}
                                value={5}
                                size={34}
                                activeColor="#ffd700"
                            />
                        </div>
                    </div>
                </div>
                <div class="mx-auto overflow-hidden bg-neutral rounded-3xl shadow-lg">
                    <div class="w-[300px] p-6 md:p-4 flex flex-col items-center justify-center">
                        <h1 class="text-2xl font-bold">Karim benzema</h1>
                        <p class="mt-2 text-sm">These tools are very solid and durable. Im using for 3years</p>
                        <div class="flex mt-2 item-center">
                            <ReactStars
                                count={5}
                                value={4}
                                size={34}
                                activeColor="#ffd700"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;