import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/img/logo.jpg'
import img1 from '../assets/img/pool.jpg'
import img2 from '../assets/img/1(7).jpeg'
import img3 from '../assets/img/1.jpg'
import img4 from '../assets/img/1(10).jpeg'
import img5 from '../assets/img/hall12.jpg'
import img6 from '../assets/img/LawnArea.jpg'
import img7 from '../assets/img/childrenPlay.jpg'
import img8 from '../assets/img/bola.jpg'
import img9 from '../assets/img/Taramaa.jpg'
import img10 from '../assets/img/maamun.jpg'
import img11 from '../assets/img/maatutla.jpg'
import img12 from '../assets/img/front.jpeg'


export default function Home() {

    const images = [img3, img12, img1];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 15000);

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, [currentIndex, images.length]);
    function nextimg() {
        setCurrentIndex(function (prevCount) {
            return (prevCount = (prevCount + 1) % 3);
        });
    }
    function previmg() {
        setCurrentIndex(function (prevCount) {
            return (prevCount = (prevCount - 1) % 3);
        });
    }


    return (
        <div>
            <div class="w-full h-full bg-yellow-100 bg-opacity-50">
                <div className="w-full px-5 pt-2 mb-1">
                    <div id="controls-carousel" className="relative w-full" data-carousel="static">
                        <div className="relative w-full h-[16rem] overflow-hidden rounded-lg md:h-[600px] ">
                            <div className="flex flex-col items-center justify-center h-full p-40 text-center sm:items-start mt-[10rem]">
                                {/* <h2 className="z-10 text-xl sm:text-5xl text-center font-bold text-yellow-300 w-[300px] [text-shadow:1px_1px_2px_var(--tw-shadow-color)] shadow-black-500">
                                    THE HAWELI RESORT
                                </h2> */}
                                <div className="flex flex-col   sm:gap-2 sm:flex-row w-full justify-center">
                                    <button className="z-10 w-[180px] p-2 border border-gray-500 bg-yellow-300 rounded-xl font-bold text-xl mt-4 hover:bg-yellow-400">
                                        <Link to="/bookingcomp">Book Room</Link>
                                    </button>
                                    <button className="z-10 w-[180px] p-2 border border-gray-500 bg-yellow-300 rounded-xl font-bold text-xl mt-2 sm:mt-4 hover:bg-yellow-400">
                                        <Link to="/contact">Book Resort</Link>
                                    </button>
                                </div>
                            </div>
                            <div className="duration-700 ease-in-out absolute w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 opacity-100">
                                <img src={images[currentIndex]} className="block w-full" alt={`Image ${currentIndex + 1}`} />
                            </div>
                            {/* Add similar divs for other images */}
                        </div>
                        <button
                            type="button"
                            className="absolute top-0 z-10 flex items-center justify-center h-full px-4 cursor-pointer start-0 group focus:outline-none"
                            data-carousel-prev="true"
                            onClick={previmg}
                        >
                            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg className="w-4 h-4 text-yellow-200 dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"></path>
                                </svg>
                                <span className="sr-only">Previous</span>
                            </span>
                        </button>
                        <button
                            type="button"
                            className="absolute top-0 z-10 flex items-center justify-center h-full px-4 cursor-pointer end-0 group focus:outline-none"
                            data-carousel-next="true"
                            onClick={nextimg}
                        >
                            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg className="w-4 h-4 text-yellow-200 dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"></path>
                                </svg>
                                <span className="sr-only">Next</span>
                            </span>
                        </button>
                    </div>
                </div>
                <div className="flex w-full flex-col items-center justify-center gap-2 sm:mt-20 mt-0 mb-20">
                    <h1 className="text-2xl sm:text-4xl font-bold">RESORT AT A GLANCE</h1>
                    <div className="flex flex-row items-center justify-center gap-2">
                        <hr className="w-48 h-1 mx-auto my-4 bg-gray-900 border-0 rounded md:my-10 dark:bg-gray-700" />
                        <img src={logo} className="rounded-full w-14 h-14" />
                        <hr className="w-48 h-1 mx-auto my-4 bg-gray-900 border-0 rounded md:my-10 dark:bg-gray-700" />
                    </div>
                    <h1 className="px-5 sm:text-xl text-center w-auto sm:w-[800px]">
                        Mr. Swarnjeet Singh spearheads the mission to transform Haweli Resort into a comprehensive destination catering to the diverse needs of travelers and visitors. Renowned for its exceptional amenities, the resort provides an ideal venue for hosting various events.
                    </h1>
                </div>
                <div className="flex flex-col items-center justify-center p-10 bg-yellow-100">
                    <p className="mx-10 text-xl font-bold">ACCOMMODATION</p>
                    <div className="flex flex-row items-center justify-center gap-2">
                        <hr className="w-48 h-1 mx-auto my-4 bg-gray-900 border-0 rounded md:my-10 dark:bg-gray-700" />
                        <img src={logo} className="rounded-full w-14 h-14" />
                        <hr className="w-48 h-1 mx-auto my-4 bg-gray-900 border-0 rounded md:my-10 dark:bg-gray-700" />
                    </div>
                    <p className="text-xl font-bold sm:text-3xl">Our Rooms & Services</p>
                    
                    <p className="mb-5 font-semibold text-center sm:w-[700px]">
                        Immerse yourself in the epitome of luxury. Book your room now and unlock a world of unparalleled comfort, breathtaking views, and personalized service. Your unforgettable escape begins at our resort.
                    </p>
                    <div className="flex flex-col w-full gap-4 p-2 sm:flex-row sm:h-[400px]">
                        <div className="relative justify-center w-full rounded-xl hover:scale-95">
                            <Link className="w-full" to="/accommodation">
                                <img src={img4} alt="ds" className="object-cover w-full h-full rounded-xl" />
                                <h3 className="absolute bottom-0 w-full rounded-b-xl text-[10px] font-bold text-center text-gray-900 bg-yellow-500 sm:p-2 sm:text-[18px] text-xl">
                                    ROOMS
                                </h3>
                            </Link>
                        </div>
                        <div className="relative justify-center w-full rounded-xl hover:scale-95">
                            <Link className="w-full" to="/contact">
                                <img src={img5} alt="ds" className="object-cover w-full h-full rounded-xl" />
                                <h3 className="absolute bottom-0 w-full rounded-b-xl text-[10px] font-bold text-center text-gray-900 bg-yellow-500 sm:p-2 sm:text-[18px] text-xl">
                                    BANQUET
                                </h3>
                            </Link>
                        </div>
                        <div className="relative justify-center w-full rounded-xl hover:scale-95">
                            <Link className="w-full" to="/bookingcomp">
                                <img src={img1} alt="ds" className="object-cover w-full h-full rounded-xl" />
                                <h3 className="absolute bottom-0 w-full rounded-b-xl text-[10px] font-bold text-center text-gray-900 bg-yellow-500 sm:p-2 sm:text-[18px] text-xl">
                                    PARTY
                                </h3>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="w-full p-8 bg-yellow-400">
                    <div className="max-w-4xl mx-auto ">
                        <div className=''>
                            <h1 className="mb-8 text-xl sm:text-3xl font-bold text-center ">ALL OF OUR ROOMS OFFER THE FOLLOWING AMENITIES</h1>

                        </div>
                        <div className="flex flex-row justify-between">
                            <div className=" w-full pr-4 md:w-1/2">
                                <ul className="flex flex-col justify-between h-full list-disc">
                                    <li>Tea/Coffee maker</li>
                                    <li>Daily housekeeping & turndown service</li>
                                    <li>Electronic safe</li>
                                    <li>24-hr in-room dining</li>
                                    <li>Complimentary wifi</li>
                                    <li>Free Pick up and Drop available</li>
                                </ul>
                            </div>
                            <div className="w-full pl-4 md:w-1/2">
                                <ul className="list-disc">
                                    <li>24-hr laundry service</li>
                                    <li>Complimentary breakfast buffet in coffee shop</li>
                                    <li>24-hr on-call-doctor facility</li>
                                    <li>Access to swimming pool & fitness centre</li>
                                    <li>Extra beds available on request additional per night charge</li>
                                    <li>Cab facility available</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center w-full h-full gap-4 mt-10">
                    <p className="text-xl font-bold sm:text-4xl">Our Facilities</p>
                    <div className="hidden w-full mb-4 sm:block">
                        <div className="flex flex-row items-center justify-center gap-3 sm:w-full px-80">
                            <hr className="h-1 mx-auto my-4 bg-gray-900 border-0 rounded sm:w-full md:my-10 dark:bg-gray-700" />
                            <img src={logo} className="w-10 h-10 rounded-full" alt="Logo" />
                            <hr className="h-1 mx-auto my-4 bg-gray-900 border-0 rounded sm:w-full md:my-10 dark:bg-gray-700" />
                        </div>
                    </div>
                    <div class="flex flex-row w-full px-2 sm:pb-10 sm:px-10">
                        <div class="flex flex-row w-full gap-3 mb-4">
                            <div class="flex flex-row gap-2">
                                <Link to="/contact">
                                    <div class="relative justify-center w-auto bg-gray-400 rounded-xl hover:scale-90"><img
                                        src={img5} alt="Big Banquet Hall"
                                        class="sm:h-[320px] h-[150px] rounded-xl object-cover w-[200px] sm:w-[400px]" />
                                        <h3
                                            class="absolute bottom-0 w-full mb-4 text-[10px] font-bold text-center text-gray-200 bg-yellow-600 sm:p-2 sm:text-[18px]">
                                            Big Banquet Hall</h3>
                                    </div>
                                </Link><Link to="/contact">
                                    <div class="relative justify-center w-auto bg-gray-400 rounded-xl hover:scale-90"><img
                                        src={img1} alt="Swimming Pool (upcoming)"
                                        class="sm:h-[320px] h-[150px] rounded-xl object-cover w-[200px] sm:w-[400px]" />
                                        <h3
                                            class="absolute bottom-0 w-full mb-4 text-[10px] font-bold text-center text-gray-200 bg-yellow-600 sm:p-2 sm:text-[18px]">
                                            Swimming Pool (upcoming)</h3>
                                    </div>
                                </Link></div>
                            <div class="flex flex-row gap-2"><Link to="/contact">
                                <div class="relative justify-center w-auto bg-gray-400 rounded-xl hover:scale-90"><img
                                    src={img6} alt="Lawn Area"
                                    class="sm:h-[320px] h-[150px] rounded-xl object-cover w-[200px] sm:w-[400px]" />
                                    <h3
                                        class="absolute bottom-0 w-full mb-4 text-[10px] font-bold text-center text-gray-200 bg-yellow-600 sm:p-2 sm:text-[18px]">
                                        Lawn Area</h3>
                                </div>
                            </Link><Link to="/contact">
                                    <div class="relative justify-center w-auto bg-gray-400 rounded-xl hover:scale-90"><img
                                        src={img7} alt="Children Play Area"
                                        class="sm:h-[320px] h-[150px] rounded-xl object-cover w-[200px] sm:w-[400px]" />
                                        <h3
                                            class="absolute bottom-0 w-full mb-4 text-[10px] font-bold text-center text-gray-200 bg-yellow-600 sm:p-2 sm:text-[18px]">
                                            Children Play Area</h3>
                                    </div>
                                </Link></div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center bg-yellow-400 bg-opacity-50">
                    <div className="flex flex-col items-center justify-center h-full sm:flex-row">
                        <div className="flex-1 w-full p-8">
                            <h2 className="mb-4 text-2xl font-semibold">Current Promotions</h2>
                            <p className="w-full text-gray-600">Stay tuned for current promotions information…</p>
                        </div>
                        <div className="flex-shrink-0 sm:p-8 ">
                            <img src={logo} alt="Logo" className="w-32 h-32 sm:w-[20rem] sm:h-[20rem] rounded-full" />
                        </div>
                        <div className="flex-1 w-full p-8">
                            <h2 className="mb-4 text-2xl font-semibold">Special Offers</h2>
                            <p className="text-gray-600">Avail last-minute discounts, early bird offers, long stay offers when you book directly with us.</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center w-full h-full gap-4 mt-2">
                    <p className="text-xl font-bold sm:text-4xl">Popular Nearby Locations</p>
                    <div className="hidden w-full mb-4 sm:block">
                        <div className="flex flex-row items-center justify-center gap-3 sm:w-full px-80">
                            <hr className="h-1 mx-auto my-4 bg-gray-900 border-0 rounded sm:w-full md:my-10 dark:bg-gray-700" />
                            <img src={logo} className="w-10 h-10 rounded-full" alt="Logo" />
                            <hr className="h-1 mx-auto my-4 bg-gray-900 border-0 rounded sm:w-full md:my-10 dark:bg-gray-700" />
                        </div>
                    </div>
                    <div className="flex flex-row w-full px-10 pb-10">
                        <button className='hidden sm:block'>
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 320 512"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path>
                            </svg>
                        </button>
                        <div className="w-full flex sm:flex-row justify-center gap-4  flex-wrap sm:flex-nowrap">
                            {/* Repeat the following block for each nearby location */}
                            <a href="https://www.google.com/maps/place/Mahabodhi+Temple/@24.6959222,84.9888444,17z/data=!3m1!4b1!4m6!3m5!1s0x39f32c5b4bd80877:0xf8dd2e286fa80c97!8m2!3d24.6959222!4d84.9914193!16zL20vMDFneXl2?hl=en&amp;entry=ttu">
                                <div className="relative justify-center w-auto bg-gray-400 rounded-xl hover:scale-90">
                                    <img src={img8} alt="Mahabodhi Temple" className="sm:h-[320px] h-[150px] rounded-xl object-cover w-[200px] sm:w-[400px]" />
                                    <h3 className="absolute bottom-0 w-full mb-4 text-[10px] font-bold text-center text-gray-200 bg-yellow-600 sm:p-2 sm:text-[18px]">
                                        Mahabodhi Temple
                                    </h3>
                                </div>
                            </a>
                            <a href="https://www.google.com/maps/place/Mahabodhi+Temple/@24.6959222,84.9888444,17z/data=!3m1!4b1!4m6!3m5!1s0x39f32c5b4bd80877:0xf8dd2e286fa80c97!8m2!3d24.6959222!4d84.9914193!16zL20vMDFneXl2?hl=en&amp;entry=ttu">
                                <div className="relative justify-center w-auto bg-gray-400 rounded-xl hover:scale-90">
                                    <img src={img9} alt="Mahabodhi Temple" className="sm:h-[320px] h-[150px] rounded-xl object-cover w-[200px] sm:w-[400px]" />
                                    <h3 className="absolute bottom-0 w-full mb-4 text-[10px] font-bold text-center text-gray-200 bg-yellow-600 sm:p-2 sm:text-[18px]">
                                        Maa Tarachandi Mandir
                                    </h3>
                                </div>
                            </a>
                            <a href="https://www.google.com/maps/place/Mahabodhi+Temple/@24.6959222,84.9888444,17z/data=!3m1!4b1!4m6!3m5!1s0x39f32c5b4bd80877:0xf8dd2e286fa80c97!8m2!3d24.6959222!4d84.9914193!16zL20vMDFneXl2?hl=en&amp;entry=ttu">
                                <div className="relative justify-center w-auto bg-gray-400 rounded-xl hover:scale-90">
                                    <img src={img10} alt="Mahabodhi Temple" className="sm:h-[320px] h-[150px] rounded-xl object-cover w-[200px] sm:w-[400px]" />
                                    <h3 className="absolute bottom-0 w-full mb-4 text-[10px] font-bold text-center text-gray-200 bg-yellow-600 sm:p-2 sm:text-[18px] ">
                                        Maa Mundeshwari Mandir
                                    </h3>
                                </div>
                            </a>
                            <a href="https://www.google.com/maps/place/Mahabodhi+Temple/@24.6959222,84.9888444,17z/data=!3m1!4b1!4m6!3m5!1s0x39f32c5b4bd80877:0xf8dd2e286fa80c97!8m2!3d24.6959222!4d84.9914193!16zL20vMDFneXl2?hl=en&amp;entry=ttu">
                                <div className="relative justify-center w-auto bg-gray-400 rounded-xl hover:scale-90">
                                    <img src={img11} alt="Mahabodhi Temple" className="sm:h-[320px] h-[150px] rounded-xl object-cover w-[200px] sm:w-[400px]" />
                                    <h3 className="absolute bottom-0 w-full mb-4 text-[10px] font-bold text-center text-gray-200 bg-yellow-600 sm:p-2 sm:text-[18px]">
                                        Maa Tutla Bhawani Mandir
                                    </h3>
                                </div>
                            </a>
                            {/* Repeat the above block for each nearby location */}
                        </div>
                        <button  className='hidden sm:block'>
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 320 512"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <section className="text-gray-600 body-font">
                    <div className="container px-5 pt-5 pb-12 mx-auto">
                        <h1 className="mb-12 text-3xl font-medium text-center text-gray-900 title-font">Testimonials</h1>
                        <div className="relative flex flex-wrap -m-4">
                            {/* Testimonial 1 */}
                            <div className="w-full md:w-1/2 p-4 md:pr-2">
                                <div className="p-8 bg-yellow-400 h-full sm:h-[270px] rounded-xl flex flex-col justify-between">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 mb-4 text-white" viewBox="0 0 975.036 975.036">
                                        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                                    </svg>
                                    <div className="flex flex-row items-center justify-start text-yellow-200">
                                        {/* Repeat this line for each star */}
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                        </svg>
                                        {/* End repeat */}
                                        <span className="ml-2 text-black">a year ago</span>
                                    </div>
                                    <p className="mb-6 leading-relaxed">This is a very great full resort. In this resort, the behavior of their staff and workers is very good...</p>
                                    <a className="inline-flex items-center">
                                        <img alt="testimonial" src="https://lh3.googleusercontent.com/a-/ALV-UjUVw7DV1FhAZhl-T79_vANDGQuSApdMgGuwvYo6lrLn4w=w45-h45-p-rp-mo-br100" className="flex-shrink-0 object-cover object-center w-12 h-12 rounded-full" />
                                        <span className="flex flex-col flex-grow pl-4">
                                            <span className="font-medium text-gray-900 title-font">Holden Caulfield</span>
                                            <span className="text-sm text-gray-500">Local Guide · Level 3</span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                            {/* End Testimonial 1 */}

                            {/* Testimonial 2 */}
                            <div className="w-full md:w-1/2 p-4 md:pl-2">
                                <div className="p-8 bg-yellow-400 h-full sm:h-[270px] rounded-xl flex flex-col justify-between">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 mb-4 text-white" viewBox="0 0 975.036 975.036">
                                        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                                    </svg>
                                    <div className="flex flex-row items-center justify-start text-yellow-200">
                                        {/* Repeat this line for each star */}
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                        </svg>
                                        {/* End repeat */}
                                        <span className="ml-2 text-black">a year ago</span>
                                    </div>
                                    <p className="mb-6 leading-relaxed">A great place to stay, along with every possible comfort, the experience is totally budget-friendly and they have big places for different events as well, last but not least the only thing I can say is you will get it when you visit..</p>
                                    <a className="inline-flex items-center">
                                        <img alt="testimonial" src="https://lh3.googleusercontent.com/a-/ALV-UjWyESgbtyqeqyE9dSdrESNofOV-cg4Aa8p_KLlftFqokw=w75-h75-p-rp-mo-br100" className="flex-shrink-0 object-cover object-center w-12 h-12 rounded-full" />
                                        <span className="flex flex-col flex-grow pl-4">
                                            <span className="font-medium text-gray-900 title-font">Akash Vishen</span>
                                            <span className="text-sm text-gray-500">Local Guide · Level 3</span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                            {/* End Testimonial 2 */}
                        </div>
                    </div>
                </section>
                <div className="flex flex-col items-center justify-center mb-2">
                    <h1 className="text-xl">LOCATION</h1>
                    <p className="text-xl sm:text-5xl font-semibold">Where to Find Us</p>
                </div>
                <div className="hidden mb-4 sm:block">
                    <div className="flex flex-row items-center justify-center gap-3 sm:w-full px-80">
                        <hr className="h-1 mx-auto my-4 bg-gray-900 border-0 rounded sm:w-full md:my-10 dark:bg-gray-700" />
                        <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
                        <hr className="h-1 mx-auto my-4 bg-gray-900 border-0 rounded sm:w-full md:my-10 dark:bg-gray-700" />
                    </div>
                </div>
                <section className="flex flex-row items-center justify-center w-full">
                    <div className="container flex flex-wrap w-full pb-12 sm:flex-nowrap">
                        <div className="relative flex items-end justify-start p-4 overflow-hidden border-2 border-gray-200 rounded-lg lg:w-2/3 md:w-1/2 sm:mr-10">
                            <iframe
                                title="map"
                                width="100%"
                                height="100%"
                                className="absolute inset-0"
                                frameBorder="0"
                                scrolling="no"
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14491.851499918726!2d84.347083!3d24.762462!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398cffda9ed112b7%3A0xfbd08bbf8248e7d8!2sTHE%20HAWELI%20%7C%7C%20RESORT%20%26%20RESTAURANT%20%7C%7C!5e0!3m2!1sen!2sus!4v1702376308043!5m2!1sen!2sus"
                                style={{ filter: 'grayscale(0) contrast(1) opacity(0.9)' }}
                            ></iframe>
                            <div className="relative flex flex-wrap py-6 bg-white rounded shadow-md">
                                <div className="px-6 lg:w-1/2">
                                    <h2 className="text-xs font-semibold tracking-widest text-gray-900 title-font">ADDRESS</h2>
                                    <p className="mt-1">
                                        THE HAWELI RESORT &amp; RESTAURANT, Narbdeshwar Nagar, Rambilash nagar, Bharthauli, Bihar 824101, India
                                    </p>
                                </div>
                                <div className="px-6 mt-4 lg:w-1/2 lg:mt-0">
                                    <h2 className="text-xs font-semibold tracking-widest text-gray-900 title-font">EMAIL</h2>
                                    <a href="mailto:info@haweli.com" className="leading-relaxed text-yellow-500">
                                        info@haweli.com
                                    </a>
                                    <h2 className="mt-4 text-xs font-semibold tracking-widest text-gray-900 title-font">PHONE</h2>
                                    <p className="leading-relaxed">+91 9718905221</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col w-full mt-8 lg:w-1/3 md:w-1/2 md:ml-auto md:py-8 md:mt-0 m-4">
                            <h2 className="mb-1 text-lg font-medium text-gray-900 title-font">Feedback Form</h2>
                            <p className="mb-5 leading-relaxed text-gray-600">
                                Your feedback is invaluable to us, as it shapes our commitment to continuous improvement and excellence.
                            </p>
                            <div className="relative m-4">
                                <label htmlFor="name" className="text-sm leading-7 text-gray-600">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200"
                                    name="name"
                                />
                            </div>
                            <div className="relative m-4">
                                <label htmlFor="email" className="text-sm leading-7 text-gray-600">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200"
                                    name="email"
                                />
                            </div>
                            <div className="relative m-4">
                                <label htmlFor="message" className="text-sm leading-7 text-gray-600">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="w-full h-32 px-3 py-1 text-base leading-6 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none resize-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200"
                                ></textarea>
                            </div>
                            <button className="px-6 py-2 text-lg text-white bg-yellow-500 border-0 rounded focus:outline-none hover:bg-yellow-600 m-4">
                                Submit
                            </button>
                            <p className="mt-3 text-xs text-gray-500">
                                We genuinely appreciate the time you take to share your thoughts, as it enables us to enhance your experience
                                and better meet your needs.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
