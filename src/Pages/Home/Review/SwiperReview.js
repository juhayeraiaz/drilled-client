import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import required modules
import { Pagination, Autoplay } from "swiper";
import ReactStars from "react-rating-stars-component";
import img from '../../../Images/profile.png'

const SwiperReview = () => {
    const [allReviews, setAllReviews] = useState([]);
    const [sortedReview, setSortedReview] = useState([]);
    useEffect(() => {
        fetch("https://drilled-tools.onrender.com/reviews")
            .then((res) => res.json())
            .then((data) => setAllReviews(data));
    }, []);
    useEffect(() => {
        if (allReviews) {
            const sorted = [...allReviews].reverse();
            setSortedReview(sorted);
        }
    }, [allReviews]);

    return (
        <div className="bg-neutral py-6 px-4">
            <div className="flex items-center justify-center  pb-4 ">
                <h1 className='text-center text-3xl font-bold my-2'>User Reviews ({allReviews.length})</h1>
            </div>
            <div className="px-5 lg:px-10">
                <Swiper
                    slidesPerView={2}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={true}
                    breakpoints={{
                        425: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        750: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper h-64"
                >
                    {sortedReview.map((r) => (
                        <SwiperSlide key={r._id}>
                            <div className="p-5 rounded-xl h-52 md:w-[300px] lg:w-[250px] xl:w-[350px] mx-auto bg-white relative">
                                <div className="flex items-center  gap-5">
                                    <img src={img} className="w-16 h-16" alt="" />
                                    <div className="h">
                                        <h2 className="text-lg font-semibold capitalize text-gray-700">
                                            {r.name}
                                        </h2>
                                        <p className="text-gray-600 font-semibold text-sm">
                                            Ratings:{" "}
                                            <span className="font-bold text-primary">
                                                {r.rating}
                                            </span>
                                        </p>
                                    </div>
                                </div>

                                <p className="mt-4 text-gray-500 text-sm lg:truncate xl:overflow-visible xl:text-clip xl:whitespace-pre-wrap">
                                    {r.description.length < 110
                                        ? r.description
                                        : r.description.slice(0, 95) + "..."}
                                </p>
                                <div className="absolute bottom-4">
                                    <ReactStars
                                        edit={false}
                                        count={5}
                                        value={r.rating}
                                        size={34}
                                        activeColor="#ffd700"
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default SwiperReview;