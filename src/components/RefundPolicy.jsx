import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function RefundPolicy() {
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
                <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Refund Policy</h1>
                <p className="text-gray-600 mb-8">Last Updated: August 2025</p>
                
                <div className="prose prose-lg prose-amber max-w-none">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    At Matthew's Pet Atelier, we are committed to providing exceptional grooming services for your beloved pets. We understand that sometimes situations change, and we strive to be fair and transparent in our refund and cancellation policies.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Cancellation Policy</h2>
                  <div className="space-y-4 text-gray-700">
                    <p><strong className="font-semibold">24-Hour Cancellation Notice:</strong> We require at least 24 hours' notice for any appointment cancellation or rescheduling. This allows us to offer the time slot to other clients who may be waiting.</p>
                    
                    <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                      <p className="font-semibold text-amber-800">Late Cancellations:</p>
                      <p className="text-amber-700">Cancellations made within 24 hours of the scheduled appointment may be subject to a 50% cancellation fee of the scheduled service cost.</p>
                    </div>

                    <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                      <p className="font-semibold text-red-800">No-Show Policy:</p>
                      <p className="text-red-700">Clients who do not show up for their scheduled appointment without prior notice will be charged the full amount of the scheduled service.</p>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Refund Policy for Services</h2>
                  <div className="space-y-4 text-gray-700">
                    <p><strong className="font-semibold">Service Satisfaction:</strong> Your pet's satisfaction and well-being are our top priorities. If you are not completely satisfied with our grooming service, please let us know within 24 hours of the appointment.</p>
                    
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <p className="font-semibold">We will work with you to address any concerns by:</p>
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Offering to correct the service at no additional charge</li>
                        <li>Providing a partial refund based on the specific issue</li>
                        <li>Discussing alternative solutions to ensure your satisfaction</li>
                      </ul>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Refund Policy for Package Purchases</h2>
                  <div className="space-y-4 text-gray-700">
                    <p><strong className="font-semibold">Membership Plans:</strong> Monthly memberships can be canceled at any time with 30 days' written notice. Refunds for unused portions of a membership will be prorated based on the number of services remaining.</p>
                    
                    <p><strong className="font-semibold">Prepaid Packages:</strong> Prepaid grooming packages are valid for 6 months from the date of purchase. Unused portions may be refunded minus a 20% administrative fee, or transferred to another pet with prior approval.</p>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Pet Home Services</h2>
                  <div className="space-y-4 text-gray-700">
                    <p>For our pet home service clients (boarding facilities, daycare centers, etc.):</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong className="font-semibold">Bulk Bookings:</strong> Cancellations for bulk service bookings must be made at least 48 hours in advance to avoid a cancellation fee.</li>
                      <li><strong className="font-semibold">Monthly Contracts:</strong> Monthly service contracts require 30 days' written notice for cancellation. Refunds will be prorated based on services already provided.</li>
                      <li><strong className="font-semibold">Volume Discounts:</strong> If a volume discount was applied to a booking and the number of pets is reduced, the discount may be adjusted and the price recalculated accordingly.</li>
                    </ul>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Emergency Situations</h2>
                  <div className="space-y-4 text-gray-700">
                    <p>We understand that emergencies happen. In the event of:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong className="font-semibold">Pet Illness or Injury:</strong> If your pet becomes ill or injured and cannot receive grooming services, we will work with you to reschedule at no additional cost.</li>
                      <li><strong className="font-semibold">Weather Emergencies:</strong> In cases of severe weather, appointments may be rescheduled without penalty.</li>
                      <li><strong className="font-semibold">Personal Emergencies:</strong> We understand that life happens—please contact us directly, and we will do our best to accommodate your situation.</li>
                    </ul>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Refund Processing</h2>
                  <div className="space-y-4 text-gray-700">
                    <p>Approved refunds will be processed within 5-10 business days and credited back to the original payment method. Please note:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Refunds may take additional time depending on your bank or payment processor</li>
                      <li>Processing fees from payment processors may be deducted from the refund amount</li>
                      <li>All refunds will be issued in the original currency of the payment</li>
                    </ul>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How to Request a Refund</h2>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-700">To request a refund or discuss any concerns about our services, please contact us:</p>
                    <div className="mt-4 space-y-3">
                      <p className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-amber-600">phone</span>
                        <span className="font-medium">Call or Text:</span>
                        <span>+1 (916) 604-4908</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-amber-600">email</span>
                        <span className="font-medium">Email:</span>
                        <span>Matthews.Pet.Atelier@consultant.com</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-amber-600">location_on</span>
                        <span className="font-medium">Visit Us:</span>
                        <span>620 SW 19th St, San Antonio, TX 78207</span>
                      </p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="text-sm text-gray-600">Please have the following information ready when you contact us:</p>
                      <ul className="list-disc pl-6 text-sm text-gray-600 mt-2 space-y-1">
                        <li>Full name and contact information</li>
                        <li>Pet's name and service date</li>
                        <li>Service(s) provided and amount paid</li>
                        <li>Reason for requesting a refund</li>
                      </ul>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Exceptions and Special Circumstances</h2>
                  <div className="space-y-4 text-gray-700">
                    <p>We reserve the right to make exceptions to this policy on a case-by-case basis. Factors we may consider include:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Client history and loyalty</li>
                      <li>Nature of the issue or concern</li>
                      <li>Frequency of past cancellations or refund requests</li>
                      <li>Extenuating circumstances beyond the client's control</li>
                    </ul>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Policy Updates</h2>
                  <p className="text-gray-700">
                    Matthew's Pet Atelier reserves the right to update this Refund Policy at any time. Changes will be posted on our website, and the "Last Updated" date will be revised. We encourage you to review this policy periodically for any changes.
                  </p>

                  <div className="mt-8 p-6 bg-amber-50 rounded-lg border border-amber-200">
                    <h3 className="text-lg font-bold text-amber-800 mb-2">Our Commitment to You</h3>
                    <p className="text-amber-700">
                      At Matthew's Pet Atelier, we believe in building lasting relationships with our clients based on trust, quality, and transparency. We are committed to addressing any concerns you may have and ensuring that both you and your pet have a positive experience with our services.
                    </p>
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

export default RefundPolicy;