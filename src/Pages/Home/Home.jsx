import { useEffect, useState } from "react";
import Banner from "../../Component/Banner";
import Footer from "../../Component/Footer";
import SubBanner from "../../Subpage/SubBanner";
import Featured from "./Featured";
import Promotional from "../Promotional";
import Recommendation from "./Recommendation";

const Home = () => {
 
  useEffect(() => {
    document.title = "Diagno";
  }, []);


  return (
    <div>
      <Banner></Banner>
      <SubBanner></SubBanner>

      <div className="text-3xl text-center mt-5 shadow-xl font-bold">
        Featured Tests
      </div>

      <Featured></Featured>
      <Promotional></Promotional>
      <Recommendation></Recommendation>


      <div className="my-20 card shadow-xl rounded-xl">
        <section className="py-6   rounded-xl">
          <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
            <div className="py-6 md:py-0 md:px-6">
              <h1 className="text-4xl font-bold">Get in touch</h1>
              <p className="pt-2 pb-4">
                Fill in the form to start a conversation
              </p>
              <div className="space-y-4">
                <p className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 mr-2 sm:mr-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>Bangladesh, DHAKA City</span>
                </p>
                <p className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 mr-2 sm:mr-6"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                  <span>123456789</span>
                </p>
                <p className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 mr-2 sm:mr-6"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  <span>contact@diagno.com</span>
                </p>
              </div>
            </div>
            <form
              noValidate=""
              className="flex flex-col py-6 space-y-6 md:py-0 md:px-6"
            >
              <label className="block">
                <span className="mb-1">Full name</span>
                <input
                  type="text"
                  placeholder="Leroy Jenkins"
                  className="block w-full border p-4 rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 focus: bg-gray-800 "
                />
              </label>
              <label className="block">
                <span className="mb-1">Email address</span>
                <input
                  type="email"
                  placeholder="leroy@jenkins.com"
                  className="block w-full border p-4 rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 focus: bg-gray-800 "
                />
              </label>
              <label className="block">
                <span className="mb-1">Message</span>
                <textarea
                  rows="3"
                  className="block w-full border p-4 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 focus: bg-gray-800 "
                ></textarea>
              </label>
              <button
                type="button"
                className="self-center  px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-violet-400  text-gray-900  focus:ring-violet-400 focus: hover:ring-violet-400 hover:"
              >
                Submit
              </button>
            </form>
          </div>
        </section>
      </div>

      <div>
        <section className="p-6 my-6 card shadow-xl">
          <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
            <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-900  text-gray-100 ">
              <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-violet-400 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="h-9 w-9  "
                >
                  <polygon points="160 96.039 160 128.039 464 128.039 464 191.384 428.5 304.039 149.932 304.039 109.932 16 16 16 16 48 82.068 48 122.068 336.039 451.968 336.039 496 196.306 496 96.039 160 96.039"></polygon>
                  <path d="M176.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,176.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,176.984,464.344Z"></path>
                  <path d="M400.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,400.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,400.984,464.344Z"></path>
                </svg>
              </div>
              <div className="flex flex-col justify-center align-middle">
                <p className="text-3xl font-semibold leading-none">200</p>
                <p className="capitalize">Orders</p>
              </div>
            </div>
            <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-900  text-gray-100 ">
              <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-violet-400 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="h-9 w-9 text-gray-800 "
                >
                  <path d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"></path>
                  <path d="M256,384A104,104,0,0,0,360,280H152A104,104,0,0,0,256,384Z"></path>
                  <polygon points="205.757 228.292 226.243 203.708 168 155.173 109.757 203.708 130.243 228.292 168 196.827 205.757 228.292"></polygon>
                  <polygon points="285.757 203.708 306.243 228.292 344 196.827 381.757 228.292 402.243 203.708 344 155.173 285.757 203.708"></polygon>
                </svg>
              </div>
              <div className="flex flex-col justify-center align-middle">
                <p className="text-3xl font-semibold leading-none">7500</p>
                <p className="capitalize">New customers</p>
              </div>
            </div>
            <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-900  text-gray-100 ">
              <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-violet-400 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="h-9 w-9 text-gray-800 "
                >
                  <path d="M425.706,142.294A240,240,0,0,0,16,312v88H160V368H48V312c0-114.691,93.309-208,208-208s208,93.309,208,208v56H352v32H496V312A238.432,238.432,0,0,0,425.706,142.294Z"></path>
                  <rect width="32" height="32" x="80" y="264"></rect>
                  <rect width="32" height="32" x="240" y="128"></rect>
                  <rect width="32" height="32" x="136" y="168"></rect>
                  <rect width="32" height="32" x="400" y="264"></rect>
                  <path d="M297.222,335.1l69.2-144.173-28.85-13.848L268.389,321.214A64.141,64.141,0,1,0,297.222,335.1ZM256,416a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,416Z"></path>
                </svg>
              </div>
              <div className="flex flex-col justify-center align-middle">
                <p className="text-3xl font-semibold leading-none">172%</p>
                <p className="capitalize">Growth</p>
              </div>
            </div>
            <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-900  text-gray-100 ">
              <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-violet-400 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="h-9 w-9 text-gray-800 "
                >
                  <path d="M454.423,278.957,328,243.839v-8.185a116,116,0,1,0-104,0V312H199.582l-18.494-22.6a90.414,90.414,0,0,0-126.43-13.367,20.862,20.862,0,0,0-8.026,33.47L215.084,496H472V302.08A24.067,24.067,0,0,0,454.423,278.957ZM192,132a84,84,0,1,1,136,65.9V132a52,52,0,0,0-104,0v65.9A83.866,83.866,0,0,1,192,132ZM440,464H229.3L79.141,297.75a58.438,58.438,0,0,1,77.181,11.91l28.1,34.34H256V132a20,20,0,0,1,40,0V268.161l144,40Z"></path>
                </svg>
              </div>
              <div className="flex flex-col justify-center align-middle">
                <p className="text-3xl font-semibold leading-none">17%</p>
                <p className="capitalize">Bounce rate</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* reting */}

      <div>
        <div className="flex flex-col w-full p-8 shadow-xl rounded-xl lg:p-12 card ">
          <div className="flex flex-col w-full">
            <h2 className="text-3xl font-semibold text-center">
              Customer reviews
            </h2>
            <div className="flex flex-wrap items-center mt-2 mb-1 space-x-2">
              <div className="flex">
                <button
                  type="button"
                  title="Rate 1 stars"
                  aria-label="Rate 1 stars"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-6 h-6 text-yellow-500 "
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </button>
                <button
                  type="button"
                  title="Rate 2 stars"
                  aria-label="Rate 2 stars"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-6 h-6 text-yellow-500 "
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </button>
                <button
                  type="button"
                  title="Rate 3 stars"
                  aria-label="Rate 3 stars"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-6 h-6 text-yellow-500 "
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </button>
                <button
                  type="button"
                  title="Rate 4 stars"
                  aria-label="Rate 4 stars"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-6 h-6 text-gray-600 "
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </button>
                <button
                  type="button"
                  title="Rate 5 stars"
                  aria-label="Rate 5 stars"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-6 h-6 text-gray-600 "
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </button>
              </div>
              <span className="text-gray-400 ">3 out of 5</span>
            </div>
            <p className="text-sm text-gray-400 ">861 global ratings</p>
            <div className="flex flex-col mt-4">
              <div className="flex items-center space-x-1">
                <span className="flex-shrink-0 w-12 text-sm">5 star</span>
                <div className="flex-1 h-4 overflow-hidden rounded-sm bg-gray-700 ">
                  <div className="bg-orange-700  h-4 w-5/6"></div>
                </div>
                <span className="flex-shrink-0 w-12 text-sm text-right">
                  83%
                </span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="flex-shrink-0 w-12 text-sm">4 star</span>
                <div className="flex-1 h-4 overflow-hidden rounded-sm bg-gray-700 ">
                  <div className="bg-orange-700  h-4 w-4/6"></div>
                </div>
                <span className="flex-shrink-0 w-12 text-sm text-right">
                  67%
                </span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="flex-shrink-0 w-12 text-sm">3 star</span>
                <div className="flex-1 h-4 overflow-hidden rounded-sm bg-gray-700 ">
                  <div className="bg-orange-700  h-4 w-3/6"></div>
                </div>
                <span className="flex-shrink-0 w-12 text-sm text-right">
                  50%
                </span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="flex-shrink-0 w-12 text-sm">2 star</span>
                <div className="flex-1 h-4 overflow-hidden rounded-sm bg-gray-700 ">
                  <div className="bg-orange-700  h-4 w-2/6"></div>
                </div>
                <span className="flex-shrink-0 w-12 text-sm text-right">
                  33%
                </span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="flex-shrink-0 w-12 text-sm">1 star</span>
                <div className="flex-1 h-4 overflow-hidden rounded-sm bg-gray-700 ">
                  <div className="bg-orange-700  h-4 w-1/6"></div>
                </div>
                <span className="flex-shrink-0 w-12 text-sm text-right">
                  17%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Home;
