import React, { useEffect, useState } from 'react';
import DeleteModal from '../DeleteModal';
import DeliverModal from './DeliverModal';

const ManageAllOrders = () => {
    const [deleting, setDeleting] = useState(null);
    const [deliver, setDeliver] = useState(null);
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetch('https://driller-tools.herokuapp.com/purchases', {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json())
            .then(data => {
                setBookings(data)
            })
    }, [bookings])

    return (
        <div>
            <div>
                <h3 className='my-4'>All Orders: {bookings.length}</h3>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>SL</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Payment</th>
                                <th>Delivery</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bookings.map((a, index) => <tr key={a._id}>
                                    <th>{index + 1}</th>
                                    <td>{a.buyerName}</td>
                                    <td>{a.buyer}</td>
                                    <td>{a.price}</td>
                                    <td>{a.quantity}</td>
                                    <td>
                                        {(a.price && !a.paid) && <div> <p>Unpaid</p>
                                        </div>}
                                        {(a.price && a.paid) && <div>
                                            <span className='text-success'>Paid</span>
                                        </div>}
                                    </td>
                                    <td>
                                        {a.delivery && <div>
                                            <span className='text-success'>Pending</span> <br />
                                            <label onClick={() => setDeliver(a)} className='btn btn-xs btn-secondary' htmlFor="deliver-confirm-modal">Deliver</label>
                                        </div>}
                                        {!a.paid && <div> <label onClick={() => setDeleting(a)} htmlFor="delete-confirm-modal" className="btn btn-xs btn-error">Delete</label> </div>}
                                        {(a.paid && !a.delivery) && <div>
                                            <span className='text-success'>Delivered</span>
                                        </div>}
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>{deleting &&
                <DeleteModal deleting={deleting}
                    setDeleting={setDeleting}></DeleteModal>}
            {deliver && <DeliverModal deliver={deliver} setDeliver={setDeliver}></DeliverModal>}
        </div>
    );
};

export default ManageAllOrders;