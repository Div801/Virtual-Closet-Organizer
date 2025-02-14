import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4">
    <div className="max-w-screen-xl mx-auto flex justify-between items-center">
      <a href="/" className="text-xl font-bold">Virtual Closet</a>
      <div>
        <a href="#mycloset" className="mx-4 hover:text-red-500">My Closet</a>
        <a href="#additem" className="mx-4 hover:text-red-500">Add Item</a>
        <a href="#categories" className="mx-4 hover:text-red-500">Categories</a>
        <a href="#login" className="mx-4 hover:text-red-500">Login</a>
      </div>
    </div>
  </nav>
  )
}

export default Navbar
