import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading';
import DeleteModal from './DeleteModal';

const MyOrders = () => {
    const [deleting, setDeleting] = useState(null);
    const [bookings, setBookings] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const { isLoading, refetch } = useQuery('users', () => fetch(`http://localhost:5000/purchased?buyer=${user.email}`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => {
        if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem('accessToken');
            navigate('/');
        }
        return res.json()
    })
        .then(data => {

            setBookings(data);
            refetch();
        })
    )
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div>
                <h3 className='my-4'>My Orders: {bookings.length}</h3>
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
                                        {(a.price && !a.paid) && <div>
                                            <Link to={`/dashboard/payment/${a._id}`}>
                                                <button className='btn btn-xs btn-success'>Pay</button>
                                            </Link>
                                            <label onClick={() => setDeleting(a)} htmlFor="delete-confirm-modal" className="btn btn-xs btn-error">Delete</label>
                                        </div>}
                                        {(a.price && a.paid) && <div>
                                            <span className='text-success'>Paid</span>
                                        </div>}
                                    </td>
                                    <td>
                                        {a.delivery && <div>
                                            <span className='text-success'>Pending</span> <br />
                                            <p className='tooltip' data-tip={a.transactionId}>Transaction: {a.transactionId.slice(0, 6)}...</p>
                                        </div>}
                                        {!a.paid && <div> <span className='text-error'>Pay First!!</span> </div>}
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
                    setDeleting={setDeleting}
                    refetch={refetch}></DeleteModal>}
        </div>
    );
};

export default MyOrders;