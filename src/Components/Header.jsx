import React, { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoCloseSharp } from 'react-icons/io5';
import { NavLink, useLocation } from 'react-router-dom';

const Header = () => {
    const [bgSec, setBgSec] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    // Close the mobile menu when navigating to any page
    React.useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    return (
        <div className={`${bgSec ? 'bg-sec' : 'bg-none'} w-full py-6 px-10 flex justify-between items-center`}>
            <div className="logo">
                <h2 className='h4 font-bold'>Your logo</h2>
            </div>

            <div className='flex gap-5 items-center mr-44 max-md:hidden'>
                <NavLink
                    to='/Electronics/'
                    className={({ isActive }) =>
                        `${isActive ? 'text-black font-semibold' : 'text-gray font-light'} h5 flex items-center gap-1`}
                >
                    Home <FaAngleDown className='text-[14px] mt-1' />
                </NavLink>
                <h2 className='h5 flex items-center gap-1 text-black'>
                    Electronics <FaAngleDown className='text-[14px] mt-1' />
                </h2>
                <NavLink
                    to='/Electronics/contact'
                    className={({ isActive }) => {
                        if (isActive) {
                            setBgSec(true); // Trigger the background state change when active
                            return 'text-black font-semibold h5 flex items-center gap-1';
                        } else {
                            setBgSec(false); // Reset the background when inactive
                            return 'text-gray font-light h5 flex items-center gap-1';
                        }
                    }}
                >
                    Contacts <FaAngleDown className='text-[14px] mt-1' />
                </NavLink>
                <NavLink
                    to='/Electronics/about'
                    className={({ isActive }) =>
                        `${isActive ? 'text-black font-semibold' : 'text-gray font-light'} h5 flex items-center gap-1`}
                >
                    About <FaAngleDown className='text-[14px] mt-1' />
                </NavLink>
                <NavLink
                    to='/Electronics/login'
                    className={({ isActive }) =>
                        `${isActive ? 'text-black font-semibold' : 'text-gray font-light'} h5 flex items-center gap-1`}
                >
                    Login
                </NavLink>
            </div>

            {/* Hamburger Menu */}
            <div className="menu max-md:block hidden z-20" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <IoCloseSharp /> : <GiHamburgerMenu />}
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute top-0 left-0 w-full h-screen bg-white py-52 px-2 z-10 max-md:block bg-White">
                    <div className='flex flex-col gap-4 ml-10'>
                        <NavLink
                            to='/Electronics/'
                            className={({ isActive }) =>
                                `${isActive ? 'text-black font-semibold' : 'text-gray font-light'} h5 flex items-center gap-1`}
                        >
                            Home <FaAngleDown className='text-[14px] mt-1' />
                        </NavLink>
                        <h2 className='h5 flex items-center gap-1 text-black'>
                            Electronics <FaAngleDown className='text-[14px] mt-1' />
                        </h2>
                        <NavLink
                            to='/Electronics/contact'
                            className={({ isActive }) => {
                                if (isActive) {
                                    setBgSec(true); // Trigger the background state change when active
                                    return 'text-black font-semibold h5 flex items-center gap-1';
                                } else {
                                    setBgSec(false); // Reset the background when inactive
                                    return 'text-gray font-light h5 flex items-center gap-1';
                                }
                            }}
                        >
                            Contacts <FaAngleDown className='text-[14px] mt-1' />
                        </NavLink>
                        <NavLink
                            to='/Electronics/about'
                            className={({ isActive }) =>
                                `${isActive ? 'text-black font-semibold' : 'text-gray font-light'} h5 flex items-center gap-1`}
                        >
                            About <FaAngleDown className='text-[14px] mt-1' />
                        </NavLink>
                        <NavLink
                            to='/Electronics/login'
                            className={({ isActive }) =>
                                `${isActive ? 'text-black font-semibold' : 'text-gray font-light'} h5 flex items-center gap-1`}
                        >
                            Login
                        </NavLink>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;
