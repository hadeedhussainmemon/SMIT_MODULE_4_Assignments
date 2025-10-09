import React from 'react'

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-800 to-blue-500 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2">
          <h1 className="text-5xl font-bold mb-4 leading-tight">
            Shop Smarter, Live Better
          </h1>
          <p className="text-lg mb-6">
            Discover top-quality products at unbeatable prices. Fast, reliable, and tailored for you!
          </p>
          <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded hover:bg-gray-200">
            Shop Now
          </button>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2331/2331970.png"
            alt="Shopping Illustration"
            className="w-80 drop-shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
