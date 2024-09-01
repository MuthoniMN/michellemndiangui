/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.hashnode.com'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.hashnode.com",
        port: "",
        pathname: "res/hashnode/image/upload/**"
      }
    ]
  }
};

export default nextConfig;
