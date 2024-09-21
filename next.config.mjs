/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: "https",
              hostname: '*.nauthemes.com', 
            },
            {
                protocol: "https",
                hostname: 'asset.cloudinary.com', 
              }
        ]
    }
};

export default nextConfig;
