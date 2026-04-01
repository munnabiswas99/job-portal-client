import React, { use } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("User Signed Out");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const navLinkStyle = ({ isActive }) =>
    `px-3 py-2 rounded-lg transition ${
      isActive ? "bg-primary text-white" : "hover:bg-base-200"
    }`;

  const links = (
    <>
      <li>
        <NavLink to="/" className={navLinkStyle}>
          Home
        </NavLink>
      </li>

      {user && (
        <li>
          <NavLink to="/myApplications" className={navLinkStyle}>
            My Applications
          </NavLink>
        </li>
      )}

      {user && (
        <>
          <li>
            <NavLink to="/addJob" className={navLinkStyle}>
              Add Job
            </NavLink>
          </li>

          <li>
            <NavLink to="/myPostedJobs" className={navLinkStyle}>
              My Jobs
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar sticky top-0 z-50 bg-base-100/80 backdrop-blur border-b border-base-300 px-4">

      {/* Left */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} className="btn btn-ghost lg:hidden">
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
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>

        <NavLink to="/" className="text-xl font-bold text-primary">
          JobPortal
        </NavLink>
      </div>

      {/* Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2">{links}</ul>
      </div>

      {/* Right */}
      <div className="navbar-end gap-2">
        {user ? (
          <>
            <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
              <div className="avatar">
                <div className="w-9 rounded-full">
                  <img src={user?.photoURL} alt="user" />
                </div>
              </div>
            </div>

            <button
              className="btn btn-primary btn-sm rounded-full"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </>
        ) : (
          <>
            <NavLink className="btn btn-outline btn-primary btn-sm" to="/register">
              Register
            </NavLink>

            <NavLink className="btn btn-primary btn-sm" to="/signIn">
              Sign In
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;