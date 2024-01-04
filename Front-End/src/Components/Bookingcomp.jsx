import React from 'react'
import DatePicker from "react-datepicker";
import axios from 'axios';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
export default function Bookingcomp() {

    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedDate1, setSelectedDate1] = useState(null);
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const createEmployee = async (data) => {

        const savedUserResponse = await fetch(
            `http://localhost:4000/api/v1/createUser`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ ...data }),
            }
        );
        navigate("/cart");
        console.log("FORM RESPONSE......", savedUserResponse);
    };
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    const handleDateChange1 = (date) => {
        setSelectedDate1(date);
    };


    return (
        <div class="w-full h-full bg-yellow-100 bg-opacity-50">
            <div class="flex flex-col items-center justify-center w-full h-full gap-5 sm:flex-row p-10">
                <div class="flex flex-row items-start justify-center w-full h-full">
                    <div class="flex flex-col items-center justify-start h-full">
                        <p class="m-10 text-4xl font-bold">ROOMS AVAILABILITY</p>
                        <div class="flex flex-col gap-8 sm:flex-row">
                            <div class="flex-grow p-2 bg-yellow-200 rounded-xl">
                                <h2 class="mb-2 text-lg font-bold">Current Month</h2>
                                <div class="grid grid-cols-7 gap-2">
                                    <div class="cursor-pointer text-center p-2 rounded text-white bg-red-500  ">01</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-white bg-red-500  ">02</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-white bg-red-500  ">03</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-white bg-red-500  ">04</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-white bg-red-500  ">05</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-white bg-red-500  ">06</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-white bg-red-500  ">07</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-white bg-red-500  ">08</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-white bg-red-500  ">09</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-white bg-red-500  ">10</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-white bg-red-500  ">11</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-white bg-red-500  ">12</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-white bg-red-500  ">13</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-white bg-red-500  ">14</div>
                                    <div
                                        class="cursor-pointer text-center p-2 rounded text-black  bg-red-500 ">
                                        15</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">16</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">17</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">18</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">19</div>
                                    <div
                                        class="cursor-pointer text-center p-2 rounded text-black  bg-red-500 ">
                                        20</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">21</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">22</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">23</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">24</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">25</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">26</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">27</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">28</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">29</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">30</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">31</div>
                                </div>
                            </div>
                            <div class="flex-grow p-2 bg-yellow-200 rounded-xl">
                                <h2 class="mb-2 text-lg font-bold">Next Month</h2>
                                <div class="grid grid-cols-7 gap-2">
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">01</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">02</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">03</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">04</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">05</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">06</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">07</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">08</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">09</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">10</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">11</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">12</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">13</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">14</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">15</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">16</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">17</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">18</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">19</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">20</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">21</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">22</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">23</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">24</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">25</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">26</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">27</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">28</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">29</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">30</div>
                                    <div class="cursor-pointer text-center p-2 rounded text-black  ">31</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-center w-full h-full">
                    {/*  */}
                    {/* onSubmit={handlePayment} */}
                    <form onSubmit={handleSubmit(createEmployee)} className="flex flex-col justify-center w-full h-full gap-3 p-10 bg-yellow-200">
                        <p className="m-2 text-3xl font-bold text-center">Book Your Visit</p>
                        <div className="flex flex-col items-center justify-center gap-2 sm:flex-row">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                {/* ... (path for the calendar icon) */}
                            </svg>
                            <div className="react-datepicker-wrapper">
                                <input type='date'
                                    placeholderText="Select a date"
                                    {...register("startDate")}
                                />
                            </div>
                            <span className="mx-4 text-gray-500">to</span>
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                {/* ... (path for the calendar icon) */}
                            </svg>
                            <div className="react-datepicker-wrapper">
                                <input type='date'
                                    placeholderText="Select a date"
                                    {...register("endDate")}
                                />
                            </div>
                        </div>
                        <label htmlFor="bookingType">Booking Type:</label>
                        <select id="bookingType" name="bookingType" className="border-2 border-gray-200 rounded" required="">
                            <option disabled="" selected="">Select booking type</option>
                            <option value="SUIT" {...register("bookingType")}>Suit</option>
                            <option value="ROOM" {...register("bookingType")}>ROOM</option>
                        </select>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" placeholder="Name" {...register("name")} className="border-2 border-gray-200 rounded" required="" name="name" />
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" placeholder="Email" className="border-2 border-gray-200 rounded" required="" name="email" {...register("email")} />
                        <label htmlFor="phoneNumber">Phone Number:</label>
                        <input type="tel" id="phoneNumber" placeholder="Phone Number" className="border-2 border-gray-200 rounded" required="" name="phoneNumber" {...register("phone")} />
                        {/* <Link to="/cart" >  */}
                        <button type="submit" className="px-20 py-2 text-xl font-bold rounded-xl mt-6 text-gray-200 bg-green-800 hover:bg-gray-600" disabled="">
                            BOOK NOW
                        </button>
                        {/* </Link> */}
                    </form>
                </div>
            </div>
        </div >
    )
}
