import { useEffect, useState } from 'react';
import ListCheckout from '../../components/dashboard/list-checkout';
import ListMenu from './../../components/dashboard/list-menu/index';
import axios from 'axios';

export default function DashboardPage(){
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
   
    const onFetchProducts = async() => {
        try {
            const res = await axios.get('http://localhost:5000/products')
            setProducts(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    const onAddToCart = (name, price, qty) => {
        const currentCart = [...cart]
        currentCart.push({name, price, qty})
        setCart(currentCart)
    }

    const addQtyCart = (index) => {
        const currentCart = [...cart]
        currentCart[index].qty += 1
        setCart(currentCart)
    }

    useEffect(() => {
        onFetchProducts()
    }, [])
    return(
        <main className='h-screen grid grid-cols-3 grid-rows-12 p-5 pt-20 gap-3'>
            <section id='left' className='col-[1/3] row-[1/13]  bg-white rounded-xl drop-shadow-xl border border-gray-200'>
                <div id='top section' className='flex justify-between p-3 border border-b'>
                    <button id='leftSide' className='font-bold text-blue-800'>+ Add New Menu </button>
                    <div id='rightSide' className='flex flex-row'>
                        <input type='text' className='rounded-full p-2 mr-3 border border-gray-400 px-6' placeholder='Search...' />
                        <button className='rounded-full bg-white p-2 flex items-center'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 16 16'
                                fill='currentColor'
                                className='h-5 w-5 opacity-70'>
                                <path
                                    fillRule='evenodd'
                                    d='M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z'
                                    clipRule='evenodd' />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className='overflow-y-scroll h-[500px] p-5'>
                    <div id='productSection' className='grid gap-4 grid-cols-5  p-3 bg-white'>
                        <>
                            {
                                products.map((product, index) => {
                                    return(
                                        <ListMenu onAddToCart={onAddToCart} name={product.name} price={product.price} imageUrl={product.imageUrl} />
                                    )
                                })
                            }
                        </>
                    </div>
                </div>
            </section>
            <section id='right' className='col-[3/4] row-[1/12]  bg-white rounded-xl drop-shadow-xl border border-gray-200'>
                <div className='flex p-2 justify-center font-bold text-xl'>
                    Checkout
                </div>
                <div>
                    <div className='overflow-x-auto'>
                        <table className='table text-center'>
                            {/* head */}
                            <thead>
                                <tr className='bg-gray-300'>
                                    <th>Name</th>
                                    <th>QTY</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            {
                                cart.map((product, index) => {
                                    return(
                                        <ListCheckout index={index} addQtyCart={addQtyCart} name={product.name} price={product.price} qty={product.qty} />
                                    )
                                })
                            }
                        </table>
                    </div>
                </div>
            </section>
            <button id='right' className='btn btn-outline btn-primary col-[3/4] row-[12/13]  rounded-xl'>
                Pay (Rp Amount)
            </button>
        </main>
    )
}