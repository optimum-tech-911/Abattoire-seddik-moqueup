import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import './overrides.css'
import Layout from './pages/Layout.jsx'
import Home from './pages/Home.jsx'
import Apropos from './pages/Apropos.jsx'
import Services from './pages/Services.jsx'
import Contact from './pages/Contact.jsx'

const router=createBrowserRouter([{path:'/',element:<Layout/>,children:[{index:true,element:<Home/>},{path:'apropos',element:<Apropos/>},{path:'services',element:<Services/>},{path:'contact',element:<Contact/>},]}])

ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode><RouterProvider router={router}/></React.StrictMode>)
