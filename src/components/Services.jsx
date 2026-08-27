import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Services() {
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
                  <span className="text-amber-600 text-sm font-bold leading-normal">Services</span>
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
                    <div className="px-2 py-3 border-t border-gray-100">
                      <span className="text-amber-600 text-sm font-bold leading-normal">Services</span>
                    </div>
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
            {/* Hero Section */}
            <div className="px-4 sm:px-10 lg:px-20 py-12 bg-gradient-to-r from-amber-50 to-white">
              <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Our Premium Grooming Services</h1>
              <p className="text-gray-600 text-lg max-w-2xl">
                From individual pampering to full-scale pet home services, we provide expert care for every furry friend.
              </p>
            </div>

            {/* Category: Individual Pet Services */}
            <div className="px-4 sm:px-10 lg:px-20 py-8">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-amber-600 flex items-center gap-2">
                  <span className="material-symbols-outlined">pets</span>
                  Individual Pet Services
                </h2>
                <p className="text-gray-600 mt-1">Premium grooming for your beloved companion</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Individual Service 1 */}
                <div className="bg-white p-6 border border-solid border-gray-200 rounded-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center">
                        <span className="material-symbols-outlined text-amber-600">spa</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Full Grooming Package</h3>
                      <p className="text-2xl font-black text-amber-600 mt-1">$85</p>
                      <ul className="mt-3 space-y-2 text-sm text-gray-600">
                        <li className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-amber-600 text-sm">check_circle</span>
                          Full bath & blow-dry
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-amber-600 text-sm">check_circle</span>
                          Professional haircut
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-amber-600 text-sm">check_circle</span>
                          Nail trimming & filing
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-amber-600 text-sm">check_circle</span>
                          Ear cleaning
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Individual Service 2 */}
                <div className="bg-white p-6 border border-solid border-amber-600 rounded-lg shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center">
                        <span className="material-symbols-outlined text-amber-600">brush</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Bath & Brush</h3>
                      <p className="text-2xl font-black text-amber-600 mt-1">$50</p>
                      <ul className="mt-3 space-y-2 text-sm text-gray-600">
                        <li className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-amber-600 text-sm">check_circle</span>
                          Gentle shampoo & conditioner
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-amber-600 text-sm">check_circle</span>
                          Thorough brushing
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-amber-600 text-sm">check_circle</span>
                          Towel & blow-dry
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-amber-600 text-sm">check_circle</span>
                          Light finishing touches
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Individual Service 3 */}
                <div className="bg-white p-6 border border-solid border-gray-200 rounded-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center">
                        <span className="material-symbols-outlined text-amber-600">content_cut</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Haircut & Styling</h3>
                      <p className="text-2xl font-black text-amber-600 mt-1">$65</p>
                      <ul className="mt-3 space-y-2 text-sm text-gray-600">
                        <li className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-amber-600 text-sm">check_circle</span>
                          Breed-specific styling
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-amber-600 text-sm">check_circle</span>
                          Custom trim & shaping
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-amber-600 text-sm">check_circle</span>
                          Face & paw finishing
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-amber-600 text-sm">check_circle</span>
                          Style consultation
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Individual Service 4 */}
                <div className="bg-white p-6 border border-solid border-gray-200 rounded-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center">
                        <span className="material-symbols-outlined text-amber-600">cleaning_services</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Spa & De-shedding</h3>
                      <p className="text-2xl font-black text-amber-600 mt-1">$75</p>
                      <ul className="mt-3 space-y-2 text-sm text-gray-600">
                        <li className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-amber-600 text-sm">check_circle</span>
                          Deep conditioning treatment
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-amber-600 text-sm">check_circle</span>
                          De-shedding treatment
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-amber-600 text-sm">check_circle</span>
                          Paw balm & massage
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-amber-600 text-sm">check_circle</span>
                          Pet-safe cologne spritz
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Individual Service 5 */}
                <div className="bg-white p-6 border border-solid border-gray-200 rounded-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center">
                        <span className="material-symbols-outlined text-amber-600">pets</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Puppy's First Groom</h3>
                      <p className="text-2xl font-black text-amber-600 mt-1">$55</p>
                      <ul className="mt-3 space-y-2 text-sm text-gray-600">
                        <li className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-amber-600 text-sm">check_circle</span>
                          Gentle introduction to grooming
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-amber-600 text-sm">check_circle</span>
                          Light bath & brush
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-amber-600 text-sm">check_circle</span>
                          Nail introduction
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-amber-600 text-sm">check_circle</span>
                          Positive reinforcement
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Individual Service 6 */}
                <div className="bg-white p-6 border border-solid border-gray-200 rounded-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center">
                        <span className="material-symbols-outlined text-amber-600">elderly</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Senior Pet Care</h3>
                      <p className="text-2xl font-black text-amber-600 mt-1">$70</p>
                      <ul className="mt-3 space-y-2 text-sm text-gray-600">
                        <li className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-amber-600 text-sm">check_circle</span>
                          Gentle, low-stress handling
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-amber-600 text-sm">check_circle</span>
                          Arthritis-friendly grooming
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-amber-600 text-sm">check_circle</span>
                          Extra padding & comfort
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-amber-600 text-sm">check_circle</span>
                          Health check observations
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Individual Service 7 */}
                <div className="bg-white p-6 border border-solid border-gray-200 rounded-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center">
                        <span className="material-symbols-outlined text-amber-600">nail</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Nail & Paw Care</h3>
                      <p className="text-2xl font-black text-amber-600 mt-1">$30</p>
                      <ul className="mt-3 space-y-2 text-sm text-gray-600">
                        <li className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-amber-600 text-sm">check_circle</span>
                          Nail trimming & filing
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-amber-600 text-sm">check_circle</span>
                          Paw pad moisturizing
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-amber-600 text-sm">check_circle</span>
                          Fur between pads trimmed
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-amber-600 text-sm">check_circle</span>
                          Quick check for injuries
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Individual Service 8 */}
                <div className="bg-white p-6 border border-solid border-gray-200 rounded-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center">
                        <span className="material-symbols-outlined text-amber-600">earbuds</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Ear & Teeth Care</h3>
                      <p className="text-2xl font-black text-amber-600 mt-1">$25</p>
                      <ul className="mt-3 space-y-2 text-sm text-gray-600">
                        <li className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-amber-600 text-sm">check_circle</span>
                          Ear cleaning & plucking
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-amber-600 text-sm">check_circle</span>
                          Teeth brushing
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-amber-600 text-sm">check_circle</span>
                          Fresh breath treatment
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-amber-600 text-sm">check_circle</span>
                          Health check observations
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Individual Service 9 */}
                <div className="bg-white p-6 border border-solid border-gray-200 rounded-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center">
                        <span className="material-symbols-outlined text-amber-600">local_shipping</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Mobile Grooming</h3>
                      <p className="text-2xl font-black text-amber-600 mt-1">$120</p>
                      <ul className="mt-3 space-y-2 text-sm text-gray-600">
                        <li className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-amber-600 text-sm">check_circle</span>
                          At-home convenience
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-amber-600 text-sm">check_circle</span>
                          Fully equipped mobile van
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-amber-600 text-sm">check_circle</span>
                          Low-stress environment
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-amber-600 text-sm">check_circle</span>
                          Full grooming services
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Individual Service 10 */}
                <div className="bg-white p-6 border border-solid border-gray-200 rounded-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center">
                        <span className="material-symbols-outlined text-amber-600">calendar_month</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Monthly Membership</h3>
                      <p className="text-2xl font-black text-amber-600 mt-1">$180<span className="text-sm font-normal text-gray-500">/mo</span></p>
                      <ul className="mt-3 space-y-2 text-sm text-gray-600">
                        <li className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-amber-600 text-sm">check_circle</span>
                          1 full groom per month
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-amber-600 text-sm">check_circle</span>
                          10% off additional services
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-amber-600 text-sm">check_circle</span>
                          Priority booking
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-amber-600 text-sm">check_circle</span>
                          Free nail trim between visits
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Category: Pet Home Services (Group) */}
            <div className="px-4 sm:px-10 lg:px-20 py-8 bg-gray-50">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-amber-600 flex items-center gap-2">
                  <span className="material-symbols-outlined">home</span>
                  Pet Home Services (15-30 Pets)
                </h2>
                <p className="text-gray-600 mt-1">Full-service grooming for pet homes, shelters, and boarding facilities</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Pet Home Service 1 */}
                <div className="bg-white p-6 border border-solid border-amber-600 rounded-lg shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">BEST VALUE</div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center">
                        <span className="material-symbols-outlined text-amber-600">pets</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Full Home Grooming Package</h3>
                      <p className="text-2xl font-black text-amber-600 mt-1">$1,200</p>
                      <p className="text-sm text-gray-500">For up to 20 pets</p>
                      <ul className="mt-3 space-y-2 text-sm text-gray-600">
                        <li className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-amber-600 text-sm">check_circle</span>
                          Full grooming for all pets
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-amber-600 text-sm">check_circle</span>
                          Bath, brush & haircut
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-amber-600 text-sm">check_circle</span>
                          Nail & ear care
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-amber-600 text-sm">check_circle</span>
                          On-site service at your location
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Pet Home Service 2 */}
                <div className="bg-white p-6 border border-solid border-gray-200 rounded-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center">
                        <span className="material-symbols-outlined text-amber-600">spa</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Premium Home Grooming</h3>
                      <p className="text-2xl font-black text-amber-600 mt-1">$1,500</p>
                      <p className="text-sm text-gray-500">For up to 30 pets</p>
                      <ul className="mt-3 space-y-2 text-sm text-gray-600">
                        <li className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-amber-600 text-sm">check_circle</span>
                          Full premium grooming
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-amber-600 text-sm">check_circle</span>
                          Spa treatments included
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-amber-600 text-sm">check_circle</span>
                          De-shedding for all
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-amber-600 text-sm">check_circle</span>
                          Full day on-site service
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Pet Home Service 3 */}
                <div className="bg-white p-6 border border-solid border-gray-200 rounded-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center">
                        <span className="material-symbols-outlined text-amber-600">cleaning_services</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Bath & Brush Home Service</h3>
                      <p className="text-2xl font-black text-amber-600 mt-1">$900</p>
                      <p className="text-sm text-gray-500">For up to 15 pets</p>
                      <ul className="mt-3 space-y-2 text-sm text-gray-600">
                        <li className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-amber-600 text-sm">check_circle</span>
                          Bath & blow-dry for all
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-amber-600 text-sm">check_circle</span>
                          Thorough brushing
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-amber-600 text-sm">check_circle</span>
                          Light trimming available
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-amber-600 text-sm">check_circle</span>
                          Half-day on-site service
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Pet Home Service 4 */}
                <div className="bg-white p-6 border border-solid border-gray-200 rounded-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center">
                        <span className="material-symbols-outlined text-amber-600">calendar_month</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Monthly Home Service Contract</h3>
                      <p className="text-2xl font-black text-amber-600 mt-1">$4,000</p>
                      <p className="text-sm text-gray-500">For up to 25 pets per month</p>
                      <ul className="mt-3 space-y-2 text-sm text-gray-600">
                        <li className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-amber-600 text-sm">check_circle</span>
                          2 full groomings per month
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-amber-600 text-sm">check_circle</span>
                          15% off additional services
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-amber-600 text-sm">check_circle</span>
                          Priority scheduling
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-amber-600 text-sm">check_circle</span>
                          Free health checks
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Pet Home Service 5 */}
                <div className="bg-white p-6 border border-solid border-gray-200 rounded-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center">
                        <span className="material-symbols-outlined text-amber-600">elderly</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Senior & Special Needs Home Service</h3>
                      <p className="text-2xl font-black text-amber-600 mt-1">$1,100</p>
                      <p className="text-sm text-gray-500">For up to 15 pets</p>
                      <ul className="mt-3 space-y-2 text-sm text-gray-600">
                        <li className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-amber-600 text-sm">check_circle</span>
                          Gentle handling techniques
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-amber-600 text-sm">check_circle</span>
                          Specialized care for seniors
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-amber-600 text-sm">check_circle</span>
                          Mobility-friendly grooming
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-amber-600 text-sm">check_circle</span>
                          Health monitoring
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Pet Home Service 6 */}
                <div className="bg-white p-6 border border-solid border-gray-200 rounded-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center">
                        <span className="material-symbols-outlined text-amber-600">emergency</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Emergency Home Grooming</h3>
                      <p className="text-2xl font-black text-amber-600 mt-1">$1,300</p>
                      <p className="text-sm text-gray-500">For up to 20 pets</p>
                      <ul className="mt-3 space-y-2 text-sm text-gray-600">
                        <li className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-amber-600 text-sm">check_circle</span>
                          Same-day service available
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-amber-600 text-sm">check_circle</span>
                          Matting removal specialists
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-amber-600 text-sm">check_circle</span>
                          Skin condition treatments
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-amber-600 text-sm">check_circle</span>
                          Fast, efficient service
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Total Services Counter */}
            <div className="px-4 sm:px-10 lg:px-20 py-8">
              <div className="bg-amber-50 rounded-lg p-8 text-center border border-amber-200">
                <h3 className="text-2xl font-bold text-gray-900">25 Premium Grooming Services Available</h3>
                <p className="text-gray-600 mt-2">From individual pampering to full-scale pet home services</p>
                <div className="flex flex-wrap justify-center gap-8 mt-4">
                  <div>
                    <span className="text-3xl font-black text-amber-600">10</span>
                    <p className="text-sm text-gray-600">Individual Services</p>
                  </div>
                  <div>
                    <span className="text-3xl font-black text-amber-600">6</span>
                    <p className="text-sm text-gray-600">Pet Home Services</p>
                  </div>
                  <div>
                    <span className="text-3xl font-black text-amber-600">9</span>
                    <p className="text-sm text-gray-600">Add-on Services</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="px-4 sm:px-10 lg:px-20 py-16 border-t border-solid border-gray-200 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready to Book Your Pet's Grooming?</h2>
              <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                Schedule your appointment today and give your furry friend the premium care they deserve.
              </p>
              <Link 
                to="/Contact" 
                onClick={() => handleNavClick('/Contact')}
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-amber-600 text-white text-base font-bold leading-normal tracking-[0.015em] mx-auto hover:bg-amber-700 transition-all"
              >
                <span className="truncate">Book Your Grooming Session</span>
              </Link>
            </div>

            {/* Contact Details Section */}
            <section className="bg-gray-50 border-t border-solid border-gray-200 mt-16">
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
          </main>
        </div>
      </div>

      <style jsx>{`
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
      `}</style>
    </div>
  );
}

export default Services;