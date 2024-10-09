'use client';

import { useEffect, useState } from "react";
import axios from 'axios';

export default function ProductsPage(){
    const [products, setProducts] = useState([])

    const onFetchProducts = async() => {
        try {
            let res = await axios.get('http://localhost:5000/products')
    
            setProducts(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        onFetchProducts()
    }, [])

    return(
        <main>
            <section name='form-section' data-test='form-section'></section>
            <section name='display-section' data-test='display-section'>
                <table>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Product Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products?.map((product, index) => {
                                return(
                                    <tr>
                                        <td>{product.name}</td>
                                        <td>{product.price}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </section>
        </main>
    )
}