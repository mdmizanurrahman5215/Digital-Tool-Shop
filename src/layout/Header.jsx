import React from 'react'
import { CiShoppingCart } from 'react-icons/ci'

const Header = ({ cart }) => {
  return (
   <>
    <div className='border-b border-gray-200'>
      <div className='container mx-auto flex items-center justify-between py-4'>
        <h1 className='text-3xl font-semibold bg-gradient-to-l from-[#9514FA] to-[#4F39F6] text-transparent bg-clip-text'>DigiTools</h1>
        <div>
            <ul className='flex justify-center items-center gap-4 font-semibold text-gray-900 cursor-pointer'>
                <li>Products</li>
                <li>Features</li>
                <li>Pricing</li>
                <li>Testimonials</li>
                <li>FAQ</li>
            </ul>
        </div>
        <div className='flex justify-center items-center gap-4 font-semibold text-gray-900'>
            <div className='text-3xl relative cursor-pointer'><CiShoppingCart />
            {
                cart.length > 0 && <span className='absolute -top-2 -right-2 bg-red-500 text-white text-sm rounded-full h-5 w-5 flex items-center justify-center'>{cart.length}</span>
            }
           
            </div>
            <button className='cursor-pointer'>Login</button>
            <button className='bg-gradient-to-l from-[#9514FA] to-[#4F39F6] px-4 py-2 rounded-full text-white cursor-pointer'>Get Started</button>
        </div>
      </div>
    </div>
   </>
  )
}

export default Header
