import React, { Suspense, useState } from "react";
import Products from "./Products";
import Cart from "./Cart";

const PremiumTools = ({ setCart, cart }) => {
    const [filter , setFilter] = useState("products")
  return (
    <>
      <div>
        <div className="container mx-auto flex flex-col items-center justify-center  gap-4 py-20">
          <h1 className="text-4xl font-bold text-gray-800">
            Premium Digital Tools
          </h1>
          <p className="text-gray-600 text-center">
            Choose from our curated collection of premium digital products
            designed <br /> to boost your productivity and creativity.
          </p>
          <div className="">
            <button onClick={()=>setFilter("products")} className="gradient text-white px-4 py-2 rounded-full mr-4">
              Products
            </button>
            <button onClick={()=>setFilter("cart")} className="border rounded-full px-4 py-2">Cart ({cart.length})</button>
          </div>
          {/* products container */}
          {
            filter === "products" ? (
                  <div>
            <Suspense fallback={<div>Loading...</div>}>
              <Products setCart = {setCart} />
            </Suspense>
          </div> 
            ) :(
                <div className="w-full"><Cart cart = {cart} setCart = {setCart}/></div>
            )
         }
         
        </div>
      </div>
    </>
  );
};

export default PremiumTools;
