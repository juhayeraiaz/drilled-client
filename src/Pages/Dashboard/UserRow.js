import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, index }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`https://driller-tools.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('failed to make an admin')
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success(`Successfully made an admin`)
                }
            })

    }
    const deleteUser = () => {
        fetch(`https://driller-tools.herokuapp.com/user/${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }

        }).then(res => {
            if (res.status === 403) {
                toast.error('failed to Delete user')
            }
            return res.json()
        })
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success(`User deleted`)
                }
            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role !== 'admin' ? <button onClick={makeAdmin} class="btn btn-xs btn-success">Make Admin</button> : <p className='text-success'>Admin</p>}</td>
            <td>{role !== 'admin' ? <button onClick={deleteUser} class="btn btn-xs btn-error">Remove User</button> : <p className='text-error'>Cant remove admin</p>}</td>
        </tr>
    );
};

export default UserRow;