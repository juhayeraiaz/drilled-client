import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useItems from '../../Shared/Hooks/useItems';
import Item from './Item';
import Loading from '../../Shared/Loading';

const SlicedItems = () => {
    const [items] = useItems();
    const [isLoading, setIsLoading] = useState(true); // Initially set to true to show loading

    useEffect(() => {
        // Set isLoading to true to show loading indicator
        setIsLoading(true);

        // Use setTimeout to delay setting isLoading to false
        const timer = setTimeout(() => {
            setIsLoading(false); // After 3 seconds, set isLoading to false
        }, 3000);

        return () => clearTimeout(timer); // Clean up the timer to avoid memory leaks
    }, []); // Empty dependency array ensures this effect runs only once on mount

    return (
        <div className='text-center'
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="30"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top"
        >
            <div className="my-16">
                <h1 className='text-4xl font-bold pb-6'>Our Items</h1>
                {isLoading ? (
                    <div className="flex flex-col justify-center items-center h-64">
                        <Loading />
                    </div>
                ) :
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-6">
                        {
                            items.slice(-3).map(item => <Item
                                key={item._id}
                                item={item}
                            >
                            </Item>)
                        }
                    </div>
                }
            </div>
            <Link to='/items' className='my-6'><button className='btn btn-lg btn-outline'>See More</button></Link>
        </div>
    );
};

export default SlicedItems;
