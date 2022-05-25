import React from 'react';
import useItems from '../../Shared/Hooks/useItems';
import Item from './Item';

const SlicedItems = () => {
    const [items] = useItems();
    return (
        <div>
            <div className="my-20">
                <h1 className='text-4xl font-bold text-center py-12'>Our Items</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        items.slice(-3).map(item => <Item
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

export default SlicedItems;