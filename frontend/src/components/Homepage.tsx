import React from "react";

const Homepage = () => {
  return (
    <div>
      <nav className="bg-[#102d11] border-b-[1px] text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">AgriTech Advance</div>
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="hover:text-green-300">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-300">
                Technology
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-300">
                Sustainability
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-300">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <section className="bg-[#102d11] text-white">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl font-bold">
            Welcome to the Future of Agriculture
          </h1>
          <p className="mt-4 text-xl">
            Discover the cutting-edge world of agriculture where technology
            meets sustainability.
          </p>
          <button className="mt-8 bg-green-500 px-6 py-3 rounded text-xl font-semibold hover:bg-green-600">
            Learn More
          </button>
        </div>
      </section>

      <section className="highlight-bg py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Modern and Futuristic Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-xl font-semibold">Precision Farming</h3>
              <p className="mt-2">
                Enhance crop production through real-time monitoring and
                efficient resource management.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Sustainable Innovations</h3>
              <p className="mt-2">
                Implement eco-friendly farming methods to reduce waste and
                increase sustainability.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Smart Automation</h3>
              <p className="mt-2">
                Utilize AI-driven automation to optimize farm operations and
                labor.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold">
            Changing the World, One Small Farm at a Time
          </h2>
          <p className="mt-4">
            Transform your farm using advanced tools and technologies.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div>
              <img
                src="path-to-your-image.jpg"
                alt="Drones"
                className="w-full h-auto rounded-lg shadow-md"
              />
              <h3 className="text-xl font-semibold mt-4">Drones</h3>
              <p>
                Used for aerial surveillance, crop monitoring, and pesticide
                application.
              </p>
            </div>
            <div>
              <img
                src="path-to-your-image.jpg"
                alt="IoT Sensors"
                className="w-full h-auto rounded-lg shadow-md"
              />
              <h3 className="text-xl font-semibold mt-4">IoT Sensors</h3>
              <p>Utilize real-time sensors to monitor farm metrics.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="hero-bg py-20 text-white text-center">
        <h2 className="text-3xl font-bold">Join Us Now</h2>
        <p className="mt-4">Become part of the agricultural revolution!</p>
        <button className="mt-8 bg-green-500 px-6 py-3 rounded text-xl font-semibold hover:bg-green-600">
          Sign Up
        </button>
      </section>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p>Follow Us on Social Media</p>
          <div className="mt-4"></div>
          <p className="mt-8">© 2024 AgriTech Advance. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
