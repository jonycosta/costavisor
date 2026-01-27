import type { NextConfig } from "next";

// Vercel Deployment Trigger: 2026-01-23

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/tienda/Ruta-de-la-tapa-costavisor-p785261069',
        destination: '/experience/magic-table', // Closest match mentioning tapas
        permanent: true,
      },
      {
        source: '/tienda/Tennis-and-Catering-p785261062',
        destination: '/experience/tennis-catering',
        permanent: true,
      },
      {
        source: '/tienda/Jet-Ski-Experiencie-p785261064',
        destination: '/#experiencias', // We don't have a specific Jet Ski page yet
        permanent: true,
      },
      {
        source: '/tienda/Airport-Transfer-p785261065',
        destination: '/#servicios-locales',
        permanent: true,
      },
      {
        source: '/tienda/Cocktail-Experiencie-p786116592',
        destination: '/experience/cocktail-experience',
        permanent: true,
      },
      {
        source: '/tienda/account',
        destination: '/',
        permanent: true,
      },
      // Generic redirect for anything else in /tienda/
      {
        source: '/tienda/:slug*',
        destination: '/#experiencias',
        permanent: false, // Temporary until specifically mapped
      },
    ]
  },
};

export default nextConfig;
