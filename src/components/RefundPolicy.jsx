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

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const sections = [
    { id: 'cancellation', label: 'Cancellation Policy', icon: 'event_busy' },
    { id: 'refund-services', label: 'Refund Policy for Services', icon: 'replay' },
    { id: 'refund-packages', label: 'Refund Policy for Packages', icon: 'inventory_2' },
    { id: 'pet-home', label: 'Pet Home Services', icon: 'home_work' },
    { id: 'emergency', label: 'Emergency Situations', icon: 'health_and_safety' },
    { id: 'processing', label: 'Refund Processing', icon: 'payments' },
    { id: 'request', label: 'How to Request a Refund', icon: 'support_agent' },
    { id: 'exceptions', label: 'Exceptions & Special Circumstances', icon: 'rule' },
    { id: 'updates', label: 'Policy Updates', icon: 'update' },
  ];

  const CheckList = ({ items }) => (
    <ul className="mt-3 space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2.5 text-sm text-stone-600">
          <span className="material-symbols-outlined text-teal-700 text-base mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>
            check_circle
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
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
                    { to: '/Services', label: 'Services' },
                    { to: '/AboutMe', label: 'About' },
                    { to: '/Contact', label: 'Contact' },
                    { to: '/Testimonials', label: 'Testimonials' },
                  ].map((item) => (
                    <Link key={item.label} to={item.to} onClick={() => handleNavClick(item.to)}
                      className="block px-3 py-3 rounded-xl text-sm font-medium text-stone-700 hover:bg-stone-100 transition-colors">
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
                    Legal · Customer Care
                  </span>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight text-stone-900">
                    Refund <span className="text-teal-700">Policy</span>
                  </h1>
                  <p className="text-lg text-stone-600 max-w-lg leading-relaxed">
                    At Matthew's Pet Atelier, we are committed to providing exceptional grooming services for your beloved pets. We understand that sometimes situations change, and we strive to be fair and transparent in our refund and cancellation policies.
                  </p>
                </div>

                {/* Meta card */}
                <div className="lg:col-span-5">
                  <div className="rounded-3xl bg-white border border-stone-200 p-6 shadow-xl shadow-stone-900/5">
                    <div className="flex items-center gap-3">
                      <span className="size-11 rounded-2xl bg-teal-700 text-white flex items-center justify-center shadow-lg shadow-teal-700/20">
                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>gavel</span>
                      </span>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Last Updated</p>
                        <p className="text-sm font-bold text-stone-900">August 2025</p>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-stone-100 grid grid-cols-2 gap-3 text-sm">
                      <div className="rounded-xl bg-teal-50 px-3 py-2">
                        <div className="text-xs font-semibold text-teal-800">Cancellation</div>
                        <div className="text-[11px] text-teal-700 mt-0.5">24-hour notice</div>
                      </div>
                      <div className="rounded-xl bg-orange-50 px-3 py-2">
                        <div className="text-xs font-semibold text-orange-700">Refund window</div>
                        <div className="text-[11px] text-orange-600 mt-0.5">5–10 business days</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ============ BODY: TOC + CONTENT ============ */}
            <section className="px-4 sm:px-10 lg:px-20 py-10">
              <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 items-start">

                {/* Sticky Table of Contents */}
                <aside className="hidden lg:block lg:col-span-4 lg:sticky lg:top-24">
                  <div className="rounded-3xl bg-white border border-stone-200 p-6">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-teal-700 mb-3">On this page</p>
                    <nav className="space-y-1">
                      {sections.map((s, i) => (
                        <a
                          key={s.id}
                          href={`#${s.id}`}
                          className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-stone-600 hover:bg-teal-50 hover:text-teal-800 transition-colors group"
                        >
                          <span className="material-symbols-outlined text-base text-stone-400 group-hover:text-teal-700">
                            {s.icon}
                          </span>
                          <span className="flex-1 leading-tight">{s.label}</span>
                          <span className="text-[10px] font-bold text-stone-300 group-hover:text-teal-600">
                            {String(i + 1).padStart(2, '0')}
                          </span>
                        </a>
                      ))}
                    </nav>
                  </div>

                  {/* Need help card */}
                  <div className="mt-4 rounded-3xl bg-teal-900 text-white p-6 relative overflow-hidden">
                    <div className="absolute -top-8 -right-8 size-32 rounded-full bg-orange-500/20 blur-2xl" />
                    <span className="material-symbols-outlined text-orange-300 text-3xl relative" style={{ fontVariationSettings: "'FILL' 1" }}>
                      support_agent
                    </span>
                    <h3 className="text-base font-extrabold mt-2 relative">Need help with a refund?</h3>
                    <p className="text-xs text-teal-200 mt-1 relative">Reach out and we'll do our best to resolve it quickly.</p>
                    <Link to="/Contact" onClick={() => handleNavClick('/Contact')}
                      className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-full h-9 px-4 bg-orange-500 text-white text-xs font-bold hover:bg-orange-600 transition-all relative">
                      Contact us
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </Link>
                  </div>
                </aside>

                {/* Policy content */}
                <div className="lg:col-span-8 space-y-6">

                  {/* 01 Cancellation */}
                  <section id="cancellation" className="scroll-mt-24 rounded-3xl bg-white border border-stone-200 p-6 sm:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[10px] font-bold tracking-widest text-stone-300">01</span>
                      <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 tracking-tight">Cancellation Policy</h2>
                    </div>
                    <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
                      <strong className="font-semibold text-stone-900">24-Hour Cancellation Notice:</strong> We require at least 24 hours' notice for any appointment cancellation or rescheduling. This allows us to offer the time slot to other clients who may be waiting.
                    </p>

                    <div className="mt-5 rounded-2xl bg-orange-50 border border-orange-200 p-5 flex gap-3">
                      <span className="size-9 rounded-xl bg-orange-500 text-white flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>schedule</span>
                      </span>
                      <div>
                        <p className="font-bold text-orange-800 text-sm">Late Cancellations</p>
                        <p className="text-orange-700 text-sm mt-1 leading-relaxed">Cancellations made within 24 hours of the scheduled appointment may be subject to a 50% cancellation fee of the scheduled service cost.</p>
                      </div>
                    </div>

                    <div className="mt-3 rounded-2xl bg-red-50 border border-red-200 p-5 flex gap-3">
                      <span className="size-9 rounded-xl bg-red-500 text-white flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>block</span>
                      </span>
                      <div>
                        <p className="font-bold text-red-800 text-sm">No-Show Policy</p>
                        <p className="text-red-700 text-sm mt-1 leading-relaxed">Clients who do not show up for their scheduled appointment without prior notice will be charged the full amount of the scheduled service.</p>
                      </div>
                    </div>
                  </section>

                  {/* 02 Refund for Services */}
                  <section id="refund-services" className="scroll-mt-24 rounded-3xl bg-white border border-stone-200 p-6 sm:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[10px] font-bold tracking-widest text-stone-300">02</span>
                      <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 tracking-tight">Refund Policy for Services</h2>
                    </div>
                    <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
                      <strong className="font-semibold text-stone-900">Service Satisfaction:</strong> Your pet's satisfaction and well-being are our top priorities. If you are not completely satisfied with our grooming service, please let us know within 24 hours of the appointment.
                    </p>

                    <div className="mt-5 rounded-2xl bg-teal-50 border border-teal-200 p-5">
                      <p className="font-bold text-teal-800 text-sm flex items-center gap-2">
                        <span className="material-symbols-outlined text-teal-700 text-base" style={{ fontVariationSettings: "'FILL' 1" }}>handshake</span>
                        We will work with you to address any concerns by:
                      </p>
                      <CheckList items={[
                        'Offering to correct the service at no additional charge',
                        'Providing a partial refund based on the specific issue',
                        'Discussing alternative solutions to ensure your satisfaction',
                      ]} />
                    </div>
                  </section>

                  {/* 03 Refund for Packages */}
                  <section id="refund-packages" className="scroll-mt-24 rounded-3xl bg-white border border-stone-200 p-6 sm:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[10px] font-bold tracking-widest text-stone-300">03</span>
                      <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 tracking-tight">Refund Policy for Package Purchases</h2>
                    </div>
                    <div className="space-y-4 text-stone-700 text-sm sm:text-base">
                      <p><strong className="font-semibold text-stone-900">Membership Plans:</strong> Monthly memberships can be canceled at any time with 30 days' written notice. Refunds for unused portions of a membership will be prorated based on the number of services remaining.</p>
                      <p><strong className="font-semibold text-stone-900">Prepaid Packages:</strong> Prepaid grooming packages are valid for 6 months from the date of purchase. Unused portions may be refunded minus a 20% administrative fee, or transferred to another pet with prior approval.</p>
                    </div>
                  </section>

                  {/* 04 Pet Home Services */}
                  <section id="pet-home" className="scroll-mt-24 rounded-3xl bg-white border border-stone-200 p-6 sm:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[10px] font-bold tracking-widest text-stone-300">04</span>
                      <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 tracking-tight">Pet Home Services</h2>
                    </div>
                    <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
                      For our pet home service clients (boarding facilities, daycare centers, etc.):
                    </p>
                    <ul className="mt-3 space-y-3">
                      {[
                        { h: 'Bulk Bookings:', t: 'Cancellations for bulk service bookings must be made at least 48 hours in advance to avoid a cancellation fee.' },
                        { h: 'Monthly Contracts:', t: "Monthly service contracts require 30 days' written notice for cancellation. Refunds will be prorated based on services already provided." },
                        { h: 'Volume Discounts:', t: 'If a volume discount was applied to a booking and the number of pets is reduced, the discount may be adjusted and the price recalculated accordingly.' },
                      ].map((item) => (
                        <li key={item.h} className="flex items-start gap-2.5 text-sm text-stone-600">
                          <span className="material-symbols-outlined text-teal-700 text-base mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                          <span><strong className="font-semibold text-stone-900">{item.h}</strong> {item.t}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  {/* 05 Emergency */}
                  <section id="emergency" className="scroll-mt-24 rounded-3xl bg-white border border-stone-200 p-6 sm:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[10px] font-bold tracking-widest text-stone-300">05</span>
                      <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 tracking-tight">Emergency Situations</h2>
                    </div>
                    <p className="text-stone-700 leading-relaxed text-sm sm:text-base">We understand that emergencies happen. In the event of:</p>
                    <ul className="mt-3 space-y-3">
                      {[
                        { h: 'Pet Illness or Injury:', t: 'If your pet becomes ill or injured and cannot receive grooming services, we will work with you to reschedule at no additional cost.' },
                        { h: 'Weather Emergencies:', t: 'In cases of severe weather, appointments may be rescheduled without penalty.' },
                        { h: 'Personal Emergencies:', t: "We understand that life happens—please contact us directly, and we will do our best to accommodate your situation." },
                      ].map((item) => (
                        <li key={item.h} className="flex items-start gap-2.5 text-sm text-stone-600">
                          <span className="material-symbols-outlined text-orange-500 text-base mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>emergency</span>
                          <span><strong className="font-semibold text-stone-900">{item.h}</strong> {item.t}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  {/* 06 Processing */}
                  <section id="processing" className="scroll-mt-24 rounded-3xl bg-white border border-stone-200 p-6 sm:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[10px] font-bold tracking-widest text-stone-300">06</span>
                      <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 tracking-tight">Refund Processing</h2>
                    </div>
                    <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
                      Approved refunds will be processed within 5-10 business days and credited back to the original payment method. Please note:
                    </p>
                    <CheckList items={[
                      'Refunds may take additional time depending on your bank or payment processor',
                      'Processing fees from payment processors may be deducted from the refund amount',
                      'All refunds will be issued in the original currency of the payment',
                    ]} />
                  </section>

                  {/* 07 How to Request */}
                  <section id="request" className="scroll-mt-24 rounded-3xl bg-teal-900 text-white p-6 sm:p-8 relative overflow-hidden">
                    <div className="absolute -top-20 -right-20 size-64 rounded-full bg-orange-500/20 blur-3xl" />
                    <div className="relative">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-[10px] font-bold tracking-widest text-teal-400">07</span>
                        <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight">How to Request a Refund</h2>
                      </div>
                      <p className="text-teal-100 text-sm sm:text-base leading-relaxed">
                        To request a refund or discuss any concerns about our services, please contact us:
                      </p>
                      <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <a href="tel:+19166044908" className="rounded-2xl bg-white/10 border border-white/15 p-4 hover:bg-white/15 transition-colors">
                          <span className="material-symbols-outlined text-orange-300 text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>phone</span>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-teal-300 mt-2">Call or Text</p>
                          <p className="text-sm font-bold mt-0.5">+1 (916) 604-4908</p>
                        </a>
                        <a href="mailto:Matthews.Pet.Atelier@consultant.com" className="rounded-2xl bg-white/10 border border-white/15 p-4 hover:bg-white/15 transition-colors">
                          <span className="material-symbols-outlined text-orange-300 text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>email</span>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-teal-300 mt-2">Email</p>
                          <p className="text-xs font-bold mt-0.5 break-all">Matthews.Pet.Atelier@consultant.com</p>
                        </a>
                        <div className="rounded-2xl bg-white/10 border border-white/15 p-4">
                          <span className="material-symbols-outlined text-orange-300 text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-teal-300 mt-2">Visit Us</p>
                          <p className="text-xs font-bold mt-0.5 leading-snug">620 SW 19th St,<br />San Antonio, TX 78207</p>
                        </div>
                      </div>
                      <div className="mt-5 pt-4 border-t border-teal-700/60">
                        <p className="text-xs text-teal-200">Please have the following information ready when you contact us:</p>
                        <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-teal-100">
                          {[
                            'Full name and contact information',
                            "Pet's name and service date",
                            'Service(s) provided and amount paid',
                            'Reason for requesting a refund',
                          ].map((item) => (
                            <li key={item} className="flex items-start gap-1.5">
                              <span className="material-symbols-outlined text-orange-300 text-sm mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </section>

                  {/* 08 Exceptions */}
                  <section id="exceptions" className="scroll-mt-24 rounded-3xl bg-white border border-stone-200 p-6 sm:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[10px] font-bold tracking-widest text-stone-300">08</span>
                      <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 tracking-tight">Exceptions and Special Circumstances</h2>
                    </div>
                    <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
                      We reserve the right to make exceptions to this policy on a case-by-case basis. Factors we may consider include:
                    </p>
                    <CheckList items={[
                      'Client history and loyalty',
                      'Nature of the issue or concern',
                      'Frequency of past cancellations or refund requests',
                      "Extenuating circumstances beyond the client's control",
                    ]} />
                  </section>

                  {/* 09 Updates */}
                  <section id="updates" className="scroll-mt-24 rounded-3xl bg-white border border-stone-200 p-6 sm:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[10px] font-bold tracking-widest text-stone-300">09</span>
                      <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 tracking-tight">Policy Updates</h2>
                    </div>
                    <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
                      Matthew's Pet Atelier reserves the right to update this Refund Policy at any time. Changes will be posted on our website, and the "Last Updated" date will be revised. We encourage you to review this policy periodically for any changes.
                    </p>
                  </section>

                  {/* Commitment callout */}
                  <div className="rounded-3xl bg-gradient-to-br from-orange-500 to-orange-600 text-white p-7 sm:p-8 relative overflow-hidden shadow-xl shadow-orange-500/20">
                    <span className="material-symbols-outlined absolute -top-2 right-6 text-white/15 text-7xl leading-none" style={{ fontVariationSettings: "'FILL' 1" }}>
                      favorite
                    </span>
                    <div className="relative">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-orange-100">Our Commitment to You</span>
                      <h3 className="text-xl sm:text-2xl font-extrabold mt-2 tracking-tight">Built on trust, quality, and transparency</h3>
                      <p className="text-orange-50 mt-2 leading-relaxed text-sm sm:text-base">
                        At Matthew's Pet Atelier, we believe in building lasting relationships with our clients based on trust, quality, and transparency. We are committed to addressing any concerns you may have and ensuring that both you and your pet have a positive experience with our services.
                      </p>
                    </div>
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
        html { scroll-behavior: smooth; }
      `}</style>
    </div>
  );
}

export default RefundPolicy;