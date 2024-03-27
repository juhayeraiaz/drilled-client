import React from 'react';

const Career = () => {
    return (
        <div className='p-12'>
            <div className="container mx-auto">
                <div className="xl:w-full w-11/12 mx-auto">
                    <h1 className=" font-extrabold xl:text-5xl text-3xl mb-4 text-center xl:text-left md:text-left lg:text-left">A note from CEO</h1>
                    <p className="text-xl xl:text-left md:text-left lg:text-left md:w-full text-center xl:w-2/3 lg:w-2/3 w-11/12 mx-auto xl:mx-0 lg:mx-0">I would like to thank all our users and employees. It's always been you guys. Thank you all</p>
                </div>
                <div className="flex flex-wrap mt-10 justify-between w-full md:w-11/12 md:mx-auto xl:mx-0 xl:w-full">
                    <div className="xl:w-3/4 lg:w-3/4 md:w-8/12 w-11/12 mx-auto xl:mx-0 lg:mx-0 md:ml-0 shadow-md border border-gray-200 p-8 rounded">
                        <p className="pb-8 text-base ">I just wanted to share a quick note and let you know that you guys do a really good job. I’m glad I decided to work with you. It’s really great how easily you are managing and handeling everything. I never have any problem at all.</p>
                        <p className="text-base ">I'm grateful to you all and hope we can continue like this.</p>
                        <div className="mt-8">
                            <p className="text-base  font-bold pb-1">- Juhayer Ayaz</p>
                            <p className="text-sm pl-2">CEO, Drilled.com</p>
                        </div>
                        <div className="flex items-center mt-8">
                            <div className="h-8 w-8">
                                <img src="https://cdn.tuk.dev/assets/marketing/page_sections/testimonials_section/testimonial6.jpg" alt='' className="h-full w-full object-cover rounded-md shadow" />
                            </div>
                            <p className="text-sm ml-2">Twitter Inc.</p>
                        </div>
                    </div>
                    <div className="xl:w-1/4 lg:w-1/4 md:w-1/4 flex items-end xl:justify-end lg:justify-end md:justify-end sm:justify-center justify-center xl:pl-8 lg:pl-8 w-11/12 mx-auto xl:mx-0 lg:mx-0 mt-2">
                        <div className="h-64 w-64">
                            <img src="https://cdn.tuk.dev/assets/photo-1567290329751-0700a37da0af.jfif" alt='' className="rounded h-full w-full object-cover shadow" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap mt-10 xl:justify-between lg:justify-around md:justify-center justify-around xl:w-full lg:w-11/12 w-11/12 mx-auto xl:mx-0 lg:mx-auto gap-7">
                    <button className="bg-neutral shadow mb-2 xl:mb-0 lg:mb-0 rounded flex items-center justify-center h-24 w-40 cursor-pointer border border-transparent focus:border-gray-300 focus:shadow-md focus:outline-none">
                        <img src="https://cdn.tuk.dev/assets/adidas-gray.png" alt='' />
                    </button>
                    <button className="bg-neutral shadow mb-2 xl:mb-0 rounded flex items-center justify-center h-24 w-40 cursor-pointer border border-transparent focus:border-gray-300 focus:shadow-md focus:outline-none">
                        <img src="https://cdn.tuk.dev/assets/mini-gray.png" alt='' />
                    </button>
                    <button className="bg-neutral shadow mb-2 xl:mb-0 rounded flex items-center justify-center h-24 w-40 cursor-pointer border border-transparent focus:border-gray-300 focus:shadow-md focus:outline-none">
                        <img src="https://cdn.tuk.dev/assets/channel-gray.png" alt='' />
                    </button>
                    <button className="bg-neutral shadow mb-2 xl:mb-0 rounded flex items-center justify-center h-24 w-40 cursor-pointer border border-transparent focus:border-gray-300 focus:shadow-md focus:outline-none">
                        <img src="https://cdn.tuk.dev/assets/gs1-gray.png" alt='' />
                    </button>
                    <button className="bg-white shadow mb-2 xl:mb-0 rounded flex items-center justify-center h-24 w-40 cursor-pointer border border-transparent focus:border-gray-300 focus:shadow-md focus:outline-none">
                        <img src="https://cdn.tuk.dev/assets/Twitter.png" alt='' />
                    </button>
                    <button className="bg-neutral shadow mb-2 xl:mb-0 rounded flex items-center justify-center h-24 w-40 cursor-pointer border border-transparent focus:border-gray-300 focus:shadow-md focus:outline-none">
                        <img src="https://cdn.tuk.dev/assets/toyota-gray.png" alt='' />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Career;