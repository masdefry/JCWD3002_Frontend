import Link from 'next/link'

export default function Navbar(){
    return(
        <main className='bg-red-500 text-white p-3 flex gap-3'>
            <h1 className='font-bold text-2xl'>
                Navbar
            </h1> 

            <Link href='/profile'>
                ProfilePage
            </Link>
        </main>
    )
}