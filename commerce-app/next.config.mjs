/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https', 
                hostname: 'www.screamous.com', 
                pathname: '**'
            }
        ]
    }
};

export default nextConfig;
