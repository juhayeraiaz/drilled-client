import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrders = () => {

    const [bookings, setBookings] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();


    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/purchased?buyer=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => {

                    setBookings(data);
                });
        }
    }, [user])
    return (
        <div>
            <h3 className='my-4'>My Orders: {bookings.length}</h3>

            <div className="overflow-x-auto">
                <table className="text-center table w-full">
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
                                    {(a.price && !a.paid) && <Link to={`/dashboard/payment/${a._id}`}>
                                        <button className='btn btn-xs btn-success'>Pay</button>
                                    </Link>}
                                    {(a.price && a.paid) && <div>
                                        <span className='text-success'>Paid</span>
                                    </div>}
                                </td>
                                <td>
                                    {(a.price && a.paid) && <div>
                                        <span className='text-success'>Pending</span>
                                        <p>Transaction ID: <span className='text-success'>{a.transactionId}</span></p>
                                    </div>}
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;