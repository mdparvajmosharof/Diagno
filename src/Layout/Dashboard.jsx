import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Navbar from '../Component/Navbar'

const Dashboard = () => {
    const NavLinks = <>
    <li><NavLink to={"/dashboard"}>My Profile</NavLink></li>
    </>
    return (
        <div className="max-w-6xl mx-auto mt-10">
        <Navbar></Navbar>
        <div className='flex my-10 w-1/4'>
            <div className="drawer md:drawer-open border  ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button md:hidden">
                        Open drawer
                    </label>
                </div>
                <div className="drawer-side ">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 text-base-content min-h-full w-56 border p-4">
                        {/* Sidebar content here */}
                        {
                            NavLinks
                        }
                    </ul>
                </div>
            </div>
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
        </div>
        </div>
    )
}

export default Dashboard
