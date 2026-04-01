import React, { useState } from 'react'

const WorkFlow = () => {
  const [toggle,setToggle]=useState("Explore Products")
  return (
    <div className='gradient text-white'>
        <div>
        <div className="container mx-auto flex flex-col items-center justify-center  gap-4 py-20">
          <h1 className="text-4xl font-bold text-center">
           Ready to Transform Your Workflow?
          </h1>
          <p className="text-center">
          Join thousands of professionals who are already using Digitools to work smarter.Start your free trial today.
          </p>

          <div className="border p-1 rounded-full border-gray-300 flex items-center justify-center">
            <button
              onClick={() => setToggle("Explore Products")}
              className={`px-4 py-2 rounded-full ${toggle === "Explore Products" ? "bg-white text-gray-800 font-semibold" : "text-white "}`}
            >
             Explore Products
            </button>
            <button
              onClick={() => setToggle("View Pricing")}
              className={`px-4 py-2 rounded-full ${toggle === "View Pricing" ? "bg-white text-gray-800 font-semibold" : "text-white "}`}
            >
           View Pricing
            </button>
          </div>
          <p className='text-center'>14-day free trial • No credit card required • Cancel anytime</p>
        
       
        </div>
      </div>
    </div>
  )
}

export default WorkFlow
