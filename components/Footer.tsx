import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Brand */}
        <div>
          <img
            src="/images/logo-white.svg"
            alt="Ridgegap"
            className="h-8 mb-4"
          />
          <p className="text-sm leading-relaxed">
            Customized corporate gifting solutions for employees, clients &
            partners across India.
          </p>
        </div>

        {/* Solutions */}
        <div>
          <h4 className="text-white font-semibold mb-4">Solutions</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/solutions/new-joiner-kits">New Joiner Kits</Link></li>
            <li><Link href="/solutions/swag-packs">Swag Packs</Link></li>
            <li><Link href="/solutions/luxury-cxo-gifting">Luxury Gifting</Link></li>
            <li><Link href="/solutions/sustainable-eco-gifts">Eco-Friendly Gifts</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>📞 +91 82968 13621</li>
            <li>📞 +91 97391 40044</li>
            <li>
              ✉️{" "}
              <a
                href="mailto:info@ridgegap.com"
                className="hover:underline"
              >
                info@ridgegap.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 text-center text-sm py-4">
        © {new Date().getFullYear()} Ridgegap. All rights reserved.
      </div>
    </footer>
  );
}
