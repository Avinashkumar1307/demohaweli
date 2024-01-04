import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import LayOut from './LayOut.jsx';
import Home from './Components/Home.jsx';
import Eventscomp from './Components/Eventscomp.jsx'
import About from './Components/About.jsx'
import Restaurant from './Components/Restaurant.jsx'
import Accommodation from './Components/Accommodation.jsx'
import Facilities from './Components/Facilities.jsx'
import Specialoffers from './Components/Specialoffers.jsx'
import Gallerycomp from './Components/Gallerycomp.jsx'
import Contact from './Components/Contact.jsx'
import Bookingcomp from './Components/Bookingcomp.jsx'
import TermsofService from './Components/TermsofService.jsx'
import Support from './Components/Support.jsx';
import PrivacyPolicy from './Components/PrivacyPolicy.jsx'
import CancellationRefundPolicy from './Components/CancellationRefundPolicy.jsx'
import Admin from './Components/Admin.jsx';
import Cart from './Components/Cart.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <LayOut/>,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "Eventscomp",
        element: <Eventscomp />
      },
      {
        path: "restaurant",
        element: <Restaurant/>
      },
      {
        path: "accommodation",
        element: <Accommodation />
      },
      {
        path: "facilities",
        element: <Facilities />
      },
      {
        path: "specialoffers",
        element: <Specialoffers />
      },
      {
        path: "gallerycomp",
        element: <Gallerycomp />
      },
      {
        path: "contact",
        element: <Contact />
      },{
        path: "Bookingcomp",
        element: <Bookingcomp />
      },{
        path: "TermsofService",
        element: <TermsofService />
      },{
        path: "support",
        element: <Support />
      },{
        path: "PrivacyPolicy",
        element: <PrivacyPolicy />
      },{
        path: "CancellationRefundPolicy",
        element: <CancellationRefundPolicy />
      },{
        path:"Admin",
        element:<Admin/>
      },{
        path:"Cart",
        element:<Cart/>
      }

    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
