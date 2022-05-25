import React from 'react';

const MyPortfolio = () => {
    return (
        <div className='my-24 text-center'>
            <h1 className='text-3xl font-bold'>My portfolio</h1>
            <h1>My name is: Juhayer Ayaz</h1>
            <a href="mailto:aiazj97@gmail.com" className="hover:text-cyan-400 transition">aiazj97@gmail.com</a>
            <h1>Educational background: Diploma in CSE</h1>
            <div>
                <h1>My Skills</h1>
                <p>HTML</p>
                <p>CSS</p>
                <p>JAVASCRIPT</p>
                <p>BOOTSRAP</p>
                <p>TAILWIND</p>
                <p>REACTJS</p>
            </div>
            <h1>My Recent Works</h1>
            <div className='grid grid-cols-3 w-1/2 mx-auto'>
                <a href="" className='btn btn-xs '>Click Here</a>
                <a href="" className='btn btn-xs '>Click Here</a>
                <a href="" className='btn btn-xs '>Click Here</a>
            </div>
        </div>
    );
};

export default MyPortfolio;