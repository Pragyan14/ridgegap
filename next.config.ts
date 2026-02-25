import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ridgegap.com",
        pathname: "/**",
      },
    ],
  },
  async redirects(){
    return[
      {
        source: '/home-2',
        destination: '/',
        permanent: true
      },
      {
        source: '/home2',
        destination: '/',
        permanent: true
      },
      {
        source: '/home-updated',
        destination: '/',
        permanent: true
      },
      {
        source: '/about-3',
        destination: '/about-us',
        permanent: true
      },
      {
        source: '/contact',
        destination: '/contact-us',
        permanent: true
      },
      {
        source: '/corporate-gifts',
        destination: '/',
        permanent: true
      },
      {
        source: '/corporate-gifts-2k-3k',
        destination: '/',
        permanent: true
      },
      {
        source: '/christmas-new-year-corporate-gifts',
        destination: '/',
        permanent: true
      },
      {
        source: '/post-sitemap.xml',
        destination: '/sitemap.xml',
        permanent: true
      },
      {
        source: '/page-sitemap.xml',
        destination: '/sitemap.xml',
        permanent: true
      },
      {
        source: '/sitemap_index.xml',
        destination: '/sitemap.xml',
        permanent: true
      },
    ]
  },
};

export default nextConfig;
