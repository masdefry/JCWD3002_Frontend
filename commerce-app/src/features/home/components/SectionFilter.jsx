'use client';
import { useRouter } from "next/navigation";

export default function SectionFilter(){
    const router = useRouter()

    const onSearchProduct = (valueInput) => {
        router.push(`?search=${valueInput}`)
        router.refresh()
    }

    return(
        <section className='py-5 flex flex-col lg:flex-row gap-3'>
        <div className='w-full'>
          <label className='input input-bordered w-full flex items-center gap-2 rounded-none'>
            <input onChange={(e) => onSearchProduct(e.target.value)} type='text' className='grow w-full' placeholder='Search' />
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 16 16'
              fill='currentColor'
              className='h-4 w-4 opacity-70'>
              <path
                fillRule='evenodd'
                d='M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z'
                clipRule='evenodd' />
            </svg>
          </label>
        </div>
        <div className='w-full lg:w-auto'>
          <select className='select select-bordered w-full lg:max-w-xs rounded-none'>
            <option disabled selected>Sort by?</option>
            <option>Price</option>
            <option>Alphabet</option>
          </select>
        </div>
      </section>
    )
}