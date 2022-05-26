import React from 'react';
import { Link } from 'react-router-dom';
import useItems from '../../Shared/Hooks/useItems';
import Item from './Item';

const SlicedItems = () => {
    const [items] = useItems();
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-6">
                    {
                        items.slice(-3).map(item => <Item
                            key={item._id}
                            item={item}
                        >
                        </Item>)
                    }
                </div>
            </div>
            <Link to='/items' className='my-6'><button className='btn btn-lg btn-outline'>See More</button></Link>
        </div>
    );
};

export default SlicedItems;