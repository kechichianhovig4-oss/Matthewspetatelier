import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function PrivacyPolicy() {
  const navigate = useNavigate();
  const [isNavigating, setIsNavigating] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (path) => {
    setIsNavigating(true);
    setIsMobileMenuOpen(false);
    
    setTimeout(() => {
      navigate(path);
      setIsNavigating(false);
    }, 300);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-white font-display text-gray-900">
      <link href="https://fonts.googleapis.com/css2?family=Spline+Sans:wght@400;500;700;800&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          {/* Header */}
          <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm">
            <div className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-gray-200 px-4 sm:px-10 lg:px-20 py-3">
              <div className="flex items-center gap-4 text-gray-900">
                <Link 
                  to="/" 
                  onClick={() => handleNavClick('/')}
                  className="flex items-center gap-4 hover:opacity-80 transition-opacity"
                >
                  <div className="size-8 text-amber-600">
                    <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                      <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
                      <path d="M13 8h-2v5h5v-2h-3z"/>
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg font-bold leading-tight tracking-[-0.015em]">Matthew's Pet Atelier</h2>
                </Link>
              </div>
              
              <div className="hidden lg:flex flex-1 justify-end gap-8">
                <div className="flex items-center gap-9">
                  <Link 
                    to="/" 
                    onClick={() => handleNavClick('/')}
                    className="text-gray-900 text-sm font-medium leading-normal hover:text-amber-600 transition-colors"
                  >
                    Home
                  </Link>
                  <Link 
                    to="/Services" 
                    onClick={() => handleNavClick('/Services')}
                    className="text-gray-900 text-sm font-medium leading-normal hover:text-amber-600 transition-colors"
                  >
                    Services
                  </Link>
                  <Link 
                    to="/AboutMe" 
                    onClick={() => handleNavClick('/AboutMe')}
                    className="text-gray-900 text-sm font-medium leading-normal hover:text-amber-600 transition-colors"
                  >
                    About
                  </Link>
                  <Link 
                    to="/Contact" 
                    onClick={() => handleNavClick('/Contact')}
                    className="text-gray-900 text-sm font-medium leading-normal hover:text-amber-600 transition-colors"
                  >
                    Contact
                  </Link>
                  <Link 
                    to="/Testimonials" 
                    onClick={() => handleNavClick('/Testimonials')}
                    className="text-gray-900 text-sm font-medium leading-normal hover:text-amber-600 transition-colors"
                  >
                    Testimonials
                  </Link>
                </div>
                <Link 
                  to="/Contact" 
                  onClick={() => handleNavClick('/Contact')}
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-amber-600 text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-amber-700 transition-all"
                >
                  <span className="truncate">Book Now</span>
                </Link>
              </div>
              
              {/* Mobile Menu Button */}
              <div className="lg:hidden">
                <button 
                  onClick={toggleMobileMenu}
                  className="text-gray-900 p-2"
                >
                  <span className="material-symbols-outlined">
                    {isMobileMenuOpen ? 'close' : 'menu'}
                  </span>
                </button>
              </div>
            </div>
            
            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
              <div className="lg:hidden bg-white border-b border-gray-200 shadow-lg">
                <div className="px-4 py-6 space-y-4">
                  <div className="space-y-3">
                    <Link 
                      to="/" 
                      onClick={() => handleNavClick('/')}
                      className="block px-2 py-3 text-gray-900 text-sm font-medium leading-normal hover:text-amber-600 transition-colors"
                    >
                      Home
                    </Link>
                    <Link 
                      to="/Services" 
                      onClick={() => handleNavClick('/Services')}
                      className="block px-2 py-3 text-gray-900 text-sm font-medium leading-normal hover:text-amber-600 transition-colors border-t border-gray-100"
                    >
                      Services
                    </Link>
                    <Link 
                      to="/AboutMe" 
                      onClick={() => handleNavClick('/AboutMe')}
                      className="block px-2 py-3 text-gray-900 text-sm font-medium leading-normal hover:text-amber-600 transition-colors border-t border-gray-100"
                    >
                      About
                    </Link>
                    <Link 
                      to="/Contact" 
                      onClick={() => handleNavClick('/Contact')}
                      className="block px-2 py-3 text-gray-900 text-sm font-medium leading-normal hover:text-amber-600 transition-colors border-t border-gray-100"
                    >
                      Contact
                    </Link>
                    <Link 
                      to="/Testimonials" 
                      onClick={() => handleNavClick('/Testimonials')}
                      className="block px-2 py-3 text-gray-900 text-sm font-medium leading-normal hover:text-amber-600 transition-colors border-t border-gray-100"
                    >
                      Testimonials
                    </Link>
                  </div>
                  <Link 
                    to="/Contact" 
                    onClick={() => handleNavClick('/Contact')}
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-amber-600 text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-amber-700 transition-all mt-4"
                  >
                    <span className="truncate">Book Now</span>
                  </Link>
                </div>
              </div>
            )}
          </header>

          {/* Main Content */}
          <main className="flex-1">
            <section className="px-4 sm:px-10 lg:px-20 py-16">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Privacy Policy</h1>
                <p className="text-gray-600 mb-8">Last Updated: August 2025</p>
                
                <div className="prose prose-lg prose-amber max-w-none">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    At Matthew's Pet Atelier, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Information We Collect</h2>
                  <div className="space-y-4 text-gray-700">
                    <p><strong className="font-semibold">Personal Information:</strong> We may collect personal information such as your name, email address, phone number, and mailing address when you:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Book a grooming appointment</li>
                      <li>Fill out our contact form</li>
                      <li>Subscribe to our newsletter</li>
                      <li>Request a quote or consultation</li>
                      <li>Create an account on our website</li>
                    </ul>
                    
                    <p className="mt-4"><strong className="font-semibold">Pet Information:</strong> To provide the best care for your pet, we may collect:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Pet name, breed, age, and weight</li>
                      <li>Health conditions and medical history</li>
                      <li>Behavioral information and temperament</li>
                      <li>Grooming preferences and requirements</li>
                      <li>Veterinarian contact information</li>
                    </ul>
                    
                    <p className="mt-4"><strong className="font-semibold">Usage Data:</strong> We automatically collect certain information when you visit our website, including:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>IP address and browser type</li>
                      <li>Pages visited and time spent</li>
                      <li>Referring website and search terms</li>
                      <li>Device information and operating system</li>
                    </ul>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How We Use Your Information</h2>
                  <div className="space-y-4 text-gray-700">
                    <p>We use the information we collect to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Provide and maintain our grooming services</li>
                      <li>Process appointments and payments</li>
                      <li>Communicate with you about appointments, reminders, and updates</li>
                      <li>Send promotional materials and special offers (with your consent)</li>
                      <li>Improve our services and customer experience</li>
                      <li>Ensure the safety and well-being of your pet</li>
                      <li>Comply with legal obligations and regulatory requirements</li>
                    </ul>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Information Sharing</h2>
                  <div className="space-y-4 text-gray-700">
                    <p>We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong className="font-semibold">Service Providers:</strong> We may share information with trusted third-party service providers who assist in operating our business (e.g., payment processors, appointment scheduling software).</li>
                      <li><strong className="font-semibold">Veterinary Care:</strong> In the event of a medical emergency, we may share relevant information with your pet's veterinarian.</li>
                      <li><strong className="font-semibold">Legal Requirements:</strong> We may disclose information if required by law or to protect the rights, property, or safety of our business, employees, or customers.</li>
                    </ul>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Data Security</h2>
                  <p className="text-gray-700">
                    We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. While we strive to protect your information, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Your Rights</h2>
                  <div className="space-y-4 text-gray-700">
                    <p>You have the right to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Access and review your personal information</li>
                      <li>Request corrections to inaccurate or incomplete information</li>
                      <li>Request deletion of your personal information (subject to legal requirements)</li>
                      <li>Opt-out of marketing communications at any time</li>
                      <li>Withdraw consent for data processing at any time</li>
                    </ul>
                    <p className="mt-4">To exercise these rights, please contact us using the information provided below.</p>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Cookies and Tracking</h2>
                  <p className="text-gray-700">
                    Our website uses cookies to enhance your browsing experience. Cookies are small text files stored on your device that help us analyze traffic, personalize content, and improve our website. You can control cookie preferences through your browser settings. Please note that disabling cookies may affect certain website features.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Children's Privacy</h2>
                  <p className="text-gray-700">
                    Our services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child under 13, please contact us immediately.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Third-Party Links</h2>
                  <p className="text-gray-700">
                    Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party websites you visit.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Changes to This Policy</h2>
                  <p className="text-gray-700">
                    We reserve the right to update this Privacy Policy at any time. We will notify you of significant changes by posting the updated policy on our website and updating the "Last Updated" date. We encourage you to review this policy periodically.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Us</h2>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-700">If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us:</p>
                    <div className="mt-4 space-y-2 text-gray-700">
                      <p><strong>Matthew's Pet Atelier</strong></p>
                      <p>620 SW 19th St, San Antonio, TX 78207</p>
                      <p>Email: Matthews.Pet.Atelier@consultant.com</p>
                      <p>Phone: +1 (916) 604-4908</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Details Section */}
            <section className="bg-gray-50 border-t border-gray-200 mt-16">
              <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                  <div className="md:col-span-1">
                    <h3 className="text-lg font-bold text-gray-900">Contact Matthew</h3>
                    <div className="mt-4 space-y-2 text-gray-600">
                      <p className="flex items-center justify-center md:justify-start">
                        <span className="material-symbols-outlined mr-2 text-amber-600">email</span>
                        <span>Matthews.Pet.Atelier@consultant.com</span>
                      </p>
                      <p className="flex items-center justify-center md:justify-start">
                        <span className="material-symbols-outlined mr-2 text-amber-600">phone</span>
                        <span>+1 (916) 604-4908</span>
                      </p>
                      <p className="flex items-center justify-center md:justify-start">
                        <span className="material-symbols-outlined mr-2 text-amber-600">location_on</span>
                        <span>620 SW 19th St<br />San Antonio, TX 78207</span>
                      </p>
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <h3 className="text-lg font-bold text-gray-900">Studio Hours</h3>
                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-gray-600">
                      <p><strong>Monday - Friday:</strong> 8:00 AM - 7:00 PM</p>
                      <p><strong>Saturday:</strong> 9:00 AM - 5:00 PM</p>
                      <p><strong>Sunday:</strong> Closed</p>
                      <p><strong>Mobile Service:</strong> By appointment only</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>

          {/* Footer */}
          <footer className="bg-gray-100 text-gray-700">
            <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
              <div className="flex justify-center space-x-6">
                <a 
                  href="https://www.instagram.com/matthewspetatelier" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-amber-600 transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.948-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                  </svg>
                </a>
              </div>
              <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
                <Link 
                  to="/AboutMe" 
                  onClick={() => handleNavClick('/AboutMe')}
                  className="hover:text-amber-600 transition-colors"
                >
                  About
                </Link>
                <Link 
                  to="/Contact" 
                  onClick={() => handleNavClick('/Contact')}
                  className="hover:text-amber-600 transition-colors"
                >
                  Contact
                </Link>
                <Link 
                  to="/PrivacyPolicy" 
                  onClick={() => handleNavClick('/PrivacyPolicy')}
                  className="hover:text-amber-600 transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link 
                  to="/RefundPolicy" 
                  onClick={() => handleNavClick('/RefundPolicy')}
                  className="hover:text-amber-600 transition-colors"
                >
                  Refund Policy
                </Link>
              </div>
              <p className="mt-8 text-center text-xs leading-5">© 2025 Matthew's Pet Atelier. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;