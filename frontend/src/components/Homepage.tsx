import React, { useState } from "react";
import leafImage from "../assets/leaf2.png";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { HiOutlineLightBulb } from "react-icons/hi2";
import { SlSettings } from "react-icons/sl";
import { GiThreeLeaves } from "react-icons/gi";
import { PiMedalLight } from "react-icons/pi";
import image from "../assets/image.jpeg";
import { TbTargetArrow } from "react-icons/tb";
import { MdStars } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import { TbBrandFacebook } from "react-icons/tb";
import { PiWhatsappLogoLight } from "react-icons/pi";
import { RiTwitterXFill } from "react-icons/ri";
import { BiSolidHappyAlt } from "react-icons/bi";
import { FaRegCopyright } from "react-icons/fa6";
import minimex from "../assets/minimex.png";
import { GrPrevious } from "react-icons/gr";
import monsalwa from "../assets/monsalwa.png";
import azam from "../assets/azam.png";
import africa from "../assets/africa.png";
import adma from "../assets/adma.png";
import coffee from "../assets/coffee.png";
import cotton from "../assets/cotton.png";
import fruits from "../assets/fruits.png";
import maize from "../assets/maize.png";
import { GrNext } from "react-icons/gr";
import rice from "../assets/rice.png";
import wheat from "../assets/wheat.png";
const Homepage = () => {
  const [currentState, setCurrentState] = useState(0);
  const slides = [
    { image: coffee, name: "coffee" },
    { image: cotton, name: "cotton" },
    { image: fruits, name: "fruits" },
    { image: maize, name: "maize" },
    { image: rice, name: "rice" },
    { image: wheat, name: "wheat" },
  ];
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

      <section className="bg-[#CBE86A] flex flex-rowbg-[#CBE86A]">
        <div className="h-[480px] w-[1400px] relative">
          <img
            alt="image"
            src={slides[currentState].image}
            className="h-[480px] w-[700px] absolute"
          />
          <GrPrevious className="absolute text-[#CBE86A] top-[210px] left-[10px] text-[30px]" />
          <GrNext className="absolute text-[#CBE86A] text-[30px] top-[210px] right-[10px]" />
        </div>
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

      <section className="py-20">
        <div className="flex flex-row space-x-[200px]">
          <div className="flex flex-col space-y-[70px] pl-[150px]">
            <div className="flex flex-col space-y-[20px]">
              <h1 className="text-[40px] text-white text-left inline w-[500px] leading-[50px]">
                Enable Local Farmers Go Global
              </h1>
              <p className=" text-[14px] w-[500px] text-white text-left mt-[50px]">
                By leveraging various existing Digital Technologies, Farm2Global
                is a game changer verified platform within agri-sector supply
                chain. It enhances trust and credibility within the agricultural
                sector, and offers a worldwide reach, allowing bulk buyers to
                easily access and connect with verified local farmers within the
                East African region without intervention of middlemen in the
                process.
              </p>
            </div>
            <div className="flex-col space-y-[20px] flex">
              <div className="flex flex-row w-[430px] items-center justify-start border-[#CBE86A] border-b-[1px]">
                <div className="flex flex-row space-x-[10px]">
                  <MdStars className="text-[#CBE86A] w-[24px] h-[24px]" />
                  <h1 className="font-semibold text-[17px] text-white">
                    Our customers
                  </h1>
                </div>
                <p className="font-bold text-white text-[30px] ml-[150px]">
                  1230
                </p>
              </div>
              <div className="flex flex-row w-[430px] items-center justify-start border-[#CBE86A] border-b-[1px]">
                <div className="flex flex-row space-x-[10px]">
                  <IoIosPeople className="text-[#CBE86A] w-[24px] h-[24px]" />
                  <h1 className="font-semibold text-[17px] text-white">
                    Farmers Cooperatives
                  </h1>
                </div>
                <p className="font-bold text-white text-[30px]  ml-[85px]">
                  994
                </p>
              </div>
              <div className="flex flex-row w-[430px] items-center justify-start border-[#CBE86A] border-b-[1px]">
                <div className="flex flex-row space-x-[10px]">
                  <BiSolidHappyAlt className="text-[#CBE86A] w-[24px] h-[24px]" />
                  <h1 className="font-semibold text-[17px] text-white">
                    Happy Clients{" "}
                  </h1>
                </div>
                <p className="font-bold text-white text-[30px]  ml-[155px]">
                  932
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-[70px] items-center justify-center">
            <div className="flex flex-row space-x-[24px] items-center justify-center">
              <div className="bg-[#CBE86A] w-[4px] h-[220px] rounded-full"></div>
              <div className="flex flex-col items-center justify-center">
                <GiThreeLeaves className="w-[80px] h-[80px] text-white" />
                <h1 className="font-bold text-white text-[15px]">
                  100% Trusted Farmers
                </h1>
                <p className=" text-[12px] w-[200px] text-white text-left mt-[10px]">
                  Farmers registration process involved multiple steps including
                  Unique Digital ID issuance, Personal,Business and
                  Administrative documents verification and onsite visit to
                  ensure their credibility
                </p>
              </div>
            </div>
            <div className="flex flex-row space-x-[24px] items-center justify-center">
              <div className="bg-[#CBE86A] w-[4px] h-[220px] rounded-full"></div>
              <div className="flex flex-col items-center justify-center">
                <PiMedalLight className="w-[80px] h-[80px] text-white" />
                <h1 className="font-bold text-white text-[15px]">
                  Awards and Recognition
                </h1>
                <p className=" text-[12px] w-[200px] text-white text-left mt-[10px]">
                  We have won various awards such as Digital ID For Africa where
                  we leveraged Digital ID to enhance digitization of Agriculture
                  sector. In addition, we are legally recognized by MINAGRI, RDB
                  and RCA
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#CBE86A] flex flex-col space-y-[30px] py-[70px] px-[100px]">
        <div className="flex flex-col space-y-[20px]">
          <h1 className="text-[40px] text-black text-left inline w-[500px] leading-[50px]">
            Our Partners
          </h1>
          <p className=" text-[14px] w-[500px] text-black text-left mt-[50px]">
            Connecting East African local farmers with potential Buyers.
          </p>
        </div>
        <div className="flex flex-row space-x-[100px] items-center">
          <img src={adma} alt="adma" className="w-[100px] h-auto" />
          <img src={africa} alt="africa" className="w-[100px] h-auto" />
          <img src={azam} alt="azam" className="w-[100px] h-auto" />
          <img src={monsalwa} alt="monsalwa" className="w-[100px] h-auto" />
          <img src={minimex} alt="minimex" className="w-auto h-[60px]" />
        </div>
      </section>
      <footer className="flex flex-row space-x-[70px] pl-[100px] pb-[40px] pt-[30px]">
        <div className="flex flex-col space-y-[30px]">
          <div className="flex flex-col space-y-0">
            <h1 className="text-[20px] font-semibold text-white text-left inline w-[500px] leading-[50px]">
              Farmers2Global Advance
            </h1>
            <p className=" text-[12px] w-[450px] text-white text-left">
              Discover the cutting-edge World of agriculture where technology
              meets sustainability. Our mission is to revolutionilize farming
              for a brighter tomorrow
            </p>
          </div>
          <div className="flex flex-row space-x-[70px]">
            <div className="flex flex-row space-x-[10px] items-center">
              <BiPhoneCall className="bg-gray-700 p-[7px] shadow-md text-[30px] rounded-full text-white" />
              <div className="flex flex-col items-start">
                <p className="text-[10px] text-gray-400">Have a question ?</p>
                <p className="font-semibold text-[12px] text-white">
                  +(250)78-225-6907
                </p>
              </div>
            </div>
            <div className="flex flex-row space-x-[10px] items-center">
              <MdOutlineMailOutline className="bg-gray-700 p-[7px] shadow-md text-[30px] rounded-full text-white" />
              <div className="flex flex-col items-start">
                <p className="text-[10px] text-gray-400">Contact us at ?</p>
                <p className="font-semibold text-[12px] text-white">
                  farmz2global@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-row pt-[20px] space-x-[30px] text-[12px] text-gray-400">
            <a href="#">About</a>
            <a href="#">Contact</a>

            <a href="#">Privacy policy</a>

            <a href="#">Sitemap</a>

            <a href="#">Terms of use</a>
          </div>
        </div>
        <div className="flex flex-col space-y-[20px] mt-[16px]">
          <div className="flex flex-col space-y-[12px] items-start">
            <h1 className="font-semibold text-[15px] text-white">Newsletter</h1>
            <p className="text-[10px] text-gray-400 text-left w-[400px]">
              Be the first one to know about discounts , offers and events ,
              Unsubscribe whenever you like
            </p>
          </div>
          <div className="bg-gray-700 items-center  relative w-[450px] h-[42px] rounded-full flex flex-row p-0">
            <label htmlFor="email" className="absolute top-[12px] left-[7px]">
              <MdOutlineMailOutline className="text-gray-500 text-[18px]" />
            </label>
            <input
              type="text"
              placeholder="Enter your email"
              id="email"
              className="focus:outline-none placeholder:text-gray-500 text-gray-400 placeholder:text-[12px] text-[12px] ml-[30px] w-[345px] h-[42px] bg-gray-700"
            />
            <button className="bg-[#CBE86A] font-bold w-[70px] rounded-full hover:opacity-60 text-white text-[12px] h-[35px]">
              Submit
            </button>
          </div>
          <div className="flex flex-row space-x-[30px]">
            <p className="font-semibold text-[13px] mt-[5px] text-white">
              Follow us on social media
            </p>
            <div className="flex flex-col space-y-[20px]">
              <div className="flex flex-row space-x-[9px]">
                <TbBrandFacebook className="bg-gray-700 p-[7px] shadow-md text-[30px] rounded-full text-white" />
                <PiWhatsappLogoLight className="bg-gray-700 p-[7px] shadow-md text-[30px] rounded-full text-white" />
                <RiTwitterXFill className="bg-gray-700 p-[7px] shadow-md text-[30px] rounded-full text-white" />
              </div>
              <div className="text-[10px] text-gray-400 text-left flex flex-row items-center space-x-2 pt-[10px]">
                <FaRegCopyright />
                <p> 2024 , All rights reserved</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
