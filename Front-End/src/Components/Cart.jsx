import React, { useState } from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router-dom'
import img4 from '../assets/img/1(3).jpeg'
import axios from 'axios';
export default function Cart() {
    const [total, setTotal] = useState("0");
    const data = [
        {
            "value": "engagement_4_rooms_1_hall_with_decoration_40000",
            "label": "Engagement - 4 Rooms, 1 Hall with Decoration - ₹40,000",
            "amount": "40000"
        },
        {
            "value": "meeting_only_hall_5_6_hrs_15000",
            "label": "Meeting - Only Hall (5-6 hrs) - ₹15,000",
            "amount": "15000"
        },
        {
            "value": "birthday_only_hall_with_decoration_20000",
            "label": "Birthday - Only Hall with Decoration - ₹20,000",
            "amount": "20000"
        },
        {
            "value": "engagement_4_rooms_big_hall_with_decoration_60000",
            "label": "Engagement - 4 rooms, Big Hall with Decoration - ₹60,000",
            "amount": "60000"
        },
        {
            "value": "engagement_8_rooms_2_halls_with_decoration_60000",
            "label": "Engagement - 8 rooms, 2 Halls with Decoration - ₹60,000",
            "amount": "60000"
        },
        {
            "value": "resort_full_wedding_setup_211000",
            "label": "Resort - Full Wedding Setup - ₹2,11,000",
            "amount": "211000"
        }
    ];
    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        const selectedOption = data.find(option => option.value === selectedValue);

        if (selectedOption) {
            setTotal(selectedOption.amount);
        }
    };

    const data1 = {
        name: 'Waleed',
        amount: parseInt(total),
        number: '7498608775',
        MUID: "MUID" + Date.now(),
        transactionId: 'T' + Date.now(),
    }
    // console.log(parseInt(total, 10));
    const handlePayment = (e) => {
        e.preventDefault();
        try {
            const response = axios.post('http://localhost:4000/api/payment', { ...data1 });
            console.log(response);
        }

        // .then(res => {
        //     setTimeout(() => {
        //     }, 1500);

        // })
        catch (error) {
            console.error(error);
        };
    }

    return (
        <div className="min-h-screen bg-yellow-100 flex font-sans text-sm font-bold">
            <div className="m-auto max-w-950 w-90 card shadow-md border-transparent">
                <div className="flex">
                    <div className="w-8/12 bg-white py-16 pl-20 pr-24">
                        <div className="mb-5">
                            <div className="flex">
                                <div className="col">
                                    <h4 className="text-2xl">
                                        <b>Booking Cart</b>
                                    </h4>
                                </div>
                                <div className="col self-center text-right text-gray-500 ml-4">
                                    {total != "0" &&
                                        <span> 1 </span>
                                    } <span>items</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center mb-8">
                            <div className="w-1/6">
                                <img
                                    className="w-14 h-14"
                                    src={img4}
                                    alt="Item"
                                />
                            </div>
                            <div className="w-5/12 ml-4">
                                <div className="text-gray-500">wedding</div>
                                <div>Resorts booking</div>
                            </div>

                            <div className="w-4/12">₹{total}
                                {/* <span className="close">&#10005;</span> */}
                            </div>
                        </div>
                        {/* Repeat the above block for additional cart items */}
                        <div className="mt-14 flex">
                            <Link to="/bookingcomp" className="text-black"><FaArrowLeft /></Link>
                            <span className="text-black-500 ml-2">Back to shop</span>
                        </div>
                    </div>
                    <div className="w-8/12 bg-gray-300 rounded-r-lg py-16 px-8">
                        <div>
                            <h5 className="text-2xl">
                                <b>Summary</b>
                            </h5>
                        </div>
                        <hr className="my-4" />
                        <div className="flex">
                            <div className="w-6/12">
                                ITEMS {total != "0" &&
                                    <span> 1 </span>
                                }
                            </div>
                            <div className="w-6/12 text-right">₹{total}</div>
                        </div>
                        <form className="mt-4">
                            <p className='mb-4'>Booking Types</p>

                            <select className="border border-gray-200 py-2 px-1 mb-4 w-full bg-gray-100" onChange={handleSelectChange}>
                                {data.map(option => (
                                    <option key={option.value} value={option.value} className="text-gray-500">
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                            <p>GIVE CODE <span className='text-sm font-semibold'>( if you have )</span></p>
                            <input id="code" placeholder="Enter your code" className="border border-gray-200 py-1 px-2 mt-2 mb-4 w-full bg-gray-100" />
                        </form>
                        <div className="flex border-t border-gray-100 py-4">
                            <div className="w-6/12">TOTAL PRICE</div>
                            <div className="w-6/12 text-right">₹{total}</div>
                        </div>
                        <button className="py-4 bg-green-800 border-black rounded-xl text-white w-full mt-4" onClick={handlePayment}>MAKE PAYMENT</button>
                    </div>
                </div>
            </div>
        </div>

    )
}
