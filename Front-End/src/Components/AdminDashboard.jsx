import React from 'react'
import { useEffect } from "react";
import { useState } from 'react';
function AdminDashboard() {
    const [empData, setEmpData] = useState();
    const getAllData = async () => {
        try {
            const getPeople = await fetch(
                `http://localhost:4000/api/v1/getUserdata`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            const res = await getPeople.json();
            setEmpData(res);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAllData();
    }, []);
    console.log(empData);

    return (
        <>
            <div className="mt-1 flex gap-x-4 items-center rounded-full ">
          <table className=" min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <span>ID&nbsp;and&nbsp;Name</span>
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Date
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Conatct 
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Payment&nbsp;Mode&nbsp;and&nbsp;Type
                      </th>
                    </tr>
                  </thead>

                  <tbody className=" bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    {empData?.data.map((person) => (
                      <tr key={person.name}>
                        <td className="py-4 px-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900 dark:text-white">
                                {person._id}
                              </div>
                              <div className="text-sm text-gray-500 dark:text-gray-300">
                                {person.name}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-12 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900 dark:text-white">
                            {person.startDate}
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-300">
                            {person.endDate}
                          </div>
                        </td>

                        <td className="px-12 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900 dark:text-white">
                            {person.phone}
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-300">
                            {person.email}
                          </div>
                        </td>
                        <td className="px-12 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900 dark:text-white">
                            {person.paymentMode}
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-300">
                            {person.bookingType}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

        </div>
        </>
    )
}


export default AdminDashboard;
