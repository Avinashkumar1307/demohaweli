import React from 'react'
import logo from '../assets/img/logo.jpg'
import img1 from '../assets/img/pool.jpg'
import img5 from '../assets/img/hall12.jpg'
import img6 from '../assets/img/LawnArea.jpg'
import img7 from '../assets/img/childrenPlay.jpg'
import { Link } from 'react-router-dom'



export default function Facilities() {
  return (
    <div class="w-full h-full bg-yellow-100 bg-opacity-50">
      <div class="flex flex-col items-center justify-center w-full">
        <div class="  w-full">
          <div class="w-full p-8 bg-yellow-400">
            <div class="max-w-4xl mx-auto ">
              <h1 class="mb-8 text-xl sm:text-3xl font-bold text-center">ALL OF OUR ROOMS OFFER THE FOLLOWING
                AMENITIES</h1>
              <div class="flex flex-row ju">
                <div class="w-full pr-4 md:w-1/2">
                  <ul class="flex flex-col justify-between h-full list-disc">
                    <li>Tea/Coffee maker</li>
                    <li>Daily housekeeping &amp; turndown service</li>
                    <li>Electronic safe</li>
                    <li>24-hr in-room dining</li>
                    <li>Complimentary wifi</li>
                    <li>Free Pick up and Drop available</li>
                  </ul>
                </div>
                <div class="w-full pl-4 md:w-1/2">
                  <ul class="list-disc">
                    <li>24-hr laundry service</li>
                    <li>Complimentary breakfast buffet in coffee shop</li>
                    <li>24-hr on-call-doctor facility</li>
                    <li>Access to swimming pool &amp; fitness centre</li>
                    <li>Extra beds available on request additional per night charge</li>
                    <li>Cab facility available</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col items-center justify-center w-full h-full gap-4 mt-10">
            <p class="text-xl font-bold sm:text-4xl">Our Facilities</p>
            <div class="hidden w-full mb-4 sm:block">
              <div class="flex flex-row items-center justify-center gap-3 sm:w-full px-80">
                <hr
                  class="h-1 mx-auto my-4 bg-gray-900 border-0 rounded sm:w-full md:my-10 dark:bg-gray-700" />
                <img src={logo} class="w-10 h-10 rounded-full" />
                <hr
                  class="h-1 mx-auto my-4 bg-gray-900 border-0 rounded sm:w-full md:my-10 dark:bg-gray-700" />
              </div>
            </div>
            <div class="flex flex-row w-full px-2 sm:pb-10 sm:px-10">
              <div class="flex flex-row w-full gap-3 mb-4">
                <div class="flex flex-row gap-2"><Link to="/contact">
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
        </div>
      </div>
    </div>
  )
}
