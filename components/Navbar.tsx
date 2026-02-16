'use client';

import { useState } from 'react';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import CTABtn from './ui/CTABtn';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const solutions = [
    { name: 'New Joiner Kits', href: '/new-joiner-kits' },
    { name: 'Curated Gift Boxes', href: '/curated-gift-boxes' },
    { name: 'Customised Tshirts', href: '/customised-tshirts' },
    { name: 'Corporate Laptop Bags & Custom Backpacks', href: '/corporate-laptop-bags-custom-backpacks' },
    { name: 'Swag Packs', href: '/swag-packs' },
    { name: 'Events, Conference & Promotional Gifts', href: '/events-conference-promotional-gifts' },
    { name: 'Luxury & CXO Gifting', href: '/luxury-cxo-gifting' },
    { name: 'Special & Custom-Made Projects', href: '/special-custom-made-projects' },
    { name: 'Sustainable & Eco-Friendly Gifting', href: '/sustainable-eco-friendly-gifting' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#1b478b] text-white py-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-end gap-4 text-sm">
          <a href="tel:+91-82968-13621" className="flex items-center gap-2 hover:text-gray-300 transition-colors">
            <Phone size={16} />
            <span className="hidden sm:inline">(+91) 82968 13621</span>
          </a>
          <a href="tel:+91-97391-40044" className="flex items-center gap-2 hover:text-gray-300 transition-colors">
            <Phone size={16} />
            <span className="hidden sm:inline">(+91) 97391 40044</span>
          </a>
          <a href="mailto:info@ridgegap.com" className="flex items-center gap-2 hover:text-gray-300 transition-colors">
            <Mail size={16} />
            <span className="hidden sm:inline">sunny@ridgegap.com</span>
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="shrink-0">
              <a href="/" className="flex items-center">
                <img
                  src="https://ridgegap.com/wp-content/themes/ridgegap-wptheme/img/logo.png"
                  alt="Ridgegap"
                  className="h-18 w-auto"
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="/" className="text-gray-900 hover:text-blue-600 font-medium transition-colors">
                Home
              </a>

              {/* Solutions Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setOpenDropdown('solutions')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center gap-1 text-gray-900 hover:text-blue-600 font-medium transition-colors">
                  Solutions
                  <ChevronDown size={16} className={`transform transition-transform ${openDropdown === 'solutions' ? 'rotate-180' : ''}`} />
                </button>
                {openDropdown === 'solutions' && (
                  <div className="absolute top-full left-0 w-80 pt-2 z-50">
                    <div className="bg-white shadow-xl rounded-lg py-2 border border-gray-100">
                      {solutions.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <a href="/products" className="text-gray-900 hover:text-blue-600 font-medium transition-colors">
                Products
              </a>
              <a href="/about" className="text-gray-900 hover:text-blue-600 font-medium transition-colors">
                What We Do
              </a>
              <a href="/blog" className="text-gray-900 hover:text-blue-600 font-medium transition-colors">
                Blog
              </a>
              <a href="/contacts" className="text-gray-900 hover:text-blue-600 font-medium transition-colors">
                Contact Us
              </a>
              <a href="/corporate-diwali-gifts" className="text-gray-900 hover:text-blue-600 font-medium transition-colors">
                Diwali Gifts
              </a>

              {/* CTA Button */}
              <a
                href="#book-call"
                className="bg-[#e34d67] text-white px-6 py-2 font-medium hover:transition-all transform hover:scale-105 shadow-lg"
              >
                Book a call
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-900 hover:text-blue-600 p-2"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                <a href="/" className="text-gray-900 hover:text-blue-600 font-medium transition-colors">
                  Home
                </a>

                {/* Mobile Solutions Dropdown */}
                <div>
                  <button
                    onClick={() => setOpenDropdown(openDropdown === 'solutions' ? null : 'solutions')}
                    className="flex items-center justify-between w-full text-gray-900 hover:text-blue-600 font-medium transition-colors"
                  >
                    Solutions
                    <ChevronDown size={16} className={`transform transition-transform ${openDropdown === 'solutions' ? 'rotate-180' : ''}`} />
                  </button>
                  {openDropdown === 'solutions' && (
                    <div className="mt-2 ml-4 space-y-2">
                      {solutions.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block text-sm text-gray-600 hover:text-blue-600 transition-colors py-1"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                <a href="/products" className="text-gray-900 hover:text-blue-600 font-medium transition-colors">
                  Products
                </a>
                <a href="/about" className="text-gray-900 hover:text-blue-600 font-medium transition-colors">
                  What We Do
                </a>
                <a href="/blog" className="text-gray-900 hover:text-blue-600 font-medium transition-colors">
                  Blog
                </a>
                <a href="/contacts" className="text-gray-900 hover:text-blue-600 font-medium transition-colors">
                  Contact Us
                </a>
                <a href="/corporate-diwali-gifts" className="text-gray-900 hover:text-blue-600 font-medium transition-colors">
                  Diwali Gifts
                </a>
                <CTABtn message={"Book a Call"}/>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}