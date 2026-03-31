import React from 'react'
import user from '../assets/user.png'
import packageImg from '../assets/package.png'
import rocket from '../assets/rocket.png'

const Step = () => {
  return (
    <div className='bg-[#F9FAFC] mb-20'>
       <div className='container mx-auto py-20'>

        <div className='flex flex-col justify-center items-center gap-4'>
            <h1 className='text-4xl font-semibold'>Get Started in 3 Steps</h1>
            <p className='text-gray-600 font-semibold'>Start using premium digital tools in minutes, not hours.</p>
        </div>
        <div className='flex flex-col md:flex-row justify-center items-center gap-8 mt-10'>
            <div className='flex justify-center items-center flex-col text-center shadow px-6 py-12 relative rounded-lg bg-white'>
                <div>
                    <img src={user} alt="User" />
                </div>
                <h1 className='text-2xl font-semibold'>Create Account</h1>
                <p className='text-gray-600'>Sign up for free in seconds. No credit card <br /> required to get started.</p>
                <div className='absolute top-3 right-3 bg-gradient-to-l from-[#9514FA] to-[#4F39F6] text-white font-bold rounded-full h-8 w-8 flex items-center justify-center'>
                    <span>01</span>
                </div>
            </div>
            <div className='flex justify-center items-center flex-col text-center shadow px-6 py-12 relative rounded-lg bg-white'>
                <div>
                    <img src={packageImg} alt="Package " />
                </div>
                <h1 className='text-2xl font-semibold'>Choose Products</h1>
                <p className='text-gray-600'>Browse our catalog and select the tools <br /> that fit your needs.</p>
                <div className='absolute top-3 right-3 bg-gradient-to-l from-[#9514FA] to-[#4F39F6] text-white font-bold rounded-full h-8 w-8 flex items-center justify-center'>
                    <span>02</span>
                </div>
            </div>
            <div className='flex justify-center items-center flex-col text-center shadow px-6 py-12 relative rounded-lg bg-white'>
                <div>
                    <img src={rocket} alt="Rocket" />
                </div>
                <h1 className='text-2xl font-semibold'>Start Creating</h1>
                <p className='text-gray-600'>Download and start using your premium  <br /> tools immediately.</p>
                <div className='absolute top-3 right-3 bg-gradient-to-l from-[#9514FA] to-[#4F39F6] text-white font-bold rounded-full h-8 w-8 flex items-center justify-center'    >
                    <span>03</span>
                </div>
            </div>
        </div>

       </div>
    </div>
  )
}

export default Step
