import React, { useState, useEffect } from 'react';
import { Home, User, FolderKanban, Briefcase, Mail, Menu, X } from 'lucide-react';

// Navbar component with a responsive hamburger menu for mobile.
// It receives `navigateTo` and `activeSection` as props from the parent (App.js).
export default function Navbar({ navigateTo, activeSection }) {
  // State to manage the open/closed status of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Effect to close the mobile menu when the screen size is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      // 768px is the 'md' breakpoint in Tailwind CSS
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    // Cleanup the event listener when the component unmounts
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = [
    { name: 'Home', id: 'hero', icon: Home },
    { name: 'About', id: 'about', icon: User },
    { name: 'Projects', id: 'projects', icon: FolderKanban },
    { name: 'Experience', id: 'experience', icon: Briefcase },
    { name: 'Contact', id: 'contacts', icon: Mail },
  ];

  // Function to handle link clicks, which also closes the mobile menu
  const handleLinkClick = (id) => {
    navigateTo(id);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4 bg-gray-900 bg-opacity-70 backdrop-blur-md shadow-lg transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#hero" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 hover:scale-105 transition-transform duration-300">
          My Portfolio
        </a>

        {/* Hamburger menu button for mobile (visible only on small screens) */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white transition-colors duration-300">
            {/* Conditionally render the Menu or X icon based on menu state */}
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop navigation menu (visible only on medium and larger screens) */}
        <ul className="hidden md:flex space-x-4 md:space-x-8">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => handleLinkClick(item.id)}
                className={`flex items-center text-sm font-medium transition-all duration-300 transform hover:scale-110
                  ${activeSection === item.id ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-300 hover:text-white'}
                `}
              >
                <item.icon className="w-4 h-4 mr-1 md:mr-2" />
                <span className="hidden md:block">{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile navigation menu (conditionally rendered with animation) */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-gray-900 bg-opacity-90 backdrop-blur-md py-4 transition-transform duration-300 animate-fade-in-down">
          <ul className="flex flex-col items-center space-y-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => handleLinkClick(item.id)}
                  className={`flex items-center text-lg font-medium transition-all duration-300 transform hover:scale-105
                    ${activeSection === item.id ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-300 hover:text-white'}
                  `}
                >
                  <item.icon className="w-5 h-5 mr-2" />
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
