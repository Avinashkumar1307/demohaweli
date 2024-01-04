import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/img/logo.jpg'
export default function Footer() {
    return (
        <>
            <footer className="text-gray-600 bg-yellow-600 bg-opacity-90 body-font font-bold">
                <div className="container flex flex-col flex-wrap px-5 py-16 mx-auto md:items-center lg:items-start md:flex-row md:flex-nowrap ">
                    <div className="flex-shrink-0 w-64 mx-auto mt-10 text-center md:mx-0 md:text-left md:mt-0">
                        <Link to="/" className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
                            <img src={logo} className="rounded-full w-14 h-14" alt="Logo" />
                            <span className="ml-3 sm:text-xl">THE HAWELI RESORT</span>
                        </Link>
                        <p className="mt-2 text-sm font-semibold text-gray-800">Best Place for Marriage, Ring Ceremony, Conference, Birthday Parties, Corporate meetings and many more...</p>
                        <p className="mt-2 text-sm font-bold text-gray-900">THE HAWELI RESORT &amp; RESTAURANT, Narbdeshwar Nagar, Rambilash nagar, Bharthauli, Bihar 824101, India</p>
                        <div className='w-full flex flex-col sm:ml-0 ml-10'>
                            <h2 className='flex mt-4 text-black '> LET'S SOCIALIZE</h2>
                            <span >

                                <div className="flex flex-row mt-2">
                                    <a className="text-blue-500 flex" href="https://www.facebook.com/Thehaweliresort">
                                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                        </svg>
                                    </a>
                                    <a className="ml-3 text-blue-500 flex" href="https://twitter.com/thehaweliresort">
                                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                        </svg>
                                    </a>
                                    <a className="ml-3 text-red-500 flex" href="https://www.instagram.com/thehaweliresorts/">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                        </svg>
                                    </a>
                                    <a className="ml-3 text-green-500 flex" href="https://wa.me/+919718905221">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="w-5 h-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
                                        </svg>
                                    </a>
                                </div>
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-wrap flex-grow order-first -mb-10 text-center md:pr-20 md:text-left">
                        <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                            <h2 className="mb-3 text-xl font-semibold tracking-widest text-gray-900 title-font">HOME</h2>
                            <nav className="flex flex-col gap-1 mb-10 list-none ">
                                <li><Link to="/about" className="text-gray-200 hover:text-gray-800">About</Link></li>
                                <li><Link to="https://www.google.com/maps/place/Dev+mandir/@24.6852455,84.3020486,14z/data=!4m10!1m2!2m1!1sDev+Temple!3m6!1s0x398cf985ebf77ecd:0x1e2d2e1480a5b1a1!8m2!3d24.6852455!4d84.3401574!15sCgpEZXYgVGVtcGxlkgEMaGluZHVfdGVtcGxl4AEA!16s%2Fg%2F11sx0dlbf_?hl=en&entry=ttu" className="text-gray-200 hover:text-gray-800">Google Reviews</Link></li>
                                <li><Link to="https://www.google.com/maps/place/Dev+mandir/@24.6852455,84.3020486,14z/data=!4m10!1m2!2m1!1sDev+Temple!3m6!1s0x398cf985ebf77ecd:0x1e2d2e1480a5b1a1!8m2!3d24.6852455!4d84.3401574!15sCgpEZXYgVGVtcGxlkgEMaGluZHVfdGVtcGxl4AEA!16s%2Fg%2F11sx0dlbf_?hl=en&entry=ttu" className="text-gray-200 hover:text-gray-800">Get Directions</Link></li>
                                <li><Link to="https://www.google.com/maps/place/Dev+mandir/@24.6852455,84.3020486,14z/data=!4m10!1m2!2m1!1sDev+Temple!3m6!1s0x398cf985ebf77ecd:0x1e2d2e1480a5b1a1!8m2!3d24.6852455!4d84.3401574!15sCgpEZXYgVGVtcGxlkgEMaGluZHVfdGVtcGxl4AEA!16s%2Fg%2F11sx0dlbf_?hl=en&entry=ttu" className="text-gray-200 hover:text-gray-800">Nearby Views</Link></li>
                            </nav>
                        </div>
                        <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                            <h2 className="mb-3 text-xl font-semibold tracking-widest text-gray-900 title-font">SERVICES</h2>
                            <nav className="flex flex-col gap-1 mb-10 list-none">
                                <li><Link to="/facilities" className="text-gray-200 hover:text-gray-800">Facilities</Link></li>
                                <li><Link to="/accommodation" className="text-gray-200 hover:text-gray-800">Accommodations</Link></li>
                                <li><Link to="/eventscomp" className="text-gray-200 hover:text-gray-800">Events</Link></li>
                                <li><Link to="/restaurant" className="text-gray-200 hover:text-gray-800">Restaurant</Link></li>
                            </nav>
                        </div>
                        <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                            <h2 className="mb-3 text-xl font-semibold tracking-widest text-gray-900 title-font">CUSTOMER HELP</h2>
                            <nav className="flex flex-col gap-1 mb-10 list-none">
                                <li><Link to="https://www.google.com/search?q=the+haweli+resorts+bihar&rlz=1C1RXQR_enIN1065IN1065&oq=the+haweli+resorts+bihar&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIICAEQABgWGB7SAQg4MTgyajBqN6gCALACAA&sourceid=chrome&ie=UTF-8&lqi=#lkt=LocalPoiReviews&lrd=0x398cffda9ed112b7:0xfbd08bbf8248e7d8,3,,,,&rlimm=18145156553316558808" className="text-gray-200 hover:text-gray-800">Add Reviews</Link></li>
                                <li><Link to="/specialoffers" className="text-gray-200 hover:text-gray-800">Special Offers</Link></li>
                                <li><Link to="/gallerycomp" className="text-gray-200 hover:text-gray-800">Gallery</Link></li>
                                <li><Link to="/contact" className="text-gray-200 hover:text-gray-800">Contact</Link></li>
                            </nav>
                        </div>
                        <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                            <h2 className="mb-3 text-xl font-semibold tracking-widest text-gray-900 title-font">POLICIES</h2>
                            <nav className="flex flex-col gap-1 mb-10 list-none">
                                <li><Link to="/support" className="text-gray-200 hover:text-gray-800">Support</Link></li>
                                <li><Link to="/privacypolicy" className="text-gray-200 hover:text-gray-800">Privacy Policy</Link></li>
                                <li><Link to="/cancellationrefundpolicy" className="text-gray-200 hover:text-gray-800">Cancellation & Refund Policy</Link></li>
                                <li><Link to="/termsofservice" className="text-gray-200 hover:text-gray-800">Terms of Service</Link></li>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="bg-yellow-300 bg-opacity-70">
                    <div className="container flex flex-col flex-wrap px-5 py-4 mx-auto sm:flex-row">
                        <p className="text-sm font-semibold text-center text-gray-500 sm:text-left">
                            © 2023 THE HAWELI RESORT —
                            <a
                                href="https://www.instagram.com/thehaweliresorts/"
                                rel="noopener noreferrer"
                                className="ml-1 font-semibold text-gray-600"
                                target="_blank"
                            >
                                @thehaweliresorts
                            </a>
                        </p>
                        <span className=" inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-center">Designed by&nbsp;
                            <Link to="https://teksila.in/" className="text-[#9a2525]">Teksila.in</Link>
                        </span>

                        
                    </div>
                </div>
            </footer>
        </>
    )
}
