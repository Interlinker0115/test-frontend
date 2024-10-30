/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'example.com', // Replace with your image domain
                port: '', // Leave empty for default
                pathname: '/path/to/images/**', // Adjust the path as necessary
            },
        ],
    },
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://localhost:5000/api/:path*' // Proxy to Backend
            },
        ];
    }

};

export default nextConfig;
