import React from "react";
import play from "../assets/play.png";
import bannerImg from "../assets/banner.png";

const Banner = () => {
  return (
    <>
      <div>
        <div className="container mx-auto grid  md:grid-cols-2 items-center py-20 gap-10 ">
          <div className="left space-y-4">
            <div className="w-fit px-4 py-1 flex items-center gap-2 rounded-full bg-[#E1E7FF]">
              <div className="animate-pulse transition-linear border-2 p-[1px] shadow-[0px_4px_10px_rgba(0,0,0,0.2)] rounded-full border-[#6C63FF]">
                <div className="w-2 h-2 bg-[#6C63FF] rounded-full"></div>
              </div>
              <p className=" font-semibold bg-gradient-to-l from-[#9514FA] to-[#4F39F6] text-transparent bg-clip-text">
                New: AI-Powered Tools Available
              </p>
            </div>
            <h1 className="text-5xl font-bold text-[#101727] leading-[3.5rem]">
              Supercharge Your <br /> Digital Workflow
            </h1>
            <p className="text-[#627382] leading-5 text-sm">
              Access premium AI tools, design assets, templates, and
              productivity <br /> software—all in one place. Start creating
              faster today. <br /> Explore Products
            </p>
            <div className="flex gap-4 items-center justify-start ">
              <button className=" font-semibold bg-gradient-to-l from-[#9514FA] to-[#4F39F6] text-white px-4 py-2 rounded-full cursor-pointer">
                Explore Products
              </button>
              <button className="flex items-center justify-start gap-2 border px-4 py-2 rounded-full  border-[#9514FA] cursor-pointer">
                <img src={play} alt="Play" />
                <span className="gradient text-transparent bg-clip-text font-bold">
                  Watch video
                </span>
              </button>
            </div>
          </div>
          <div className="right ">
            <img
              src={bannerImg}
              alt="Banner"
              className=" object-center object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
