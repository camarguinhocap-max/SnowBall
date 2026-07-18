import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/ads.txt',
        destination: '/adstxt',
      },
    ];
  },
  async redirects() {
    return [
      { source: '/contact', destination: '/contato', permanent: true },
      { source: '/post/mentalidade-milionaria-o-que-as-pessoas-ricas-fazem-diferente', destination: '/post/mindset-milionario-2026-psicologia-vence-planilha', permanent: true },
      { source: '/login', destination: '/', permanent: true },
      { source: '/signup', destination: '/', permanent: true },
      { source: '/pricing', destination: '/', permanent: true },
      { source: '/tools', destination: '/', permanent: true },
      { source: '/tracking', destination: '/', permanent: true },
    ];
  },
  headers: async () => [
    {
      source: '/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, s-maxage=60, stale-while-revalidate=120',
        },
      ],
    },
    {
      source: '/images/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
      ],
    },
    {
      source: '/_next/static/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
      ],
    },
    {
      source: '/api/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=60, stale-while-revalidate=300',
        },
      ],
    },
  ],
  compress: true,
  poweredByHeader: false,
};
export default nextConfig;
