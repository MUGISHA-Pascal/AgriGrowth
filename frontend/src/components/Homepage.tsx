import React from "react";
import leafImage from "../assets/leaf2.png";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { HiOutlineLightBulb } from "react-icons/hi2";
import { SlSettings } from "react-icons/sl";
import image from "../assets/image.jpeg";
import { TbTargetArrow } from "react-icons/tb";
const Homepage = () => {
  return (
    <div className="bg-[#102d11]">
      <nav className="bg-[#102d11] border-b-[1px] border-gray-400 mx-[50px] text-white py-4">
        <div className="container mx-auto px-[70px] pt-[20px] flex justify-between items-center">
          <div className="text-2xl font-semi-bold">Farmers2Global</div>
          <ul className="flex space-x-6 font-normal text-gray-300">
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

      <section className="bg-[#102d11] flex flex-row  text-white">
        <div className="container mx-auto px-4 pt-20 text-center">
          <div className="flex pl-[90px]">
            <h1 className="text-[60px] text-left inline w-[700px]">
              Welcome to the Future of Agriculture
            </h1>
            <button className="text-gray-300 w-[140px] space-x-[10px] items-center mt-[60px] flex flex-row">
              <p>Learn more</p>
              <BsFillArrowUpRightCircleFill className="w-[30px] h-[30px] text-[#CBE86A]" />
            </button>
          </div>
          <div className="flex flex-row ml-[100px] space-x-[250px]">
            <p className=" text-[14px] w-[500px] text-left mt-[50px]">
              Discover the cutting-edge world of agriculture where technology
              meets sustainability.Our mission is to revolutionilize farming for
              a brighter tomorrow.
            </p>
            <img
              src={leafImage}
              alt="leaf"
              className="w-[300px] h-[180px] mt-[30px]"
            />
          </div>
        </div>
      </section>

      <section className="highlight-bg flex flex-row">
        <img alt="image" src={image} className="h-[480px] w-[600px]" />
        <div className="bg-[#CBE86A] px-4 w-full flex flex-col space-y-[40px] pl-[60px] items-start">
          <h2 className="text-[25px] font-semibold text-center mt-[30px]">
            Modern and Futuristic Benefits
          </h2>
          <div className="flex flex-col text-center space-y-[30px]">
            <div>
              <div className="flex flex-row space-x-[10px] items-center">
                <HiOutlineLightBulb className="w-[20px] h-[20px]" />
                <h3 className="text-[17px] font-semibold">Precision Farming</h3>
              </div>
              <p className="mt-2 text-[14px] w-[460px] text-left ml-[30px]">
                Enhance crop production through real-time monitoring and
                efficient resource management.
              </p>
            </div>
            <div>
              <div className="flex flex-row space-x-[10px] items-center">
                <SlSettings className="w-[20px] h-[20px]" />
                <h3 className="text-[17px] font-semibold">
                  Sustainable Innovations
                </h3>
              </div>
              <p className="mt-2 text-[14px] w-[460px] text-left ml-[30px]">
                Implement eco-friendly farming methods to reduce waste and
                increase sustainability.
              </p>
            </div>
            <div>
              <div className="flex flex-row space-x-[10px] items-center">
                <TbTargetArrow className="w-[20px] h-[20px]" />
                <h3 className="text-[17px] font-semibold">Smart Automation</h3>
              </div>
              <p className="mt-2 text-[14px] w-[460px] text-left ml-[30px]">
                Utilize AI-driven automation to optimize farm operations and
                labor.
              </p>
            </div>
          </div>
          <p className="mt-2 text-[14px] w-[460px] text-left ml-[30px]">
            learn more about what we are doing
          </p>
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
