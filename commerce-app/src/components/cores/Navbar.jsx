'use client';
import { BsCart2 } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function Navbar(){
    const auth = useSelector((state) => state.auth)
    console.log(auth)

    return(
        <main className='p-3 bg-black text-white flex justify-between items-center'>
            <section>
                <h1 className='font-bold text-2xl'>
                    Logo
                </h1>
            </section>
            <section className='flex gap-3'>
                <BsCart2 
                    className='text-2xl'
                />
                {
                    auth.auth !== null?
                        <h1>
                            {auth.auth}
                        </h1>
                    :
                        <FaRegUserCircle 
                            className='text-2xl'
                        />
                }
            </section>
        </main>
    )
}