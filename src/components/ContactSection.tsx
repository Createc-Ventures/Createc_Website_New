import React, { useState } from 'react';
import { Mail, Phone, Globe, MapPin, Instagram, Linkedin } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  setError('');

  try {
    const response = await fetch('https://sheetdb.io/api/v1/w80tkq0a1o4kf', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
      }),
    });

    if (response.ok) {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } else {
      setError('Something went wrong. Please try again later.');
    }
  } catch (err) {
    setError('Failed to send your message. Please check your internet connection.');
    console.error('Error:', err);
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <section id="contact" className="relative bg-createc-platinum min-h-screen py-16">
      <div className="absolute inset-0 opacity-30"></div>
      <div className="container mx-auto relative z-10 px-4">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-4xl font-bold text-black mb-2">Let's Connect</h2>
          <div className="w-24 h-1 bg-createc-orange mx-auto rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row w-full bg-gray-800 rounded-xl shadow-xl overflow-hidden min-h-[600px]">

            {/* Left - Contact Info */}
            <div className="w-full md:w-2/5 bg-gradient-to-br from-createc-orange to-createc-yellow p-8 md:p-12 text-white">
              <h3 className="font-bold text-2xl mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href="mailto:info@createc.in" className="hover:text-gray-200">info@createc.in</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center mr-4">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a href="tel:+917057731716" className="hover:text-gray-200">+91 7057731716</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center mr-4">
                    <Globe size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">Website</p>
                    <a href="https://www.createc.in" className="hover:text-gray-200" target="_blank" rel="noreferrer">www.createc.in</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center mr-4">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">Address</p>
                    <address className="not-italic">Viman Nagar, Pune 411014</address>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h4 className="font-semibold mb-4">Connect With Us</h4>
                <div className="flex space-x-4">
                  <a href="https://www.instagram.com/createc.solutions/?hl=en" target="_blank" rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-40 transition-all duration-300">
                    <Instagram size={20} />
                  </a>
                  <a href="https://www.linkedin.com/company/createc-solutions-llp/posts/?feedView=all" target="_blank" rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-40 transition-all duration-300">
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
              <h3 className="font-bold text-2xl text-orange-500 mb-6">Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white bg-opacity-10 backdrop-blur-md border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-300"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white bg-opacity-10 backdrop-blur-md border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-300"
                    placeholder="Your email"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white bg-opacity-10 backdrop-blur-md border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-300 resize-none"
                    placeholder="How can we help you?"
                    rows={5}
                    required
                  ></textarea>
                </div>

                {submitted && (
                  <div className="p-4 bg-green-100 text-green-700 rounded-lg border border-green-200">
                    ✅ Thank you for your message! We'll get back to you soon.
                  </div>
                )}

                {error && (
                  <div className="p-4 bg-red-100 text-red-700 rounded-lg border border-red-200">
                    ❌ {error}
                  </div>
                )}

                <button
                  type="submit"
                  className="bg-gradient-to-r from-createc-orange to-createc-yellow text-white font-semibold px-8 py-3 rounded-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : 'Send Message'}
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
