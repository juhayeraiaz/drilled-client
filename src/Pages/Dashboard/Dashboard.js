import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Shared/Hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="text-center drawer-content">
                <h2 className='text-2xl font-bold text-purple-500 my-8'>Welcome to your Dashboard</h2>
                <Outlet />
            </div>
            <div className="drawer-side ">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 lg:p-12 overflow-y-auto w-80 bg-neutral text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard' className='font-bold'>My Profile</Link></li>
                    {admin ? <></> : <li><Link to='/dashboard/review' className='font-bold'>My Reviews</Link></li>}
                    {admin ? <></> : <li><Link to='/dashboard/orders' className='font-bold'>My Orders</Link></li>}
                    {admin && <li><Link to='/dashboard/users' className='font-bold'>All Users</Link></li>}
                    {admin && <li><Link to='/dashboard/addProduct' className='font-bold'>Add a product</Link></li>}
                    {admin && <li><Link to='/dashboard/manageOrder' className='font-bold'>Manage all orders</Link></li>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;