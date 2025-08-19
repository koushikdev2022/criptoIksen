import withFlowbiteReact from "flowbite-react/plugin/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nodeapi.cryptointuit.org',
        port: '',
        pathname: '/uploads/images/**',
      },
    ],
  },
  experimental: {
    allowedDevOrigins: [
      "https://cryptointuit.org",   // your custom domain
      "http://localhost:3000",     // keep localhost for dev
    ],
  },
};

export default withFlowbiteReact(nextConfig);