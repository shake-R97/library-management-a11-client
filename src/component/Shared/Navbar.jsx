import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import '../Shared/Navbar.css';
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';

const Navbar = () => {

    const { user, signOutUser } = use(AuthContext)

    const handleSignOut = () => {

        signOutUser()
            .then(() => {
                Swal.fire({
                    title: "You are signed out",
                    icon: "success",
                    draggable: true,
                    timer: 2000
                });
            })
            .catch((error) => {
                console.log(error);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                    timer: 1500
                });
            })
    }

    return (
        <div className="bg-base-100 shadow-sm">
           <div className='navbar md:w-11/12 mx-auto'>
             <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><NavLink className='text-[17px]' to={'/'}>Home</NavLink></li>
                        <li><NavLink className='text-[17px]' to={'/allbooks'}>All Books</NavLink></li>
                        <li><NavLink className='text-[17px]' to={'/addbook'}>Add Book</NavLink></li>
                        <li><NavLink className='text-[17px]' to={'/borrowedbook'}>Borrowed Book</NavLink></li>
                    </ul>
                </div>

                {/* logo */}

                <Link to={'/'} className="btn btn-ghost text-sky-400 font-bold text-[16px] md:text-[24px]">BooK Archive</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink className='text-[17px]' to={'/'}>Home</NavLink></li>
                    <li><NavLink className='text-[17px]' to={'/allbooks'}>All Books</NavLink></li>
                    <li><NavLink className='text-[17px]' to={'/addbook'}>Add Book</NavLink></li>
                    <li><NavLink className='text-[17px]' to={'/borrowedbook'}>Borrowed Book</NavLink></li>

                </ul>
            </div>
            <div className="navbar-end gap-3">

                {
                    user ? <>
                        <div className="tooltip tooltip-bottom tooltip-primary" data-tip={`${user.displayName}`}>
                            <button className="avatar">
                                <div className="ring-primary ring-offset-base-100 w-9 mr-4 rounded-full ring-2 ring-offset-2">
                                    <img src={user.photoURL} />
                                </div>
                            </button>
                        </div>

                        <a onClick={handleSignOut} className="btn btn-outline btn-info">Sign Out</a>
                    </>
                        : <>
                            <Link to={'/login'} className="btn btn-outline btn-info mr-2">Login</Link>

                            <Link to={'/register'} className="btn btn-outline btn-info mr-1.5">Register</Link>
                        </>
                }

            </div>
           </div>
        </div>
    );
};

export default Navbar;