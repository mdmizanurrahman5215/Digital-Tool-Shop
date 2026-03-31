import React, { use } from 'react'
import ProductCard from './ProductCard'

 const fetchProducts = async() => {

    try {
        const res = await fetch("data.json")
        const products = await res.json()
        return products

    } catch (error) {
        console.error("Error fetching products:", error)
    }
 }
 const productsPromise = fetchProducts()
const Products = ({ setCart , cart }) => {
    const products = use(productsPromise)
   
    
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {
        products.map((product)=>{
            return <ProductCard key={product.id} product={product} setCart={setCart} cart={cart} />
        })
      }
    </div>
  )
}

export default Products
