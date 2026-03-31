import React from "react";
import { FaCheck } from "react-icons/fa6";

const Pricing = () => {
  return (
   <div>
     <div className="container mx-auto border flex flex-col items-center justify-center py-20 gap-10">
      <div>
        <h1 className="text-4xl font-semibold">Simple, Transparent Pricing</h1>
        <p className="text-gray-600 mt-4">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-10 w-full">
        <div className="space-y-2 bg-[#F2F2F2] p-6 rounded-lg ">
          <h1 className="text-2xl font-semibold">Starter</h1>
          <p className="text-gray-600">
            Perfect for getting started
          </p>
          <div>
            <p className="text-4xl font-bold">
              $0 / <span className="text-xl">month</span>
            </p>
          </div>
          <ul>
            <li className="flex items-center gap-2">
              {" "}
              <span>
                <FaCheck />
              </span>{" "}
              Access to 10 free tools
            </li>
            <li className="flex items-center gap-2">
              {" "}
              <span>
                <FaCheck />
              </span>{" "}
              Basic templates
            </li>
            <li className="flex items-center gap-2">
              {" "}
              <span>
                <FaCheck />
              </span>{" "}
              Community support
            </li>
            <li className="flex items-center gap-2">
              {" "}
              <span>
                <FaCheck />
              </span>{" "}
              1 project per month
            </li>
          </ul>
          <button className="gradient text-white py-2 px-4 rounded-md hover:bg-blue-600">
            Get Started Free
          </button>
        </div>

        <div className="space-y-2 bg-[#F2F2F2] p-6 rounded-lg gradient text-white">
          <h1 className="text-2xl font-semibold">Starter</h1>
          <p className="text-gray-600">
            Perfect for getting started
          </p>
          <div>
            <p className="text-4xl font-bold">
              $0 / <span className="text-xl">month</span>
            </p>
          </div>
          <ul>
            <li className="flex items-center gap-2">
              {" "}
              <span>
                <FaCheck />
              </span>{" "}
              Access to 10 free tools
            </li>
            <li className="flex items-center gap-2">
              {" "}
              <span>
                <FaCheck />
              </span>{" "}
              Basic templates
            </li>
            <li className="flex items-center gap-2">
              {" "}
              <span>
                <FaCheck />
              </span>{" "}
              Community support
            </li>
            <li className="flex items-center gap-2">
              {" "}
              <span>
                <FaCheck />
              </span>{" "}
              1 project per month
            </li>
          </ul>
          <button className="bg-white text-black font-semibold cursor-pointer py-2 px-4 rounded-md hover:bg-blue-600 hover:text-white">
            Get Started Free
          </button>
        </div>
        <div className="space-y-2 bg-[#F2F2F2] p-6 rounded-lg ">
          <h1 className="text-2xl font-semibold">Starter</h1>
          <p className="text-gray-600">
            Perfect for getting started
          </p>
          <div>
            <p className="text-4xl font-bold">
              $0 / <span className="text-xl">month</span>
            </p>
          </div>
          <ul>
            <li className="flex items-center gap-2">
              {" "}
              <span>
                <FaCheck />
              </span>{" "}
              Access to 10 free tools
            </li>
            <li className="flex items-center gap-2">
              {" "}
              <span>
                <FaCheck />
              </span>{" "}
              Basic templates
            </li>
            <li className="flex items-center gap-2">
              {" "}
              <span>
                <FaCheck />
              </span>{" "}
              Community support
            </li>
            <li className="flex items-center gap-2">
              {" "}
              <span>
                <FaCheck />
              </span>{" "}
              1 project per month
            </li>
          </ul>
          <button className="gradient text-white py-2 px-4 rounded-md hover:bg-blue-600">
            Get Started Free
          </button>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Pricing;
