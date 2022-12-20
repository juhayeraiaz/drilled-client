import React from 'react';
import { toast } from 'react-toastify';

const DeleteItemModal = ({ deleting, setDeleting }) => {
    const { name, _id } = deleting;

    const handleDelete = () => {
        fetch(`https://drilled-tools.onrender.com/items/${_id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`${name} is deleted.`)
                    setDeleting(null);
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="delete-item-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Are you sure you want to delete <span className=' text-error'>{name}</span></h3>
                    <div className="modal-action">
                        <button onClick={() => handleDelete()} className="btn btn-xs btn-error">Delete</button>
                        <label htmlFor="delete-item-modal" className="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteItemModal;