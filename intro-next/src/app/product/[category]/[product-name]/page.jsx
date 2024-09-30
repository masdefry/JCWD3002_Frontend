export default function ProductPage({params}){
    console.log(params.category)
    console.log(params['product-name'])
    return(
        <h1>
            Product Page
        </h1>
    )
}