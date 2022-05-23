import React from 'react';
import ReactStars from 'react-rating-stars-component';

const Reviews = () => {
    const ratingChanged = (newRating) => {
        console.log(newRating);
    };
    return (
        <div className='grid grid-cols-3'>
            <div class="flex max-w-md mx-auto overflow-hidden bg-neutral rounded-lg shadow-lg">
                <div class="w-2/3 p-4 md:p-4">
                    <h1 class="text-2xl font-bold">Backpack</h1>
                    <p class="mt-2 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit In odit</p>
                    <div class="flex mt-2 item-center">
                        <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={34}
                            activeColor="#ffd700"
                        />
                    </div>
                </div>
            </div>
            <div class="flex max-w-md mx-auto overflow-hidden bg-neutral rounded-lg shadow-lg">
                <div class="w-2/3 p-4 md:p-4">
                    <h1 class="text-2xl font-bold">Backpack</h1>
                    <p class="mt-2 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit In odit</p>
                    <div class="flex mt-2 item-center">
                        <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={34}
                            activeColor="#ffd700"
                        />
                    </div>
                </div>
            </div>
            <div class="flex max-w-md mx-auto overflow-hidden bg-neutral rounded-lg shadow-lg">
                <div class="w-2/3 p-4 md:p-4">
                    <h1 class="text-2xl font-bold">Backpack</h1>
                    <p class="mt-2 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit In odit</p>
                    <div class="flex mt-2 item-center">
                        <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={34}
                            activeColor="#ffd700"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;