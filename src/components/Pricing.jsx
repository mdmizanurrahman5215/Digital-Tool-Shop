
import { FaCheck } from "react-icons/fa6";

const Pricing = () => {
  
  return (
   <div>
     <div className="container mx-auto  flex flex-col items-center justify-center py-20 gap-10">
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
              $0/<span className="text-xl">month</span>
            </p>
          </div>
          <ul>
            <li className="flex items-center gap-2">
              {" "}
              <span className="text-green-500">
                <FaCheck />
              </span>{" "}
              Access to 10 free tools
            </li>
            <li className="flex items-center gap-2">
              {" "}
              <span className="text-green-500">
                <FaCheck />
              </span>{" "}
              Basic templates
            </li>
            <li className="flex items-center gap-2">
              {" "}
              <span className="text-green-500">
                <FaCheck />
              </span>{" "}
              Community support
            </li>
            <li className="flex items-center gap-2">
              {" "}
              <span className="text-green-500">
                <FaCheck />
              </span>{" "}
              1 project per month
            </li>
          </ul>
          <button className="gradient text-white py-2 px-4 rounded-md font-semibold border w-full mt-18">
            Get Started Free
          </button>
        </div>

        <div className="space-y-2 bg-[#F2F2F2] p-6 rounded-lg gradient text-white relative">
            <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-amber-200 text-amber-500 rounded-full font-semibold py-1 px-4 w-35 text-center">
              Most Popular
            </span>
          <h1 className="text-2xl font-semibold">Pro</h1>
          <p className="text-white">
           Best for professionals
          </p>
          <div>
            <p className="text-4xl font-bold">
              $29/<span className="text-xl">month</span>
            </p>
          </div>
          <ul>
            <li className="flex items-center gap-2">
              {" "}
              <span>
                <FaCheck />
              </span>{" "}
              Access to all premium tools
            </li>
            <li className="flex items-center gap-2">
              {" "}
              <span>
                <FaCheck />
              </span>{" "}
            Unlimited templates
            </li>
            <li className="flex items-center gap-2">
              {" "}
              <span>
                <FaCheck />
              </span>{" "}
             Priority support
            </li>
            <li className="flex items-center gap-2">
              {" "}
              <span>
                <FaCheck />
              </span>{" "}
             Unlimited projects
            </li>
            <li className="flex items-center gap-2">
              {" "}
              <span>
                <FaCheck />
              </span>{" "}
           Cloud sync
            </li>
            <li className="flex items-center gap-2">
              {" "}
              <span>
                <FaCheck />
              </span>{" "}
            Advanced analytics
            </li>
          </ul>
          <button className="bg-white text-black font-semibold cursor-pointer py-2 px-4 rounded-md w-full ">
            Get Started Free
          </button>
        </div>


        <div className="space-y-2 bg-[#F2F2F2] p-6 rounded-lg relative ">
          <h1 className="text-2xl font-semibold">Enterprise</h1>
          <p className="text-gray-600">
           For teams and businesses
          </p>
          <div>
            <p className="text-4xl font-bold">
              $99/<span className="text-xl">month</span>
            </p>
          </div>
          <ul>
            <li className="flex items-center gap-2">
              {" "}
              <span className="text-green-500">
                <FaCheck />
              </span>{" "}
          Everything in Pro
            </li>
            <li className="flex items-center gap-2">
              {" "}
              <span className="text-green-500">
                <FaCheck />
              </span>{" "}
            Team collaboration
            </li>
            <li className="flex items-center gap-2">
              {" "}
              <span className="text-green-500">
                <FaCheck />
              </span>{" "}
           Custom integrations
            </li>
            <li className="flex items-center gap-2">
              {" "}
              <span className="text-green-500">
                <FaCheck />
              </span>{" "}
             Dedicated support
            </li>
            <li className="flex items-center gap-2">
              {" "}
              <span className="text-green-500">
                <FaCheck />
              </span>{" "}
            SLA guarantee
            </li>
            <li className="flex items-center gap-2">
              {" "}
              <span className="text-green-500">
                <FaCheck />
              </span>{" "}
             Custom branding
            </li>
          </ul>
        
          
            <button className=" gradient text-white py-2 px-4 rounded-md   font-semibold border w-full mt-6">
            Get Started Free
          </button>
        
        </div>
      </div>
    </div>
   </div>
  );
};

export default Pricing;
