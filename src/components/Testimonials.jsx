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

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

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

  const featured = testimonials[0];
  const rest = testimonials.slice(1);

  const renderStars = (rating) => (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className={`material-symbols-outlined text-base ${i < rating ? 'text-orange-500' : 'text-stone-300'}`}
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          star
        </span>
      ))}
    </div>
  );

  return (
    <div className="bg-stone-50 font-sans text-stone-900">
      <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />

      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          {/* ============ HEADER ============ */}
          <header className="sticky top-0 z-50 bg-stone-50/90 backdrop-blur-md border-b border-stone-200">
            <div className="flex items-center justify-between whitespace-nowrap px-4 sm:px-10 lg:px-20 py-3">
              <Link to="/" onClick={() => handleNavClick('/')} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <div className="size-10 rounded-2xl bg-teal-700 flex items-center justify-center shadow-lg shadow-teal-700/20">
                  <span className="material-symbols-outlined text-white text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>pets</span>
                </div>
                <div className="flex flex-col leading-none">
                  <h2 className="text-stone-900 text-base font-extrabold tracking-tight">Matthew's</h2>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-teal-700">Pet Atelier</span>
                </div>
              </Link>

              <div className="hidden lg:flex flex-1 justify-end items-center gap-8">
                <nav className="flex items-center gap-8">
                  <Link to="/" onClick={() => handleNavClick('/')} className="text-stone-600 text-sm font-medium hover:text-teal-700 transition-colors">Home</Link>
                  <Link to="/Services" onClick={() => handleNavClick('/Services')} className="text-stone-600 text-sm font-medium hover:text-teal-700 transition-colors">Services</Link>
                  <Link to="/AboutMe" onClick={() => handleNavClick('/AboutMe')} className="text-stone-600 text-sm font-medium hover:text-teal-700 transition-colors">About</Link>
                  <Link to="/Contact" onClick={() => handleNavClick('/Contact')} className="text-stone-600 text-sm font-medium hover:text-teal-700 transition-colors">Contact</Link>
                  <span className="text-teal-700 text-sm font-bold">Testimonials</span>
                </nav>
                <Link to="/Contact" onClick={() => handleNavClick('/Contact')} className="rounded-full px-6 py-2.5 bg-orange-500 text-white text-sm font-bold shadow-lg shadow-orange-500/25 hover:bg-orange-600 transition-all">
                  Book Now
                </Link>
              </div>

              <button onClick={toggleMobileMenu} className="lg:hidden text-stone-900 p-2">
                <span className="material-symbols-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
              </button>
            </div>

            {isMobileMenuOpen && (
              <div className="lg:hidden bg-stone-50 border-t border-stone-200 shadow-lg">
                <div className="px-6 py-6 space-y-1">
                  {[
                    { to: '/', label: 'Home' },
                    { to: '/Services', label: 'Services' },
                    { to: '/AboutMe', label: 'About' },
                    { to: '/Contact', label: 'Contact' },
                    { to: '/Testimonials', label: 'Testimonials', active: true },
                  ].map((item) => (
                    <Link key={item.label} to={item.to} onClick={() => handleNavClick(item.to)}
                      className={`block px-3 py-3 rounded-xl text-sm font-medium transition-colors ${
                        item.active ? 'text-teal-700 bg-teal-50 font-bold' : 'text-stone-700 hover:bg-stone-100'
                      }`}>
                      {item.label}
                    </Link>
                  ))}
                  <Link to="/Contact" onClick={() => handleNavClick('/Contact')}
                    className="block text-center rounded-full mt-3 px-6 py-3 bg-orange-500 text-white text-sm font-bold shadow-lg shadow-orange-500/25">
                    Book Now
                  </Link>
                </div>
              </div>
            )}
          </header>

          <main className="flex-1">
            {/* ============ HERO ============ */}
            <section className="px-4 sm:px-10 lg:px-20 pt-12 pb-8">
              <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 flex flex-col gap-5">
                  <span className="inline-flex w-fit items-center gap-2 rounded-full bg-teal-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-teal-700">
                    <span className="size-1.5 rounded-full bg-teal-700" />
                    Trusted by San Antonio's top pet homes
                  </span>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight text-stone-900">
                    What Pet Homes Are <span className="text-teal-700">Saying</span>
                  </h1>
                  <p className="text-lg text-stone-600 max-w-lg leading-relaxed">
                    Hear from San Antonio's top pet boarding and daycare facilities about their experience with Matthew's Pet Atelier.
                  </p>
                </div>

                {/* Rating summary card */}
                <div className="lg:col-span-5">
                  <div className="rounded-3xl bg-white border border-stone-200 p-6 shadow-xl shadow-stone-900/5">
                    <div className="flex items-center gap-4">
                      <div className="rounded-2xl bg-teal-700 text-white px-4 py-3 text-center shadow-lg shadow-teal-700/20">
                        <div className="text-3xl font-extrabold leading-none">4.9</div>
                        <div className="text-[10px] uppercase tracking-widest text-teal-200 mt-1">/ 5.0</div>
                      </div>
                      <div>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className="material-symbols-outlined text-orange-500 text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                          ))}
                        </div>
                        <p className="text-sm text-stone-600 mt-1.5">Based on <strong className="text-stone-900">500+</strong> groomed pets</p>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-stone-100 grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <div className="text-xl font-extrabold text-teal-700">98%</div>
                        <div className="text-xs text-stone-500">Satisfaction Rate</div>
                      </div>
                      <div>
                        <div className="text-xl font-extrabold text-teal-700">10+</div>
                        <div className="text-xs text-stone-500">Pet Homes Served</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ============ FEATURED TESTIMONIAL ============ */}
            <section className="px-4 sm:px-10 lg:px-20 py-8">
              <div className="max-w-7xl mx-auto">
                <div className="relative rounded-[2rem] bg-gradient-to-br from-teal-700 to-teal-900 text-white p-8 sm:p-12 shadow-2xl shadow-teal-900/20 overflow-hidden">
                  <div className="absolute -top-20 -right-20 size-64 rounded-full bg-orange-500/20 blur-3xl" />
                  <div className="absolute -bottom-20 -left-20 size-64 rounded-full bg-teal-400/20 blur-3xl" />

                  <div className="relative grid lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-8 flex flex-col gap-6">
                      <span className="material-symbols-outlined text-orange-300 text-5xl leading-none" style={{ fontVariationSettings: "'FILL' 1" }}>
                        format_quote
                      </span>
                      <p className="text-lg sm:text-xl leading-relaxed font-medium text-teal-50">
                        {featured.testimonial}
                      </p>
                      <div className="flex items-center gap-2">
                        {renderStars(featured.rating)}
                        <span className="text-xs text-teal-200 ml-1">{featured.date}</span>
                      </div>
                    </div>

                    <div className="lg:col-span-4 lg:border-l lg:border-teal-700/60 lg:pl-8 pt-6 lg:pt-0 border-t lg:border-t-0 border-teal-700/60">
                      <div className="flex items-center gap-4">
                        <div className="size-16 rounded-2xl bg-white/15 backdrop-blur flex items-center justify-center text-3xl">
                          {featured.image}
                        </div>
                        <div>
                          <p className="text-xs font-bold uppercase tracking-widest text-orange-300">Featured</p>
                          <h3 className="text-lg font-extrabold text-white mt-0.5">{featured.business}</h3>
                          <p className="text-sm text-teal-200">{featured.location}</p>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-teal-700/60">
                        <p className="text-sm font-semibold text-white">{featured.name}</p>
                        <p className="text-xs text-teal-300 mt-0.5">Pet Home Partner</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ============ TESTIMONIALS GRID ============ */}
            <section className="px-4 sm:px-10 lg:px-20 py-12">
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-teal-700">More Reviews</span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight mt-2">
                      Voices From Our Partners
                    </h2>
                  </div>
                  <span className="rounded-full bg-white border border-stone-200 px-3 py-1.5 text-xs font-semibold text-stone-700 w-fit">
                    {rest.length} testimonials
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {rest.map((t) => (
                    <div
                      key={t.id}
                      className="group relative flex flex-col rounded-3xl bg-white border border-stone-200 p-7 hover:border-teal-300 hover:shadow-xl hover:-translate-y-0.5 transition-all"
                    >
                      {/* Header row: rating + date */}
                      <div className="flex items-start justify-between gap-3 mb-4">
                        <div className="flex items-center gap-2">
                          {renderStars(t.rating)}
                          <span className="rounded-full bg-teal-50 text-teal-800 border border-teal-100 px-2 py-0.5 text-[10px] font-extrabold">
                            {t.rating}.0
                          </span>
                        </div>
                        <span className="text-xs text-stone-400">{t.date}</span>
                      </div>

                      {/* Quote */}
                      <p className="text-stone-700 text-sm leading-relaxed flex-1">
                        "{t.testimonial}"
                      </p>

                      {/* Divider + author */}
                      <div className="mt-5 pt-4 border-t border-stone-100 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="size-11 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-xl shrink-0">
                            {t.image}
                          </div>
                          <div className="min-w-0">
                            <p className="font-bold text-stone-900 text-sm truncate">{t.business}</p>
                            <p className="text-xs text-stone-500 truncate">{t.location}</p>
                          </div>
                        </div>
                        <div className="text-right shrink-0">
                          <p className="font-semibold text-stone-900 text-xs">{t.name}</p>
                          <p className="text-[10px] text-stone-400">Pet Home Partner</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ============ CTA ============ */}
            <section className="px-4 sm:px-10 lg:px-20 py-16">
              <div className="max-w-5xl mx-auto relative rounded-[2rem] bg-gradient-to-br from-teal-700 to-teal-900 overflow-hidden">
                <div className="absolute -top-20 -right-20 size-64 rounded-full bg-orange-500/20 blur-3xl" />
                <div className="absolute -bottom-20 -left-20 size-64 rounded-full bg-teal-400/20 blur-3xl" />
                <div className="relative px-8 sm:px-16 py-14 text-center">
                  <span className="material-symbols-outlined text-orange-300 text-4xl mb-3" style={{ fontVariationSettings: "'FILL' 1" }}>handshake</span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                    Ready to Join Our Happy Pet Homes?
                  </h2>
                  <p className="mt-4 text-base text-teal-100 max-w-2xl mx-auto leading-relaxed">
                    Whether you're a boarding facility, daycare center, or home-based pet sitter, we can help keep your furry guests looking their best.
                  </p>
                  <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                    <Link
                      to="/Contact"
                      onClick={() => handleNavClick('/Contact')}
                      className="inline-flex items-center justify-center gap-2 rounded-full h-12 px-7 bg-orange-500 text-white text-sm font-bold shadow-lg shadow-orange-900/30 hover:bg-orange-600 transition-all"
                    >
                      Contact Matthew
                      <span className="material-symbols-outlined text-lg">arrow_forward</span>
                    </Link>
                    <Link
                      to="/Services"
                      onClick={() => handleNavClick('/Services')}
                      className="inline-flex items-center justify-center gap-2 rounded-full h-12 px-7 bg-white/10 backdrop-blur text-white text-sm font-bold border border-white/20 hover:bg-white/20 transition-all"
                    >
                      View Services
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* ============ CONTACT DETAILS ============ */}
            <section className="bg-white border-t border-stone-200">
              <div className="max-w-7xl mx-auto py-14 px-4 sm:px-10 lg:px-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                  <div>
                    <h3 className="text-lg font-extrabold text-stone-900">Contact Matthew</h3>
                    <div className="mt-5 space-y-3 text-stone-600 text-sm">
                      <p className="flex items-center gap-3">
                        <span className="size-9 rounded-xl bg-teal-50 flex items-center justify-center">
                          <span className="material-symbols-outlined text-teal-700 text-base">email</span>
                        </span>
                        Matthews.Pet.Atelier@consultant.com
                      </p>
                      <p className="flex items-center gap-3">
                        <span className="size-9 rounded-xl bg-teal-50 flex items-center justify-center">
                          <span className="material-symbols-outlined text-teal-700 text-base">phone</span>
                        </span>
                        +1 (916) 604-4908
                      </p>
                      <p className="flex items-start gap-3">
                        <span className="size-9 rounded-xl bg-teal-50 flex items-center justify-center shrink-0">
                          <span className="material-symbols-outlined text-teal-700 text-base">location_on</span>
                        </span>
                        <span>620 SW 19th St<br />San Antonio, TX 78207</span>
                      </p>
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <h3 className="text-lg font-extrabold text-stone-900">Studio Hours</h3>
                    <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-sm text-stone-600">
                      <p className="flex justify-between border-b border-stone-100 pb-2"><span className="font-semibold text-stone-800">Mon – Fri</span> 8:00 AM – 7:00 PM</p>
                      <p className="flex justify-between border-b border-stone-100 pb-2"><span className="font-semibold text-stone-800">Saturday</span> 9:00 AM – 5:00 PM</p>
                      <p className="flex justify-between border-b border-stone-100 pb-2"><span className="font-semibold text-stone-800">Sunday</span> <span className="text-orange-500 font-semibold">Closed</span></p>
                      <p className="flex justify-between border-b border-stone-100 pb-2"><span className="font-semibold text-stone-800">Mobile Service</span> By appointment</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>

          {/* ============ FOOTER ============ */}
          <footer className="bg-teal-950 text-teal-100">
            <div className="mx-auto max-w-7xl px-6 py-14 lg:px-20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-2xl bg-orange-500 flex items-center justify-center">
                      <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>pets</span>
                    </div>
                    <div>
                      <div className="font-extrabold text-white">Matthew's</div>
                      <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-400">Pet Atelier</div>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-teal-300/80 max-w-xs">Premium grooming for pets who deserve the very best.</p>
                  <a href="https://www.instagram.com/matthewspetatelier" target="_blank" rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm text-teal-200 hover:text-orange-400 transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.948-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                    </svg>
                    Our Instagram
                  </a>
                </div>

                <div className="md:col-span-2 flex flex-col md:flex-row gap-10 md:justify-end">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-orange-400 mb-4">Explore</h4>
                    <ul className="space-y-2.5 text-sm">
                      <li><Link to="/AboutMe" onClick={() => handleNavClick('/AboutMe')} className="hover:text-orange-400 transition-colors">About</Link></li>
                      <li><Link to="/Contact" onClick={() => handleNavClick('/Contact')} className="hover:text-orange-400 transition-colors">Contact</Link></li>
                      <li><Link to="/Testimonials" onClick={() => handleNavClick('/Testimonials')} className="hover:text-orange-400 transition-colors">Testimonials</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-orange-400 mb-4">Legal</h4>
                    <ul className="space-y-2.5 text-sm">
                      <li><Link to="/PrivacyPolicy" onClick={() => handleNavClick('/PrivacyPolicy')} className="hover:text-orange-400 transition-colors">Privacy Policy</Link></li>
                      <li><Link to="/RefundPolicy" onClick={() => handleNavClick('/RefundPolicy')} className="hover:text-orange-400 transition-colors">Refund Policy</Link></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-6 border-t border-teal-800/70 flex flex-col sm:flex-row justify-between items-center gap-3">
                <p className="text-xs text-teal-400">© {new Date().getFullYear()} Matthew's Pet Atelier. All rights reserved.</p>
                <p className="text-xs text-teal-500">Crafted with care for pets & their people.</p>
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

export default Testimonials;