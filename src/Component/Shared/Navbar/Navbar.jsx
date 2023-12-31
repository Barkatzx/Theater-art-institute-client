import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AiFillHome, AiFillDashboard } from "react-icons/ai";
import { CgClipboard } from "react-icons/cg";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const authContext = useContext(AuthContext);
  const user = authContext?.user;
  const logOut = authContext?.logOut;

  const handleSignOut = async () => {
    try {
      await logOut();
      Swal.fire({
        icon: "success",
        title: "Logged Out",
        text: "You have been successfully logged out.",
      });
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Logout Failed",
        text: "Failed to log out. Please try again.",
      });
    }
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-slate-100">
      <nav className="flex flex-col md:flex-row items-center justify-between p-4 shadow-xl text-xl font-semibold">
        <div className="flex items-center justify-center">
          <Link to="/">
            <img
              src="https://i.ibb.co/cQ68nnZ/Arts-Institute-removebg-preview-1.png"
              alt="Logo"
              className="w-30 h-10 ml-4"
            />
          </Link>
        </div>
        <div
          className={
            isOpen
              ? "flex flex-col md:flex-row md:relative md:top-16 md:right-0 md:bg-slate-100 w-full md:w-auto md:mt-0 md:flex md:items-center"
              : "hidden md:flex md:items-center"
          }
        >
          <Link
            to="/"
            className="mr-4 hover:bg-indigo-800 rounded-3xl hover:text-gray-200 px-10 py-3 flex gap-2 items-center"
          >
            <AiFillHome />
            Home
          </Link>
          <Link
            to="/classes"
            className="mr-4 hover:bg-indigo-800 rounded-3xl hover:text-gray-200 px-10 py-3 flex gap-2 items-center"
          >
            <CgClipboard />
            Classes
          </Link>
          <Link
            to="/instructors"
            className="mr-4 hover:bg-indigo-800 rounded-3xl hover:text-gray-200 px-10 py-3 flex gap-2 items-center"
          >
            <FaUserCircle />
            Instructors
          </Link>
          {user && (
            <Link
              to="/dashboard"
              className="mr-4 hover:bg-indigo-800 rounded-3xl hover:text-gray-200 px-10 py-3 flex gap-2 items-center"
            >
              <AiFillDashboard />
              Dashboard
            </Link>
          )}
        </div>
        <div className="flex flex-col md:flex-row md:items-center justify-center gap-5 mt-4 md:mt-0">
          <span className="">
            {user ? (
              <button
                className="bg-indigo-800 text-white py-3 px-5 rounded-3xl hover:bg-indigo-600"
                onClick={handleSignOut}
              >
                Logout
              </button>
            ) : (
              <Link
                className="bg-indigo-800 text-white py-3 px-10 rounded-3xl"
                to="/login"
              >
                Login
              </Link>
            )}
          </span>
          {user && (
            <span className="">
              <label
                htmlFor="menu-toggle"
                tabIndex={0}
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="rounded-full overflow-hidden w-12">
                  {user.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt="UserImage"
                      title={user.displayName}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <FaUserCircle className="text-2xl" />
                  )}
                </div>
              </label>
            </span>
          )}
        </div>
        <button
          className="text-gray-700 hover:text-gray-900 focus:outline-none md:hidden"
          onClick={handleToggle}
        >
          <svg
            className="w-6 h-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19 12H5a1 1 0 1 1 0-2h14a1 1 0 1 1 0 2zm0-7H5a1 1 0 1 1 0-2h14a1 1 0 1 1 0 2zm0 14H5a1 1 0 1 1 0-2h14a1 1 0 1 1 0 2z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 5.25zm0 7.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12zm0 7.25a.75.75 0 1 1 0-1.5h16.5a.75.75 0 0 1 0 1.5H3z"
              />
            )}
          </svg>
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
