'use client';

import styles from './CompanyLogos.module.css';

export default function CompanyLogos() {
  const logos = [
    "https://ridgegap.com/wp-content/themes/ridgegap-wptheme/images/google-showlogimg.png",
    "https://ridgegap.com/wp-content/themes/ridgegap-wptheme/images/amazon-showlogimg.png",
    "https://ridgegap.com/wp-content/themes/ridgegap-wptheme/images/mercedes-benz-showlogimg.png",
    "https://ridgegap.com/wp-content/themes/ridgegap-wptheme/images/jpmorgan-showlogimg.png",
    "https://ridgegap.com/wp-content/themes/ridgegap-wptheme/images/bigbasket-showlogimg.png",
    "https://ridgegap.com/wp-content/themes/ridgegap-wptheme/images/unacademy-showlogimg.png",
    "https://ridgegap.com/wp-content/themes/ridgegap-wptheme/images/embibe-showlogimg.png",
    "https://ridgegap.com/wp-content/themes/ridgegap-wptheme/images/zoomcar-showlogimg.png",
    "https://ridgegap.com/wp-content/themes/ridgegap-wptheme/images/team-indus-showlogimg.png",
    "https://ridgegap.com/wp-content/themes/ridgegap-wptheme/images/pluto7-showlogimg.png",
    "https://ridgegap.com/wp-content/themes/ridgegap-wptheme/images/citrix-showlogimg.png",
    "https://ridgegap.com/wp-content/themes/ridgegap-wptheme/images/century-thinking-ahead-logo.png",
    "https://ridgegap.com/wp-content/themes/ridgegap-wptheme/images/wolves-showlogimg.png",
    "https://ridgegap.com/wp-content/themes/ridgegap-wptheme/images/zenefits-showlogimg.png",
    "https://ridgegap.com/wp-content/themes/ridgegap-wptheme/images/akshaypatra-showlogimg.png",
    "https://ridgegap.com/wp-content/themes/ridgegap-wptheme/images/vidyashilp-academy-showlogimg.png",
    "https://ridgegap.com/wp-content/themes/ridgegap-wptheme/images/xseed-showlogimg.png"
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
                <img
                  src={logo}
                  alt="Company Logo"
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
