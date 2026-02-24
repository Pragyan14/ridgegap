import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    domains: ["ridgegap.com"]
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
    ]
  },
};

export default nextConfig;
