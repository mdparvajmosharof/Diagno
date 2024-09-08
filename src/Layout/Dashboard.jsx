import React, { useEffect, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Navbar from '../Component/Navbar'
import useAdmin from '../Hooks/useAdmin';
import Loading from '../Subpage/Loading';
import { useUser } from '../Hooks/useUser';
import { useAxiosSecure } from '../Hooks/useAxiosSecure';
import Footer from '../Component/Footer';

const Dashboard = () => {

    const [isAdmin, isAdminLoading] = useAdmin();
    const [user] = useUser();
    const [TheUser, setUser] = useState()
    const [loading, setLoading] = useState(true)
    const authUser = user;

    const axiosSecure = useAxiosSecure()

    useEffect(() => {
        if (authUser?.email) {
            axiosSecure.get(`/users/${authUser?.email}`)
                .then((res) => {
                    setUser(res.data)
                    setLoading(false)
                })
        }
    }, [authUser?.email, axiosSecure])

    const NavLinks = isAdmin ?
        <>
            <li><NavLink to={"/dashboard/allusers"}>All User</NavLink></li>
            <li><NavLink to={"/dashboard/addtest"}>Add Test</NavLink></li>
            <li><NavLink to={"/dashboard/alltest"}>All Test</NavLink></li>
            <li><NavLink to={"/dashboard/addbanner"}>Add Banner</NavLink></li>
            <li><NavLink to={"/dashboard/allbanner"}>All Banner</NavLink></li>
            <li><NavLink to={"/dashboard/chart"}>Chart</NavLink></li>
        </> :
        <>
            <li><NavLink to={"/dashboard/myprofile"}>My Profile</NavLink></li>
            <li><NavLink to={"/dashboard/upcommingappointment"}>Appointment</NavLink></li>
            <li><NavLink to={"/dashboard/testresults"}>Test Results</NavLink></li>
        </>

    if (isAdminLoading || loading) {
        return <Loading></Loading>
    }

    console.log(TheUser.isActive)

    if (TheUser.isActive === "blocked") {

        return <>
            <Navbar></Navbar>
            <div className='text-center mt-10'>You are Blocked by Admin</div>
        </>
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
                        <ul className="menu bg-base-200 text-base-content min-h-full w-56 p-4 space-y-5">
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
            <Footer></Footer>
        </div>
    )
}

export default Dashboard
