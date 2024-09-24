import { useMemo, useState } from "react"
import MemoChild from "../../components/memoChild"

export default function MemoPage(){

    const [inputAnything, setInputAnything] = useState('')

    const getInput = (e) => {
        setInputAnything(e.target.value)
    }

    const memoizedArray = useMemo(() => (
        [1, 2, 3]
    ), []);

    return(
        <main className='p-10'>
            <section id='first'>
                <h1 className='text-3xl font-bold'>
                    Memo Page 
                </h1>
                <input onChange={(event) => getInput(event)} placeholder='Type Anything' className='border border-gray-300 rounded-md p-3' />
            </section>
            <hr className='mt-5' />

            <MemoChild any={memoizedArray} />

            <p className='mt-32 text-xs'>
                Case. <br/>
                1. Setiap kali kita input apapun, component `MemoChild` akan selalu di render ulang. <br />
                2. Mengapa component `MemoChild` ikut di render ulang? Karena ketika component parent nya di render ulang, otomatis
                   component child nya juga ikut di render ulang. <br />
                3. Solusinya, dengan menambahkan React.memo pada component `MemoChild`.
                   React.memo akan menjaga component child, apabila tidak ada perubahan dari props ataupun tidak ada perubahan yang berhubungan 
                   dengan component tersebut, maka tidak akan di render ulang. <br />
                4. React.memo hanya dapat melakukan `Shallow Compare` terhadap perubahan props.
                   `Shallow Compare` yaitu mengkomparasi value bertipe data primitive. 
            </p>
        </main>
    )
}