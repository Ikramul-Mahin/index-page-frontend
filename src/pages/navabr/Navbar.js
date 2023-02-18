import React from 'react';
import css from '../Index-page.css'
import log from '../../image/logs.png'
const Navbar = () => {
    return (
        <div className="navbar sticky top-0 z-[100] bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                        <li tabIndex={0}>
                            <a className="justify-between">
                                Products
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Pricing</a></li>
                        <li><a>Blogs</a></li>
                        <li><a>Guides</a></li>
                        <li><a>Templates</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">
                    <img className='w-28 h-10' src={log} alt="" />
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-bold">
                    <li tabIndex={0}>
                        <a>
                            Products
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </a>
                        <ul className="p-2">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                        </ul>
                    </li>
                    <li><a>Pricing</a></li>
                    <li><a>Guides</a></li>
                    <li><a>Templates</a></li>
                </ul>
            </div>
            <div className="navbar-end d-sm-none">
                <a className="d-sm border-purple-400 border-2 hover:bg-purple-400 hover:text-white px-2 text-purple-600 py-2  rounded-lg font-bold text-md mr-3">Install Now</a>
                <a className="btn-bg px-3 py-2 bg rounded-lg font-bold text-lg text-white">BoloForms Premium</a>
            </div>
        </div>
    );
};

export default Navbar;