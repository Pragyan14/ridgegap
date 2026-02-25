'use client';

import { useState } from 'react';
import { MapPin, Mail, Phone, Instagram, Facebook, ArrowRight } from 'lucide-react';
import ContactPopup from './ui/ContactPopup';
import Image from 'next/image';

const instagramPosts = [
  {
    href: 'https://www.instagram.com/p/DUmzG-TCE2J/',
    image: '/images/626294830_18325883491247469_8682863323477652355_n.heiclow.webp',
    label: 'Custom Gifting',
  },
  {
    href: 'https://www.instagram.com/p/DUkJO-bCK13/',
    image: '/images/626192399_18325755319247469_2662140720257876914_n.heiclow.webp',
    label: 'New Joiner Kits',
  },
  {
    href: 'https://www.instagram.com/p/DUh2vmuCB7T/',
    image: '/images/626158350_18325883239247469_7444659688957498760_n.heiclow.webp',
    label: 'Employee Swags',
  },
  {
    href: 'https://www.instagram.com/p/DUhk8RBiFWT/',
    image: '/images/629576501_18325885618247469_5607236318958830264_n.heiclow.webp',
    label: 'Eco Friendly',
  },
];

const usefulLinks = [
  { label: 'New Joiner Kits', href: '/new-joiner-kits' },
  { label: 'Curated Gift Boxes', href: '/curated-gift-boxes' },
  { label: 'Customised T-Shirts', href: '/customised-tshirts' },
  { label: 'Corporate Bags & Laptops', href: '/corporate-laptop-bags-custom-backpacks' },
  { label: 'Swag Packs', href: '/swag-packs' },
  { label: 'Event & Conference Gifts', href: '/events-conference-promotional-gifts' },
  { label: 'Luxury CXO Gifts', href: '/luxury-cxo-gifting' },
  { label: 'Custom-Made Projects', href: '/special-custom-made-projects' },
  { label: 'Sustainable & Eco-Friendly Gifts', href: '/sustainable-eco-friendly-gifting' },
];

export default function Footer() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <footer
        className="pt-14 pb-0"
        style={{
          backgroundImage: "url(/images/footer-bg-3.png)"
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12">

            {/* Column 1 — Logo + About + Need Help */}
            <div>
              <div className="mb-5">
                <Image
                  src="/images/logo.png"
                  alt="Ridgegap"
                  width={160}
                  height={64}
                  className="h-16 w-auto"
                />
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                We provide the most Comprehensive, Customized Solutions for Corporate to keep their employees engaged and Beautifully Hand-picked, Customized Corporate Gifting solutions.
              </p>

              {/* Need Help */}
              <div className="flex items-center gap-4">
                <div className="shrink-0">
                  <Image
                    src="/images/phone-ico.png"
                    alt="phone"
                    width={48}
                    height={48}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-base">Need Help?</p>
                  <button
                    onClick={() => setOpen(true)}
                    className="text-[#3b82f6] font-semibold text-sm flex items-center gap-1 hover:underline mt-0.5"
                  >
                    Free Consultation <ArrowRight size={14} />
                  </button>
                </div>
                {open && (
                  <ContactPopup
                    type="connect"
                    onClose={() => setOpen(false)}
                  />
                )}
              </div>
            </div>

            {/* Column 2 — Useful Links */}
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-5">Useful Links</h4>
              <ul className="space-y-2.5">
                {usefulLinks.map((link) => (
                  <li key={link.href} className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#3b82f6] transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full border border-gray-500 shrink-0"></span>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 — Get In Touch */}
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-5">Get In Touch</h4>
              <div className="space-y-4">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-[#3b82f6] mt-0.5 shrink-0" />
                  <p className="text-sm text-gray-600 leading-relaxed">
                    <strong className="text-gray-900 font-semibold">Ridge Gap Solutions Pvt. Ltd.</strong><br />
                    Ground Floor, (Out House) No. 15, 12th Block, 5th Main, Kumar Park West, Bengaluru, Karnataka 560003
                  </p>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3">
                  <Mail size={17} className="text-[#3b82f6] shrink-0" />
                  <a
                    href="mailto:sunny@ridgegap.com"
                    className="text-sm text-gray-600 hover:text-[#3b82f6] transition-colors"
                  >
                    sunny@ridgegap.com
                  </a>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3">
                  <Phone size={17} className="text-[#3b82f6] shrink-0" />
                  <a
                    href="tel:+91-82968-13621"
                    className="text-sm text-gray-600 hover:text-[#3b82f6] transition-colors"
                  >
                    (+91)-82968-13621
                  </a>
                </div>

                {/* Social Icons */}
                <div className="flex items-center gap-3 pt-1">
                  <a
                    href="https://www.facebook.com/ridgegap"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#3b82f6] rounded-full flex items-center justify-center text-white hover:bg-[#2563eb] transition-colors"
                  >
                    <Facebook size={18} />
                  </a>
                  <a
                    href="https://instagram.com/ridgegap_corporate_gifting"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#3b82f6] rounded-full flex items-center justify-center text-white hover:bg-[#2563eb] transition-colors"
                  >
                    <Instagram size={18} />
                  </a>
                </div>

                {/* Privacy Policy */}
                <div className="pt-2">
                  <ul>
                    <li className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#3b82f6] transition-colors">
                      <span className="w-1.5 h-1.5 rounded-full border border-gray-500 shrink-0"></span>
                      <a href="/privacy-policy">Privacy Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Column 4 — Instagram Feed */}
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-5">Instagram Feed</h4>
              <div className="grid grid-cols-2 gap-2 mb-4">
                {instagramPosts.map((post, index) => (
                  <a
                    key={index}
                    href={post.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block aspect-square rounded-lg overflow-hidden bg-gray-200 hover:opacity-90 transition-opacity"
                  >
                    <img
                      src={post.image}
                      alt={post.label}
                      className="w-full h-full object-cover"
                    />
                  </a>
                ))}
              </div>

              {/* Follow on Instagram Button */}
              <a
                href="https://www.instagram.com/ridgegap_corporate_gifting/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-[#3b82f6] text-white rounded-lg text-sm font-semibold hover:bg-[#2563eb] transition-colors"
              >
                <Instagram size={16} />
                Follow on Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="bg-white py-4 px-4">
          <p className="text-center text-sm text-gray-500">
            © 2026 Ridgegap. All rights reserved. | Powered by{' '}
            <a
              href="https://www.monkmantra.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3b82f6] hover:underline font-medium"
            >
              MonkMantra
            </a>{' '}
            - Digital Partner
          </p>
        </div>
      </footer>
    </>
  );
}