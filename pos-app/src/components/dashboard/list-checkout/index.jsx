export default function ListCheckout(){
    return(
        <tbody>
            <tr>
                <td>Capuccino</td>
                <td className='flex items-center justify-center gap-4'>
                    <button
                        className='rounded-full border border-black w-7 h-7 items-center justify-center pb-1 flex text-lg font-bold'>
                        -
                    </button>
                    1
                    <button
                        className='rounded-full border border-black w-7 h-7 items-center justify-center pb-1 flex text-lg font-bold'>
                        +
                    </button>
                </td>
                <td>xxxx</td>
            </tr>
        </tbody>
    )
}