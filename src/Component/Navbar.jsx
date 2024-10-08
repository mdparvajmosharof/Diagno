import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { Tooltip } from 'react-tooltip'
import useAdmin from "../Hooks/useAdmin";
import { ThemeContext } from "../Provider/ThemeProvider";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { authInfo } = useContext(AuthContext);
  const { logOut, user } = authInfo;
  const [isAdmin] = useAdmin()

  const handleSignOut = () => {
    // console.log("log out click");
    logOut()
      .then(() => {
        console.log("logged out");
      })
      .catch((error) => console.log(error));
  };



  const Navlinks = (
    <>

      <NavLink className={({ isActive }) =>
        isActive
          ? "text-md px-4 h-10 flex items-center justify-center rounded-xl bg-indigo-500 text-indigo-200"
          : "text-md px-4 h-10 flex items-center justify-center rounded-xl border border-indigo-500 text-indigo-500 hover:bg-indigo-900 hover:text-indigo-200"
      }


        to='/'>
        <li>Home</li>
      </NavLink>
      <NavLink className={({ isActive }) =>
        isActive
          ? "text-md px-4 h-10 flex items-center justify-center rounded-xl bg-indigo-500 text-indigo-200"
          : "text-md px-4 h-10 flex items-center justify-center rounded-xl border border-indigo-500 text-indigo-500 hover:bg-indigo-900 hover:text-indigo-200"
      }


        to='/alltests'>
        <li>All Tests</li>
      </NavLink>
      <NavLink className={({ isActive }) =>
        isActive
          ? "text-md px-4 h-10 flex items-center justify-center rounded-xl bg-indigo-700 text-indigo-200"
          : "text-md px-4 h-10 flex items-center transition-all justify-center rounded-xl border border-indigo-500 text-indigo-500 hover:bg-indigo-900 hover:text-indigo-200"
      }


        to='/healthaware'>
        <li>Health Aware</li>
      </NavLink>
      <NavLink className={({ isActive }) =>
        isActive
          ? "text-md px-4 h-10 flex items-center justify-center rounded-xl bg-indigo-500 text-indigo-200"
          : "text-md px-4 h-10 flex items-center justify-center rounded-xl border border-indigo-500 text-indigo-500 hover:bg-indigo-900 hover:text-indigo-200"
      }


        to='/inquiryForm'>
        <li>Inquiry Form</li>
      </NavLink>
      <NavLink className={({ isActive }) =>
        isActive
          ? "text-md px-4 h-10 flex items-center justify-center rounded-xl bg-indigo-500 text-indigo-200"
          : "text-md px-4 h-10 flex items-center justify-center rounded-xl border border-indigo-500 text-indigo-500 hover:bg-indigo-900 hover:text-indigo-200"
      }


        to='/services'>
        <li>Services</li>
      </NavLink>


      {

        user && !isAdmin && <>

          <NavLink className={({ isActive }) =>
            isActive
              ? "text-md px-4 h-10 flex items-center justify-center rounded-xl bg-indigo-500 text-indigo-200"
              : "text-md px-4 h-10 flex items-center justify-center rounded-xl border border-indigo-500 text-indigo-500 hover:bg-indigo-900 hover:text-indigo-200"
          } to="/dashboard/myprofile">
            <li>
              Dashboard
            </li>
          </NavLink>


        </>
      }
      {
        user && isAdmin && <li><NavLink className={({ isActive }) =>
          isActive
            ? "text-md px-4 h-10 flex items-center justify-center rounded-xl bg-indigo-500 text-indigo-200"
            : "text-md px-4 h-10 flex items-center justify-center rounded-xl border border-indigo-500 text-indigo-500 hover:bg-indigo-900 hover:text-indigo-200"
        } to="/dashboard/allusers">Dashboard</NavLink></li>
      }
    </>
  );

  return (
    <div>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm bg-base-300 gap-2 dropdown-content text-indigo-500 mt-3  p-2 shadow rounded-box w-52 z-20"
            >
              {Navlinks}
            </ul>
          </div>
          <Link to={"/"}>
            <a className="flex items-center gap-3 font-bold text-3xl text-indigo-500">
              <img className="h-16 rounded-full" src="https://i.ibb.co.com/K726hs3/afb9f4cd-8613-4f36-adf5-4c3c5493030f.jpg" alt="" />
              Diagno
            </a>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-lg text-indigo-500 gap-2">{Navlinks}</ul>
        </div>

        <div className="navbar-end gap-5">
          <div>
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input
                type="checkbox"
                className="theme-controller"
                value="synthwave"
                onClick={toggleTheme}
              />

              {/* sun icon */}
              <svg
                className="swap-off fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-on fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>
          {user ? (
            <>
              <Link className="btn" onClick={handleSignOut}>
                Log Out
              </Link>
            </>
          ) : (
            <Link className="btn" to="/login">
              Log In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
