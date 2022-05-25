import React, { useState } from 'react';
import useItems from '../../../Shared/Hooks/useItems';
import DeleteItemModal from './DeleteItemModal';

const DeleteProduct = () => {
    const [deleting, setDeleting] = useState(null);
    const [items] = useItems()
    return (
        <div>
            <h1 className='text-2xl font-medium'>All Items: {items.length}</h1>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>SL</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>ID</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                items.map((a, index) => <tr key={a._id}>
                                    <th>{index + 1}</th>
                                    <td><img className='w-8' src={a.img} alt="" /></td>
                                    <td>{a.name}</td>
                                    <td>{a._id}</td>
                                    <td>
                                        <div>
                                            <label onClick={() => setDeleting(a)} htmlFor="delete-item-modal" className="btn btn-xs btn-error">Delete</label>
                                        </div>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            {deleting && <DeleteItemModal
                deleting={deleting}
                setDeleting={setDeleting}
            ></DeleteItemModal>}
        </div>
    );
};

export default DeleteProduct;