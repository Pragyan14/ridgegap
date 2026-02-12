'use client';

import { useState } from 'react';
import { MapPin, Mail, Phone, Instagram, Facebook, ArrowRight, Send } from 'lucide-react';

const instagramPosts = [
  {
    href: 'https://www.instagram.com/p/DUmzG-TCE2J/',
    image: 'https://ridgegap.com/wp-content/uploads/sb-instagram-feed-images/626294830_18325883491247469_8682863323477652355_n.heiclow.webp',
    label: 'Custom Gifting',
  },
  {
    href: 'https://www.instagram.com/p/DUkJO-bCK13/',
    image: 'https://ridgegap.com/wp-content/uploads/sb-instagram-feed-images/626192399_18325755319247469_2662140720257876914_n.heiclow.webp',
    label: 'New Joiner Kits',
  },
  {
    href: 'https://www.instagram.com/p/DUh2vmuCB7T/',
    image: 'https://ridgegap.com/wp-content/uploads/sb-instagram-feed-images/626158350_18325883239247469_7444659688957498760_n.heiclow.webp',
    label: 'Employee Swags',
  },
  {
    href: 'https://www.instagram.com/p/DUhk8RBiFWT/',
    image: 'https://ridgegap.com/wp-content/uploads/sb-instagram-feed-images/629576501_18325885618247469_5607236318958830264_n.heiclow.webp',
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quoteForm, setQuoteForm] = useState({
    name: '', email: '', phone: '', category: '', message: '',
  });

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(false);
    setQuoteForm({ name: '', email: '', phone: '', category: '', message: '' });
  };

  return (
    <>
      <footer className="bg-gray-100 pt-14 pb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12">

            {/* Column 1 — Logo + About + Need Help */}
            <div>
              <div className="mb-5">
                <img
                  src="https://ridgegap.com/wp-content/themes/ridgegap-wptheme/img/logo.png"
                  alt="Ridgegap"
                  className="h-16 w-auto"
                />
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                We provide the most Comprehensive, Customized Solutions for Corporate to keep their employees engaged and Beautifully Hand-picked, Customized Corporate Gifting solutions.
              </p>

              {/* Need Help */}
              <div className="flex items-center gap-4">
                <div className="shrink-0">
                  <img
                    src="https://ridgegap.com/wp-content/themes/ridgegap-wptheme/images/phone-ico.png"
                    alt="phone"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-base">Need Help?</p>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="text-[#3b82f6] font-semibold text-sm flex items-center gap-1 hover:underline mt-0.5"
                  >
                    Free Consultation <ArrowRight size={14} />
                  </button>
                </div>
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
        <div className="border-t border-gray-300 bg-white py-4 px-4">
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

      {/* Free Consultation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6 relative">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl leading-none"
            >
              &times;
            </button>

            <h5 className="text-xl font-bold text-gray-900 mb-5">
              Fill the below form to get a Quote:
            </h5>

            <form onSubmit={handleQuoteSubmit} className="space-y-4">
              {/* Full Name */}
              <input
                type="text"
                placeholder="Full Name:"
                value={quoteForm.name}
                onChange={(e) => setQuoteForm({ ...quoteForm, name: e.target.value })}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />

              {/* Email + Phone */}
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="email"
                  placeholder="Email Id.:"
                  value={quoteForm.email}
                  onChange={(e) => setQuoteForm({ ...quoteForm, email: e.target.value })}
                  required
                  className="border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="tel"
                  placeholder="Phone No.:"
                  value={quoteForm.phone}
                  onChange={(e) => setQuoteForm({ ...quoteForm, phone: e.target.value })}
                  required
                  className="border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              {/* Category Dropdown */}
              <select
                value={quoteForm.category}
                onChange={(e) => setQuoteForm({ ...quoteForm, category: e.target.value })}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="">Select Product Category</option>
                <option>Apparels</option>
                <option>Backpacks</option>
                <option>Desk Accessories</option>
                <option>Drinkwares</option>
                <option>Health &amp; Fitness Gifts</option>
                <option>Office Stationeries</option>
                <option>Tech Accessories</option>
                <option>Tech Gadgets</option>
                <option>Travel Accessories</option>
                <option>Trophies &amp; Awards</option>
                <option>Work From Home</option>
              </select>

              {/* Message */}
              <textarea
                placeholder="Message/Comments:"
                rows={4}
                value={quoteForm.message}
                onChange={(e) => setQuoteForm({ ...quoteForm, message: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
              />

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <Send size={16} />
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}