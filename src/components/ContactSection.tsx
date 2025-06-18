import React, { useState } from 'react';
import { Mail, Phone, Globe, MapPin, Instagram, Linkedin } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const params = new URLSearchParams();
    params.append('name', formData.name);
    params.append('email', formData.email);
    params.append('message', formData.message);

    try {
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbwlBGSaamJrAv8wcLLdV4r4GhGLSRxdpyD8aYOYzqdPYvqddOM1ay9iPPFTjciIcoeUZQ/exec?',
        {
          method: 'GET',
          body: params
        }
      );

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError('Something went wrong. Please try again later.');
        console.error('Response not ok:', await response.text());
      }
    } catch (err) {
      setError('Failed to send your message. Please check your internet connection or try again later.');
      console.error('Error submitting form:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding relative bg-createc-platinum">
      <div className="absolute inset-0 tech-grid opacity-30"></div>
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-createc-blue mb-2">Let's Connect</h2>
          <div className="w-24 h-1 bg-createc-purple mx-auto rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row bg-[#242124] rounded-xl backdrop-blur-md shadow-xl overflow-hidden">

            {/* Left - Contact Info */}
            <div className="md:w-2/5 gradient-bg p-12 text-white">
              <h3 className="font-montserrat font-bold text-2xl mb-6">Contact Information</h3>
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
                <h4 className="font-montserrat font-semibold mb-4">Connect With Us</h4>
                <div className="flex space-x-4">
                  <a href="https://www.instagram.com/createc.solutions/?hl=en" target="_blank" rel="noreferrer"
                     className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-40">
                    <Instagram size={20} />
                  </a>
                  <a href="https://www.linkedin.com/company/createc-solutions-llp/posts/?feedView=all" target="_blank" rel="noreferrer"
                     className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-40">
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div className="md:w-3/5 p-12">
              <h3 className="font-montserrat font-bold text-2xl text-createc-orange mb-6">Send us a message</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-white font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border-gray-300 rounded-lg focus:ring-2 focus:ring-createc-purple text-white"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-white font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border-gray-300 rounded-lg focus:ring-2 focus:ring-createc-purple text-white"
                    placeholder="Your email"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-white font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border-gray-300 rounded-lg focus:ring-2 focus:ring-createc-purple text-white"
                    placeholder="How can we help you?"
                    rows={5}
                    required
                  ></textarea>
                </div>

                {submitted && (
                  <div className="p-4 bg-green-100 text-green-700 rounded-lg">
                    Thank you for your message! We'll get back to you soon.
                  </div>
                )}

                {error && (
                  <div className="p-4 bg-red-100 text-red-700 rounded-lg mt-4">
                    {error}
                  </div>
                )}

                {!submitted && (
                  <button
                    type="submit"
                    className="gradient-bg text-white font-montserrat font-semibold px-8 py-3 rounded-lg hover-scale disabled:opacity-70"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
