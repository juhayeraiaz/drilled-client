import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L1Bs9DHKmO0atUrFj6SHR8MfrhZW9diDNPmTXwRq1hL44rD6FR2A1Qw64xmC4SJwfC8IF9IkrhF45KQRk5gL5um000jaYwsBd');

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/purchased/${id}`;

    const { data: purchase, isLoading } = useQuery(['purchased', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    console.log(purchase)

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='flex items-center justify-center flex-col'>
            <div class="card w-full max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className="text-success font-bold">Hello, {purchase.buyerName}</p>
                    <h2 class="card-title">Please Pay for {purchase._id}</h2>
                    <p>Please pay: ${purchase.price}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm purchase={purchase} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;