import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import { IoMdArrowForward } from "react-icons/io";
import Table from "./Table";
import Footer from "../component.jsx/Footer";
import { fetchData } from "../service/api";
import StaticHead from "./StaticHead";

const HeroSection = () => {
  const img =
    "https://www.heritagecapitals.com.ng/static/media/abt_us.d44f9af4e2b0130179fd.jpg";
  const spider =
    "https://www.heritagecapitals.com.ng/static/media/call-baner1.6d805e4aa47c4b73f0c5.jpg";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const result = await fetchData();
        console.log(result);

        // Assuming result has a 'categories' property that is an array
        if (result && Array.isArray(result)) {
          setData(result);
        } else {
          throw new Error("Invalid data format");
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  if (loading)
    return <div className="text-center text-4xl text-red-600">Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <section className="bg-[whitesmoke]">
      <div style={{ width: "100%", margin: "auto", position: "relative" }}>
        <Carousel autoplay dotPosition="right" className="">
          {data.map((slide, index) => (
            <div key={index}>
              <div
                className="bg-cover bg-center"
                style={{
                  backgroundImage: `url(${slide.imageUrl})`,
                  height: "100vh",
                }}
              >
                <div className="h-[100%] lg:h-[30rem] xl:h-96 flex flex-col items-center justify-center text-white text-xl gap-3 px-2">
                  <div className="flex flex-col items-center justify-center gap-3">
                    <h1 className="text-3xl xl:pt-[12rem]">
                      {" "}
                      {slide.headings1}
                    </h1>
                    <h2 className="text-4xl tracking-wide font-bold">
                      {slide.headings2}
                    </h2>
                  </div>
                  <div className="pb-3 text-sm md:text-xl text-center">
                    <p>{slide.content}</p>
                  </div>
                  <button className="uppercase text-center text-sm font-bold rounded-lg px-4 py-2 bg-[#B49132] ">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
        <div className="">
          <StaticHead />
        </div>
      </div>

      {/* section two  */}
      <div
        style={{ backgroundImage: `url(${img})` }}
        className="bg-cover bg-center pb-16 flex w-[90%] justify-center items-center gap-10 flex-col absolute mt-20 md:mt-0 md:left-10 left-5 -bottom-[99rem] sm:-bottom-[78rem] md:-bottom-[67rem] lg:-bottom-[40rem] xl:-bottom-[38rem] xl:left-[5%]"
      >
        {" "}
        <div className="absolute inset-0 bg-white opacity-30"></div>
        <h1 className="text-[#120b45] text-3xl lg:pt-7 text-center w-[87%] sm:w-[90%] md:w-[60%] lg:w-[70%] xl:w-full lg:text-4xl font-semibold">
          WELCOME TO HERITAGE{" "}
          <span className="lg:border-b-2 border-[#B49132]">CA</span>PITAL
          MARKETS LI
          <span className="border-b-2 border-[#B49132] lg:border-none">
            MIT
          </span>
          ED
        </h1>
        <p className="text-center w-[80%] text-[18px]">
          At Heritage Capital Markets Limited, you can enjoy a personal
          relationship with our investment professionals. We see investing only
          from your perspective and make recommendations based on actually
          listening to you and understanding your needs. We won’t push
          unsuitable securities and investments to you because we realize that
          your goals and needs are completely unique.
        </p>
        <div className="">
          <button className="flex justify-center items-center uppercase text-center text-sm font-bold rounded-lg px-6 py-2 bg-[#B49132] text-white">
            <p>Read More</p>
            <IoMdArrowForward className="pt-1 text-[#fff] text-2xl" />
          </button>
        </div>
      </div>

      {/* section three */}
      <div
        style={{ backgroundImage: `url(${spider})`, width: "100%", height: "45vh"}}
        className="bg-cover bg-center flex justify-center items-center gap-2 flex-col absolute mt-20 md:mt-0 -bottom-[124rem] sm:-bottom-[78rem] md:-bottom-[88rem] lg:-bottom-[51rem] xl:-bottom-[62rem]"
      >
        {" "}
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <h1 className="text-shadow text-4xl leading-[3rem] text-white text-center sm:text-3xl md:leading-[4rem] md:text-4xl lg:text-5xl pt-20 px-1">
          Manage your investments with more{" "}
          <span className="text-[#B49132]">Confidence</span> .
        </h1>
        <p className="text-shadow text-[18px] text-[#fff] text-center pb-2">
          Open a trading account and kickstart your investments.
        </p>
        <button className="bg-[#B49132] px-6 py-2 text-white font-medium rounded-md mb-16">
          Open Account
        </button>
      </div>

      {/* section four */}

      <div className="container mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10 py-16 xl:py-24 md:py-0 mt-[120rem] md:mt-[90rem] lg:mt-[66rem] xl:mt-[56rem]">
        <div className="flex flex-col md:grid grid-cols-2 gap-5 mx-4 xl:flex-row xl:mx-7 xl:mb-10">
          <div className="">
            <h1 className="py-10 text-4xl">Latest Reports</h1>
            <div className="bg-gray-800 md:w-96 h-[30vh] lg:w-[35rem] xl:w-[20vw]"></div>
          </div>

          <div className="md:mt-40 xl:mt-[80px]">
            <div className="text-center xl:pt-20 -mb-14 xl:-mb-0">
              <h3 className="font-medium text-[#B49132]">LatestNews</h3>
              <p>This is the latest news</p>
            </div>
            <div className="flex gap-4 w-[21rem] mx-auto md:ms-5 lg:w-[37vw] lg:ms-24 xl:w-[22vw] xl:mx-0 bg-gray-700 mt-[90px] xl:mt-16">
              <div className=" mx-3 md:ms-4 lg:ms-2 xl:ms-0">
                <button className="flex justify-center items-center w-full gap-3 bg-[#B49132] m-2 lg:px-3 xl:ps-0 py-2 text-white font-semibold hover:bg-[#9b7c27]">
                  <span> Read Report</span>
                  <IoMdArrowForward />
                </button>
              </div>
              <div className="">
                <button className="flex justify-center items-center w-full gap-3 bg-[#B49132] m-2 lg:px-3 xl:ps-0 py-2 text-white font-semibold hover:bg-[#9b7c27]">
                  <span> Read Report</span>
                  <IoMdArrowForward />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="-mt-20 lg:-mt-10 xl:col-start-2 md:ms-4 lg:ms-7 xl:ms-0">
          <h1 className="pt-20 pb-10 text-4xl ps-4">Business News</h1>
          <Carousel autoplay dotPosition="bottom">
            <div className="flex flex-col mx-2">
              <div className="mb-2 w-[95%]">
                <div className="bg-[#B49132] h-10 font-semibold text-xl text-white p-2">
                  one
                </div>
              </div>

              <div className="w-[95%]">
                <div className="bg-[#120b45] h-[35vh] font-semibold text-xl text-white p-2">
                  two
                </div>
              </div>
            </div>
            <div className="flex flex-col mx-2">
              <div className="mb-2 w-[95%]">
                <div className="bg-[#B49132] h-10 font-semibold text-xl text-white p-2">
                  one
                </div>
              </div>

              <div className="w-[95%]">
                <div className="bg-[#120b45] h-[35vh] font-semibold text-xl text-white p-2">
                  two
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>

      {/* <div className="bg-[#B49132]">
        <h1 className="text-center text-4xl font-medium py-5">Stock Watch</h1>
        <div className="flex flex-col md:grid grid-cols-2 gap-5 xl:mb-10">
          <div className="w-[350px] mx-3">
            <Table />
          </div>
          <div className="bg-green-900 w-[350px] mx-3 h-[30vh] md:h-auto xl:h-[40vh]">
            two
          </div>
        </div>
      </div> */}

      {/*Request a call back */}
      <div className="flex flex-col gap-5">
        <h1 className="text-center text-4xl font-extralight pb-5">
          REQUEST <span className="border-b-2 border-[#B49132]">A C</span>ALL{" "}
          BACK
        </h1>
        <p className="pb-5 text-center lg:w-[73%] text-[17px] text-gray-600 font-extralight tracking-wide mx-auto leading-7">
          Are you interested in increasing your investment portfolio? Are you
          confused about how and where to start your capital investment? Do you
          want to diversify your investments across countries or are you just
          interested in improving your investment returns? Simply provide your
          details and a professional will call you back!
        </p>
        <div className="flex justify-center relative mb-20">
          <button className="relative px-5 py-3 bg-[#B49132] text-white font-medium rounded-lg">
            Contact Us
          </button>
          <button className="absolute top-0 transform translate-x-1/2 -translate-y-1/2 bg-[rgb(31,33,52)] text-white font-thin rounded-lg  z-10 px-2 pt-1">
            Contact
          </button>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </section>
  );
};

export default HeroSection;
