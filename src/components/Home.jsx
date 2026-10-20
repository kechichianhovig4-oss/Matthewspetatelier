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

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Design tokens
  const teal = 'text-teal-700';
  const tealBg = 'bg-teal-700';
  const tealHover = 'hover:bg-teal-800';
  const coral = 'text-orange-500';
  const coralBg = 'bg-orange-500';

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
                {/* New logo mark: rounded square with paw */}
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
                  <Link to="/" onClick={() => handleNavClick('/')} className="text-teal-700 text-sm font-bold">Home</Link>
                  <Link to="/Services" onClick={() => handleNavClick('/Services')} className="text-stone-600 text-sm font-medium hover:text-teal-700 transition-colors">Services</Link>
                  <Link to="/AboutMe" onClick={() => handleNavClick('/AboutMe')} className="text-stone-600 text-sm font-medium hover:text-teal-700 transition-colors">About</Link>
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
                    { to: '/', label: 'Home', active: true },
                    { to: '/Services', label: 'Services' },
                    { to: '/AboutMe', label: 'About' },
                    { to: '/Contact', label: 'Contact' },
                    { to: '/Testimonials', label: 'Testimonials' },
                  ].map((item) => (
                    <Link
                      key={item.to}
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
            {/* ============ HERO (split layout) ============ */}
            <section className="px-4 sm:px-10 lg:px-20 pt-10 pb-16">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="flex flex-col gap-6">
                  <span className="inline-flex w-fit items-center gap-2 rounded-full bg-teal-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-teal-700">
                    <span className="size-1.5 rounded-full bg-teal-700" />
                    Trusted since 2016
                  </span>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight text-stone-900">
                    Pamper Your Pet with{' '}
                    <span className="relative inline-block">
                      <span className="relative z-10 text-teal-700">Premium</span>
                      <span className="absolute bottom-1 left-0 right-0 h-3 bg-orange-200/70 -z-0 rounded-sm" />
                    </span>{' '}
                    Grooming
                  </h1>
                  <p className="text-lg text-stone-600 max-w-lg leading-relaxed">
                    Expert care that makes your furry friend look and feel their absolute best.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <Link
                      to="/Contact"
                      onClick={() => handleNavClick('/Contact')}
                      className="inline-flex items-center justify-center rounded-full h-12 px-7 bg-orange-500 text-white text-sm font-bold shadow-lg shadow-orange-500/25 hover:bg-orange-600 transition-all"
                    >
                      Book Your First Session
                      <span className="material-symbols-outlined ml-2 text-lg">arrow_forward</span>
                    </Link>
                    <Link
                      to="/Services"
                      onClick={() => handleNavClick('/Services')}
                      className="inline-flex items-center justify-center rounded-full h-12 px-7 bg-white text-stone-800 text-sm font-bold border border-stone-300 hover:border-teal-700 hover:text-teal-700 transition-all"
                    >
                      View Services
                    </Link>
                  </div>
                  {/* Mini trust row */}
                  <div className="flex items-center gap-4 pt-4">
                    <div className="flex -space-x-2">
                      {[1,2,3].map(i => (
                        <div key={i} className="size-9 rounded-full ring-2 ring-stone-50 bg-teal-200 flex items-center justify-center overflow-hidden">
                          <span className="material-symbols-outlined text-teal-700 text-base">pets</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-stone-600">
                      <strong className="text-stone-900">1,200+</strong> happy pets groomed
                    </p>
                  </div>
                </div>

                {/* Hero image card */}
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-tr from-teal-200/50 via-orange-200/40 to-transparent rounded-[2rem] blur-2xl" />
                  <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-teal-900/10 aspect-[4/5] lg:aspect-square">
                    <img
                      src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=1000&q=80"
                      alt="Happy groomed dog"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-teal-950/40 via-transparent to-transparent" />
                    {/* Floating badge */}
                    <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between bg-white/95 backdrop-blur rounded-2xl px-4 py-3 shadow-lg">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-orange-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="text-sm font-bold text-stone-900">4.9 / 5.0</span>
                      </div>
                      <span className="text-xs text-stone-500">98% satisfaction</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ============ SERVICES (asymmetric) ============ */}
            <section className="px-4 sm:px-10 lg:px-20 py-16 bg-white border-y border-stone-200">
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-teal-700">Our Menu</span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-stone-900 mt-2">
                      Premium Grooming Services
                    </h2>
                  </div>
                  <p className="text-sm text-stone-500 max-w-xs">Tailored packages for every coat, every breed, every personality.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
                  {/* Bath & Brush (featured, elevated) */}
                  <div className="lg:order-2 lg:-mt-6 lg:scale-[1.02] flex flex-col gap-5 rounded-3xl bg-teal-700 text-white p-8 shadow-2xl shadow-teal-900/20 relative overflow-hidden">
                    <div className="absolute -top-10 -right-10 size-40 rounded-full bg-teal-600/50" />
                    <div className="absolute top-4 right-4 bg-orange-500 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                      Popular
                    </div>
                    <div className="relative">
                      <h3 className="text-xl font-extrabold">Bath & Brush</h3>
                      <p className="flex items-baseline gap-1 mt-2">
                        <span className="text-5xl font-extrabold tracking-tight">$50</span>
                        <span className="text-sm font-semibold text-teal-100">/session</span>
                      </p>
                    </div>
                    <ul className="flex flex-col gap-3 relative">
                      {['Gentle shampoo & conditioner','Thorough brushing','Towel & blow-dry','Light finishing touches'].map(t => (
                        <li key={t} className="flex gap-3 items-center text-sm text-teal-50">
                          <span className="material-symbols-outlined text-orange-300 text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                          {t}
                        </li>
                      ))}
                    </ul>
                    <Link to="/Contact" onClick={() => handleNavClick('/Contact')}
                      className="mt-auto inline-flex items-center justify-center rounded-full h-11 px-6 bg-white text-teal-800 text-sm font-bold hover:bg-orange-50 transition-all">
                      Book this
                    </Link>
                  </div>

                  {/* Full Grooming */}
                  <div className="lg:order-1 flex flex-col gap-5 rounded-3xl border border-stone-200 bg-stone-50 p-8 hover:shadow-xl hover:border-teal-300 transition-all">
                    <div>
                      <h3 className="text-xl font-extrabold text-stone-900">Full Grooming Package</h3>
                      <p className="flex items-baseline gap-1 mt-2">
                        <span className="text-5xl font-extrabold tracking-tight text-stone-900">$85</span>
                        <span className="text-sm font-semibold text-stone-500">/session</span>
                      </p>
                    </div>
                    <ul className="flex flex-col gap-3">
                      {['Full bath & blow-dry','Professional haircut','Nail trimming & filing','Ear cleaning'].map(t => (
                        <li key={t} className="flex gap-3 items-center text-sm text-stone-600">
                          <span className="material-symbols-outlined text-teal-700 text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                          {t}
                        </li>
                      ))}
                    </ul>
                    <Link to="/Contact" onClick={() => handleNavClick('/Contact')}
                      className="mt-auto inline-flex items-center justify-center rounded-full h-11 px-6 border border-stone-300 text-stone-800 text-sm font-bold hover:border-teal-700 hover:text-teal-700 transition-all">
                      Book this
                    </Link>
                  </div>

                  {/* Mobile Grooming */}
                  <div className="lg:order-3 flex flex-col gap-5 rounded-3xl border border-stone-200 bg-stone-50 p-8 hover:shadow-xl hover:border-teal-300 transition-all">
                    <div>
                      <h3 className="text-xl font-extrabold text-stone-900">Mobile Grooming</h3>
                      <p className="flex items-baseline gap-1 mt-2">
                        <span className="text-5xl font-extrabold tracking-tight text-stone-900">$120</span>
                        <span className="text-sm font-semibold text-stone-500">/session</span>
                      </p>
                    </div>
                    <ul className="flex flex-col gap-3">
                      {['Convenient at-home service','Fully equipped mobile van','Low-stress environment','Same grooming quality'].map(t => (
                        <li key={t} className="flex gap-3 items-center text-sm text-stone-600">
                          <span className="material-symbols-outlined text-teal-700 text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                          {t}
                        </li>
                      ))}
                    </ul>
                    <Link to="/Contact" onClick={() => handleNavClick('/Contact')}
                      className="mt-auto inline-flex items-center justify-center rounded-full h-11 px-6 border border-stone-300 text-stone-800 text-sm font-bold hover:border-teal-700 hover:text-teal-700 transition-all">
                      Book this
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* ============ TESTIMONIALS (large quote cards) ============ */}
            <section className="px-4 sm:px-10 lg:px-20 py-20">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                  <span className="text-xs font-bold uppercase tracking-widest text-teal-700">Real Stories</span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-stone-900 mt-2">
                    Happy Pets, Happy Parents
                  </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {[
                    {
                      name: 'Max the Golden',
                      role: 'Regular grooming client',
                      quote: "Matthew's Pet Atelier is amazing! My Golden Retriever Max comes home looking like a show dog every time. The care and attention to detail is unmatched.",
                      featured: false,
                      stars: 5,
                    },
                    {
                      name: 'Bella the Poodle',
                      role: 'Monthly full grooming',
                      quote: "Bella used to dread grooming appointments, but Matthew's gentle approach has completely changed her experience. She actually gets excited now and always looks beautiful!",
                      featured: true,
                      stars: 5,
                    },
                    {
                      name: 'Luna & Milo',
                      role: 'Sibling grooming',
                      quote: "We bring both our cats and they're always calm and comfortable. Matthew understands animal behavior and makes it a positive experience for everyone.",
                      featured: false,
                      stars: 4.5,
                    },
                  ].map((t, i) => (
                    <div
                      key={i}
                      className={`relative flex flex-col gap-6 rounded-3xl p-8 ${
                        t.featured
                          ? 'bg-orange-50 border-2 border-orange-400 shadow-xl shadow-orange-500/10'
                          : 'bg-white border border-stone-200 hover:shadow-lg'
                      } transition-shadow`}
                    >
                      {t.featured && (
                        <div className="absolute -top-3 left-8 bg-orange-500 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow">
                          Featured
                        </div>
                      )}
                      <span className="material-symbols-outlined text-teal-300 text-5xl leading-none" style={{ fontVariationSettings: "'FILL' 1" }}>
                        format_quote
                      </span>
                      <p className="text-stone-700 text-base leading-relaxed flex-1">{t.quote}</p>
                      <div className="flex items-center gap-4 pt-4 border-t border-stone-200/70">
                        <div className="size-12 rounded-2xl bg-teal-100 ring-2 ring-white flex items-center justify-center">
                          <span className="material-symbols-outlined text-teal-700" style={{ fontVariationSettings: "'FILL' 1" }}>pets</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-stone-900 font-bold text-sm">{t.name}</h3>
                          <p className="text-stone-500 text-xs">{t.role}</p>
                        </div>
                        <div className="flex items-center gap-0.5 text-orange-500">
                          {Array.from({ length: 5 }).map((_, s) => (
                            <span key={s} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                              {s < Math.floor(t.stars) ? 'star' : t.stars % 1 ? 'star_half' : 'star'}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Stats bento grid */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { value: '98%', label: 'Client Satisfaction', icon: 'verified' },
                    { value: '1,200+', label: 'Pets Groomed', icon: 'pets' },
                    { value: '4.9', label: 'Average Rating', icon: 'star' },
                    { value: '8+', label: 'Years Experience', icon: 'workspace_premium' },
                  ].map((s) => (
                    <div key={s.label} className="rounded-2xl bg-gradient-to-br from-teal-700 to-teal-900 text-white p-6 relative overflow-hidden">
                      <span className="material-symbols-outlined absolute -bottom-3 -right-3 text-teal-600/40 text-6xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                        {s.icon}
                      </span>
                      <div className="text-3xl font-extrabold tracking-tight relative">{s.value}</div>
                      <div className="text-teal-100 text-xs mt-1 relative">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ============ PROCESS (horizontal stepper) ============ */}
            <section className="px-4 sm:px-10 lg:px-20 py-20 bg-stone-100 border-y border-stone-200">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-14">
                  <span className="text-xs font-bold uppercase tracking-widest text-teal-700">How It Works</span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-stone-900 mt-2">
                    The Matthew's Pet Atelier Experience
                  </h2>
                </div>

                {/* Horizontal stepper (desktop) */}
                <div className="hidden lg:grid grid-cols-5 gap-4 relative">
                  <div className="absolute top-7 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-teal-200 via-orange-300 to-teal-200" />
                  {[
                    { icon: 'chat', step: '01', title: 'Personal Consultation', sub: 'Understanding Your Pet', desc: "We discuss your pet's breed, coat type, temperament, and your preferred style." },
                    { icon: 'pets', step: '02', title: 'Gentle Assessment', sub: 'Coat & Skin Health', desc: "Thorough evaluation of your pet's coat condition, skin health, and any special needs." },
                    { icon: 'spa', step: '03', title: 'Premium Session', sub: 'Expert Care & Attention', desc: 'Professional grooming using high-quality products and techniques tailored to your pet.' },
                    { icon: 'style', step: '04', title: 'Finishing Touches', sub: 'Styling & Perfection', desc: 'Final fluffing, brushing, and a spritz of pet-safe cologne for that salon finish.' },
                    { icon: 'favorite', step: '05', title: 'Follow-up Care', sub: 'Maintenance Tips', desc: 'Advice on at-home care and scheduling your next appointment for consistent results.' },
                  ].map((s) => (
                    <div key={s.step} className="relative flex flex-col items-center text-center gap-3">
                      <div className="size-14 rounded-2xl bg-white border-2 border-teal-700 flex items-center justify-center shadow-lg shadow-teal-700/10 relative z-10">
                        <span className="material-symbols-outlined text-teal-700" style={{ fontVariationSettings: "'FILL' 1" }}>{s.icon}</span>
                      </div>
                      <span className="text-[10px] font-bold tracking-widest text-orange-500">{s.step}</span>
                      <h3 className="font-bold text-sm text-stone-900 leading-tight">{s.title}</h3>
                      <p className="text-xs font-semibold text-teal-700">{s.sub}</p>
                      <p className="text-xs text-stone-600 leading-relaxed">{s.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Vertical stepper (mobile) */}
                <div className="lg:hidden flex flex-col gap-6">
                  {[
                    { icon: 'chat', step: '01', title: 'Personal Consultation', sub: 'Understanding Your Pet', desc: "We discuss your pet's breed, coat type, temperament, and your preferred style." },
                    { icon: 'pets', step: '02', title: 'Gentle Assessment', sub: 'Coat & Skin Health', desc: "Thorough evaluation of your pet's coat condition, skin health, and any special needs." },
                    { icon: 'spa', step: '03', title: 'Premium Session', sub: 'Expert Care & Attention', desc: 'Professional grooming using high-quality products and techniques tailored to your pet.' },
                    { icon: 'style', step: '04', title: 'Finishing Touches', sub: 'Styling & Perfection', desc: 'Final fluffing, brushing, and a spritz of pet-safe cologne for that salon finish.' },
                    { icon: 'favorite', step: '05', title: 'Follow-up Care', sub: 'Maintenance Tips', desc: 'Advice on at-home care and scheduling your next appointment for consistent results.' },
                  ].map((s, i, arr) => (
                    <div key={s.step} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="size-12 rounded-2xl bg-teal-700 flex items-center justify-center">
                          <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>{s.icon}</span>
                        </div>
                        {i < arr.length - 1 && <div className="w-0.5 flex-1 bg-stone-300 my-2" />}
                      </div>
                      <div className="pb-2">
                        <span className="text-[10px] font-bold tracking-widest text-orange-500">{s.step}</span>
                        <h3 className="font-bold text-base text-stone-900">{s.title}</h3>
                        <p className="text-sm font-semibold text-teal-700">{s.sub}</p>
                        <p className="text-sm text-stone-600 mt-1 leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Why choose us */}
                <div className="mt-16 grid lg:grid-cols-3 gap-6">
                  {[
                    { icon: 'favorite', title: 'Gentle & Stress-Free Approach', desc: "We prioritize your pet's comfort and well-being, creating a calm environment that reduces anxiety." },
                    { icon: 'brush', title: 'Premium Products & Techniques', desc: 'We use only top-quality, pet-safe grooming products and stay current with the best grooming practices.' },
                    { icon: 'psychology', title: 'Understanding Animal Behavior', desc: "Training in animal behavior helps us read your pet's signals and adjust our approach for a positive experience." },
                  ].map((f) => (
                    <div key={f.title} className="rounded-3xl bg-white border border-stone-200 p-7 hover:border-teal-300 hover:shadow-lg transition-all">
                      <div className="size-12 rounded-2xl bg-orange-100 flex items-center justify-center mb-4">
                        <span className="material-symbols-outlined text-orange-500" style={{ fontVariationSettings: "'FILL' 1" }}>{f.icon}</span>
                      </div>
                      <h4 className="font-bold text-lg text-stone-900">{f.title}</h4>
                      <p className="text-sm text-stone-600 mt-2 leading-relaxed">{f.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-14 flex flex-col items-center gap-6">
                  <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-semibold text-stone-600">
                    <span className="flex items-center gap-1.5"><span className="size-1.5 rounded-full bg-teal-700" />8+ Years of Grooming Excellence</span>
                    <span className="flex items-center gap-1.5"><span className="size-1.5 rounded-full bg-orange-500" />98% Client Satisfaction Rate</span>
                    <span className="flex items-center gap-1.5"><span className="size-1.5 rounded-full bg-teal-700" />Certified Professional Groomer</span>
                  </div>
                  <Link to="/Contact" onClick={() => handleNavClick('/Contact')}
                    className="inline-flex items-center justify-center rounded-full h-12 px-8 bg-teal-700 text-white text-sm font-bold shadow-lg shadow-teal-700/25 hover:bg-teal-800 transition-all">
                    Book Your Pet's First Appointment
                  </Link>
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
                    Ready to Give Your Pet the VIP Treatment?
                  </h2>
                  <p className="mt-4 text-base text-teal-100 max-w-xl mx-auto leading-relaxed">
                    Book your pet's first appointment and discover the Matthew's Pet Atelier difference. Your furry friend deserves the best!
                  </p>
                  <Link to="/Contact" onClick={() => handleNavClick('/Contact')}
                    className="mt-8 inline-flex items-center justify-center rounded-full h-12 px-8 bg-orange-500 text-white text-sm font-bold shadow-lg shadow-orange-900/30 hover:bg-orange-600 transition-all">
                    Book Your Pet's Appointment
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

export default HomePage;