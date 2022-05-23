import React from 'react';
import useItems from '../../Shared/Hooks/useItems';
import Item from './Item';

const Items = () => {
    const [items] = useItems();
    return (
        <div>
            <div className="my-28">
                <h1 className='text-4xl font-bold text-center my-12'>Our Items</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        items.map(item => <Item
                            key={item._id}
                            item={item}
                        >
                        </Item>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Items;