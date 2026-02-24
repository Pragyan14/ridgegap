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
    ]
  },
};

export default nextConfig;
