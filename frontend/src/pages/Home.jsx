import React from 'react'
import Navbar from '../component/Navbar'
import Hero from '../component/Hero'
import ClosetFeatures from '../component/ClosetFeatures'
import Footer from '../component/Footer'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <ClosetFeatures/>
      <Footer></Footer>
    </div>
  )
}
