import React from 'react'
import logo from '../assets/img/logo.jpg'
export default function Specialoffers() {
  return (
    <div class="w-full h-full bg-yellow-100 bg-opacity-50">
      <div class="flex flex-row items-start justify-center h-full bg-yellow-100">
        <div class="flex items-center justify-center bg-yellow-400 bg-opacity-50  w-screen">
          <div class="flex flex-col items-center justify-center h-full sm:flex-row">
            <div class="flex-1 w-full p-8">
              <h2 class="mb-4 text-2xl font-semibold">Current Promotions</h2>
              <p class="w-full text-gray-600">Stay tuned for current promotions information…</p>
            </div>
            <div class="flex-shrink-0 sm:p-8"><img src={logo} alt="Logo"
              class="w-32 h-32 sm:w-[20rem] sm:h-[20rem] rounded-full" /></div>
            <div class="flex-1 w-full p-8">
              <h2 class="mb-4 text-2xl font-semibold">Special Offers</h2>
              <p class="text-gray-600">Avail last-minute discounts, early bird offers, long stay offers
                when you book directly with us.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
