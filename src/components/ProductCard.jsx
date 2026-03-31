import React from 'react'
import { FaCheck } from 'react-icons/fa6'

const ProductCard = ({product , setCart}) => {
    const { name, description, price,tag, period, features, icon} = product
    const handleBuyNow = (product) => {
        setCart((prevCart) => [...prevCart, product]);
     
    }   
  return (
    <div className='border border-gray-200 rounded-md'>
       <div className='relative p-6 space-y-2'>
           <div className='border w-15 h-15 flex justify-center items-center rounded-full border-gray-200 p-2'>
            <p className='text-2xl'>{icon}</p>
           </div>
           <h1 className='text-2xl font-semibold'>{name}</h1>
           <p className='text-gray-600 '>{description}</p>
           <div>
            <p className='text-3xl font-bold '>${price.toFixed(2)} <span className='text-lg font-normal text-gray-600 capitalize'>/ {period}</span></p>
           </div>
           <ul>
            {features.map((feature, index)=>{
                return <li className='flex items-center gap-2 text-gray-600' key={index}> <span className='text-green-600'><FaCheck /></span> {feature}</li>
            })
            }
           </ul>
           <button className='gradient text-white w-full rounded-full font-semibold cursor-pointer py-2'
           onClick={() => {handleBuyNow(product)}}>
             Buy now
           </button>

           <span className={`absolute top-2 right-2 inline-block px-3 py-1 rounded-full text-sm font-medium ${tag === 'popular' ? 'bg-purple-200 text-purple-700' : tag === "new" ? "bg-green-200 text-green-700" :'bg-yellow-200 text-yellow-700'}`}>
             {tag}
           </span> 
       </div>
    </div>
  )
}

export default ProductCard
