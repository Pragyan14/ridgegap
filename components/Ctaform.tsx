'use client';

import { useState } from 'react';

export default function CTAForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage('Thank you! We will contact you soon.');
      setIsSubmitting(false);
      setFormData({ fullName: '', email: '', phone: '' });
      
      // Clear message after 5 seconds
      setTimeout(() => setSubmitMessage(''), 5000);
    }, 1000);
  };

  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-linear-to-r from-[#0c4a6e] via-[#1e40af] to-[#4338ca]"></div>
      
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h4 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
            Ready to Get Started?
          </h4>
          <p className="text-base md:text-lg text-white/90">
            Get a free quote for your Corporate gifting needs
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Full Name Input */}
            <div>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name:"
                required
                className="w-full px-6 py-4 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
              />
            </div>

            {/* Email Input */}
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Id:"
                required
                className="w-full px-6 py-4 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
              />
            </div>

            {/* Phone Input */}
            <div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone No:"
                required
                className="w-full px-6 py-4 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 bg-[#ef4444] hover:bg-[#dc2626] text-white font-bold rounded-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 uppercase tracking-wider"
              >
                {isSubmitting ? 'SENDING...' : 'SEND'}
              </button>
            </div>
          </div>

          {/* Success Message */}
          {submitMessage && (
            <div className="mt-6 p-4 bg-green-500 text-white rounded-lg text-center font-semibold animate-fade-in">
              {submitMessage}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}