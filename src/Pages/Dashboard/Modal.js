import React from 'react';
import { toast } from 'react-toastify';

const Modal = ({ deleting, setDeleting, refetch }) => {
    const { buyerName, _id } = deleting;

    const handleDelete = () => {
        fetch(`http://localhost:5000/purchased/${_id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`${_id} is deleted.`)
                    setDeleting(null);
                    refetch();
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h2 className='text-2xl font-bold'>Hey {buyerName.toUpperCase()} </h2>
                    <h3 class="font-bold text-lg">Are you sure you want to delete <span className=' text-error'>{_id}</span></h3>
                    <div class="modal-action">
                        <button onClick={() => handleDelete()} class="btn btn-xs btn-error">Delete</button>
                        <label for="delete-confirm-modal" class="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Modal;