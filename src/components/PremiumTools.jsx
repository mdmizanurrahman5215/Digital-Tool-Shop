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

          <div className="border p-1 rounded-full border-gray-300 flex items-center justify-center">
            <button onClick={()=>setFilter("products")} className= {`px-4 py-2 rounded-full ${filter === "products" ? "gradient text-white font-semibold" : "text-gray-700 "}`}>
              Products
            </button>
            <button onClick={()=>setFilter("cart")} className= {`px-4 py-2 rounded-full ${filter === "cart" ? "gradient text-white font-semibold" : "text-gray-700 "}`}>
              Cart ({cart.length})
            </button>
          </div>
          {/* products container */}
          {
            filter === "products" ? (
                  <div>
            <Suspense fallback={<div>Loading...</div>}>
              <Products setCart = {setCart} cart = {cart} />
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
