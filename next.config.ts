/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.slotegrator.pro',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
         {
        protocol: 'https',
        hostname: 'timelesstech.io',
      },
    ],
  },
};

export default nextConfig;
