/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'photopgraphy-portfolio.appspot.com'
            },
            {
                protocol: 'https',
                hostname: 'firebasestorage.googleapis.com'
            }
        ]
    },
};

export default nextConfig;
