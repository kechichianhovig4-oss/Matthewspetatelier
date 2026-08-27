import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Testimonials() {
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

  const testimonials = [
    {
      id: 1,
      name: "Maria Rodriguez",
      business: "Cozy Casita de Pets",
      type: "Pet Home",
      location: "NW San Antonio",
      image: "🏠",
      rating: 5,
      testimonial: "Matthew's Pet Atelier has been a game-changer for our small dog boarding business. We have 15-20 small dogs staying with us regularly, and Matthew comes in to groom them all. His gentle approach with our smaller breeds is incredible—even our most nervous pups feel calm with him. The quality of his work has become a selling point for our clients. We've seen our bookings increase because pet parents love that their dogs come home looking and feeling amazing!",
      date: "August 2026"
    },
    {
      id: 2,
      name: "David Thompson",
      business: "Dog Boarding of San Antonio",
      type: "Pet Home",
      location: "Alamo Ranch",
      image: "🏠",
      rating: 5,
      testimonial: "Running a home boarding operation in Alamo Ranch, I see a lot of dogs come through. When I started using Matthew's services, I noticed an immediate difference. He comes to our home and grooms all the dogs on-site—which is so convenient for our busy schedule. The dogs love him, and they always look show-ready when they leave. Our repeat clients specifically mention how clean and well-groomed their dogs are when they pick them up. Matthew is a true professional and a pleasure to work with.",
      date: "August 2026"
    },
    {
      id: 3,
      name: "Jennifer Taylor",
      business: "Spoiled Rotten Pet Care",
      type: "Pet Home",
      location: "San Antonio",
      image: "🏠",
      rating: 5,
      testimonial: "As an in-home cage-free boarding service, we take pride in spoiling our furry guests. Matthew has been coming to our facility regularly to handle our grooming needs. He works with 20+ dogs during each visit and manages them all with such patience and skill. The dogs get baths, haircuts, and spa treatments right here where they're already comfortable. Our clients absolutely love the convenience of having a professional groomer come in. It's been a win-win for everyone, and I can't recommend Matthew enough!",
      date: "July 2026"
    },
    {
      id: 4,
      name: "Robert Mitchell",
      business: "NEST Pet Retreat • Playcare • Spa",
      type: "Pet Home",
      location: "San Antonio",
      image: "🏠",
      rating: 5,
      testimonial: "At NEST, we handle everything from luxury boarding to medical care for geriatric pets. When we needed a groomer who could handle our more delicate guests, Matthew was the perfect fit. He's gentle with our senior dogs and cats, and he understands their unique needs. He grooms 25-30 pets during each visit, and the transformation is always amazing. Matthew's professionalism and expertise have made him an essential part of our team. I trust him completely with our most vulnerable pets.",
      date: "August 2026"
    },
    {
      id: 5,
      name: "Karen Williams",
      business: "Home Away From Home Kennels",
      type: "Pet Home",
      location: "San Antonio",
      image: "🏠",
      rating: 4,
      testimonial: "We've been in the kennel business for over a decade, and we've worked with several groomers over the years. Matthew stands out as one of the best. He handles our 15-20 regular boarders with such care and attention to detail. Every dog gets personalized grooming based on their breed and needs. Our repeat clients always comment on how great their dogs look after Matthew's visits. He's reliable, professional, and truly loves what he does. Highly recommended for any pet home service.",
      date: "July 2026"
    },
    {
      id: 6,
      name: "Amy Stevens",
      business: "Tail Waggerz Day Care and Boarding",
      type: "Pet Home",
      location: "San Antonio",
      image: "🏠",
      rating: 5,
      testimonial: "We offer grooming at Tail Waggerz, but during busy seasons, we can't keep up with demand. That's where Matthew comes in—he handles our overflow grooming and also takes care of our long-term boarders. He's fast, efficient, and the quality of his work is top-notch. He grooms 20-25 dogs per visit, and every single one leaves looking beautiful. It's been a fantastic partnership that's helped us keep our clients happy even during our busiest months. Thank you, Matthew!",
      date: "August 2026"
    },
    {
      id: 7,
      name: "Emma Davis",
      business: "The Golden Getaway",
      type: "Pet Home",
      location: "San Antonio",
      image: "🏠",
      rating: 5,
      testimonial: "As a former vet tech running an in-home boarding service, I'm very particular about who handles my guests. Matthew exceeded all my expectations. He comes to our home and grooms our small screened groups—around 15-20 dogs per visit. His attention to health and safety is outstanding. He notices things like skin issues or ear infections that other groomers might miss. The dogs adore him, and I have complete peace of mind knowing they're in capable hands. Matthew is a true gem in the pet care community.",
      date: "July 2026"
    },
    {
      id: 8,
      name: "Cathy Robertson",
      business: "Cathy's Critter Care",
      type: "Pet Home",
      location: "San Antonio",
      image: "🏠",
      rating: 5,
      testimonial: "I've been in the pet sitting and boarding business for many years, and I've built a reputation on quality care. When I found Matthew, I knew he was the right groomer for my clients. He handles our larger group of 25-30 pets with such professionalism. He grooms everything from tiny Chihuahuas to large Golden Retrievers, and each one receives the same level of care and attention. My clients love the convenience, and the pets look fantastic. Matthew is a true professional and a wonderful person to work with.",
      date: "August 2026"
    },
    {
      id: 9,
      name: "Michelle Parker",
      business: "Homey Hounds Pet Sitters",
      type: "Pet Home",
      location: "San Antonio",
      image: "🏠",
      rating: 4,
      testimonial: "Running a small in-home pet sitting and boarding operation means I'm very selective about who I bring in. Matthew has been a fantastic partner for our grooming needs. He grooms our 15-20 regular boarders on-site, making it so convenient for both me and my clients. The dogs always look and smell amazing after his visits. He's reliable, affordable, and genuinely cares about the animals. If you're looking for a professional groomer for your pet home service, Matthew is your guy!",
      date: "July 2026"
    },
    {
      id: 10,
      name: "Sarah Johnson",
      business: "Rover Host - San Antonio",
      type: "Pet Home",
      location: "San Antonio",
      image: "🏠",
      rating: 5,
      testimonial: "As an independent Rover host, I take care of up to 30 dogs at a time in my home. Keeping them all clean and groomed was a challenge until I found Matthew. He comes to my home regularly and takes care of all my boarding guests. The convenience is incredible—no need to transport multiple dogs to a groomer. Matthew handles everything from baths to full haircuts, and the dogs absolutely love him. My clients consistently compliment how great their dogs look when they pick them up. Matthew has been a lifesaver for my business!",
      date: "August 2026"
    }
  ];

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
                  <span className="text-amber-600 text-sm font-bold leading-normal">Testimonials</span>
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
                    <div className="px-2 py-3 border-t border-gray-100">
                      <span className="text-amber-600 text-sm font-bold leading-normal">Testimonials</span>
                    </div>
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
            <section className="px-4 sm:px-10 lg:px-20 py-16 bg-gradient-to-r from-amber-50 to-white">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">What Pet Homes Are Saying</h1>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  Hear from San Antonio's top pet boarding and daycare facilities about their experience with Matthew's Pet Atelier.
                </p>
              </div>
            </section>

            {/* Stats Banner */}
            <section className="px-4 sm:px-10 lg:px-20 py-8 border-b border-gray-200">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center max-w-4xl mx-auto">
                <div>
                  <div className="text-3xl font-black text-amber-600">10+</div>
                  <div className="text-sm text-gray-600 mt-1">Pet Homes Served</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-amber-600">4.9</div>
                  <div className="text-sm text-gray-600 mt-1">Average Rating</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-amber-600">500+</div>
                  <div className="text-sm text-gray-600 mt-1">Pets Groomed</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-amber-600">98%</div>
                  <div className="text-sm text-gray-600 mt-1">Satisfaction Rate</div>
                </div>
              </div>
            </section>

            {/* Testimonials Grid */}
            <section className="px-4 sm:px-10 lg:px-20 py-16">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {testimonials.map((testimonial) => (
                    <div 
                      key={testimonial.id} 
                      className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow relative"
                    >
                      {/* Rating Stars */}
                      <div className="flex items-center gap-1 text-amber-500 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="material-symbols-outlined text-lg">
                            {i < testimonial.rating ? 'star' : 'star'}
                          </span>
                        ))}
                      </div>
                      
                      {/* Testimonial Text */}
                      <p className="text-gray-700 text-base leading-relaxed mb-6">
                        "{testimonial.testimonial}"
                      </p>
                      
                      {/* Bottom Section */}
                      <div className="border-t border-gray-100 pt-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-2xl">{testimonial.image}</span>
                              <div>
                                <p className="font-bold text-gray-900">{testimonial.business}</p>
                                <p className="text-sm text-gray-500">{testimonial.location}</p>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
                            <p className="text-xs text-gray-400">{testimonial.date}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="px-4 sm:px-10 lg:px-20 py-16 bg-amber-50">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Ready to Join Our Happy Pet Homes?</h2>
                <p className="mt-4 text-lg leading-8 text-gray-700 max-w-2xl mx-auto">
                  Whether you're a boarding facility, daycare center, or home-based pet sitter, we can help keep your furry guests looking their best.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/Contact" 
                    onClick={() => handleNavClick('/Contact')}
                    className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-amber-600 text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-amber-700 transition-all"
                  >
                    <span className="truncate">Contact Matthew</span>
                  </Link>
                  <Link 
                    to="/Services" 
                    onClick={() => handleNavClick('/Services')}
                    className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 border-2 border-amber-600 text-amber-600 text-base font-bold leading-normal tracking-[0.015em] hover:bg-amber-50 transition-all"
                  >
                    <span className="truncate">View Services</span>
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

export default Testimonials;