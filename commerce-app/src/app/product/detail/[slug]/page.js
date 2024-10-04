'use client'

import Image from 'next/image';
import {useQuery} from '@tanstack/react-query'
import axios from 'axios';

export default function Page({params}) {
  const {data, error} = useQuery({
    queryFn: async() => {
      const res = await axios.get(`http://localhost:5000/products/${params.slug.split('-')[params.slug.split('-').length-1]}`)
      return res.data
    }
  })

  return (
    <main className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 md:p-10">
      {/* Section for Image */}
      <section>
        <div className="relative w-full h-[300px] md:h-[500px]">
          <Image
            src={'https://www.screamous.com/cdn/shop/files/id-11134207-7r98u-lynqyn4r95oo01_e1a58939-5e1d-4a40-bce3-81c7c204155f_720x.jpg?v=1723176137'}
            fill
            alt="Image"
            style={{ objectFit: 'cover' }}
          />
        </div>
      </section>

      {/* Section for Product Info */}
      <section className="flex flex-col items-center md:items-center">
        <h1 className="font-bold text-xl md:text-2xl text-center md:text-left">
          {data?.name}
        </h1>
        <h1 className="font-bold text-lg md:text-xl text-red-500 text-center md:text-left">
          {data?.price}
        </h1>
        <hr className="w-[50px] border border-gray-900 my-3" />
        <h1 className="border border-black px-3 py-1 rounded-none text-center md:text-left">
          Black
        </h1>

        {/* Section for Size */}
        <h1 className="mt-5 text-md font-bold text-center md:text-left">
          Ukuran
        </h1>
        <div className="flex gap-3 justify-center md:justify-start">
          <h1>S</h1>
          <h1>M</h1>
          <h1>L</h1>
        </div>

        {/* Quantity input */}
        <div className="flex gap-3 items-center py-3 justify-center md:justify-start">
          <h1 className="text-md font-bold">Quantity</h1>
          <input
            name="quantity"
            type="text"
            placeholder="1"
            className="input bg-gray-100 input-bordered w-[60px] text-center rounded-none"
          />
        </div>

        {/* Add to Cart and Buy it Now buttons */}
        <div className="w-full max-w-xs">
          <button className="mt-5 btn bg-white border-black text-black rounded-none w-full">
            Add to Cart
          </button>
          <button className="mt-5 btn bg-black text-white rounded-none w-full">
            Buy it Now
          </button>
        </div>
      </section>
    </main>
  );
}
