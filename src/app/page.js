export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Nav */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-blue-600">
              Kaswell Property Management
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-blue-600">Services</a>
              <a href="#properties" className="text-gray-700 hover:text-blue-600">Properties</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Professional Property Management You Can Trust
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Maximizing your investment returns while providing exceptional tenant experiences across Austin, Texas.
          </p>
          <div className="space-x-4">
            <a href="#contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 inline-block">
              Get Started
            </a>
            <a href="#services" className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 inline-block">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Tenant Screening</h3>
              <p className="text-gray-600">
                Comprehensive background checks, credit verification, and rental history analysis to find quality tenants.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Rent Collection</h3>
              <p className="text-gray-600">
                Automated rent collection, late payment tracking, and financial reporting for seamless cash flow.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Maintenance Coordination</h3>
              <p className="text-gray-600">
                24/7 maintenance request handling with our network of trusted contractors and repair professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-100 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>
          <form className="bg-white p-8 rounded-lg shadow-md">
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Name</label>
              <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600" />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Email</label>
              <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600" />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Message</label>
              <textarea rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 Kaswell Property Management. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}