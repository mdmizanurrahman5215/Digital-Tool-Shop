import React from 'react'
import EmptyCart from './EmptyCart'
import { toast } from 'react-toastify'


const Cart = ({ cart, setCart }) => {

    
    const total = cart.reduce((acc, cur)=> {
        return acc + Number( cur.price)
    }, 0 )
    const handleDeleteItem = (id) => {
        const updateCart = cart.filter((i)=>i.id !== id)
        setCart(updateCart)
        toast.success("Item removed from cart!" , {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
        });
    }
    const handleCheckout = () => {
        setCart([])
        toast.success("Checkout successful! Thank you for your purchase.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
        });
    }
  return (
    <div className='border p-6 rounded-lg  border-gray-200'>
      <div className='w-full'>
        <h1 className='text-3xl font-bold'>Your Cart</h1>

        {
            cart.length ? (
                <div>
                     <ul>
           {
            cart && cart.map((item)=>{
                const { name, price, icon, id } = item
                return (
                    <li key={item.id} className='flex justify-between items-center border-b border-gray-200 py-4 mb-4'>
                        <div className='flex items-center gap-2'>
                            <p>{icon}</p>
                            <div>
                                <h2 className='text-xl font-medium'>{name}</h2>
                                <p>Price: ${price}</p>
                               
                            </div>

                        </div>
                        <button onClick={()=>handleDeleteItem(id)} className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600'>Remove</button>
                        
                    </li>
                ) 
            })
           }
        </ul>
          <div className='flex justify-between items-center my-6'>
            <h2 className='text-2xl font-bold' >Total</h2>
            <p className='text-2xl font-semibold'>${total.toFixed(2)}</p>

        </div>
        <button   onClick={()=> handleCheckout()} className='gradient text-white font-semibold cursor-pointer w-full rounded-full py-2'>Proceed to Checkout</button>

                </div>

            ) : (
                <div>
                    <EmptyCart/>
                </div>
            )
        }
       
       
      


      </div>
    </div>
  )
}

export default Cart
