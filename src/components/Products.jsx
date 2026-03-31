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
const Products = ({ setCart }) => {
    const products = use(productsPromise)
    console.log(products);
    
  return (
    <div className='grid grid-cols-3 gap-4'>
      {
        products.map((product)=>{
            return <ProductCard key={product.id} product={product} setCart={setCart} />
        })
      }
    </div>
  )
}

export default Products
