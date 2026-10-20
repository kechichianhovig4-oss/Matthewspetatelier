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

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const credentials = [
    'Certified Professional Groomer',
    '8+ Years Grooming Experience',
    '1,200+ Pets Groomed',
    '98% Client Satisfaction Rate',
    'Specialist in Breed-Specific Styling',
    'Pet First Aid Certified',
  ];

  const whyChooseUs = [
    { icon: 'favorite', title: 'Gentle & Stress-Free', desc: "We prioritize your pet's comfort with calm handling and soothing techniques." },
    { icon: 'brush', title: 'Premium Products', desc: 'We use only high-quality, pet-safe shampoos, conditioners, and grooming tools.' },
    { icon: 'psychology', title: 'Animal Behavior Expertise', desc: 'Understanding pet body language to ensure a positive experience for every animal.' },
    { icon: 'home', title: 'Convenient Options', desc: 'Mobile grooming and flexible scheduling to fit your busy lifestyle.' },
  ];

  return (
    <div className="bg-stone-50 font-sans text-stone-900">
      {/* Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        rel="stylesheet"
      />

      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          {/* ============ HEADER ============ */}
          <header className="sticky top-0 z-50 bg-stone-50/90 backdrop-blur-md border-b border-stone-200">
            <div className="flex items-center justify-between whitespace-nowrap px-4 sm:px-10 lg:px-20 py-3">
              <Link
                to="/"
                onClick={() => handleNavClick('/')}
                className="flex items-center gap-3 hover:opacity-80 transition-opacity"
              >
                <div className="size-10 rounded-2xl bg-teal-700 flex items-center justify-center shadow-lg shadow-teal-700/20">
                  <span className="material-symbols-outlined text-white text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    pets
                  </span>
                </div>
                <div className="flex flex-col leading-none">
                  <h2 className="text-stone-900 text-base font-extrabold tracking-tight">Matthew's</h2>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-teal-700">Pet Atelier</span>
                </div>
              </Link>

              {/* Desktop Nav */}
              <div className="hidden lg:flex flex-1 justify-end items-center gap-8">
                <nav className="flex items-center gap-8">
                  <Link to="/" onClick={() => handleNavClick('/')} className="text-stone-600 text-sm font-medium hover:text-teal-700 transition-colors">Home</Link>
                  <Link to="/Services" onClick={() => handleNavClick('/Services')} className="text-stone-600 text-sm font-medium hover:text-teal-700 transition-colors">Services</Link>
                  <span className="text-teal-700 text-sm font-bold">About</span>
                  <Link to="/Contact" onClick={() => handleNavClick('/Contact')} className="text-stone-600 text-sm font-medium hover:text-teal-700 transition-colors">Contact</Link>
                  <Link to="/Testimonials" onClick={() => handleNavClick('/Testimonials')} className="text-stone-600 text-sm font-medium hover:text-teal-700 transition-colors">Testimonials</Link>
                </nav>
                <Link
                  to="/Contact"
                  onClick={() => handleNavClick('/Contact')}
                  className="rounded-full px-6 py-2.5 bg-orange-500 text-white text-sm font-bold shadow-lg shadow-orange-500/25 hover:bg-orange-600 transition-all"
                >
                  Book Now
                </Link>
              </div>

              {/* Mobile toggle */}
              <button onClick={toggleMobileMenu} className="lg:hidden text-stone-900 p-2">
                <span className="material-symbols-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
              </button>
            </div>

            {/* Mobile menu */}
            {isMobileMenuOpen && (
              <div className="lg:hidden bg-stone-50 border-t border-stone-200 shadow-lg">
                <div className="px-6 py-6 space-y-1">
                  {[
                    { to: '/', label: 'Home' },
                    { to: '/Services', label: 'Services' },
                    { to: '/AboutMe', label: 'About', active: true },
                    { to: '/Contact', label: 'Contact' },
                    { to: '/Testimonials', label: 'Testimonials' },
                  ].map((item) => (
                    <Link
                      key={item.label}
                      to={item.to}
                      onClick={() => handleNavClick(item.to)}
                      className={`block px-3 py-3 rounded-xl text-sm font-medium transition-colors ${
                        item.active ? 'text-teal-700 bg-teal-50 font-bold' : 'text-stone-700 hover:bg-stone-100'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Link
                    to="/Contact"
                    onClick={() => handleNavClick('/Contact')}
                    className="block text-center rounded-full mt-3 px-6 py-3 bg-orange-500 text-white text-sm font-bold shadow-lg shadow-orange-500/25"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            )}
          </header>

          <main className="flex-1">
            {/* ============ HERO (split editorial) ============ */}
            <section className="px-4 sm:px-10 lg:px-20 pt-12 pb-8">
              <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 flex flex-col gap-5">
                  <span className="inline-flex w-fit items-center gap-2 rounded-full bg-teal-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-teal-700">
                    <span className="size-1.5 rounded-full bg-teal-700" />
                    Meet the founder
                  </span>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight text-stone-900">
                    About <span className="text-teal-700">Matthew</span>
                  </h1>
                  <p className="text-lg text-orange-500 font-semibold">
                    Founder & Master Groomer, Matthew's Pet Atelier
                  </p>
                  <p className="text-base text-stone-600 max-w-xl leading-relaxed">
                    A lifelong animal lover turned certified master groomer — building a sanctuary where every pet is treated like family.
                  </p>
                  {/* Stat chips */}
                  <div className="flex flex-wrap gap-3 pt-2">
                    {[
                      { icon: 'workspace_premium', text: 'Certified Groomer' },
                      { icon: 'schedule', text: '8+ Years' },
                      { icon: 'pets', text: '1,200+ Pets' },
                    ].map((s) => (
                      <div key={s.text} className="flex items-center gap-2 rounded-full bg-white border border-stone-200 px-4 py-2 shadow-sm">
                        <span className="material-symbols-outlined text-teal-700 text-base" style={{ fontVariationSettings: "'FILL' 1" }}>{s.icon}</span>
                        <span className="text-xs font-semibold text-stone-700">{s.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Portrait card */}
                <div className="lg:col-span-5 relative">
                  <div className="absolute -inset-4 bg-gradient-to-tr from-teal-200/50 via-orange-200/40 to-transparent rounded-[2rem] blur-2xl" />
                  <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-teal-900/10 aspect-[4/5]">
                    <img
                      src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=800&q=80"
                      alt="Matthew with a happy groomed dog"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-teal-950/50 via-transparent to-transparent" />
                    <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur rounded-2xl px-4 py-3 shadow-lg">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-orange-500 text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                        <span className="text-sm font-bold text-stone-900">Master Groomer</span>
                      </div>
                      <p className="text-xs text-stone-500 mt-0.5">Certified & Pet First Aid trained</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ============ INTRO BENTO ============ */}
            <section className="px-4 sm:px-10 lg:px-20 py-10">
              <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-6">
                {/* Hello card */}
                <div className="lg:col-span-2 rounded-3xl bg-white border border-stone-200 p-8 sm:p-10 relative overflow-hidden">
                  <span className="material-symbols-outlined absolute -top-4 -right-4 text-teal-100 text-8xl" style={{ fontVariationSettings: "'FILL' 1" }}>waving_hand</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-teal-700">Hello</span>
                  <h3 className="text-2xl font-extrabold text-stone-900 mt-2 mb-3">I'm Matthew</h3>
                  <p className="text-stone-600 leading-relaxed relative">
                    My name is Matthew, and my passion for pets has been the driving force behind everything I do. Growing up surrounded by animals, I learned early on that the bond between humans and their furry companions is something truly special—and that every pet deserves to feel loved, pampered, and beautiful.
                  </p>
                </div>

                {/* Journey highlight */}
                <div className="rounded-3xl bg-teal-700 text-white p-8 relative overflow-hidden">
                  <span className="material-symbols-outlined absolute -bottom-6 -right-6 text-teal-600/50 text-8xl" style={{ fontVariationSettings: "'FILL' 1" }}>pets</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-orange-300">Philosophy</span>
                  <p className="mt-3 text-lg font-semibold leading-snug relative">
                    Pet grooming taught me that patience isn't just a virtue — it's the foundation of trust.
                  </p>
                </div>
              </div>
            </section>

            {/* ============ THE JOURNEY ============ */}
            <section className="px-4 sm:px-10 lg:px-20 py-12">
              <div className="max-w-5xl mx-auto">
                <div className="flex items-baseline gap-4 mb-6">
                  <span className="text-5xl font-extrabold text-teal-200 leading-none">01</span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">The Groomer's Journey</h2>
                </div>
                <p className="text-stone-700 text-lg leading-relaxed">
                  In the beginning, there was a love for animals and a desire to make a difference. I didn't know it then, but every grooming session, every wagging tail, and every purr of contentment was building more than a business—it was building a philosophy. Pet grooming taught me that patience isn't just a virtue; it's the foundation of trust. That lesson became my guiding principle.
                </p>

                {/* Quote callout */}
                <div className="mt-10 rounded-3xl bg-gradient-to-br from-orange-500 to-orange-600 text-white p-8 sm:p-10 relative overflow-hidden shadow-xl shadow-orange-500/20">
                  <span className="material-symbols-outlined absolute -top-2 left-6 text-white/20 text-7xl leading-none" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
                  <p className="relative text-xl sm:text-2xl font-bold italic leading-snug">
                    "I don't just groom pets—I nurture the bond between pets and their families through compassionate care."
                  </p>
                </div>
              </div>
            </section>

            {/* ============ VISION ============ */}
            <section className="px-4 sm:px-10 lg:px-20 py-12">
              <div className="max-w-5xl mx-auto">
                <div className="flex items-baseline gap-4 mb-6">
                  <span className="text-5xl font-extrabold text-teal-200 leading-none">02</span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">The Vision</h2>
                </div>
                <p className="text-stone-700 text-lg leading-relaxed">
                  When I decided to turn my passion into a profession, I knew I wanted to create something different. A place where pets wouldn't just be groomed, but truly cared for. Where the experience would be as calming and enjoyable as a day at the spa. That vision became Matthew's Pet Atelier—a sanctuary where every pet receives personalized attention, expert care, and a touch of luxury.
                </p>
              </div>
            </section>

            {/* ============ MISSION ============ */}
            <section className="px-4 sm:px-10 lg:px-20 py-12">
              <div className="max-w-5xl mx-auto">
                <div className="flex items-baseline gap-4 mb-6">
                  <span className="text-5xl font-extrabold text-teal-200 leading-none">03</span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">Our Mission</h2>
                </div>
                <p className="text-stone-700 text-lg leading-relaxed">
                  At Matthew's Pet Atelier, we believe that every pet deserves to look and feel their absolute best. Our mission is to provide premium grooming services in a stress-free, loving environment. Whether it's a simple bath and brush or a full grooming package, we treat every pet like family—because to us, they are.
                </p>
              </div>
            </section>

            {/* ============ PHILOSOPHY ============ */}
            <section className="px-4 sm:px-10 lg:px-20 py-12">
              <div className="max-w-5xl mx-auto">
                <div className="flex items-baseline gap-4 mb-6">
                  <span className="text-5xl font-extrabold text-teal-200 leading-none">04</span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">My Philosophy</h2>
                </div>
                <p className="text-stone-700 text-lg leading-relaxed">
                  Every pet that walks through our doors gets more than just a grooming session. They get a partner in their care—someone who understands that true beauty comes from health, comfort, and trust. Whether it's your puppy's first groom or your senior pet's regular spa day, my approach remains the same: gentle handling, expert techniques, and genuine compassion.
                </p>
              </div>
            </section>

            {/* ============ CREDENTIALS ============ */}
            <section className="px-4 sm:px-10 lg:px-20 py-16">
              <div className="max-w-6xl mx-auto rounded-[2rem] bg-teal-900 text-white p-8 sm:p-12 relative overflow-hidden">
                <div className="absolute -top-20 -right-20 size-64 rounded-full bg-orange-500/20 blur-3xl" />
                <div className="absolute -bottom-20 -left-20 size-64 rounded-full bg-teal-400/20 blur-3xl" />

                <div className="relative">
                  <span className="text-xs font-bold uppercase tracking-widest text-orange-300">Trust & Credentials</span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mt-2 mb-8">Credentials & Experience</h3>

                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {credentials.map((c) => (
                      <li key={c} className="flex items-center gap-3 rounded-2xl bg-teal-800/60 border border-teal-700/60 px-4 py-3">
                        <span className="size-9 rounded-xl bg-orange-500 flex items-center justify-center shrink-0">
                          <span className="material-symbols-outlined text-white text-base" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                        </span>
                        <span className="text-sm font-medium text-teal-50">{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* ============ WHY CHOOSE US ============ */}
            <section className="px-4 sm:px-10 lg:px-20 py-16 bg-white border-y border-stone-200">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <span className="text-xs font-bold uppercase tracking-widest text-teal-700">The Difference</span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight mt-2">
                    Why Choose Matthew's Pet Atelier
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                  {whyChooseUs.map((f, i) => (
                    <div key={f.title} className="rounded-3xl border border-stone-200 bg-stone-50 p-7 hover:border-teal-300 hover:shadow-lg transition-all">
                      <div className={`size-12 rounded-2xl flex items-center justify-center mb-4 ${
                        i % 2 === 0 ? 'bg-teal-100' : 'bg-orange-100'
                      }`}>
                        <span
                          className={`material-symbols-outlined ${i % 2 === 0 ? 'text-teal-700' : 'text-orange-500'}`}
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          {f.icon}
                        </span>
                      </div>
                      <h4 className="font-bold text-stone-900">{f.title}</h4>
                      <p className="text-sm text-stone-600 mt-2 leading-relaxed">{f.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ============ CTA ============ */}
            <section className="px-4 sm:px-10 lg:px-20 py-20">
              <div className="max-w-5xl mx-auto relative rounded-[2rem] bg-gradient-to-br from-teal-700 to-teal-900 overflow-hidden">
                <div className="absolute -top-20 -right-20 size-64 rounded-full bg-orange-500/20 blur-3xl" />
                <div className="absolute -bottom-20 -left-20 size-64 rounded-full bg-teal-400/20 blur-3xl" />
                <div className="relative px-8 sm:px-16 py-16 text-center">
                  <span className="material-symbols-outlined text-orange-300 text-4xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>pets</span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                    Ready to Pamper Your Pet?
                  </h2>
                  <p className="mt-4 text-base text-teal-100 max-w-xl mx-auto leading-relaxed">
                    Book your pet's first grooming session with Matthew and discover the difference expert care makes.
                  </p>
                  <Link
                    to="/Contact"
                    onClick={() => handleNavClick('/Contact')}
                    className="mt-8 inline-flex items-center justify-center rounded-full h-12 px-8 bg-orange-500 text-white text-sm font-bold shadow-lg shadow-orange-900/30 hover:bg-orange-600 transition-all"
                  >
                    Book Your Pet's Grooming Session
                  </Link>
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

          {/* ============ FOOTER (dark teal) ============ */}
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
                  <a
                    href="https://www.instagram.com/matthewspetatelier"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm text-teal-200 hover:text-orange-400 transition-colors"
                  >
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

export default AboutMe;