import React from 'react'

export default function Support() {
    return (
        <>
            <div className="w-full h-full bg-yellow-100 bg-opacity-50  ">
                <div className="container mx-auto h-full flex flex-col justify-between items-between gap-2 p-10">
                    <h1 className="pb-4 text-3xl font-bold">Support</h1>
                    <p>Thank you for reaching out to our support team. We are here to assist you with any questions or
                        concerns you may have.</p>
                    <p>For general inquiries, you can contact us at <a href="mailto:info@haweli.com">info@haweli.com</a>.
                    </p>
                    <p>If you are facing technical issues, please provide detailed information about the problem, including
                        any error messages you may have encountered.</p>
                    <p>Our support team is available during business hours and will respond to your inquiry as soon as
                        possible.</p>
                </div>
            </div>
        </>
    )
}
