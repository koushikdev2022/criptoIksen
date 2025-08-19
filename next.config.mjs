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
   allowedDevOrigins: [
    "https://cryptointuit.org",
    "http://localhost:3000",
  ],
};

export default withFlowbiteReact(nextConfig);