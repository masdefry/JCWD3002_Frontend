import Image from 'next/image';

export default function CardProduct({name, price, mainImage}){
    return(
        <div className='flex flex-col items-center'>
          <div className='relative w-full h-[300px]'>
            <Image 
              src={mainImage}
              fill
              alt='Image'
              style={{objectFit: 'cover'}}
            />
          </div>
          <div className='py-5'>
            <h1 className='font-bold text-md max-w-[300px] overflow-hidden text-ellipsis line-clamp-3 text-center'>
              {name} - Rp. {price}
            </h1>
          </div>
        </div>
    )
}