'use client';

import { useState } from 'react';
import toast from 'react-hot-toast';
import { MapPin, Mail, Phone, Facebook, Instagram } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('Thank you! Your message has been sent successfully.');
        setFormData({
          fullName: '',
          phone: '',
          email: '',
          message: '',
        });
      } else {
        toast.error(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

          {/* ── LEFT — Contact Form ── */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-8">
              Fill the below Contact Form:
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full Name + Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name:"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone No.:"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                />
              </div>

              {/* Email */}
              <input
                type="email"
                name="email"
                placeholder="Email Id.:"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />

              {/* Message */}
              <textarea
                name="message"
                placeholder="Message/Comments:"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent resize-none"
              />

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#e8395a] hover:bg-[#c72d4a] text-white font-semibold px-10 py-3 rounded-md transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Submit'}
                </button>
              </div>
            </form>
          </div>

          {/* ── RIGHT — Contact Info ── */}
          <div className="space-y-6">

            {/* Reach Us @ */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center">
                <MapPin size={40} className="text-gray-900" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-[#1e3a8a] mb-2 underline">
                  Reach Us @
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  RIDGEGAP SOLUTIONS PVT. LTD., #23, 3rd Floor, Ace Space, 8th Main, Vasanthnagar, Bangalore – 560052.
                </p>
              </div>
            </div>

            <hr className="border-gray-200" />

            {/* Email Us @ */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center">
                <Mail size={40} className="text-gray-900" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-[#1e3a8a] mb-2 underline">
                  Email Us @
                </h3>
                <a
                  href="mailto:sunny@ridgegap.com"
                  className="text-[#3b82f6] hover:underline text-lg"
                >
                  sunny@ridgegap.com
                </a>
              </div>
            </div>

            <hr className="border-gray-200" />

            {/* Call Us @ */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center">
                <Phone size={40} className="text-gray-900" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-[#1e3a8a] mb-2 underline">
                  Call Us @
                </h3>
                <div className="space-y-1">
                  <a
                    href="tel:+919739140044"
                    className="block text-[#3b82f6] hover:underline text-lg"
                  >
                    (+91)-97391-40044
                  </a>
                  <a
                    href="tel:+918296813621"
                    className="block text-[#3b82f6] hover:underline text-lg"
                  >
                    (+91)-82968-13621
                  </a>
                </div>
              </div>
            </div>

            <hr className="border-gray-200" />

            {/* Follow Us @ */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                Follow Us @:
              </h3>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.facebook.com/ridgegap"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#3b82f6] rounded-full flex items-center justify-center text-white hover:bg-[#2563eb] transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="https://instagram.com/ridgegap_corporate_gifting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#3b82f6] rounded-full flex items-center justify-center text-white hover:bg-[#2563eb] transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={24} />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}