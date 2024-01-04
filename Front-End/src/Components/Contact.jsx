import React from 'react'
import logo from '../assets/img/logo.jpg'
import { IoCall } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import { SiGmail } from "react-icons/si";
export default function Contact() {
  return (
    <div class="w-full h-full bg-yellow-100 bg-opacity-50">
      <div className="flex flex-col pt-[10px]">
        <p className="text-5xl font-bold text-center">Contact Us</p>
        <div className="flex flex-row items-center justify-center gap-2 mt-4">
                        <hr className="w-48 h-1 mx-auto my-4 bg-gray-900 border-0 rounded md:my-10 dark:bg-gray-700" />
                        <img src={logo} className="rounded-full w-14 h-14" />
                        <hr className="w-48 h-1 mx-auto my-4 bg-gray-900 border-0 rounded md:my-10 dark:bg-gray-700" />
                    </div>
        <div className="flex flex-col w-full p-10 bg-transparent sm:flex-row">
          {/* Google Map */}
          <div className="relative flex items-end justify-start w-full p-4 overflow-hidden border-2 border-gray-200 rounded-lg lg:w-2/3 md:w-1/2 sm:mr-10">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameBorder="0"
              title="map"
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14491.851499918726!2d84.347083!3d24.762462!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398cffda9ed112b7%3A0xfbd08bbf8248e7d8!2sTHE%20HAWELI%20%7C%7C%20RESORT%20%26%20RESTAURANT%20%7C%7C!5e0!3m2!1sen!2sus!4v1702376308043!5m2!1sen!2sus"
              style={{ filter: 'grayscale(0) contrast(1) opacity(0.9)' }}
            ></iframe>
            {/* Contact Information */}
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
                <p className="leading-relaxed"> <IoCall /> +91 9718905221</p>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div className="container p-4 mx-auto sm:w-1/2">
            <h1 className="mb-6 text-3xl font-semibold text-center">How to Contact Us</h1>
            <div className="mb-6">
              <h2 className="mb-2 text-xl font-semibold">Address</h2>
              <p className="text-lg">Plot No - 303, Narbdeshwar Nagar, Bharthauli Road, Jasoiya More<br />Aurangabad (Bihar)- 824101</p>
            </div>
            <div className="mb-6">
              <h2 className="mb-2 text-xl font-semibold">Call Us</h2>
              <span className="flex flex-row items-center text-xl">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  
                </svg>
                <IoCall />

                +91-9718905221
              </span>
              <span className="flex flex-row items-center text-xl">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                </svg>
                <IoCall />
                +91-8789618100
              </span>
            </div>
            <div className="mb-6">
              <h2 className="mb-2 text-xl font-semibold">Whatsapp</h2>
              <span className="flex flex-row items-center text-xl">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 448 512"
                  className="w-6 h-6"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Whatsapp icon */}
                </svg>
                <IoLogoWhatsapp />
                +91-9718905221
              </span>
            </div>
            <h2 className="mb-2  text-xl font-semibold">Email</h2>
            <div className="mb-6 ml-7">              
              <spam className="flex flex-row items-center text-xl"> <SiGmail /> &nbsp;  info@haweli.com</spam>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
