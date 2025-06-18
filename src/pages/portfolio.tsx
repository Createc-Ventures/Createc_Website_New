import React from 'react';
import HeroSection from '@/components/HeroSection';
import Showcase from '@/components/showcase';
import Navbar from '@/components/Navigation';
import Footer from '@/components/Footer';
// Main App component
const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-sans antialiased">
      {/* Hero Section */}
      <Navbar />
      <HeroSection/>
      {/* Featured Projects Section */}
      <Showcase />
      <Footer />
      
      
    </div>
  );
};

export default App;
