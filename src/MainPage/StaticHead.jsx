import React from 'react'
import iconOne from "../assets/iconOne.png";
import iconTwo from "../assets/iconTwo.png";
import iconThree from "../assets/iconThree.png";
import { IoMdArrowForward } from "react-icons/io";
const StaticHead = () => {
  return (
    <section>
        <div className="bg-[rgb(31,33,52)] w-[90%] absolute pb-9 mt-16 md:mt-0 md:left-10 left-5 lg:-bottom-[10rem] xl:left-[5%] -mb-20 rounded-lg">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="mt-10">
              <div className="flex justify-center items-center">
                <img
                  src={iconOne}
                  alt=""
                  className="border-2 border-[#B49132] p-2"
                />
              </div>
              <h2 className="text-center text-white text-2xl py-3">
                Financial Planning
              </h2>
              <p className="text-center text-slate-400 w-[85%] lg:w-[75%] mx-auto">
                Whether you want to invest on your own, have a windfall you want
                to invest or a financial challenge you’d like to solve, we would
                like to hear from you.
              </p>
              <div className="flex justify-center items-center">
                <button className="text-[#B49132] text-sm font-bold pt-2">
                  Read More
                </button>
                <IoMdArrowForward className="pt-1 text-[#B49132] text-2xl" />
              </div>
            </div>
            <div className="mt-10 lg:border-l-2 lg:border-r-2 border-white">
              <div className="flex justify-center items-center">
                <img
                  src={iconTwo}
                  alt=""
                  className="border-2 border-[#B49132] p-2"
                />
              </div>
              <h2 className="text-center text-2xl text-white py-3">
                Portfolio Management
              </h2>
              <p className="text-center text-slate-400 w-[85%] lg:w-[75%] mx-auto">
                Managing investments can take all of your time. At Heritage
                Capitals, we help you manage your portfolio of investments as
                they increase in type and in volume.
              </p>
              <div className="flex justify-center items-center">
                <button className="text-[#B49132] text-sm font-bold pt-2">
                  Read More
                </button>
                <IoMdArrowForward className="pt-1 text-[#B49132] text-2xl" />
              </div>
            </div>
            <div className="mt-10">
              <div className="flex justify-center items-center">
                <img
                  src={iconThree}
                  alt=""
                  className="border-2 border-[#B49132] p-2"
                />
              </div>
              <h2 className="text-center text-2xl text-white py-3">
                Alternative Investment
              </h2>
              <p className="text-center text-slate-400 w-[85%] lg:w-[75%] mx-auto">
                At Heritage Capitals, we are poised at helping you improve
                returns and control risk by investing a small proportion of your
                portfolio in asset classes.
              </p>
              <div className="flex justify-center items-center">
                <button className="text-[#B49132] text-sm font-bold pt-2">
                  Read More
                </button>
                <IoMdArrowForward className="pt-1 text-[#B49132] text-2xl" />
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default StaticHead