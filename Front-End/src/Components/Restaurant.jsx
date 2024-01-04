import React from 'react'
import logo from '../assets/img/logo.jpg'
import { useState } from 'react';
import img1 from '../assets/img/pool.jpg'
import img3 from '../assets/img/1.jpg'
export default function Restaurant() {
  const [currentImage, setCurrentImage] = useState(img1);
  const changepic = () => {
    if (currentImage === img1) {
      setCurrentImage(img3);
    } else {
      setCurrentImage(img1);
    }
  };
  return (
    <div class="w-full h-full bg-yellow-100 bg-opacity-50">
      <div class="flex flex-col w-full justify-center items-center ">
        <p class="mx-10 sm:text-3xl text-2xl font-bold">RESTAURANT</p>
        <p class="sm:text-3xl text-xl font-bold ">Order Food &amp; Services</p>
        <div className="flex flex-row items-center justify-center gap-2">
          <hr className="w-48 h-1 mx-auto my-4 bg-gray-900 border-0 rounded md:my-10 dark:bg-gray-700" />
          <img src={logo} className="rounded-full w-14 h-14" />
          <hr className="w-48 h-1 mx-auto my-4 bg-gray-900 border-0 rounded md:my-10 dark:bg-gray-700" />
        </div>
        <p class="mb-5 font-semibold text-center">Book your food now and experience the exquisite flavors that
          await you at our resort.</p>
        <div class="flex flex-row flex-wrap w-full p-4 mx-auto">
          <div class="flex flex-row items-center justify-center w-full"><button class="flex" onClick={changepic}><svg
            stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512"
            class="w-10 h-10" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z">
            </path>
          </svg></button>
            <div class="mb-4 w-full h-[500px]"><img src={currentImage} alt="Room 1"
              class="object-cover w-full h-[500px] rounded-xl" /></div><button class="flex" onClick={changepic}><svg
                stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512"
                class="w-10 h-10" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z">
                </path>
              </svg></button>
          </div>
          <div class="container p-4 mx-auto sm:w-9/12">
            <h1 class="mb-6 text-3xl font-semibold text-center">Contact Us</h1>
            <div class="mb-6">
              <h2 class="mb-2 text-xl font-semibold">Address</h2>
              <p class="text-lg">Plot No - 303 , Narbdeshwar Nagar , Bharthauli Road , Jasoiya
                More<br />Aurangabad (Bihar)- 824101</p>
            </div>
            <div class="mb-6">
              <h2 class="mb-2 text-xl font-semibold">Call Us</h2><span
                class="flex flex-row items-center text-xl"><svg stroke="currentColor"
                  fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z">
                  </path>
                </svg>+91-9718905221</span><span class="flex flex-row items-center text-xl"><svg
                  stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512"
                  height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z">
                  </path>
                </svg>+91-8789618100</span>
            </div>
            <div class="mb-6">
              <h2 class="mb-2 text-xl font-semibold">Whatsapp</h2><span
                class="flex flex-row items-center text-xl"><svg stroke="currentColor"
                  fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="w-6 h-6"
                  height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z">
                  </path>
                </svg>+91-9718905221</span>
            </div>
            <div class="mb-6">
              <h2 class="mb-2 text-xl font-semibold">Email</h2>
              <p class="text-xl">info@haweli.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
