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

  // Navigation handlers
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

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      const updatedServices = checked
        ? [...formData['services-interested'], value]
        : formData['services-interested'].filter(item => item !== value);
      
      setFormData({
        ...formData,
        'services-interested': updatedServices
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    setMessageType('');

    // Validate required fields
    if (!formData['full-name'] || !formData.email) {
      setMessageType('error');
      setSubmitMessage('Please fill in all required fields (Name and Email).');
      setIsSubmitting(false);
      return;
    }

    try {
      console.log('Attempting to send email...');

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
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      };

      console.log('Template params:', templateParams);

      // Send email using EmailJS
      const response = await emailjs.send(
        'service_d8vjnve',
        'template_maj7w8p',
        templateParams
      );

      console.log('EmailJS Response:', response);

      if (response.status === 200) {
        setMessageType('success');
        setSubmitMessage('Thank you! Your message has been sent successfully to Matthew. He will get back to you within 24 hours!');
        
        // Reset form
        setFormData({
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

        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubmitMessage('');
          setMessageType('');
        }, 5000);
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
                  <span className="text-amber-600 text-sm font-bold leading-normal">Contact</span>
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
                    <div className="px-2 py-3 border-t border-gray-100">
                      <span className="text-amber-600 text-sm font-bold leading-normal">Contact</span>
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
            <section className="px-4 sm:px-6 lg:px-8 py-16">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <h1 className="text-gray-900 text-4xl sm:text-5xl font-black leading-tight tracking-[-0.033em]">Contact Matthew</h1>
                  <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-lg font-normal leading-normal">
                    Ready to give your pet the premium grooming experience? Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                  {/* Left Column: What happens next */}
                  <div className="space-y-8">
                    <h2 className="text-gray-900 text-2xl sm:text-3xl font-bold leading-tight tracking-[-0.015em]">Your Pet's Grooming Journey Starts Here</h2>
                    <div className="space-y-6">
                      <div className="grid grid-cols-[40px_1fr] gap-x-4">
                        {/* Step 1 */}
                        <div className="flex flex-col items-center gap-1 pt-1">
                          <div className="flex items-center justify-center size-10 rounded-full bg-amber-50 text-amber-600">
                            <span className="material-symbols-outlined">chat</span>
                          </div>
                          <div className="w-[2px] bg-gray-200 grow"></div>
                        </div>
                        <div className="flex flex-1 flex-col pb-6">
                          <p className="text-gray-900 text-base font-medium leading-normal">Initial Consultation</p>
                          <p className="text-gray-600 text-base font-normal leading-normal">Discuss your pet's needs, breed, temperament, and your grooming preferences.</p>
                        </div>

                        {/* Step 2 */}
                        <div className="flex flex-col items-center gap-1">
                          <div className="flex items-center justify-center size-10 rounded-full bg-amber-50 text-amber-600">
                            <span className="material-symbols-outlined">pets</span>
                          </div>
                          <div className="w-[2px] bg-gray-200 grow"></div>
                        </div>
                        <div className="flex flex-1 flex-col pb-6">
                          <p className="text-gray-900 text-base font-medium leading-normal">Pet Assessment</p>
                          <p className="text-gray-600 text-base font-normal leading-normal">Evaluate your pet's coat condition, skin health, and any special requirements.</p>
                        </div>

                        {/* Step 3 */}
                        <div className="flex flex-col items-center gap-1">
                          <div className="flex items-center justify-center size-10 rounded-full bg-amber-50 text-amber-600">
                            <span className="material-symbols-outlined">spa</span>
                          </div>
                          <div className="w-[2px] bg-gray-200 grow"></div>
                        </div>
                        <div className="flex flex-1 flex-col pb-6">
                          <p className="text-gray-900 text-base font-medium leading-normal">Custom Grooming Plan</p>
                          <p className="text-gray-600 text-base font-normal leading-normal">Personalized grooming plan including services, products, and styling options.</p>
                        </div>

                        {/* Step 4 */}
                        <div className="flex flex-col items-center gap-1">
                          <div className="flex items-center justify-center size-10 rounded-full bg-amber-50 text-amber-600">
                            <span className="material-symbols-outlined">calendar_month</span>
                          </div>
                          <div className="w-[2px] bg-gray-200 grow"></div>
                        </div>
                        <div className="flex flex-1 flex-col pb-6">
                          <p className="text-gray-900 text-base font-medium leading-normal">Schedule Your Session</p>
                          <p className="text-gray-600 text-base font-normal leading-normal">Choose a convenient time for your pet's grooming appointment.</p>
                        </div>

                        {/* Step 5 */}
                        <div className="flex flex-col items-center gap-1">
                          <div className="flex items-center justify-center size-10 rounded-full bg-amber-50 text-amber-600">
                            <span className="material-symbols-outlined">favorite</span>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col">
                          <p className="text-gray-900 text-base font-medium leading-normal">Pamper Your Pet</p>
                          <p className="text-gray-600 text-base font-normal leading-normal">Enjoy watching your furry friend get the VIP treatment they deserve!</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Contact Form */}
                  <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                    <h2 className="text-gray-900 text-2xl sm:text-3xl font-bold leading-tight tracking-[-0.015em] mb-6">Book Your Pet's Appointment</h2>
                    
                    {/* Success/Error Message */}
                    {submitMessage && (
                      <div className={`mb-6 p-4 rounded-lg ${messageType === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
                        <div className="flex items-start">
                          <span className="material-symbols-outlined mr-3 mt-0.5">
                            {messageType === 'success' ? 'check_circle' : 'error'}
                          </span>
                          <span>{submitMessage}</span>
                        </div>
                      </div>
                    )}
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                          <label className="block text-sm font-medium text-gray-700" htmlFor="full-name">Full Name *</label>
                          <input 
                            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600" 
                            id="full-name" 
                            name="full-name" 
                            required 
                            type="text"
                            value={formData['full-name']}
                            onChange={handleInputChange}
                            disabled={isSubmitting}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email Address *</label>
                          <input 
                            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600" 
                            id="email" 
                            name="email" 
                            required 
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            disabled={isSubmitting}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700" htmlFor="phone-number">Phone Number</label>
                        <input 
                          className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600" 
                          id="phone-number" 
                          name="phone-number" 
                          type="tel"
                          value={formData['phone-number']}
                          onChange={handleInputChange}
                          disabled={isSubmitting}
                          placeholder="+1 (916) 604-4908"
                        />
                      </div>

                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                          <label className="block text-sm font-medium text-gray-700" htmlFor="pet-type">Pet Type</label>
                          <select 
                            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600" 
                            id="pet-type" 
                            name="pet-type"
                            value={formData['pet-type']}
                            onChange={handleInputChange}
                            disabled={isSubmitting}
                          >
                            <option>Dog</option>
                            <option>Cat</option>
                            <option>Both</option>
                            <option>Other</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700" htmlFor="breed">Breed</label>
                          <input 
                            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600" 
                            id="breed" 
                            name="breed" 
                            type="text"
                            value={formData.breed}
                            onChange={handleInputChange}
                            disabled={isSubmitting}
                            placeholder="e.g., Golden Retriever"
                          />
                        </div>
                      </div>

                      <fieldset>
                        <legend className="text-sm font-medium text-gray-700">What services are you interested in?</legend>
                        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {['Full Grooming Package', 'Bath & Brush', 'Haircut & Styling', 'Spa & De-shedding', 'Nail & Paw Care', 'Mobile Grooming', 'Monthly Membership', 'Not sure yet'].map((service, index) => {
                            const value = service.replace(/\s+/g, '-').toLowerCase();
                            return (
                              <div className="flex items-center" key={index}>
                                <input 
                                  className="h-4 w-4 rounded border-gray-300 text-amber-600 focus:ring-amber-600" 
                                  id={`service-${value}`} 
                                  name="services-interested" 
                                  type="checkbox" 
                                  value={service}
                                  checked={formData['services-interested'].includes(service)}
                                  onChange={handleInputChange}
                                  disabled={isSubmitting}
                                />
                                <label className="ml-3 text-sm text-gray-600" htmlFor={`service-${value}`}>{service}</label>
                              </div>
                            );
                          })}
                        </div>
                      </fieldset>

                      <div>
                        <label className="block text-sm font-medium text-gray-700" htmlFor="availability">Preferred appointment time</label>
                        <select 
                          className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600" 
                          id="availability" 
                          name="availability"
                          value={formData.availability}
                          onChange={handleInputChange}
                          disabled={isSubmitting}
                        >
                          <option>Mornings (8 AM - 12 PM)</option>
                          <option>Afternoons (12 PM - 4 PM)</option>
                          <option>Evenings (4 PM - 7 PM)</option>
                          <option>Weekends</option>
                          <option>Flexible</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700" htmlFor="special-requests">Special requests or preferences:</label>
                        <textarea 
                          className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600" 
                          id="special-requests" 
                          name="special-requests" 
                          rows="3"
                          value={formData['special-requests']}
                          onChange={handleInputChange}
                          disabled={isSubmitting}
                          placeholder="e.g., Specific hairstyle, sensitive skin, nervous pet, etc."
                        ></textarea>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700" htmlFor="health-concerns">Any health concerns or conditions? (Optional)</label>
                        <textarea 
                          className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600" 
                          id="health-concerns" 
                          name="health-concerns" 
                          rows="2"
                          value={formData['health-concerns']}
                          onChange={handleInputChange}
                          disabled={isSubmitting}
                          placeholder="e.g., Allergies, arthritis, skin conditions, etc."
                        ></textarea>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700" htmlFor="how-found">How did you hear about Matthew's Pet Atelier?</label>
                        <select 
                          className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600" 
                          id="how-found" 
                          name="how-found"
                          value={formData['how-found']}
                          onChange={handleInputChange}
                          disabled={isSubmitting}
                        >
                          <option>Google</option>
                          <option>Instagram</option>
                          <option>Facebook</option>
                          <option>Referral</option>
                          <option>Other</option>
                        </select>
                      </div>

                      <div>
                        <button 
                          className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-bold text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors" 
                          type="submit"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <span className="material-symbols-outlined animate-spin mr-2">progress_activity</span>
                              Sending...
                            </>
                          ) : (
                            'Send Message'
                          )}
                        </button>
                        <p className="mt-2 text-xs text-gray-500 text-center">
                          Your message will be sent directly to Matthew at Matthews.Pet.Atelier@consultant.com
                        </p>
                      </div>
                    </form>
                  </div>
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
                        <span>620 SW 19th St, San Antonio, TX 78207</span>
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
                      <p className="text-sm text-gray-600">
                        <strong>Note:</strong> All form submissions are sent directly to Matthew's inbox. You should receive a response within 24 hours.
                      </p>
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

export default Contact;