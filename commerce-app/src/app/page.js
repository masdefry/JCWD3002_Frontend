import SectionFilter from '@/features/home/components/SectionFilter';
import CardProduct from '@/features/home/components/CardProduct';

const onFetchProduct = async(search) => {
  try{
    let url = 'http://localhost:5000/products'
    if(search){
      url+= `?name=${search}`
    }

    let res = await fetch(url, {
      cache: 'no-store'
    })

    res = await res.json()

    return res
  }catch(error){
    console.log(error)
  }
}

export default async function Home({searchParams}) {
  const products = await onFetchProduct(searchParams.search)
  console.log(products)

  return (
    <main className='py-10 px-4 md:px-8 lg:px-16 xl:px-32'>
      {/* Section untuk Search dan Sort */}
      <SectionFilter />

      {/* Section untuk List Product */}
      <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {
          products.map((product, index) => {
            return(
              <CardProduct name={product.name} price={product.price} mainImage={product.images[0]} key={index} />
            )
          })
        }
      </section>
    </main>
  );
}
