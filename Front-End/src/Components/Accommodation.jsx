import React, { useState } from 'react'
import logo from '../assets/img/logo.jpg'
import img4 from '../assets/img/1(10).jpeg'
import img14 from '../assets/img/1(14).jpeg'




export default function Accommodation() {

  const [currentImage, setCurrentImage] = useState(img4);
  const changepic = () => {
    if (currentImage === img4) {
      setCurrentImage(img14);
    } else {
      setCurrentImage(img4);
    }
  };
  const [currentImage1, setCurrentImage1] = useState(img4);
  const changepic1 = () => {
    if (currentImage1 === img4) {
      setCurrentImage1(img14);
    } else {
      setCurrentImage1(img4);
    }
  };



  return (
    <div class="w-full h-full bg-yellow-100 bg-opacity-50">
      <div className="flex flex-col w-full justify-center items-center pt-[10px] ">
        <p className="mx-10 text-2xl font-bold">ACCOMMODATION</p>

        <p className="text-xl sm:text-3xl font-bold">Our Rooms & Services</p>
        <div className="flex flex-row items-center justify-center gap-2">
          <hr className="w-48 h-1 mx-auto my-4 bg-gray-900 border-0 rounded md:my-10 dark:bg-gray-700" />
          <img src={logo} className="rounded-full w-14 h-14" />
          <hr className="w-48 h-1 mx-auto my-4 bg-gray-900 border-0 rounded md:my-10 dark:bg-gray-700" />
        </div>
        <p className="mb-5 font-semibold text-center sm:w-[700px]">
          Immerse yourself in the epitome of luxury. Book your room now and unlock a world of unparalleled comfort, breathtaking
          views, and personalized service. Your unforgettable escape begins at our resort.
        </p>
        <div className="flex flex-col items-center justify-center w-full p-8 sm:flex-row">
          {/* Room 1 */}
          <div className="flex flex-row items-center justify-center w-full">
            <button className="flex" onClick={changepic}>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 320 512"
                className="w-10 h-10"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path>
              </svg>
            </button>
            <div className="mb-4 w-full h-[500px]">
              <img src={currentImage} alt="Room 1" className="object-cover w-full h-[500px] rounded-xl" />
            </div>
            <button className="flex" onClick={changepic}>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 320 512"
                className="w-10 h-10"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
              </svg>
            </button>
          </div>
          <div className="flex flex-col items-center justify-center w-full p-10 text-center bg-yellow-200 sm:ml-8 sm:w-7/12 rounded-xl">
            <h1 className="text-2xl font-bold">Suit Room</h1>
            <p className="text-lg">₹3000 per night</p>
            {/* Features */}
            <div className="mt-4 text-center">
              <h2 className="text-lg font-semibold">Features</h2>
              <ul className="flex flex-wrap justify-center gap-2 sm:flex-row">
                <li className="px-3 py-1 bg-yellow-300 rounded-full">1 room</li>
                <li className="px-3 py-1 bg-yellow-300 rounded-full">1 bathroom</li>
                <li className="px-3 py-1 bg-yellow-300 rounded-full">1 balcony</li>
                <li className="px-3 py-1 bg-yellow-300 rounded-full">2 sofas</li>
              </ul>
            </div>
            {/* Facilities */}
            <div className="mt-4 text-center">
              <h2 className="text-lg font-semibold">Facilities</h2>
              <ul className="flex flex-wrap justify-center gap-2 sm:flex-row">
                <li className="px-3 py-1 bg-yellow-300 rounded-full">Wifi</li>
                <li className="px-3 py-1 bg-yellow-300 rounded-full">Television</li>
                <li className="px-3 py-1 bg-yellow-300 rounded-full">Room Heater</li>
                <li className="px-3 py-1 bg-yellow-300 rounded-full">Hall</li>
              </ul>
            </div>
            {/* Guests */}
            <div className="mt-4 text-center">
              <h2 className="text-lg font-semibold">Guests</h2>
              <p>3 Adults, 1 Children</p>
            </div>
            {/* Rating */}
            <div className="mt-4 text-center">
              <h2 className="text-lg font-semibold">Rating</h2>
              <p className="text-yellow-500">★★★★★</p>
            </div>
            {/* Book Now Button */}
            <a href="booking.html">
              <button className="w-[300px] px-2 py-2 mt-6 font-bold text-xl text-white bg-green-500 hover:bg-green-600 rounded-xl">
                Book Now
              </button>
            </a>
          </div>
        </div>
        {/* Second Room */}
        <div className="flex flex-col items-center justify-center w-full p-8 sm:flex-row">
          {/* Room 2 */}
          <div className="flex flex-row items-center justify-center w-full">
            <button className="flex" onClick={changepic1}>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 320 512"
                className="w-10 h-10"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path>
              </svg>
            </button>
            <div className="mb-4 w-full h-[500px]">
              <img src={currentImage1} alt="Room 2" className="object-cover w-full h-[500px] rounded-xl" />
            </div>
            <button className="flex" onClick={changepic1}>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 320 512"
                className="w-10 h-10"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
              </svg>
            </button>
          </div>
          <div className="flex flex-col items-center justify-center w-full p-10 text-center bg-yellow-200 sm:ml-8 sm:w-7/12 rounded-xl">
            <h1 className="text-2xl font-bold">Simple Bed Room</h1>
            <p className="text-lg">₹2500 per night</p>
            {/* Features */}
            <div className="mt-4 text-center">
              <h2 className="text-lg font-semibold">Features</h2>
              <ul className="flex flex-wrap justify-center gap-2 sm:flex-row">
                <li className="px-3 py-1 bg-yellow-300 rounded-full">8 rooms</li>
                <li className="px-3 py-1 bg-yellow-300 rounded-full">1 bathroom</li>
                <li className="px-3 py-1 bg-yellow-300 rounded-full">1 balcony</li>
                <li className="px-3 py-1 bg-yellow-300 rounded-full">1 sofa</li>
              </ul>
            </div>
            {/* Facilities */}
            <div className="mt-4 text-center">
              <h2 className="text-lg font-semibold">Facilities</h2>
              <ul className="flex flex-wrap justify-center gap-2 sm:flex-row">
                <li className="px-3 py-1 bg-yellow-300 rounded-full">Wifi</li>
                <li className="px-3 py-1 bg-yellow-300 rounded-full">Television</li>
                <li className="px-3 py-1 bg-yellow-300 rounded-full">Room Heater</li>
              </ul>
            </div>
            {/* Guests */}
            <div className="mt-4 text-center">
              <h2 className="text-lg font-semibold">Guests</h2>
              <p>2 Adults, 1 Children</p>
            </div>
            {/* Rating */}
            <div className="mt-4 text-center">
              <h2 className="text-lg font-semibold">Rating</h2>
              <p className="text-yellow-500">★★★★★</p>
            </div>
            {/* Book Now Button */}
            <a href="booking.html">
              <button className="w-[300px] px-2 py-2 mt-6 font-bold text-xl text-white bg-green-500 hover:bg-green-600 rounded-xl">
                Book Now
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
