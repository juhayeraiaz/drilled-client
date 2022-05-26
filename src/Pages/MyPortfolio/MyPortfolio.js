import React from 'react';
import picsquare from '../../Images/portfolio/picsquare-site.png'
import razer from '../../Images/portfolio/razer-house.png'
import simply from '../../Images/portfolio/simply-recipes.png'
import picsquareQr from '../../Images/portfolio/qrcode_picsquare.png'
import razerQr from '../../Images/portfolio/qrcode_razer-house.png'
import simplyQr from '../../Images/portfolio/qrcode_simply-recipes.png'

const MyPortfolio = () => {
    return (
        <div className='my-20 text-center p-8'>
            <h1 className='text-6xl font-bold mb-4'>My portfolio</h1>
            <div className='card card-body shadow-xl bg-neutral'>
                <h1 className='text-2xl font-medium mt-8'>My name is: Juhayer Ayaz</h1>
                <h1 className=' text-2xl font-medium my-4'>Email:
                    <a href="mailto:aiazj97@gmail.com" className="hover:text-cyan-400 transition"> aiazj97@gmail.com</a></h1>
                <h1 className='text-2xl font-medium my-4'>Education: Diploma in CSE</h1>
                <div>
                    <h1 className='text-3xl font-bold my-8'>My Skills</h1>
                    <div className="gap-8 sm:grid sm:grid-cols-2">
                        <div>
                            <dl>
                                <dt className="text-sm font-medium font-medium">HTML</dt>
                                <dd className="flex items-center mb-3">
                                    <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                                        <div className="bg-blue-600 h-2.5 rounded dark:bg-blue-500" style={{ width: "90%" }}></div>
                                    </div>
                                    <span className="text-sm font-medium font-medium">90%</span>
                                </dd>
                            </dl>
                            <dl>
                                <dt className="text-sm font-medium font-medium">CSS</dt>
                                <dd className="flex items-center mb-3">
                                    <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                                        <div className="bg-blue-600 h-2.5 rounded dark:bg-blue-500" style={{ width: "85%" }}></div>
                                    </div>
                                    <span className="text-sm font-medium font-medium">85%</span>
                                </dd>
                            </dl>
                            <dl>
                                <dt className="text-sm font-medium font-medium">Bootstrap</dt>
                                <dd className="flex items-center mb-3">
                                    <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                                        <div className="bg-blue-600 h-2.5 rounded dark:bg-blue-500" style={{ width: "90%" }}></div>
                                    </div>
                                    <span className="text-sm font-medium font-medium">90</span>
                                </dd>
                            </dl>
                            <dl>
                                <dt className="text-sm font-medium font-medium">Tailwind</dt>
                                <dd className="flex items-center">
                                    <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                                        <div className="bg-blue-600 h-2.5 rounded dark:bg-blue-500" style={{ width: "80%" }}></div>
                                    </div>
                                    <span className="text-sm font-medium font-medium">80%</span>
                                </dd>
                            </dl>
                        </div>
                        <div>
                            <dl>
                                <dt className="text-sm font-medium font-medium">JavaScript</dt>
                                <dd className="flex items-center mb-3">
                                    <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                                        <div className="bg-blue-600 h-2.5 rounded dark:bg-blue-500" style={{ width: "75%" }}></div>
                                    </div>
                                    <span className="text-sm font-medium font-medium">75%</span>
                                </dd>
                            </dl>
                            <dl>
                                <dt className="text-sm font-medium font-medium">ReactJs</dt>
                                <dd className="flex items-center mb-3">
                                    <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                                        <div className="bg-blue-600 h-2.5 rounded dark:bg-blue-500" style={{ width: "60%" }}></div>
                                    </div>
                                    <span className="text-sm font-medium font-medium">60%</span>
                                </dd>
                            </dl>
                            <dl>
                                <dt className="text-sm font-medium font-medium">NodeJs</dt>
                                <dd className="flex items-center">
                                    <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                                        <div className="bg-blue-600 h-2.5 rounded dark:bg-blue-500" style={{ width: "60%" }}></div>
                                    </div>
                                    <span className="text-sm font-medium font-medium">60%</span>
                                </dd>
                            </dl>
                            <dl>
                                <dt className="text-sm font-medium font-medium">MongoDB</dt>
                                <dd className="flex items-center">
                                    <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                                        <div className="bg-blue-600 h-2.5 rounded dark:bg-blue-500" style={{ width: "50%" }}></div>
                                    </div>
                                    <span className="text-sm font-medium font-medium">50%</span>
                                </dd>
                            </dl>
                        </div>
                    </div>

                </div>
            </div>
            <h1 className='text-3xl font-bold my-6'>My Recent Works</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <div>
                    <img src={picsquareQr} className='w-1/2 mx-auto' alt="" />
                    <a href="https://picsquare-2a8c7.web.app/" target={'blank'} className='my-6 btn btn-sm w-full btn-secondary font-bold text-neutral'>Scan or Click here</a>
                    <a href="https://i.ibb.co/qdxpjnn/picsquare-site.png">
                        <img src={picsquare} alt="" />
                    </a>
                </div>
                <div>
                    <img src={razerQr} className='w-1/2 mx-auto' alt="" />
                    <a href="https://razer-house.web.app/" target={'blank'} className='my-6 btn btn-sm w-full btn-secondary font-bold text-neutral'>Scan or Click here</a>
                    <a href="https://i.ibb.co/87mzfbr/razer-house.png"><img src={razer} alt="" /></a>
                </div>
                <div>
                    <img src={simplyQr} className='w-1/2 mx-auto' alt="" />
                    <a href="https://quirky-rosalind-2ab408.netlify.app/" target={'blank'} className='my-6 btn btn-sm w-full btn-secondary font-bold text-neutral'>Scan or Click here</a>
                    <a href="https://i.ibb.co/gJ8nMBg/simply-recipes.png"><img src={simply} alt="" /></a>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;