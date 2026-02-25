'use client';

import Image from 'next/image';
import styles from './CompanyLogos.module.css';

export default function CompanyLogos() {
  const logos = [
    "/images/google-showlogimg.png",
    "/images/amazon-showlogimg.png",
    "/images/mercedes-benz-showlogimg.png",
    "/images/jpmorgan-showlogimg.png",
    "/images/bigbasket-showlogimg.png",
    "/images/unacademy-showlogimg.png",
    "/images/embibe-showlogimg.png",
    "/images/zoomcar-showlogimg.png",
    "/images/team-indus-showlogimg.png",
    "/images/pluto7-showlogimg.png",
    "/images/citrix-showlogimg.png",
    "/images/century-thinking-ahead-logo.png",
    "/images/wolves-showlogimg.png",
    "/images/zenefits-showlogimg.png",
    "/images/akshaypatra-showlogimg.png",
    "/images/vidyashilp-academy-showlogimg.png",
    "/images/xseed-showlogimg.png"
  ];

  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-center text-2xl font-semibold text-gray-900 mb-8">
          You're in Good Company
        </h3>

        <div className={styles.slider}>
          <div className={styles.slideTrack}>
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className={styles.slide}>
                <Image
                  src={logo}
                  alt="Company Logo"
                  width={120}
                  height={40}
                  className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
