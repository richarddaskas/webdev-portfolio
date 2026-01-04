export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Minimal top bar */}
      <div className="bg-primary-600 text-white py-2 px-4 text-center text-sm font-medium">
        Texas-Based Property Management • Direct: (512) 555-0100
      </div>

      {/* Header - Side navigation style */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-24">
            {/* Logo - minimal */}
            <div className="flex items-center gap-3">
              <div className="w-3 h-12 bg-gradient-to-b from-primary-500 to-primary-700"></div>
              <div>
                <div className="text-2xl font-bold tracking-tight" style={{fontFamily: 'var(--font-display)'}}>KASWELL</div>
                <div className="text-xs text-gray-500 font-medium tracking-widest uppercase">Property Management</div>
              </div>
            </div>

            {/* Navigation - horizontal pills */}
            <div className="hidden lg:flex items-center gap-2">
              <a href="#services" className="px-6 py-2.5 text-gray-700 hover:bg-gray-100 rounded-full transition font-medium">Services</a>
              <a href="#about" className="px-6 py-2.5 text-gray-700 hover:bg-gray-100 rounded-full transition font-medium">About</a>
              <a href="#reviews" className="px-6 py-2.5 text-gray-700 hover:bg-gray-100 rounded-full transition font-medium">Reviews</a>
              <a href="#contact" className="px-8 py-2.5 bg-primary-600 text-white rounded-full font-semibold hover:bg-primary-700 transition ml-4">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero - Split screen design */}
      <section className="relative bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-0 min-h-[600px]">
            {/* Left - Content */}
            <div className="px-6 lg:px-12 py-16 lg:py-24 flex flex-col justify-center">
              <div className="inline-block px-4 py-1.5 bg-primary-50 text-primary-700 rounded-full text-sm font-semibold mb-6 w-fit">
                Family Owned Since 2019
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-[1.1]" style={{fontFamily: 'var(--font-display)'}}>
                Property<br/>
                Management<br/>
                <span className="text-primary-600">Done Right</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-10 max-w-lg leading-relaxed">
                We manage our own properties across Texas, so we know what matters. Transparent pricing, honest service, real results.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition inline-flex items-center gap-2">
                  Schedule Consultation
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a href="#about" className="px-8 py-4 border-2 border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-900 hover:text-white transition">
                  Learn More
                </a>
              </div>
            </div>

            {/* Right - Image */}
            <div className="relative h-[400px] lg:h-auto">
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80" 
                alt="Texas property"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-dark-800 text-white py-12">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold mb-1" style={{fontFamily: 'var(--font-display)'}}>5+</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-1" style={{fontFamily: 'var(--font-display)'}}>24/7</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Support</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-1" style={{fontFamily: 'var(--font-display)'}}>100%</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services - Card grid with offset */}
      <section id="services" className="py-24 bg-stone-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="mb-16">
            <div className="text-sm font-semibold text-primary-600 mb-3 uppercase tracking-wider">Our Services</div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{fontFamily: 'var(--font-display)'}}>
              Everything You Need
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              Full-service property management designed for owners who value their time and investment.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Service 1 */}
            <div className="bg-white p-8 border-l-4 border-primary-600 hover:shadow-lg transition group">
              <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-600 transition">
                <svg className="w-7 h-7 text-primary-600 group-hover:text-white transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{fontFamily: 'var(--font-display)'}}>Tenant Screening</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Comprehensive background checks, credit reports, and reference verification to find reliable, long-term tenants.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 mt-0.5">→</span>
                  <span>Full background checks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 mt-0.5">→</span>
                  <span>Employment verification</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 mt-0.5">→</span>
                  <span>Landlord references</span>
                </li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 border-l-4 border-gray-900 hover:shadow-lg transition group">
              <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gray-900 transition">
                <svg className="w-7 h-7 text-gray-900 group-hover:text-white transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{fontFamily: 'var(--font-display)'}}>Rent Collection</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Automated systems and personal follow-up ensure consistent cash flow with detailed monthly statements.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-gray-900 mt-0.5">→</span>
                  <span>Online payment portal</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-900 mt-0.5">→</span>
                  <span>Monthly reporting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-900 mt-0.5">→</span>
                  <span>Direct deposits</span>
                </li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 border-l-4 border-primary-600 hover:shadow-lg transition group">
              <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-600 transition">
                <svg className="w-7 h-7 text-primary-600 group-hover:text-white transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{fontFamily: 'var(--font-display)'}}>Maintenance</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                24/7 emergency support with vetted local contractors. We handle everything from routine to urgent repairs.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 mt-0.5">→</span>
                  <span>Emergency hotline</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 mt-0.5">→</span>
                  <span>Licensed contractors</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 mt-0.5">→</span>
                  <span>Regular inspections</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About - Image/text side by side alternate */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?w=800&q=80" 
                alt="Property management"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>

            <div className="order-1 lg:order-2">
              <div className="text-sm font-semibold text-primary-600 mb-3 uppercase tracking-wider">Our Story</div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{fontFamily: 'var(--font-display)'}}>
                Property Owners<br/>
                First, Managers Second
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  We started managing properties because we owned them ourselves. Five years ago, we bought our first rental and quickly learned what worked—and what didn't.
                </p>
                <p className="text-lg">
                  Today we manage 3 properties across Texas and help other owners navigate the same challenges we faced. No corporate playbook, just honest service from people who understand.
                </p>
              </div>

              <div className="mt-10 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-1 h-20 bg-primary-600 mt-1"></div>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">Direct Access</div>
                    <p className="text-gray-600">Call or text us directly—no phone trees or voicemail.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-1 h-20 bg-primary-600 mt-1"></div>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">Monthly Visits</div>
                    <p className="text-gray-600">We personally inspect every property we manage each month.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-1 h-20 bg-primary-600 mt-1"></div>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">Full Transparency</div>
                    <p className="text-gray-600">Clear reporting and open communication, always.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Minimal cards */}
      <section id="reviews" className="py-24 bg-stone-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="mb-16 text-center">
            <div className="text-sm font-semibold text-primary-600 mb-3 uppercase tracking-wider">Client Reviews</div>
            <h2 className="text-4xl lg:text-5xl font-bold" style={{fontFamily: 'var(--font-display)'}}>
              What Owners Say
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-10 border-l-4 border-primary-600">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                "I was hesitant to trust anyone with my property, but Kaswell proved me wrong. They handle everything professionally and keep me informed. Best decision I made."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold">
                  MJ
                </div>
                <div>
                  <div className="font-bold text-gray-900">Michael J.</div>
                  <div className="text-sm text-gray-600">Single-Family Home</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 border-l-4 border-gray-900">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                "Their responsiveness is incredible. When my AC went out in July, they had someone there within hours. That's the kind of service that keeps tenants happy."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold">
                  DW
                </div>
                <div>
                  <div className="font-bold text-gray-900">David W.</div>
                  <div className="text-sm text-gray-600">Condo Owner</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-dark-700 text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6" style={{fontFamily: 'var(--font-display)'}}>
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300">
              Schedule a free consultation to discuss your property and learn how we can help.
            </p>
          </div>

          <form className="max-w-2xl mx-auto space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2 uppercase tracking-wider text-gray-400">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 uppercase tracking-wider text-gray-400">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 uppercase tracking-wider text-gray-400">Phone</label>
              <input 
                type="tel" 
                className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition"
                placeholder="(555) 123-4567"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 uppercase tracking-wider text-gray-400">Property Address</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition"
                placeholder="123 Main St, Dallas, TX"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 uppercase tracking-wider text-gray-400">Message</label>
              <textarea 
                rows="4" 
                className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition resize-none"
                placeholder="Tell us about your property..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full px-8 py-4 bg-primary-600 text-white font-semibold hover:bg-primary-700 transition"
            >
              Send Message
            </button>

            <p className="text-center text-sm text-gray-400">
              We typically respond within 2-3 hours during business hours
            </p>
          </form>
        </div>
      </section>

      {/* Footer - Minimal */}
      <footer className="bg-dark-900 text-white py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-8 bg-primary-600"></div>
                <span className="text-xl font-bold" style={{fontFamily: 'var(--font-display)'}}>KASWELL</span>
              </div>
              <p className="text-gray-400 text-sm">
                Family-owned property management in Texas.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#services" className="hover:text-white transition">Tenant Screening</a></li>
                <li><a href="#services" className="hover:text-white transition">Rent Collection</a></li>
                <li><a href="#services" className="hover:text-white transition">Maintenance</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#about" className="hover:text-white transition">About</a></li>
                <li><a href="#reviews" className="hover:text-white transition">Reviews</a></li>
                <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Texas</li>
                <li>(512) 555-0100</li>
                <li>hello@kaswellpm.com</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 Kaswell Property Management. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}