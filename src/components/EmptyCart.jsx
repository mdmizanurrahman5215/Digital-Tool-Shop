import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const EmptyCart = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-[40vh] text-center">
        {/* Icon */}
        <FaShoppingCart className="text-gray-300 text-6xl mb-4" />

        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-700">
          Your cart is empty
        </h2>

        {/* Description */}
        <p className="text-gray-500 mt-2">
          Looks like you haven’t added anything yet.
        </p>

        {/* Button */}
      </div>
    </div>
  );
};

export default EmptyCart;
