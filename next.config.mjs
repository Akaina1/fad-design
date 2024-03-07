/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'images.unsplash.com',
        // You can add more specific pattern properties if needed
        // path: /^\/specific-path\//,
        // etc.
      },
    ],
  },
};

export default nextConfig;