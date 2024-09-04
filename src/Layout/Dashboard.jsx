import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Navbar from '../Component/Navbar'
import useAdmin from '../Hooks/useAdmin';
import Loading from '../Subpage/Loading';

const Dashboard = () => {

    const [isAdmin,isAdminLoading] = useAdmin();

    const NavLinks = isAdmin ?
        <>
            <li><NavLink to={"/dashboard/allusers"}>All User</NavLink></li>
            <li><NavLink to={"/dashboard/addtest"}>Add Test</NavLink></li>
            <li><NavLink to={"/dashboard/alltest"}>All Test</NavLink></li>
        </> :
        <>
            <li><NavLink to={"/dashboard"}>My Profile</NavLink></li>
            <li><NavLink to={"/dashboard/upcommingappointment"}>Upcomming Appointment</NavLink></li>
        </>

        if(isAdminLoading){
            return <Loading></Loading>
        }

    return (
        <div className="max-w-6xl mx-auto mt-10">
            <Navbar></Navbar>
            <div className='flex my-10 '>
                <div className="drawer md:drawer-open w-1/4 ">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col items-center justify-center">
                        {/* Page content here */}
                        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button md:hidden">
                            Open drawer
                        </label>
                    </div>
                    <div className="drawer-side ">
                        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu bg-base-200 text-base-content min-h-full w-56 p-4">
                            {/* Sidebar content here */}
                            {
                                NavLinks
                            }
                        </ul>
                    </div>
                </div>
                <div className='w-full'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
