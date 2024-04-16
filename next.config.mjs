/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.ctfassets.net',
            port: '',
            pathname: '/inrhvxpeuxn5/**',
          },
        ],
      },
};

export default nextConfig;
