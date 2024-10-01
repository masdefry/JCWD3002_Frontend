import { Helmet } from 'react-helmet';

export default function HomePage(){
    return(
        <>
            <Helmet>
                <title>Home Page</title>
                <meta name="description" content="This is a home page with meta tags" />
                <meta name="keywords" content="react, meta tags, seo" />
                <meta name="author" content="Your Name" />
                <meta property="og:title" content="Home Page" />
                <meta property="og:description" content="This is a home page with meta tags" />
                <meta property="og:image" content="https://example.com/image.jpg" />
                <meta property="og:url" content="https://example.com/my-page" />
                <meta name="twitter:title" content="Home Page" />
                <meta name="twitter:description" content="This is a home page with meta tags" />
                <meta name="twitter:image" content="https://example.com/image.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
            <h1>Home Page</h1>
        </>
    )
}