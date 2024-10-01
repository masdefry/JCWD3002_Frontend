import Image from 'next/image'
import CatImage from '../../../pexels-pixabay-45170.jpg';

export const metadata = {
    title: 'Belajar NextJS di Purwadhika', 
    description: 'Belajar optimization NextJS di Purwadhika sampai lancar',
    keywords: 'nextjs, seo friendly, image optimization, advance react', 
    openGraph: {
        title: 'Belajar NextJS di Purwadhika', 
        description: 'Belajar optimization NextJS di Purwadhika sampai lancar',
        url: 'http://localhost:3000/optimization', 
        images: [
            {
               url: 'https://cdn.pixabay.com/photo/2016/02/10/16/37/cat-1192026_1280.jpg', 
               width: '100px', 
               height: '100px', 
               alt: 'Belajar NextJS semudah membuka image ini lo!' 
            }
        ]
    }
}

export default function Page(){
    return(
        <>
            <Image 
                src={CatImage}
                width={`100%`}
                height={`100%`}
                alt='Cat Image'
            />

            <Image 
                src={'https://cdn.pixabay.com/photo/2016/02/10/16/37/cat-1192026_1280.jpg'}
                width={100}
                height={100}
                alt='Second Cat'
            />
        </>
    )
}