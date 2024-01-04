import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/img/logo.jpg'
import { IoMenu } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { useState } from 'react';
export default function Navbar() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <nav className=" top-0 z-0 w-full p-4 text-black bg-yellow-600 bg-opacity-70 overflow-x-hidden">
                <div className="w-full flex justify-center items-center  font-semibold ">

                    {/* logo */}
                    <div className="w-full flex justify-items-start flex-row items-center  cursor-pointer">
                        <Link to="/" className='flex flex-row items-center gap-2 pointer ' >
                            <img src={logo} className=" w-12 h-12 rounded-full" alt="Logo" />
                            <p className="hidden lg:block text-lg font-bold rounded-xl sm:text-xl">THE HAWELI RESORT</p>
                        </Link>
                    </div>
                    {/* navlinks */}
                    <div className="flex flex-row items-center justify-center space-x-4 lg:ml-[2rem]">
                        <div className="hidden xl:space-x-4 md:space-x-2 md:flex md:flex-row md:justify-center md:items-center">
                            <Link to="/about" className='text-sm'>
                                <p className="hover:underline ">ABOUT</p>
                            </Link>
                            <Link to="/accommodation" className='text-sm'>
                                <p className="hover:underline">ACCOMMODATION</p>
                            </Link>
                            <Link to="/restaurant" className='text-sm'>
                                <p className="hover:underline">RESTAURANT</p>
                            </Link>
                            <Link to="/eventscomp" className='text-sm'>
                                <p className="hover:underline">EVENTS</p>
                            </Link>
                            <Link to="/facilities" className='text-sm'>
                                <p className="hover:underline">FACILITIES</p>
                            </Link>
                            <Link to="/specialoffers" className='text-sm'>
                                <div className="hover:underline ">SPECIAL&nbsp;OFFERS</div>
                            </Link>
                            <Link to="/gallerycomp" className='text-sm inline-block'>
                                <p className="hover:underline">GALLERY</p>
                            </Link>
                            <Link to="/contact" className='text-sm'>
                                <p className="hover:underline">CONTACT</p>
                            </Link>
                        </div>
                    </div>

                    {/* mobile viewBox */}
                    {open && <div className="absolute right-6 top-20 rounded-xl p-4 text-black bg-white z-30 opacity-90 ">
                        <div className=" ">
                            <Link to="/about" className='text-sm' onClick={() => setOpen(!open)}>
                                <p className="hover:underline  py-1 ">ABOUT</p>
                            </Link>
                            <Link to="/accommodation" className='text-sm' onClick={() => setOpen(!open)}>
                                <p className="hover:underline py-1">ACCOMMODATION</p>
                            </Link>
                            <Link to="/restaurant" className='text-sm' onClick={() => setOpen(!open)}>
                                <p className="hover:underline py-1">RESTAURANT</p>
                            </Link>
                            <Link to="/eventscomp" className='text-sm' onClick={() => setOpen(!open)}>
                                <p className="hover:underline py-1" onClick={() => setOpen(!open)}>EVENTS</p>
                            </Link>
                            <Link to="/facilities" className='text-sm' onClick={() => setOpen(!open)}>
                                <p className="hover:underline py-1" onClick={() => setOpen(!open)}>FACILITIES</p>
                            </Link>
                            <Link to="/specialoffers" className='text-sm' onClick={() => setOpen(!open)}>
                                <p className="hover:underline py-1" >SPECIAL&nbsp;OFFERS</p>
                            </Link>
                            <Link to="/gallerycomp" className='text-sm' onClick={() => setOpen(!open)}>
                                <p className="hover:underline py-1">GALLERY</p>
                            </Link>
                            <Link to="/contact" className='text-sm' onClick={() => setOpen(!open)}>
                                <p className="hover:underline py-1">CONTACT</p>
                            </Link>
                        </div>
                    </div>}


                    {/* button */}
                    <div className="flex flex-row items-center justify-end space-x-4 ml-[2rem] ">
                        <Link to="/bookingcomp">
                            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground h-10 py-1 px-2 hover:bg-yellow-700 bg-green-800 text-white">
                                BOOK&nbsp;NOW
                            </button>
                        </Link>

                    </div>
                    <div className='md:hidden flex justify-end text-3xl ml-6 items-start ' onClick={() => setOpen(!open)}>
                        {
                            open ? <RxCross2 /> : <IoMdMenu />
                        }
                    </div>



                </div>
            </nav>
        </>
    )
}
