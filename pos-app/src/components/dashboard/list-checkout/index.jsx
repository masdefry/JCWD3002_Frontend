export default function ListCheckout({name, price, qty, addQtyCart, index}){
    return(
        <tbody>
            <tr>
                <td>{name}</td>
                <td className='flex items-center justify-center gap-4'>
                    <button
                        className='rounded-full border border-black w-7 h-7 items-center justify-center pb-1 flex text-lg font-bold'>
                        -
                    </button>
                        {qty}
                    <button
                        className='rounded-full border border-black w-7 h-7 items-center justify-center pb-1 flex text-lg font-bold' onClick={() => addQtyCart(index)}>
                        +
                    </button>
                </td>
                <td>Rp.{qty * price}</td>
            </tr>
        </tbody>
    )
}