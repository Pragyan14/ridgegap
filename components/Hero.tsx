'use client';

export default function Hero() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-50 py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-blue-600 font-semibold text-lg">Welcome to RIDGEGAP</p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Your #1 source for Customized{' '}
                  <span className="text-blue-600">Corporate Gifting Solutions.</span>
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  The Perfect Corporate Gift Makes Anyone Feel Special – Gifting Solutions for Employees, 
                  Clients and Business Partners to recognise and reward success in the workplace.
                </p>
              </div>

              <div>
                <a
                  href="#book-call"
                  className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
                >
                  Book a call!
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-8">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-600">200+</div>
                  <div className="text-sm text-gray-600 mt-1">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-600">20000+</div>
                  <div className="text-sm text-gray-600 mt-1">Packages Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-600">5000+</div>
                  <div className="text-sm text-gray-600 mt-1">Innovative Products</div>
                </div>
              </div>

              {/* Reviews Badge */}
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <span className="text-gray-700 font-semibold">100+ Reviews</span>
              </div>
            </div>

            {/* Right Content - Image Grid */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
                    <img
                      src="https://ridgegap.com/wp-content/themes/ridgegap-wptheme/images/new-slider-hero-1.jpg"
                      alt="Curated Gift Boxes"
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
                    <img
                      src="https://ridgegap.com/wp-content/themes/ridgegap-wptheme/images/new-slider-hero-3.jpg"
                      alt="Swag Packs"
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
                    <img
                      src="https://ridgegap.com/wp-content/themes/ridgegap-wptheme/images/new-slider-hero-2.jpg"
                      alt="New Joiner Kits"
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
                    <img
                      src="https://ridgegap.com/wp-content/themes/ridgegap-wptheme/images/new-slider-hero-4.jpg"
                      alt="Office Stationeries"
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-full opacity-50 blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-indigo-200 rounded-full opacity-50 blur-2xl"></div>
            </div>
          </div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
      </section>

      {/* Company Logos Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-center text-2xl font-semibold text-gray-900 mb-8">
            You're in Good Company
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-60 grayscale hover:grayscale-0 transition-all">
            <img 
              src="https://ridgegap.com/wp-content/themes/ridgegap-wptheme/images/google-showlogimg.png" 
              alt="Google" 
              className="h-8 md:h-10 w-auto object-contain"
            />
            <img 
              src="https://ridgegap.com/wp-content/themes/ridgegap-wptheme/images/amazon-showlogimg.png" 
              alt="Amazon" 
              className="h-8 md:h-10 w-auto object-contain"
            />
            <img 
              src="https://ridgegap.com/wp-content/themes/ridgegap-wptheme/images/mercedes-benz-showlogimg.png" 
              alt="Mercedes-Benz" 
              className="h-8 md:h-10 w-auto object-contain"
            />
            <img 
              src="https://ridgegap.com/wp-content/themes/ridgegap-wptheme/images/jpmorgan-showlogimg.png" 
              alt="JPMorgan" 
              className="h-8 md:h-10 w-auto object-contain"
            />
            <img 
              src="https://ridgegap.com/wp-content/themes/ridgegap-wptheme/images/bigbasket-showlogimg.png" 
              alt="BigBasket" 
              className="h-8 md:h-10 w-auto object-contain"
            />
            <img 
              src="https://ridgegap.com/wp-content/themes/ridgegap-wptheme/images/unacademy-showlogimg.png" 
              alt="Unacademy" 
              className="h-8 md:h-10 w-auto object-contain"
            />
          </div>
        </div>
      </section>
    </>
  );
}