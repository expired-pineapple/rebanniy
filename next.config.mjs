/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: [
      "page.tsx",
      "page.ts",
   
      "ts"
  ],
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
