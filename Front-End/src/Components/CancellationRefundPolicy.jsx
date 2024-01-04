import React from 'react'

export default function CancellationRefundPolicy() {
  return (
    <>
      <div className="w-full h-full bg-yellow-100 bg-opacity-50  ">
        <div className="container mx-auto p-8">
          <h1 className="mb-4 text-3xl font-bold">Hotel Booking</h1>
          <div className="p-6 bg-white rounded-md shadow-md bg-opacity-30">
            <h2 className="mb-4 text-xl font-bold">Cancellation Policy</h2>
            <p className="mb-4">We understand that plans can change, and sometimes adjustments to your travel
              schedule are necessary. Please take note of our cancellation policy below:</p>
            <div className="mb-4"><strong>1. Cancellation Period:</strong>
              <ul>
                <li>Reservations canceled 50 or more days before the scheduled check-in date will incur no
                  charges.</li>
              </ul>
            </div>
            <div className="mb-4"><strong>2. No-Show Policy:</strong>
              <ul>
                <li>If you do not arrive on the scheduled check-in date and have not canceled your
                  reservation, you will be considered a no-show.</li>
              </ul>
            </div>
            <div className="mb-4"><strong>3. Early Departure:</strong>
              <ul>
                <li>In the event of early departure, guests will be charged for the entire reserved stay.
                </li>
              </ul>
            </div>
            <div className="mb-4"><strong>4. Modification Policy:</strong>
              <ul>
                <li>Changes to the reservation dates or room type are subject to availability and may result
                  in a rate change.</li>
              </ul>
            </div>
            <div className="mb-4"><strong>5. Refund Process:</strong>
              <ul>
                <li>Refunds for cancellations will be processed within 10 business days and may take
                  additional time to reflect in your account.</li>
              </ul>
            </div>
            <div className="mb-4"><strong>6. Special Promotions and Non-Refundable Bookings:</strong>
              <ul>
                <li>Some promotional rates or non-refundable bookings may have different cancellation
                  policies. Please review the terms and conditions associated with these rates.</li>
              </ul>
            </div>
            <div className="mb-4"><strong>7. Group Bookings:</strong>
              <ul>
                <li>Group bookings are subject to different cancellation policies, as outlined in the group
                  contract.</li>
              </ul>
            </div>
            <p>Please be aware that this is a general example, and the actual cancellation policy for the
              specific hotel you are booking may differ. It is recommended to review the hotel&#x27;s
              cancellation policy at the time of booking to avoid any confusion or misunderstandings.</p>
          </div>
        </div>
      </div>
    </>
  )
}
