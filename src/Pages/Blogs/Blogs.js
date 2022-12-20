import React from 'react';

const Blogs = () => {
    return (
        <div className='my-20 pt-10'>
            <div className='w-auto lg:w-[700px] px-4 mx-auto'>
                <h1 className='text-xl font-bold'>Question:  How will you improve the performance of a React Application?</h1>
                <p className='text-lg font-medium'>Ans: For a developper it is neccessery to monitor performance. First thing to do for improving react application performance is to use production build. other than that use optimized fonts and use all the images/videos after optimizing them. High quality images/videos causes a lot of performance issue</p>
            </div>
            <div className='w-auto lg:w-[700px] px-4 mx-auto'>
                <h1 className='text-xl font-bold'>Question: What are the different ways to manage a state in a React application?</h1>
                <p className='text-lg font-medium'>Ans: There are four main types of state you need to properly manage in your React apps:
                    <li> Local state</li>
                    <li>Global state</li>
                    <li> Server state</li>
                    <li> URL state</li>
                    <b>Local state</b> is data we manage in one or another component.
                    Local state is most often managed in React using the useState hook.
                    <b>Global state</b> is data we manage across multiple components.
                    <b>Server State</b> is data that comes from an external server that must be integrated with our UI state.
                    Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.
                    <b>URL state</b> Data that exists on our URLs, including the pathname and query parameters.
                </p>
            </div>
            <div className='w-auto lg:w-[700px] px-4 mx-auto'>
                <h1 className='text-xl font-bold'>Question: How does prototypical inheritance work?</h1>
                <p className='text-lg font-medium'>Ans: In JavaScript, objects have a special hidden property [[Prototype]] (as named in the specification), that is either null or references another object.
                    That object is called “a prototype”: <br />
                    When we read a property from object, and it’s missing, JavaScript automatically takes it from the prototype. In programming, this is called “prototypal inheritance”. And soon we’ll study many examples of such inheritance, as well as cooler language features built upon it.
                    The property [[Prototype]] is internal and hidden, but there are many ways to set it.
                    One of them is to use the special name <q>__proto__,</q> like this:</p>
            </div>
            <div className='w-auto lg:w-[700px] px-4 mx-auto'>
                <h1 className='text-xl font-bold'>Question: Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h1>
                <p className='text-lg font-medium'>Ans: We normaly need to handle very few states thats why we usuallly use useState([]). <br />
                    For handeling multiple states this method is used. it makes using state easier.
                </p>
            </div>
            <div className='w-auto lg:w-[700px] px-4 mx-auto'>
                <h1 className='text-xl font-bold'>Question: What is a unit test? Why should write unit tests?</h1>
                <p className='text-lg font-medium'>Ans: Unit testing is a software testing method where “units”—the individual components of software—are tested.Developers write unit tests for their code to make sure that the code works correctly. <br />
                    Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money.
                </p>
            </div>
        </div>
    );
};

export default Blogs;