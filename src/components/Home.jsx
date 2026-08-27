import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function HomePage() {
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
              
              {/* Desktop Navigation */}
              <div className="hidden lg:flex flex-1 justify-end gap-8">
                <div className="flex items-center gap-9">
                  <Link 
                    to="/" 
                    onClick={() => handleNavClick('/')}
                    className="text-amber-600 text-sm font-bold leading-normal"
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
                      className="block px-2 py-3 text-amber-600 text-sm font-bold leading-normal"
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
            {/* Hero Section */}
            <section className="px-4 sm:px-10 lg:px-20 py-5">
              <div className="min-h-[60vh] flex flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-lg items-start justify-end px-4 pb-10 sm:px-10" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%), url("https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=1200&q=80")' }}>
                <div className="flex flex-col gap-2 text-left max-w-3xl">
                  <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] sm:text-5xl">Pamper Your Pet with Premium Grooming</h1>
                  <h2 className="text-white text-sm font-normal leading-normal sm:text-base">Expert care that makes your furry friend look and feel their absolute best.</h2>
                </div>
                <div className="flex-wrap gap-3 flex flex-col sm:flex-row">
                  <Link 
                    to="/Contact" 
                    onClick={() => handleNavClick('/Contact')}
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 sm:h-12 sm:px-5 bg-amber-600 text-white text-sm font-bold leading-normal tracking-[0.015em] sm:text-base hover:bg-amber-700 transition-all"
                  >
                    <span className="truncate">Book Your First Grooming Session</span>
                  </Link>
                </div>
              </div>
            </section>

            {/* Services Section */}
            <section className="px-4 sm:px-10 lg:px-20 py-10">
              <h2 className="text-gray-900 text-center text-3xl font-bold leading-tight tracking-[-0.015em] px-4 pb-8 pt-5">Premium Grooming Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Full Grooming */}
                <div className="flex flex-1 flex-col gap-4 rounded-lg border border-solid border-gray-200 bg-white p-6 hover:shadow-xl transition-shadow">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-gray-900 text-lg font-bold leading-tight">Full Grooming Package</h3>
                    <p className="flex items-baseline gap-1 text-gray-900">
                      <span className="text-4xl font-black leading-tight tracking-[-0.033em]">$85</span>
                      <span className="text-base font-bold leading-tight">/session</span>
                    </p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="text-[13px] font-normal leading-normal flex gap-3 items-center text-gray-700">
                      <span className="material-symbols-outlined text-amber-600 text-lg">check_circle</span> Full bath & blow-dry
                    </div>
                    <div className="text-[13px] font-normal leading-normal flex gap-3 items-center text-gray-700">
                      <span className="material-symbols-outlined text-amber-600 text-lg">check_circle</span> Professional haircut
                    </div>
                    <div className="text-[13px] font-normal leading-normal flex gap-3 items-center text-gray-700">
                      <span className="material-symbols-outlined text-amber-600 text-lg">check_circle</span> Nail trimming & filing
                    </div>
                    <div className="text-[13px] font-normal leading-normal flex gap-3 items-center text-gray-700">
                      <span className="material-symbols-outlined text-amber-600 text-lg">check_circle</span> Ear cleaning
                    </div>
                  </div>
                </div>

                {/* Bath & Brush */}
                <div className="flex flex-1 flex-col gap-4 rounded-lg border border-solid border-amber-600 bg-white p-6 shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-gray-900 text-lg font-bold leading-tight">Bath & Brush</h3>
                    <p className="flex items-baseline gap-1 text-gray-900">
                      <span className="text-4xl font-black leading-tight tracking-[-0.033em]">$50</span>
                      <span className="text-base font-bold leading-tight">/session</span>
                    </p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="text-[13px] font-normal leading-normal flex gap-3 items-center text-gray-700">
                      <span className="material-symbols-outlined text-amber-600 text-lg">check_circle</span> Gentle shampoo & conditioner
                    </div>
                    <div className="text-[13px] font-normal leading-normal flex gap-3 items-center text-gray-700">
                      <span className="material-symbols-outlined text-amber-600 text-lg">check_circle</span> Thorough brushing
                    </div>
                    <div className="text-[13px] font-normal leading-normal flex gap-3 items-center text-gray-700">
                      <span className="material-symbols-outlined text-amber-600 text-lg">check_circle</span> Towel & blow-dry
                    </div>
                    <div className="text-[13px] font-normal leading-normal flex gap-3 items-center text-gray-700">
                      <span className="material-symbols-outlined text-amber-600 text-lg">check_circle</span> Light finishing touches
                    </div>
                  </div>
                </div>

                {/* Mobile Grooming */}
                <div className="flex flex-1 flex-col gap-4 rounded-lg border border-solid border-gray-200 bg-white p-6 hover:shadow-xl transition-shadow">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-gray-900 text-lg font-bold leading-tight">Mobile Grooming</h3>
                    <p className="flex items-baseline gap-1 text-gray-900">
                      <span className="text-4xl font-black leading-tight tracking-[-0.033em]">$120</span>
                      <span className="text-base font-bold leading-tight">/session</span>
                    </p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="text-[13px] font-normal leading-normal flex gap-3 items-center text-gray-700">
                      <span className="material-symbols-outlined text-amber-600 text-lg">check_circle</span> Convenient at-home service
                    </div>
                    <div className="text-[13px] font-normal leading-normal flex gap-3 items-center text-gray-700">
                      <span className="material-symbols-outlined text-amber-600 text-lg">check_circle</span> Fully equipped mobile van
                    </div>
                    <div className="text-[13px] font-normal leading-normal flex gap-3 items-center text-gray-700">
                      <span className="material-symbols-outlined text-amber-600 text-lg">check_circle</span> Low-stress environment
                    </div>
                    <div className="text-[13px] font-normal leading-normal flex gap-3 items-center text-gray-700">
                      <span className="material-symbols-outlined text-amber-600 text-lg">check_circle</span> Same grooming quality
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Client Success Stories Section - Pet Transformations */}
            <section className="px-4 sm:px-10 lg:px-20 py-10">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-gray-900 text-center text-3xl font-bold leading-tight tracking-[-0.015em] px-4 pb-8 pt-5">Happy Pets, Happy Parents</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Testimonial 1 */}
                  <div className="flex flex-col gap-6 rounded-lg border border-solid border-gray-200 bg-white p-8 hover:shadow-xl transition-shadow">
                    <div className="flex items-center gap-4">
                      <div className="size-14 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                        <span className="material-symbols-outlined text-2xl text-amber-600">pets</span>
                      </div>
                      <div>
                        <h3 className="text-gray-900 font-bold text-lg">Max the Golden</h3>
                        <p className="text-gray-600 text-sm">Regular grooming client</p>
                      </div>
                    </div>
                    <div className="text-gray-700 text-base leading-relaxed">
                      "Matthew's Pet Atelier is amazing! My Golden Retriever Max comes home looking like a show dog every time. The care and attention to detail is unmatched."
                    </div>
                    <div className="flex items-center gap-1 text-amber-500">
                      <span className="material-symbols-outlined text-lg">star</span>
                      <span className="material-symbols-outlined text-lg">star</span>
                      <span className="material-symbols-outlined text-lg">star</span>
                      <span className="material-symbols-outlined text-lg">star</span>
                      <span className="material-symbols-outlined text-lg">star</span>
                    </div>
                  </div>

                  {/* Testimonial 2 */}
                  <div className="flex flex-col gap-6 rounded-lg border border-solid border-amber-600 bg-white p-8 shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">FEATURED</div>
                    <div className="flex items-center gap-4">
                      <div className="size-14 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                        <span className="material-symbols-outlined text-2xl text-amber-600">pets</span>
                      </div>
                      <div>
                        <h3 className="text-gray-900 font-bold text-lg">Bella the Poodle</h3>
                        <p className="text-gray-600 text-sm">Monthly full grooming</p>
                      </div>
                    </div>
                    <div className="text-gray-700 text-base leading-relaxed">
                      "Bella used to dread grooming appointments, but Matthew's gentle approach has completely changed her experience. She actually gets excited now and always looks beautiful!"
                    </div>
                    <div className="flex items-center gap-1 text-amber-500">
                      <span className="material-symbols-outlined text-lg">star</span>
                      <span className="material-symbols-outlined text-lg">star</span>
                      <span className="material-symbols-outlined text-lg">star</span>
                      <span className="material-symbols-outlined text-lg">star</span>
                      <span className="material-symbols-outlined text-lg">star</span>
                    </div>
                  </div>

                  {/* Testimonial 3 */}
                  <div className="flex flex-col gap-6 rounded-lg border border-solid border-gray-200 bg-white p-8 hover:shadow-xl transition-shadow">
                    <div className="flex items-center gap-4">
                      <div className="size-14 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                        <span className="material-symbols-outlined text-2xl text-amber-600">pets</span>
                      </div>
                      <div>
                        <h3 className="text-gray-900 font-bold text-lg">Luna & Milo</h3>
                        <p className="text-gray-600 text-sm">Sibling grooming</p>
                      </div>
                    </div>
                    <div className="text-gray-700 text-base leading-relaxed">
                      "We bring both our cats and they're always calm and comfortable. Matthew understands animal behavior and makes it a positive experience for everyone."
                    </div>
                    <div className="flex items-center gap-1 text-amber-500">
                      <span className="material-symbols-outlined text-lg">star</span>
                      <span className="material-symbols-outlined text-lg">star</span>
                      <span className="material-symbols-outlined text-lg">star</span>
                      <span className="material-symbols-outlined text-lg">star</span>
                      <span className="material-symbols-outlined text-lg">star_half</span>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-black text-amber-600">98%</div>
                      <div className="text-gray-700 text-sm mt-2">Client Satisfaction</div>
                    </div>
                    <div>
                      <div className="text-3xl font-black text-amber-600">1,200+</div>
                      <div className="text-gray-700 text-sm mt-2">Pets Groomed</div>
                    </div>
                    <div>
                      <div className="text-3xl font-black text-amber-600">4.9</div>
                      <div className="text-gray-700 text-sm mt-2">Average Rating</div>
                    </div>
                    <div>
                      <div className="text-3xl font-black text-amber-600">8+</div>
                      <div className="text-gray-700 text-sm mt-2">Years Experience</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Framework Section - Grooming Process */}
            <section className="px-4 sm:px-10 lg:px-20 py-20 bg-gray-50">
              <div className="max-w-7xl mx-auto flex flex-col gap-12">
                <h2 className="text-gray-900 text-center text-3xl font-bold leading-tight tracking-[-0.015em] px-4">The Matthew's Pet Atelier Grooming Experience</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                  <div className="relative pl-8">
                    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-300"></div>
                    <div className="space-y-12">
                      {/* Consultation */}
                      <div className="relative flex items-start gap-6">
                        <div className="absolute -left-11 top-1 flex size-7 items-center justify-center rounded-full bg-amber-600 text-white ring-8 ring-white">
                          <span className="material-symbols-outlined text-base">chat</span>
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-amber-600">Personal Consultation</h3>
                          <p className="font-semibold text-gray-900">Understanding Your Pet</p>
                          <p className="text-sm text-gray-700 mt-1">We discuss your pet's breed, coat type, temperament, and your preferred style.</p>
                        </div>
                      </div>

                      {/* Assessment */}
                      <div className="relative flex items-start gap-6">
                        <div className="absolute -left-11 top-1 flex size-7 items-center justify-center rounded-full bg-amber-600 text-white ring-8 ring-white">
                          <span className="material-symbols-outlined text-base">pets</span>
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-amber-600">Gentle Assessment</h3>
                          <p className="font-semibold text-gray-900">Coat & Skin Health</p>
                          <p className="text-sm text-gray-700 mt-1">Thorough evaluation of your pet's coat condition, skin health, and any special needs.</p>
                        </div>
                      </div>

                      {/* Grooming Session */}
                      <div className="relative flex items-start gap-6">
                        <div className="absolute -left-11 top-1 flex size-7 items-center justify-center rounded-full bg-amber-600 text-white ring-8 ring-white">
                          <span className="material-symbols-outlined text-base">spa</span>
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-amber-600">Premium Grooming Session</h3>
                          <p className="font-semibold text-gray-900">Expert Care & Attention</p>
                          <p className="text-sm text-gray-700 mt-1">Professional grooming using high-quality products and techniques tailored to your pet.</p>
                        </div>
                      </div>

                      {/* Finishing Touches */}
                      <div className="relative flex items-start gap-6">
                        <div className="absolute -left-11 top-1 flex size-7 items-center justify-center rounded-full bg-amber-600 text-white ring-8 ring-white">
                          <span className="material-symbols-outlined text-base">style</span>
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-amber-600">Finishing Touches</h3>
                          <p className="font-semibold text-gray-900">Styling & Perfection</p>
                          <p className="text-sm text-gray-700 mt-1">Final fluffing, brushing, and a spritz of pet-safe cologne for that salon finish.</p>
                        </div>
                      </div>

                      {/* Follow-up */}
                      <div className="relative flex items-start gap-6">
                        <div className="absolute -left-11 top-1 flex size-7 items-center justify-center rounded-full bg-amber-600 text-white ring-8 ring-white">
                          <span className="material-symbols-outlined text-base">favorite</span>
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-amber-600">Follow-up Care</h3>
                          <p className="font-semibold text-gray-900">Maintenance Tips</p>
                          <p className="text-sm text-gray-700 mt-1">Advice on at-home care and scheduling your next appointment for consistent results.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Why Choose Us */}
                  <div className="flex flex-col gap-8">
                    <h3 className="text-2xl font-bold text-gray-900 tracking-tight">Why Pet Parents Choose Matthew's Pet Atelier</h3>
                    <div className="space-y-6">
                      <div className="flex gap-4 items-start">
                        <div className="flex-shrink-0 size-10 flex items-center justify-center rounded-lg bg-amber-100 text-amber-600">
                          <span className="material-symbols-outlined">favorite</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-lg text-gray-900">Gentle & Stress-Free Approach</h4>
                          <p className="text-sm text-gray-700 mt-1">We prioritize your pet's comfort and well-being, creating a calm environment that reduces anxiety.</p>
                        </div>
                      </div>
                      <div className="flex gap-4 items-start">
                        <div className="flex-shrink-0 size-10 flex items-center justify-center rounded-lg bg-amber-100 text-amber-600">
                          <span className="material-symbols-outlined">brush</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-lg text-gray-900">Premium Products & Techniques</h4>
                          <p className="text-sm text-gray-700 mt-1">We use only top-quality, pet-safe grooming products and stay current with the best grooming practices.</p>
                        </div>
                      </div>
                      <div className="flex gap-4 items-start">
                        <div className="flex-shrink-0 size-10 flex items-center justify-center rounded-lg bg-amber-100 text-amber-600">
                          <span className="material-symbols-outlined">psychology</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-lg text-gray-900">Understanding Animal Behavior</h4>
                          <p className="text-sm text-gray-700 mt-1">Training in animal behavior helps us read your pet's signals and adjust our approach for a positive experience.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-300 pt-12 flex flex-col items-center gap-8">
                  <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-semibold text-gray-700">
                    <span>8+ Years of Grooming Excellence</span>
                    <span className="text-gray-400 hidden sm:inline">|</span>
                    <span>98% Client Satisfaction Rate</span>
                    <span className="text-gray-400 hidden sm:inline">|</span>
                    <span>Certified Professional Groomer</span>
                  </div>
                  <Link 
                    to="/Contact" 
                    onClick={() => handleNavClick('/Contact')}
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-amber-600 text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-amber-700 transition-all"
                  >
                    <span className="truncate">Book Your Pet's First Appointment</span>
                  </Link>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="px-4 sm:px-10 lg:px-20 py-20">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Ready to Give Your Pet the VIP Treatment?</h2>
                <p className="mt-4 text-lg leading-8 text-gray-700">Book your pet's first appointment and discover the Matthew's Pet Atelier difference. Your furry friend deserves the best!</p>
                <div className="mt-10">
                  <Link 
                    to="/Contact" 
                    onClick={() => handleNavClick('/Contact')}
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-amber-600 text-white text-base font-bold leading-normal tracking-[0.015em] mx-auto hover:bg-amber-700 transition-all"
                  >
                    <span className="truncate">Book Your Pet's Appointment</span>
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
                        {/* Social icons could go here */}
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

      <style jsx>{`
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
      `}</style>
    </div>
  );
}

export default HomePage;