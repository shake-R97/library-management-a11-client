import React, { useContext } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../Context/AuthContext';

const Footer = () => {
    const {user} = useContext(AuthContext);
    return (
        <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-16 ">
            <aside>
                <p className='text-sky-400 text-2xl'>
                    Book Archive.</p>
                <br />
                <p>
                    Providing reliable Book since 1992
                </p>
            </aside>
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <h6 className="footer-title">Links</h6>
                <li><NavLink className='text-[17px]' to={'/'}>Home</NavLink></li>
                <li><NavLink className='text-[17px]' to={'/all-books'}>All Books</NavLink></li>
                <li><NavLink className='text-[17px]' to={'/addbook'}>Add Book</NavLink></li>
                <li><NavLink className='text-[17px]' to={`/borrowed/${user?.email}`}>Borrowed Book</NavLink></li>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;