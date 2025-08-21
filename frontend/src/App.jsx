import React, { useState } from 'react';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contacts from './components/Contacts'
import Footer from './components/Footer'
// The main App component that renders the Navbar
export default function App() {
  return (
    // The main container for the application
    <div className="min-h-screen bg-gray-900 text-white font-sans antialiased">
      {/* Renders the Navbar component */}
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Experience/>
      <Contacts/>
      <Footer/>
    </div>
  );
}
