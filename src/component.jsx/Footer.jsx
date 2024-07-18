import React from "react";

const Footer = () => {
  return (
    <footer className="py-10 bg-gray-900 text-white">
      <div className="container mx-auto flex flex-wrap justify-between  w-[90%] border-b-2 border-neutral-500">
        <div className="w-full md:w-1/3 p-4">
          <h1 className="text-4xl font-bold">Heritage</h1>
          <h2 className="text-xl text-yellow-600">Capital Markets Limited</h2>
          <p className="mt-4 ">
            At Heritage Capital Markets Limited, you enjoy a personal
            relationship with our investment professionals. We see investing
            only from your perspective, and make recommendations based on
            actually listening to you and understanding your needs. Welcome to
            your investment world.
          </p>
        </div>
        <div className="w-full md:w-1/3 p-4">
          <h2 className="text-lg font-semibold border-b-2 border-yellow-600 inline-block mb-4 ">
            Explore
          </h2>
          <div className="flex space-x-10 text-gray-600">
            <ul>
              <li className="my-2">
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li className="my-2">
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li className="my-2">
                <a href="#" className="hover:underline">
                  Products & Services
                </a>
              </li>
              <li className="my-2">
                <a href="#" className="hover:underline">
                  Business News
                </a>
              </li>
              <li className="my-2">
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
            <ul className="border-l-2 border-gray-600 ps-10">
              <li className="my-2">
                <a href="#" className="hover:underline">
                  Research
                </a>
              </li>
              <li className="my-2">
                <a href="#" className="hover:underline">
                  Stocks
                </a>
              </li>
              <li className="my-2">
                <a href="#" className="hover:underline">
                  Market Reports
                </a>
              </li>
              <li className="my-2">
                <a href="#" className="hover:underline">
                  Foreign Exchange Rates
                </a>
              </li>
              <li className="my-2">
                <a href="#" className="hover:underline">
                  FAQs
                </a>
              </li>
              <li className="my-2">
                <a href="#" className="hover:underline">
                  Downloads
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-1/3 p-4">
          <h2 className="text-lg font-semibold border-b-2 border-yellow-600 inline-block mb-4">
            Get Connected
          </h2>
          <p className="mt-4">
            Get connected! Subscribe to our newsletter service and be the first
            to get the latest stock market reports, business news and trends.
          </p>
          <form className="mt-4 flex">
            <input
              type="email"
              placeholder="your email address"
              className="flex-1 p-2 rounded-l-lg bg-gray-800 border-none focus:ring-2 focus:ring-yellow-600"
            />
            <button
              type="submit"
              className="p-2 bg-yellow-600 rounded-r-lg text-white"
            >
              &#9993;
            </button>
          </form>
          <div className="flex space-x-4 mt-4 mb-10">
            <a href="#" className="text-yellow-600">
              <img src="linkedin.png" alt="LinkedIn" className="w-10 h-10" />
            </a>
            <a href="#" className="text-yellow-600">
              <img src="twitter.png" alt="Twitter" className="w-10 h-10" />
            </a>
            <a href="#" className="text-yellow-600">
              <img src="facebook.png" alt="Facebook" className="w-10 h-10" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
