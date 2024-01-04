import React from 'react'
import logo from '../assets/img/logo.jpg'
import { Link } from 'react-router-dom'
export default function About() {
    return (
        <div class="w-full h-full bg-yellow-100 bg-opacity-50">
            <main className="container flex flex-col gap-1 text-justify ">
                <h1 className="mt-2 mb-4 text-4xl font-bold text-center">ABOUT US</h1>
                <div className="flex flex-col w-full sm:mx-auto text-justify sm:flex-row">
                    <div className="flex flex-col w-full p-5">
                        <h1 className=" mb-4 text-2xl font-bold text-center sm:text-left sm:text-4xl">THE HAWELI RESORT</h1>
                        <p className=" mb-6">
                            Our team at "The Haweli || Resort & Restaurant ||" is a dedicated and passionate group of individuals
                            committed to ensuring that every guest has a memorable and enjoyable experience. From the moment you step into
                            our resort, our team is ready to cater to your needs with warmth and professionalism. Whether you're here for a
                            grand wedding celebration, a corporate conference, or a leisurely stay, our staff is well-trained and eager to
                            assist you. We take pride in providing top-notch service, and our commitment to customer satisfaction is
                            reflected in every interaction. Our diverse team brings together a range of skills and expertise, ensuring
                            that all aspects of your visit, from accommodation to event coordination, are handled with precision and care.
                            We understand the importance of creating a welcoming and stress-free environment for our guests, and our team
                            works tirelessly to make your time at "The Haweli" a truly delightful experience.
                        </p>
                        <p className="mb-6">
                            THE HAWELI RESORT offers a sophisticated retreat, blending modern comfort with timeless elegance. Our
                            dedicated team is committed to providing a seamless hospitality experience, redefining the standards of service
                            in the hotel industry.
                        </p>
                        <h2 className="mb-4 text-2xl font-bold">Our Team</h2>
                        <p className="mb-6">
                            Our commitment extends to making every guest's stay remarkable. Whether you're a business traveler seeking a
                            refined setting or a leisure guest exploring the latest in hotel comforts, The Haweli Resort is your gateway to
                            unparalleled service and comfort.
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center w-full h-auto mt-4 text-center sm:w-7/12">
                        <img src={logo} alt="The Haweli Resort" className="rounded-full w-80 h-80" />
                        <div className="flex flex-row justify-center w-full mt-4 items-center">
                            <Link to="/contact"
                                href="contact.html"
                                className="px-6 py-3 mb-0 font-bold text-white transition duration-300 bg-black rounded-lg sm:mb-10 hover:bg-yellow-700"
                            >
                                BOOK NOW
                            </Link>
                        </div>
                    </div>
                </div>
                <h2 className="mt-5 mb-4 text-2xl font-bold sm:mt-0 m-4">Contact Us</h2>
                <p className='m-4'>
                    We value your inquiries and feedback at "The Haweli || Resort & Restaurant ||" and strive to provide prompt and
                    helpful assistance. Whether you have questions about booking an event, accommodation details, or general
                    inquiries about our resort, our dedicated team is here to assist you.
                    <br />
                    Feel free to reach out to us through the following contact channels:
                    <br />
                    <span>
                        Address:
                        <span className="w-[400px] text-left">
                            THE HAWELI RESORT & RESTAURANT, Narbdeshwar Nagar, Rambilash nagar, Bharthauli, Bihar 824101, India
                        </span>
                    </span>
                    <br />
                    Phone: +91 9718905221
                    <br />
                    Email: info@haweli.com
                </p>
                <br />
            </main>
        </div>
    )
}
