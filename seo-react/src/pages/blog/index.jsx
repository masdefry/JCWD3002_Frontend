import { Helmet } from 'react-helmet';

export default function BlogPage(){
    return(
        <>
            <Helmet>
                <title>Blog Page</title>
                <meta name="description" content="This is a blog page with meta tags" />
                <meta name="keywords" content="react, meta tags, seo" />
                <meta name="author" content="Your Name" />
                <meta property="og:title" content="Blog Page" />
                <meta property="og:description" content="This is a blog page with meta tags" />
                <meta property="og:image" content="https://o-cdn-cas.oramiland.com/parenting/images/kucing_gemas-1.width-800.format-webp.webp" />
                <meta property="og:url" content="https://example.com/my-page" />
                <meta name="twitter:title" content="Blog Page" />
                <meta name="twitter:description" content="This is a blog page with meta tags" />
                <meta name="twitter:image" content="https://o-cdn-cas.oramiland.com/parenting/images/kucing_gemas-1.width-800.format-webp.webp" />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
            <h1>Blog Page</h1>
        </>
    )
}