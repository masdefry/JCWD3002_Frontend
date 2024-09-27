export default function ListMenu({name, price, imageUrl, onAddToCart}){
    return(
        <div className="flex flex-col w-full border rounded-md" onClick={() => onAddToCart(name, price, 1)}>
            <div className="rounded-lg flex drop-shadow-md w-full h-[150px]">
                <img src={imageUrl} alt="asd" className="rounded-md object-cover" />
            </div>
            <div className='py-5'>
                <div className="text-center font-bold">{name}</div>
                <div className="text-center ">Rp{price.toLocaleString("id-ID")}</div>
            </div>
        </div>
    )
}