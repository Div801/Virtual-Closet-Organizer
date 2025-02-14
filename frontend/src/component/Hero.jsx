import React from 'react'

const Hero = () => {
  return (
    <section className="bg-gray-900 text-white h-96 flex flex-col justify-center items-center text-center">
    <h1 className="text-4xl font-bold mb-4">Organize Your Closet Like Never Before</h1>
    <p className="text-lg mb-6">Effortlessly manage and categorize your wardrobe with our virtual closet organizer.</p>
    <a href="#mycloset" className="bg-red-500 text-white py-2 px-6 rounded hover:bg-red-600">Start Organizing</a>
  </section>
  )
}

export default Hero
