import React, { useEffect, useState } from 'react';

const Review = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/user', {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }

        })
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [])
    return (
        <div>
            <h2 className="text-2xl">All Users: {users.length}</h2>
            <div class="overflow-x-auto">
                <table class="text-center table w-full">
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Email{users.email}</th>
                            <th>Role</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        <td>Email: {users.email}</td>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Review;