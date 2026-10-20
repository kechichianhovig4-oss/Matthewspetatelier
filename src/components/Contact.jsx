import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';

function Contact() {
  const navigate = useNavigate();
  const [isNavigating, setIsNavigating] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    'full-name': '',
    'email': '',
    'phone-number': '',
    'pet-type': 'Dog',
    'breed': '',
    'services-interested': [],
    'availability': 'Mornings',
    'special-requests': '',
    'health-concerns': '',
    'how-found': 'Google'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  // Initialize EmailJS once
  React.useEffect(() => {
    emailjs.init("FvpMZznqtxDjK8WXR");
  }, []);

  const handleNavClick = (path) => {
    setIsNavigating(true);
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      navigate(path);
      setIsNavigating(false);
    }, 300);
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      const updatedServices = checked
        ? [...formData['services-interested'], value]
        : formData['services-interested'].filter(item => item !== value);
      setFormData({ ...formData, 'services-interested': updatedServices });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    setMessageType('');

    if (!formData['full-name'] || !formData.email) {
      setMessageType('error');
      setSubmitMessage('Please fill in all required fields (Name and Email).');
      setIsSubmitting(false);
      return;
    }

    try {
      const templateParams = {
        to_email: 'Matthews.Pet.Atelier@consultant.com',
        from_name: formData['full-name'],
        from_email: formData.email,
        phone: formData['phone-number'] || 'Not provided',
        pet_type: formData['pet-type'],
        breed: formData.breed || 'Not specified',
        services: formData['services-interested'].join(', ') || 'Not specified',
        availability: formData.availability,
        special_requests: formData['special-requests'] || 'None',
        health_concerns: formData['health-concerns'] || 'None',
        how_found: formData['how-found'],
        date: new Date().toLocaleDateString('en-US', {
          weekday: 'long', year: 'numeric', month: 'long',
          day: 'numeric', hour: '2-digit', minute: '2-digit'
        })
      };

      const response = await emailjs.send(
        'service_d8vjnve',
        'template_maj7w8p',
        templateParams
      );

      if (response.status === 200) {
        setMessageType('success');
        setSubmitMessage('Thank you! Your message has been sent successfully to Matthew. He will get back to you within 24 hours!');
        setFormData({
          'full-name': '', 'email': '', 'phone-number': '',
          'pet-type': 'Dog', 'breed': '', 'services-interested': [],
          'availability': 'Mornings', 'special-requests': '',
          'health-concerns': '', 'how-found': 'Google'
        });
        setTimeout(() => { setSubmitMessage(''); setMessageType(''); }, 5000);
      }
    } catch (error) {
      console.error('Detailed EmailJS Error:', error);
      setMessageType('error');
      if (error.text && error.text.includes('recipients address')) {
        setSubmitMessage('Email configuration error. Please contact Matthew directly at Matthews.Pet.Atelier@consultant.com or call +1 (916) 604-4908.');
      } else {
        setSubmitMessage('Sorry, there was an error sending your message. Please try again or contact Matthew directly.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const journeySteps = [
    { icon: 'chat', title: 'Initial Consultation', desc: "Discuss your pet's needs, breed, temperament, and your grooming preferences." },
    { icon: 'pets', title: 'Pet Assessment', desc: "Evaluate your pet's coat condition, skin health, and any special requirements." },
    { icon: 'spa', title: 'Custom Grooming Plan', desc: 'Personalized grooming plan including services, products, and styling options.' },
    { icon: 'calendar_month', title: 'Schedule Your Session', desc: "Choose a convenient time for your pet's grooming appointment." },
    { icon: 'favorite', title: 'Pamper Your Pet', desc: 'Enjoy watching your furry friend get the VIP treatment they deserve!' },
  ];

  const servicesList = [
    'Full Grooming Package', 'Bath & Brush', 'Haircut & Styling',
    'Spa & De-shedding', 'Nail & Paw Care', 'Mobile Grooming',
    'Monthly Membership', 'Not sure yet',
  ];

  const inputClasses = "mt-1.5 block w-full rounded-xl border border-stone-300 bg-white px-4 py-2.5 text-sm text-stone-900 shadow-sm transition-colors placeholder:text-stone-400 focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-600/20 disabled:opacity-60";
  const labelClasses = "block text-sm font-semibold text-stone-800";

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
                  <span className="text-teal-700 text-sm font-bold">Contact</span>
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
                    { to: '/Contact', label: 'Contact', active: true },
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
                    Book an appointment
                  </span>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight text-stone-900">
                    Contact <span className="text-teal-700">Matthew</span>
                  </h1>
                  <p className="text-lg text-stone-600 max-w-lg leading-relaxed">
                    Ready to give your pet the premium grooming experience? Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </div>

                {/* Quick contact chips */}
                <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                  <a href="mailto:Matthews.Pet.Atelier@consultant.com" className="flex items-center gap-3 rounded-2xl bg-white border border-stone-200 p-4 hover:border-teal-300 hover:shadow-md transition-all">
                    <span className="size-10 rounded-xl bg-teal-50 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-teal-700" style={{ fontVariationSettings: "'FILL' 1" }}>email</span>
                    </span>
                    <div className="min-w-0">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Email</p>
                      <p className="text-sm font-semibold text-stone-800 truncate">Matthews.Pet.Atelier@consultant.com</p>
                    </div>
                  </a>
                  <a href="tel:+19166044908" className="flex items-center gap-3 rounded-2xl bg-white border border-stone-200 p-4 hover:border-teal-300 hover:shadow-md transition-all">
                    <span className="size-10 rounded-xl bg-orange-50 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-orange-500" style={{ fontVariationSettings: "'FILL' 1" }}>phone</span>
                    </span>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Phone</p>
                      <p className="text-sm font-semibold text-stone-800">+1 (916) 604-4908</p>
                    </div>
                  </a>
                </div>
              </div>
            </section>

            {/* ============ MAIN FORM + JOURNEY ============ */}
            <section className="px-4 sm:px-10 lg:px-20 py-10">
              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                {/* Left: Journey steps */}
                <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-teal-700">The Process</span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight mt-2">
                      Your Pet's Grooming Journey Starts Here
                    </h2>
                  </div>

                  <div className="space-y-4">
                    {journeySteps.map((step, i) => (
                      <div key={step.title} className="flex gap-4 group">
                        <div className="flex flex-col items-center">
                          <div className={`size-11 rounded-2xl flex items-center justify-center shrink-0 ${
                            i % 2 === 0 ? 'bg-teal-100' : 'bg-orange-100'
                          }`}>
                            <span
                              className={`material-symbols-outlined text-lg ${i % 2 === 0 ? 'text-teal-700' : 'text-orange-500'}`}
                              style={{ fontVariationSettings: "'FILL' 1" }}
                            >
                              {step.icon}
                            </span>
                          </div>
                          {i < journeySteps.length - 1 && (
                            <div className="w-0.5 flex-1 bg-stone-200 my-2" />
                          )}
                        </div>
                        <div className="pb-2">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-bold tracking-widest text-stone-400">
                              STEP {String(i + 1).padStart(2, '0')}
                            </span>
                          </div>
                          <p className="text-stone-900 text-sm font-bold mt-0.5">{step.title}</p>
                          <p className="text-stone-600 text-sm leading-relaxed mt-1">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Contact form */}
                <div className="lg:col-span-7">
                  <div className="rounded-3xl bg-white border border-stone-200 shadow-xl shadow-stone-900/5 overflow-hidden">
                    {/* Form header */}
                    <div className="bg-teal-700 px-6 sm:px-8 py-6 relative overflow-hidden">
                      <div className="absolute -top-8 -right-8 size-32 rounded-full bg-teal-600/50" />
                      <div className="relative flex items-center gap-3">
                        <span className="size-11 rounded-2xl bg-white/15 flex items-center justify-center">
                          <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>event_available</span>
                        </span>
                        <div>
                          <h2 className="text-white text-lg font-extrabold tracking-tight">Book Your Pet's Appointment</h2>
                          <p className="text-teal-100 text-xs">Takes less than 2 minutes</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 sm:p-8">
                      {/* Alerts */}
                      {submitMessage && (
                        <div className={`mb-6 rounded-2xl p-4 flex items-start gap-3 ${
                          messageType === 'success'
                            ? 'bg-teal-50 text-teal-800 border border-teal-200'
                            : 'bg-orange-50 text-orange-800 border border-orange-200'
                        }`}>
                          <span className="material-symbols-outlined mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>
                            {messageType === 'success' ? 'check_circle' : 'error'}
                          </span>
                          <span className="text-sm font-medium">{submitMessage}</span>
                        </div>
                      )}

                      <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Section: About you */}
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-teal-700 mb-3">01 · About you</p>
                          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                              <label className={labelClasses} htmlFor="full-name">Full Name *</label>
                              <input className={inputClasses} id="full-name" name="full-name" required type="text"
                                value={formData['full-name']} onChange={handleInputChange} disabled={isSubmitting}
                                placeholder="Jane Doe" />
                            </div>
                            <div>
                              <label className={labelClasses} htmlFor="email">Email Address *</label>
                              <input className={inputClasses} id="email" name="email" required type="email"
                                value={formData.email} onChange={handleInputChange} disabled={isSubmitting}
                                placeholder="jane@example.com" />
                            </div>
                          </div>
                          <div className="mt-4">
                            <label className={labelClasses} htmlFor="phone-number">Phone Number</label>
                            <input className={inputClasses} id="phone-number" name="phone-number" type="tel"
                              value={formData['phone-number']} onChange={handleInputChange} disabled={isSubmitting}
                              placeholder="+1 (916) 604-4908" />
                          </div>
                        </div>

                        {/* Section: Your pet */}
                        <div className="pt-5 border-t border-stone-200">
                          <p className="text-[10px] font-bold uppercase tracking-widest text-teal-700 mb-3">02 · Your pet</p>
                          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                              <label className={labelClasses} htmlFor="pet-type">Pet Type</label>
                              <select className={inputClasses} id="pet-type" name="pet-type"
                                value={formData['pet-type']} onChange={handleInputChange} disabled={isSubmitting}>
                                <option>Dog</option>
                                <option>Cat</option>
                                <option>Both</option>
                                <option>Other</option>
                              </select>
                            </div>
                            <div>
                              <label className={labelClasses} htmlFor="breed">Breed</label>
                              <input className={inputClasses} id="breed" name="breed" type="text"
                                value={formData.breed} onChange={handleInputChange} disabled={isSubmitting}
                                placeholder="e.g., Golden Retriever" />
                            </div>
                          </div>
                        </div>

                        {/* Section: Services */}
                        <div className="pt-5 border-t border-stone-200">
                          <p className="text-[10px] font-bold uppercase tracking-widest text-teal-700 mb-3">03 · Services</p>
                          <fieldset>
                            <legend className={labelClasses}>What services are you interested in?</legend>
                            <div className="mt-3 flex flex-wrap gap-2">
                              {servicesList.map((service, index) => {
                                const value = service.replace(/\s+/g, '-').toLowerCase();
                                const isChecked = formData['services-interested'].includes(service);
                                return (
                                  <label
                                    key={index}
                                    htmlFor={`service-${value}`}
                                    className={`cursor-pointer select-none rounded-full border px-4 py-2 text-xs font-semibold transition-all ${
                                      isChecked
                                        ? 'bg-teal-700 border-teal-700 text-white shadow-md shadow-teal-700/20'
                                        : 'bg-white border-stone-300 text-stone-700 hover:border-teal-400'
                                    } ${isSubmitting ? 'opacity-60 cursor-not-allowed' : ''}`}
                                  >
                                    <input
                                      className="sr-only"
                                      id={`service-${value}`}
                                      name="services-interested"
                                      type="checkbox"
                                      value={service}
                                      checked={isChecked}
                                      onChange={handleInputChange}
                                      disabled={isSubmitting}
                                    />
                                    {service}
                                  </label>
                                );
                              })}
                            </div>
                          </fieldset>
                        </div>

                        {/* Section: Schedule */}
                        <div className="pt-5 border-t border-stone-200">
                          <p className="text-[10px] font-bold uppercase tracking-widest text-teal-700 mb-3">04 · Schedule</p>
                          <div>
                            <label className={labelClasses} htmlFor="availability">Preferred appointment time</label>
                            <select className={inputClasses} id="availability" name="availability"
                              value={formData.availability} onChange={handleInputChange} disabled={isSubmitting}>
                              <option>Mornings (8 AM - 12 PM)</option>
                              <option>Afternoons (12 PM - 4 PM)</option>
                              <option>Evenings (4 PM - 7 PM)</option>
                              <option>Weekends</option>
                              <option>Flexible</option>
                            </select>
                          </div>
                        </div>

                        {/* Section: Details */}
                        <div className="pt-5 border-t border-stone-200">
                          <p className="text-[10px] font-bold uppercase tracking-widest text-teal-700 mb-3">05 · Additional details</p>
                          <div className="space-y-4">
                            <div>
                              <label className={labelClasses} htmlFor="special-requests">Special requests or preferences</label>
                              <textarea className={inputClasses} id="special-requests" name="special-requests" rows="3"
                                value={formData['special-requests']} onChange={handleInputChange} disabled={isSubmitting}
                                placeholder="e.g., Specific hairstyle, sensitive skin, nervous pet, etc."></textarea>
                            </div>
                            <div>
                              <label className={labelClasses} htmlFor="health-concerns">Any health concerns or conditions? (Optional)</label>
                              <textarea className={inputClasses} id="health-concerns" name="health-concerns" rows="2"
                                value={formData['health-concerns']} onChange={handleInputChange} disabled={isSubmitting}
                                placeholder="e.g., Allergies, arthritis, skin conditions, etc."></textarea>
                            </div>
                            <div>
                              <label className={labelClasses} htmlFor="how-found">How did you hear about Matthew's Pet Atelier?</label>
                              <select className={inputClasses} id="how-found" name="how-found"
                                value={formData['how-found']} onChange={handleInputChange} disabled={isSubmitting}>
                                <option>Google</option>
                                <option>Instagram</option>
                                <option>Facebook</option>
                                <option>Referral</option>
                                <option>Other</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        {/* Submit */}
                        <div className="pt-2">
                          <button
                            className="w-full flex justify-center items-center gap-2 py-3.5 px-6 rounded-full text-sm font-bold text-white bg-orange-500 shadow-lg shadow-orange-500/25 hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-500/30 disabled:opacity-60 disabled:cursor-not-allowed transition-all"
                            type="submit"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? (
                              <>
                                <span className="material-symbols-outlined animate-spin text-lg">progress_activity</span>
                                Sending...
                              </>
                            ) : (
                              <>
                                Send Message
                                <span className="material-symbols-outlined text-lg">arrow_forward</span>
                              </>
                            )}
                          </button>
                          <p className="mt-3 text-xs text-stone-500 text-center">
                            Your message will be sent directly to Matthew at Matthews.Pet.Atelier@consultant.com
                          </p>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ============ CONTACT DETAILS ============ */}
            <section className="px-4 sm:px-10 lg:px-20 py-16 bg-white border-t border-stone-200">
              <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Contact card */}
                <div className="rounded-3xl bg-teal-900 text-white p-7 relative overflow-hidden">
                  <div className="absolute -top-10 -right-10 size-40 rounded-full bg-orange-500/20 blur-2xl" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-orange-300 relative">Contact Matthew</span>
                  <h3 className="text-xl font-extrabold mt-2 mb-4 relative">Reach out directly</h3>
                  <div className="space-y-3 text-sm relative">
                    <p className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-orange-300 text-base mt-0.5">email</span>
                      <span className="break-all">Matthews.Pet.Atelier@consultant.com</span>
                    </p>
                    <p className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-orange-300 text-base">phone</span>
                      +1 (916) 604-4908
                    </p>
                    <p className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-orange-300 text-base mt-0.5">location_on</span>
                      <span>620 SW 19th St,<br />San Antonio, TX 78207</span>
                    </p>
                  </div>
                </div>

                {/* Hours card */}
                <div className="rounded-3xl bg-stone-50 border border-stone-200 p-7 md:col-span-2">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="size-10 rounded-2xl bg-teal-100 flex items-center justify-center">
                      <span className="material-symbols-outlined text-teal-700" style={{ fontVariationSettings: "'FILL' 1" }}>schedule</span>
                    </span>
                    <h3 className="text-lg font-extrabold text-stone-900">Studio Hours</h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-sm text-stone-600">
                    <p className="flex justify-between border-b border-stone-200 pb-2"><span className="font-semibold text-stone-800">Mon – Fri</span> 8:00 AM – 7:00 PM</p>
                    <p className="flex justify-between border-b border-stone-200 pb-2"><span className="font-semibold text-stone-800">Saturday</span> 9:00 AM – 5:00 PM</p>
                    <p className="flex justify-between border-b border-stone-200 pb-2"><span className="font-semibold text-stone-800">Sunday</span> <span className="text-orange-500 font-semibold">Closed</span></p>
                    <p className="flex justify-between border-b border-stone-200 pb-2"><span className="font-semibold text-stone-800">Mobile Service</span> By appointment</p>
                  </div>
                  <p className="mt-5 text-xs text-stone-500 flex items-start gap-2">
                    <span className="material-symbols-outlined text-teal-700 text-base">info</span>
                    <span><strong className="text-stone-700">Note:</strong> All form submissions are sent directly to Matthew's inbox. You should receive a response within 24 hours.</span>
                  </p>
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

export default Contact;