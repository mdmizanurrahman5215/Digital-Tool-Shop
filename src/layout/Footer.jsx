import React from 'react'
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai'
import { FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='bg-gray-900 text-white'>
      <div className='container mx-auto '>
        <div className='flex flex-col md:flex-row justify-between gap-10 py-20 '>
            <div>
                <h1 className='text-4xl font-bold mb-4'>DigiTools</h1>
                <p className='text-gray-400'>Premium digital tools for creators, <br /> professionals, and businesses. Work smarter <br /> with our suite of powerful tools.</p>
            </div>

            <div>
                <h1 className='text-xl font-bold mb-4'>Product</h1>
                <ul className='text-gray-400'>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Integrations</li>
                    <li>Updates</li>
                </ul>
            </div>
            <div>
                <h1 className='text-xl font-bold mb-4'>Company</h1>
                <ul className='text-gray-400'>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Careers</li>
                    <li>Press</li>
                </ul>
            </div>
            <div>
                <h1 className='text-xl font-bold mb-4'>Resources</h1>
                <ul className='text-gray-400'>
                    <li>Documentation</li>
                    <li>Help Center</li>
                    <li>Community</li>
                    <li>Contact </li>
                </ul>
            </div>
            <div>
                <h1 className='text-xl font-bold mb-4'>Social links</h1>
                <div className='flex gap-4 text-2xl'> 
                    <span><AiFillInstagram /></span>
                    <span><AiFillFacebook /></span>
                    <span><FaXTwitter /></span>
                </div>
            </div> 

        </div>




        <div className='flex flex-col md:flex-row text-center md:text-start justify-between gap-10 py-10 border-t border-gray-600'>
            <p className='text-[#627382]'>© 2026 Digitools. All rights reserved.</p>
            <div className='text-[#627382] flex gap-4 mx-auto md:mx-0'>
                <span>Privacy Policy</span>
                <span>Terms of Service</span>
                <span>Cookie Policy</span>
            </div>

        </div>

      </div>
    </div>
  )
}

export default Footer   
