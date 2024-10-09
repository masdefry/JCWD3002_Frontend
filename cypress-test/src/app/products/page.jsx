const onFetchProducts = async() => {
    try {
        let res = await fetch('http://localhost:5000/products')
        res = await res.json()

        return res
    } catch (error) {
        console.log(error)
    }
}

export default async function ProductsPage(){
    const products = await onFetchProducts()

    return(
        <main>
            <section name='form-section'></section>
            <section name='display-section'>
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