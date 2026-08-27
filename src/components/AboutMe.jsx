import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function AboutMe() {
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
                  <span className="text-amber-600 text-sm font-bold leading-normal">About</span>
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
                    <div className="px-2 py-3 border-t border-gray-100">
                      <span className="text-amber-600 text-sm font-bold leading-normal">About</span>
                    </div>
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
            {/* Hero Section with Background Image */}
            <section className="relative px-4 sm:px-10 lg:px-20 py-32 overflow-hidden">
              <div className="absolute inset-0 z-0">
                <img 
                  src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=1200&q=80"
                  alt="Matthew with a happy groomed dog"
                  className="w-full h-full object-cover object-center"
                  style={{
                    WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 20%)',
                    maskImage: 'linear-gradient(to top, transparent 0%, black 20%)'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
              </div>
              
              <div className="relative z-10 max-w-4xl mx-auto text-center">
                <h1 className="text-gray-900 text-4xl md:text-6xl font-black leading-tight tracking-[-0.033em] mb-4">About Matthew</h1>
                <p className="text-amber-600 text-xl md:text-2xl font-semibold">Founder & Master Groomer, Matthew's Pet Atelier</p>
              </div>
            </section>

            {/* Content Section */}
            <section className="px-4 sm:px-10 lg:px-20 py-12 -mt-20 relative z-10">
              <div className="max-w-6xl mx-auto">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <div className="space-y-8">
                    {/* The Groomer's Foundation - Two Column Layout */}
                    <div className="flex flex-col lg:flex-row gap-12">
                      {/* Image Column */}
                      <div className="lg:w-2/5">
                        <div className="sticky top-24">
                          <img 
                            src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=600&q=80" 
                            alt="Matthew - Pet Grooming Expert" 
                            className="w-full h-auto rounded-lg shadow-lg object-cover"
                          />
                          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Hello, I'm Matthew</h3>
                            <p className="text-gray-700 leading-relaxed">
                              My name is Matthew, and my passion for pets has been the driving force behind everything I do. Growing up surrounded by animals, I learned early on that the bond between humans and their furry companions is something truly special—and that every pet deserves to feel loved, pampered, and beautiful.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Text Column */}
                      <div className="lg:w-3/5">
                        <div>
                          <h2 className="text-gray-900 text-2xl font-bold border-b border-gray-200 pb-3 mb-6">The Groomer's Journey</h2>
                          <p className="text-gray-700 text-lg leading-relaxed mb-6">
                            In the beginning, there was a love for animals and a desire to make a difference. I didn't know it then, but every grooming session, every wagging tail, and every purr of contentment was building more than a business—it was building a philosophy. Pet grooming taught me that patience isn't just a virtue; it's the foundation of trust. That lesson became my guiding principle.
                          </p>
                          
                          <div className="my-8 p-6 border-l-4 border-amber-600 bg-amber-50 rounded-r-lg">
                            <p className="text-xl font-semibold italic text-gray-900 leading-snug">
                              "I don't just groom pets—I nurture the bond between pets and their families through compassionate care."
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* The Transition */}
                    <div className="mt-16 pt-8 border-t border-gray-200">
                      <h2 className="text-gray-900 text-2xl font-bold border-b border-gray-200 pb-3 mb-6">The Vision</h2>
                      <p className="text-gray-700 text-lg leading-relaxed">
                        When I decided to turn my passion into a profession, I knew I wanted to create something different. A place where pets wouldn't just be groomed, but truly cared for. Where the experience would be as calming and enjoyable as a day at the spa. That vision became Matthew's Pet Atelier—a sanctuary where every pet receives personalized attention, expert care, and a touch of luxury.
                      </p>
                    </div>

                    {/* The Mission */}
                    <div className="mt-12">
                      <h2 className="text-gray-900 text-2xl font-bold border-b border-gray-200 pb-3 mb-4">Our Mission</h2>
                      <p className="text-gray-700 text-lg leading-relaxed">
                        At Matthew's Pet Atelier, we believe that every pet deserves to look and feel their absolute best. Our mission is to provide premium grooming services in a stress-free, loving environment. Whether it's a simple bath and brush or a full grooming package, we treat every pet like family—because to us, they are.
                      </p>
                    </div>

                    {/* Philosophy */}
                    <div className="mt-12">
                      <h2 className="text-gray-900 text-2xl font-bold border-b border-gray-200 pb-3 mb-4">My Philosophy</h2>
                      <p className="text-gray-700 text-lg leading-relaxed">
                        Every pet that walks through our doors gets more than just a grooming session. They get a partner in their care—someone who understands that true beauty comes from health, comfort, and trust. Whether it's your puppy's first groom or your senior pet's regular spa day, my approach remains the same: gentle handling, expert techniques, and genuine compassion.
                      </p>
                    </div>

                    {/* Credentials */}
                    <div className="mt-12 bg-gray-50 p-8 rounded-lg">
                      <h3 className="text-gray-900 text-xl font-bold mb-6">Credentials & Experience</h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <li className="flex items-center gap-3 text-gray-700">
                          <span className="material-symbols-outlined text-amber-600">verified</span>
                          <span>Certified Professional Groomer</span>
                        </li>
                        <li className="flex items-center gap-3 text-gray-700">
                          <span className="material-symbols-outlined text-amber-600">verified</span>
                          <span>8+ Years Grooming Experience</span>
                        </li>
                        <li className="flex items-center gap-3 text-gray-700">
                          <span className="material-symbols-outlined text-amber-600">verified</span>
                          <span>1,200+ Pets Groomed</span>
                        </li>
                        <li className="flex items-center gap-3 text-gray-700">
                          <span className="material-symbols-outlined text-amber-600">verified</span>
                          <span>98% Client Satisfaction Rate</span>
                        </li>
                        <li className="flex items-center gap-3 text-gray-700">
                          <span className="material-symbols-outlined text-amber-600">verified</span>
                          <span>Specialist in Breed-Specific Styling</span>
                        </li>
                        <li className="flex items-center gap-3 text-gray-700">
                          <span className="material-symbols-outlined text-amber-600">verified</span>
                          <span>Pet First Aid Certified</span>
                        </li>
                      </ul>
                    </div>

                    {/* Why Choose Us */}
                    <div className="mt-12">
                      <h2 className="text-gray-900 text-2xl font-bold border-b border-gray-200 pb-3 mb-6">Why Choose Matthew's Pet Atelier</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex gap-4 items-start">
                          <div className="flex-shrink-0 mt-1">
                            <span className="material-symbols-outlined text-amber-600 text-2xl">favorite</span>
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900">Gentle & Stress-Free</h4>
                            <p className="text-gray-600 text-sm">We prioritize your pet's comfort with calm handling and soothing techniques.</p>
                          </div>
                        </div>
                        <div className="flex gap-4 items-start">
                          <div className="flex-shrink-0 mt-1">
                            <span className="material-symbols-outlined text-amber-600 text-2xl">brush</span>
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900">Premium Products</h4>
                            <p className="text-gray-600 text-sm">We use only high-quality, pet-safe shampoos, conditioners, and grooming tools.</p>
                          </div>
                        </div>
                        <div className="flex gap-4 items-start">
                          <div className="flex-shrink-0 mt-1">
                            <span className="material-symbols-outlined text-amber-600 text-2xl">psychology</span>
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900">Animal Behavior Expertise</h4>
                            <p className="text-gray-600 text-sm">Understanding pet body language to ensure a positive experience for every animal.</p>
                          </div>
                        </div>
                        <div className="flex gap-4 items-start">
                          <div className="flex-shrink-0 mt-1">
                            <span className="material-symbols-outlined text-amber-600 text-2xl">home</span>
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900">Convenient Options</h4>
                            <p className="text-gray-600 text-sm">Mobile grooming and flexible scheduling to fit your busy lifestyle.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="px-4 sm:px-10 lg:px-20 py-20">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Ready to Pamper Your Pet?</h2>
                <p className="mt-4 text-lg leading-8 text-gray-700">Book your pet's first grooming session with Matthew and discover the difference expert care makes.</p>
                <div className="mt-10">
                  <Link 
                    to="/Contact" 
                    onClick={() => handleNavClick('/Contact')}
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-amber-600 text-white text-base font-bold leading-normal tracking-[0.015em] mx-auto hover:bg-amber-700 transition-all"
                  >
                    <span className="truncate">Book Your Pet's Grooming Session</span>
                  </Link>
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
                    <div className="mt-6">
                      <div className="flex justify-center md:justify-start space-x-4">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>

          {/* Footer */}
<footer className="bg-gray-100 text-gray-700 border-t border-gray-200">
  <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
    {/* Social Media Section */}
    <div className="flex justify-center">
      <a 
        href="https://www.instagram.com/matthewspetatelier" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-gray-600 hover:text-amber-600 transition-colors"
        aria-label="Instagram"
      >
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.948-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
        </svg>
        <span className="text-sm font-medium">Our Instagram</span>
      </a>
    </div>

    {/* Navigation Links */}
    <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm">
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

    {/* Copyright */}
    <div className="mt-8 text-center">
      <p className="text-xs leading-5 text-gray-500">
        © {new Date().getFullYear()} Matthew's Pet Atelier. All rights reserved.
      </p>
    </div>
  </div>
</footer>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;