import React from 'react'
import logo from '../assets/img/logo.jpg'
import { Link } from 'react-router-dom'
export default function Eventscomp() {
  return (
    <div class="w-full h-full bg-yellow-100 bg-opacity-50">
      <div class="container p-4 mx-auto ">
        <h1 class="text-3xl font-bold text-center mb-2">Events and Charges</h1>
        <div class="hidden w-full sm:block">
          <div class="flex flex-row items-center justify-center gap-3 sm:w-full px-80">
            <hr class="h-1 mx-auto my-4 bg-gray-900 border-0 rounded sm:w-full md:my-10 dark:bg-gray-700" />
            <img src={logo} class="w-10 h-10 rounded-full" />
            <hr class="h-1 mx-auto my-4 bg-gray-900 border-0 rounded sm:w-full md:my-10 dark:bg-gray-700" />
          </div>
        </div>
        <table class="min-w-full bg-white  border-collapse border border-slate-400 ">
          <thead className='bg-black text-white'>
            <tr className=''>
              <th class="px-4 py-2 border-b border-slate-300">Event</th>
              <th class="px-4 py-2 border-b border-slate-300">Description</th>
              <th class="px-4 py-2 border-b border-slate-300">Charge</th>
            </tr>
          </thead>
          <tbody>
            <tr >
              <td class="px-4 py-2 border-b text-center">Engagement</td>
              <td class="px-4 py-2 border-b text-center">4 Rooms, 1&nbsp;Hall with Decoration</td>
              <td class="px-4 py-2 border-b text-center">40,000</td>
            </tr>
            <tr className='bg-gray-300'>
              <td class="px-4 py-2 border-b text-center">Meeting</td>
              <td class="px-4 py-2 border-b text-center">Only Hall &nbsp; &nbsp;(5-6 hrs)</td>
              <td class="px-4 py-2 border-b text-center">15,000</td>
            </tr>
            <tr >
              <td class="px-4 py-2 border-b text-center">Birthday</td>
              <td class="px-4 py-2 border-b text-center">Only Hall with Decoration</td>
              <td class="px-4 py-2 border-b text-center">20,000</td>
            </tr>
            <tr className='bg-gray-300'>
              <td class="px-4 py-2 border-b text-center">Engagement</td>
              <td class="px-4 py-2 border-b text-center">4 rooms, Big Hall with Decoration</td>
              <td class="px-4 py-2 border-b text-center">60,000</td>
            </tr>
            <tr >
              <td class="px-4 py-2 border-b text-center">Engagement</td>
              <td class="px-4 py-2 border-b text-center">8 rooms, 2&nbsp;Halls with Decoration</td>
              <td class="px-4 py-2 border-b text-center">60,000</td>
            </tr>
            <tr className='bg-gray-300'>
              <td class="px-4 py-2 border-b text-center">Resort </td>
              <td class="px-4 py-2 border-b text-center">Full Wedding Setup</td>
              <td class="px-4 py-2 border-b text-center">2,11,000</td>
            </tr>
          </tbody>
        </table>
        <div class="flex flex-col items-center justify-center p-2 rounded-xl"><Link to="/contact"><button
          class="py-2 px-3 font-bold text-gray-900 bg-yellow-500 hover:bg-yellow-600 rounded-xl">Book
          Event</button></Link></div>
      </div>
      
    </div>
  )
}
