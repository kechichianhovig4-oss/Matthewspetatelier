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

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const individualServices = [
    { name: "Mini Bath & Brush", price: "$25", features: ["Quick gentle bath", "Light brushing", "Towel dry", "Basic finishing"] },
    { name: "Nail Trim & Paw Care", price: "$30", features: ["Nail trimming & filing", "Paw pad moisturizing", "Fur between pads trimmed", "Injury check"] },
    { name: "Ear Cleaning", price: "$35", features: ["Gentle ear cleaning", "Ear hair plucking", "Odor removal", "Health check"] },
    { name: "Teeth Brushing", price: "$40", features: ["Professional teeth brushing", "Fresh breath treatment", "Tartar removal", "Gum health check"] },
    { name: "Basic Bath & Blow-dry", price: "$45", features: ["Gentle shampoo", "Conditioner treatment", "Towel & blow-dry", "Light brush out"] },
    { name: "Bath & Brush", price: "$50", features: ["Gentle shampoo & conditioner", "Thorough brushing", "Towel & blow-dry", "Light finishing touches"] },
    { name: "Puppy's First Groom", price: "$55", features: ["Gentle introduction to grooming", "Light bath & brush", "Nail introduction", "Positive reinforcement"] },
    { name: "Haircut & Styling", price: "$65", features: ["Breed-specific styling", "Custom trim & shaping", "Face & paw finishing", "Style consultation"] },
    { name: "Senior Pet Care", price: "$70", features: ["Gentle, low-stress handling", "Arthritis-friendly grooming", "Extra padding & comfort", "Health check observations"] },
    { name: "Spa & De-shedding", price: "$75", features: ["Deep conditioning treatment", "De-shedding treatment", "Paw balm & massage", "Pet-safe cologne spritz"] },
    { name: "Full Grooming Package", price: "$85", features: ["Full bath & blow-dry", "Professional haircut", "Nail trimming & filing", "Ear cleaning"] },
    { name: "Deluxe Spa Package", price: "$120", features: ["Aromatherapy bath", "Deep conditioning mask", "Paw massage & balm", "Blueberry facial & cologne"] },
    { name: "Mobile Grooming", price: "$120", features: ["At-home convenience", "Fully equipped mobile van", "Low-stress environment", "Full grooming services"] },
    { name: "Show Dog Preparation", price: "$200", features: ["Competition-ready styling", "Premium products", "Full spa treatment", "Expert finishing touches"] },
    { name: "Monthly Membership", price: "$300", features: ["2 full grooms per month", "15% off additional services", "Priority booking", "Free nail trim between visits"] }
  ];

  const petHomeServices = [
    { name: "Express Home Grooming", price: "$700", pets: "Up to 10 pets", time: "2 hours", features: ["Quick bath & brush", "Nail trim", "Basic ear cleaning", "On-site service"] },
    { name: "Standard Home Grooming", price: "$850", pets: "Up to 12 pets", time: "3 hours", features: ["Full bath & blow-dry", "Basic haircut", "Nail trimming", "Ear cleaning"] },
    { name: "Bath & Brush Home Service", price: "$950", pets: "Up to 15 pets", time: "3.5 hours", features: ["Premium shampoo & conditioner", "Thorough brushing", "Towel & blow-dry", "Light nail trim"] },
    { name: "Premium Home Grooming", price: "$1,100", pets: "Up to 15 pets", time: "4 hours", features: ["Professional haircut", "De-shedding treatment", "Nail & ear care", "Finishing touches"] },
    { name: "De-shedding Home Service", price: "$1,200", pets: "Up to 18 pets", time: "4.5 hours", features: ["Intensive de-shedding", "Special shampoo", "High-velocity drying", "Thorough brushing"] },
    { name: "Senior & Special Needs Home Service", price: "$1,300", pets: "Up to 15 pets", time: "5 hours", features: ["Gentle grooming", "Comfortable positioning", "Health monitoring", "Specialized handling"] },
    { name: "Deluxe Home Grooming Package", price: "$1,400", pets: "Up to 20 pets", time: "5.5 hours", features: ["Style cut", "Spa treatments", "De-shedding", "Paw care & teeth brushing"] },
    { name: "Spa Day Home Package", price: "$1,500", pets: "Up to 20 pets", time: "6 hours", features: ["Aromatherapy shampoo", "Deep conditioning", "Paw massage", "Blueberry facial & calming treatments"] },
    { name: "Ultimate Home Grooming Experience", price: "$1,650", pets: "Up to 22 pets", time: "6.5 hours", features: ["Breed-specific styling", "Deep conditioning", "Nail grinding", "Ear plucking & facial"] },
    { name: "Emergency & Rescue Home Grooming", price: "$1,750", pets: "Up to 20 pets", time: "6 hours", features: ["Matting removal", "Skin treatments", "Thorough cleaning", "Basic grooming"] },
    { name: "Executive Home Grooming", price: "$1,850", pets: "Up to 24 pets", time: "7 hours", features: ["Full spa services", "De-shedding", "Teeth care", "Paw balm & style upgrade"] },
    { name: "Luxury Home Grooming Package", price: "$2,000", pets: "Up to 26 pets", time: "8 hours", features: ["Organic products", "Custom styling", "Medicated bath options", "Nail grinding & finishing"] },
    { name: "Elite Home Grooming Service", price: "$2,150", pets: "Up to 28 pets", time: "9 hours", features: ["Full grooming", "Spa treatments", "De-shedding", "Teeth, ear & paw care"] },
    { name: "Platinum Home Grooming", price: "$2,350", pets: "Up to 30 pets", time: "10 hours", features: ["Premium organic products", "Breed-specific cuts", "Nail grinding & ear plucking", "Teeth brushing & facial"] },
    { name: "Diamond Home Grooming Package", price: "$2,500", pets: "Up to 35 pets", time: "Full Day", features: ["Ultimate luxury service", "Special styling", "Premium treatments", "VIP finishing touches"] }
  ];

  const featuredIndexIndividual = 7; // Haircut & Styling (POPULAR)
  const featuredIndexHome = 7;       // Spa Day Home Package (BEST VALUE)

  const renderServiceCard = (service, index, featuredIndex, kind) => {
    const isFeatured = index === featuredIndex;
    const featuredLabel = kind === 'individual' ? 'POPULAR' : 'BEST VALUE';
    const icon = kind === 'individual' ? 'spa' : 'home_work';

    if (isFeatured) {
      return (
        <div key={index} className="relative flex flex-col rounded-3xl bg-gradient-to-br from-teal-700 to-teal-900 text-white p-6 shadow-2xl shadow-teal-900/20 overflow-hidden">
          <div className="absolute -top-10 -right-10 size-32 rounded-full bg-teal-600/40" />
          <div className="absolute -bottom-10 -left-10 size-32 rounded-full bg-orange-500/20" />

          <div className="relative flex items-start justify-between gap-2 mb-3">
            <div className="size-10 rounded-xl bg-white/15 flex items-center justify-center">
              <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>{icon}</span>
            </div>
            <span className="bg-orange-500 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
              {featuredLabel}
            </span>
          </div>

          <div className="relative">
            <h3 className="text-lg font-extrabold leading-tight">{service.name}</h3>
            <p className="mt-2 flex items-baseline gap-1">
              <span className="text-3xl font-extrabold tracking-tight">{service.price}</span>
              {service.time && <span className="text-xs font-semibold text-teal-100">· {service.time}</span>}
            </p>
            {service.pets && <p className="text-xs text-teal-200 mt-0.5">{service.pets}</p>}
          </div>

          <ul className="relative mt-4 space-y-2 text-sm text-teal-50">
            {service.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="material-symbols-outlined text-orange-300 text-sm mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <Link
            to="/Contact"
            onClick={() => handleNavClick('/Contact')}
            className="mt-5 inline-flex items-center justify-center gap-2 rounded-full h-10 px-5 bg-white text-teal-800 text-sm font-bold hover:bg-orange-50 transition-all"
          >
            Book this
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </Link>
        </div>
      );
    }

    return (
      <div key={index} className="group flex flex-col rounded-3xl bg-white border border-stone-200 p-6 hover:border-teal-300 hover:shadow-xl hover:-translate-y-0.5 transition-all">
        <div className="flex items-start justify-between gap-2 mb-3">
          <div className={`size-10 rounded-xl flex items-center justify-center ${index % 2 === 0 ? 'bg-teal-50' : 'bg-orange-50'}`}>
            <span
              className={`material-symbols-outlined ${index % 2 === 0 ? 'text-teal-700' : 'text-orange-500'}`}
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              {icon}
            </span>
          </div>
          <span className="rounded-full bg-teal-50 text-teal-800 border border-teal-100 px-3 py-1 text-xs font-extrabold">
            {service.price}
          </span>
        </div>

        <h3 className="text-base font-extrabold text-stone-900 leading-tight">{service.name}</h3>
        {service.pets && (
          <p className="text-xs text-stone-500 mt-1">{service.pets} · {service.time}</p>
        )}

        <ul className="mt-3 space-y-1.5 text-sm text-stone-600 flex-1">
          {service.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="material-symbols-outlined text-teal-700 text-sm mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <Link
          to="/Contact"
          onClick={() => handleNavClick('/Contact')}
          className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-full h-9 px-4 border border-stone-300 text-stone-800 text-xs font-bold group-hover:border-teal-700 group-hover:text-teal-700 transition-all"
        >
          Book this
          <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </Link>
      </div>
    );
  };

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
                  <span className="text-teal-700 text-sm font-bold">Services</span>
                  <Link to="/AboutMe" onClick={() => handleNavClick('/AboutMe')} className="text-stone-600 text-sm font-medium hover:text-teal-700 transition-colors">About</Link>
                  <Link to="/Contact" onClick={() => handleNavClick('/Contact')} className="text-stone-600 text-sm font-medium hover:text-teal-700 transition-colors">Contact</Link>
                  <Link to="/Testimonials" onClick={() => handleNavClick('/Testimonials')} className="text-stone-600 text-sm font-medium hover:text-teal-700 transition-colors">Testimonials</Link>
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
                    { to: '/Services', label: 'Services', active: true },
                    { to: '/AboutMe', label: 'About' },
                    { to: '/Contact', label: 'Contact' },
                    { to: '/Testimonials', label: 'Testimonials' },
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
                    30 services · 2 categories
                  </span>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight text-stone-900">
                    Our Premium <span className="text-teal-700">Grooming</span> Services
                  </h1>
                  <p className="text-lg text-stone-600 max-w-lg leading-relaxed">
                    From individual pampering to full-scale pet home services, we provide expert care for every furry friend.
                  </p>

                  {/* Quick jump */}
                  <div className="flex flex-wrap gap-3 pt-2">
                    <a href="#individual" className="inline-flex items-center gap-2 rounded-full bg-white border border-stone-300 px-5 py-2.5 text-sm font-bold text-stone-800 hover:border-teal-700 hover:text-teal-700 transition-all">
                      <span className="material-symbols-outlined text-base">spa</span>
                      Individual Services
                    </a>
                    <a href="#home-services" className="inline-flex items-center gap-2 rounded-full bg-white border border-stone-300 px-5 py-2.5 text-sm font-bold text-stone-800 hover:border-orange-500 hover:text-orange-500 transition-all">
                      <span className="material-symbols-outlined text-base">home</span>
                      Pet Home Services
                    </a>
                  </div>
                </div>

                {/* Stat chips */}
                <div className="lg:col-span-5 grid grid-cols-2 gap-3">
                  {[
                    { value: '15', label: 'Individual Services', accent: 'teal' },
                    { value: '15', label: 'Home Services', accent: 'orange' },
                    { value: '$25', label: 'Starting Price', accent: 'teal' },
                    { value: '$2,500', label: 'Premium Package', accent: 'orange' },
                  ].map((s) => (
                    <div key={s.label} className="rounded-2xl bg-white border border-stone-200 p-4 hover:shadow-md transition-shadow">
                      <div className={`text-2xl font-extrabold tracking-tight ${s.accent === 'teal' ? 'text-teal-700' : 'text-orange-500'}`}>
                        {s.value}
                      </div>
                      <div className="text-xs text-stone-500 mt-0.5">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ============ INDIVIDUAL PET SERVICES ============ */}
            <section id="individual" className="px-4 sm:px-10 lg:px-20 py-12">
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
                  <div>
                    <span className="inline-flex items-center gap-2 rounded-full bg-teal-100 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-teal-700">
                      <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>spa</span>
                      Category 01
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight mt-2">
                      Individual Pet Services
                    </h2>
                    <p className="text-stone-600 text-sm mt-1">Premium grooming for your beloved companion</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-white border border-stone-200 px-3 py-1.5 text-xs font-semibold text-stone-700">15 Services</span>
                    <span className="rounded-full bg-white border border-stone-200 px-3 py-1.5 text-xs font-semibold text-stone-700">$25 – $300</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {individualServices.map((service, index) =>
                    renderServiceCard(service, index, featuredIndexIndividual, 'individual')
                  )}
                </div>
              </div>
            </section>

            {/* ============ PET HOME SERVICES ============ */}
            <section id="home-services" className="px-4 sm:px-10 lg:px-20 py-12 bg-white border-y border-stone-200">
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
                  <div>
                    <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-orange-600">
                      <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
                      Category 02
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight mt-2">
                      Pet Home Services
                    </h2>
                    <p className="text-stone-600 text-sm mt-1">Full-service grooming for pet homes, shelters, and boarding facilities</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-white border border-stone-200 px-3 py-1.5 text-xs font-semibold text-stone-700">15 Services</span>
                    <span className="rounded-full bg-white border border-stone-200 px-3 py-1.5 text-xs font-semibold text-stone-700">$700 – $2,500</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {petHomeServices.map((service, index) =>
                    renderServiceCard(service, index, featuredIndexHome, 'home')
                  )}
                </div>
              </div>
            </section>

            {/* ============ TOTALS / STATS ============ */}
            <section className="px-4 sm:px-10 lg:px-20 py-16">
              <div className="max-w-7xl mx-auto rounded-[2rem] bg-gradient-to-br from-teal-700 to-teal-900 text-white p-8 sm:p-12 relative overflow-hidden">
                <div className="absolute -top-20 -right-20 size-64 rounded-full bg-orange-500/20 blur-3xl" />
                <div className="absolute -bottom-20 -left-20 size-64 rounded-full bg-teal-400/20 blur-3xl" />

                <div className="relative text-center">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-orange-300">
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
                    Full Catalogue
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mt-3">30 Premium Grooming Services Available</h3>
                  <p className="text-teal-100 mt-2 max-w-xl mx-auto">From individual pampering to full-scale pet home services</p>

                  <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {[
                      { value: '15', label: 'Individual Services' },
                      { value: '15', label: 'Pet Home Services' },
                      { value: '$25', label: 'Starting Price' },
                      { value: '$2,500', label: 'Premium Package' },
                    ].map((s) => (
                      <div key={s.label} className="rounded-2xl bg-white/10 border border-white/15 px-4 py-4 backdrop-blur-sm">
                        <div className="text-3xl font-extrabold tracking-tight text-white">{s.value}</div>
                        <div className="text-xs text-teal-200 mt-1">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* ============ CTA ============ */}
            <section className="px-4 sm:px-10 lg:px-20 pb-20">
              <div className="max-w-4xl mx-auto text-center">
                <span className="material-symbols-outlined text-orange-500 text-4xl mb-3" style={{ fontVariationSettings: "'FILL' 1" }}>pets</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
                  Ready to Book Your Pet's Grooming?
                </h2>
                <p className="mt-4 text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
                  Schedule your appointment today and give your furry friend the premium care they deserve.
                </p>
                <Link
                  to="/Contact"
                  onClick={() => handleNavClick('/Contact')}
                  className="mt-8 inline-flex items-center justify-center gap-2 rounded-full h-12 px-8 bg-orange-500 text-white text-sm font-bold shadow-lg shadow-orange-500/25 hover:bg-orange-600 transition-all"
                >
                  Book Your Grooming Session
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </Link>
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
        html { scroll-behavior: smooth; }
      `}</style>
    </div>
  );
}

export default Services;