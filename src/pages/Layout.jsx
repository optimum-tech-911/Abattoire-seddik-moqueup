import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import KnifeTop from '../components/KnifeTop.jsx'
export default function Layout(){ return (<div className='bg-[#F2EDE4] text-[#0F0F0F] min-h-screen'><Header/><div className='h-[80px] md:h-[92px]'></div><Outlet/><Footer/><KnifeTop/></div>) }
