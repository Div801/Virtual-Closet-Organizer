import React from 'react'

const ClosetFeatures = () => {
  return (
    <section className="bg-white py-12" id="categories">
    <div className="max-w-screen-xl mx-auto text-center">
      <h2 className="text-3xl font-semibold mb-8">Organize Your Closet</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Add Clothing Items</h3>
          <p className="text-gray-600">Upload your clothes, categorize them, and store them digitally.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Create Outfits</h3>
          <p className="text-gray-600">Mix and match items to create stylish outfits for every occasion.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Track Wear Frequency</h3>
          <p className="text-gray-600">Keep track of how often you wear each item and decide what to keep or donate.</p>
        </div>
      </div>
    </div>
  </section>
   
  )
}

export default ClosetFeatures
