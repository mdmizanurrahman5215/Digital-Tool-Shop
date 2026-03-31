import React from 'react'

const Stats = () => {
  return (
    <>
    <div className='gradient my-10'>
         <div className='container mx-auto flex items-center justify-around py-20  text-white '>
            
                <div className=''>
                    <h1 className='text-4xl font-bold mb-4'>50K+</h1>
                    <p>Active Users</p>
                </div>
                <div className='border-r border-gray-400 py-7'></div>
                <div>
                    <h1 className='text-4xl font-bold mb-4'>200K+</h1>
                    <p>Premium Tools</p>
                </div>
                 <div className='border-r border-gray-400 py-7'></div>
                <div>
                    <h1 className='text-4xl font-bold mb-4 '>4.9</h1>
                    <p>Rating</p>
                </div>
          
         </div>
    </div>
    </>
  )
}

export default Stats
