import React, { useState } from 'react';
import { Button } from './ui/button';
import { Phone, Menu, X } from 'lucide-react';
import logoImage from 'figma:asset/d8d7057342b82f3c07b6a4154c4a8f5e5f792d85.png';

interface HeaderProps {
  currentPage?: string;
  onNavigate?: (page: string) => void;
}

export function Header({ currentPage = 'home', onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigation = (page: string, sectionId?: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
    
    if (sectionId && currentPage === 'home') {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
    
    setMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'Home', page: 'home', sectionId: 'home' },
    { label: 'About', page: 'home', sectionId: 'about' },
    { label: 'Services', page: 'services' },
    { label: 'Gallery', page: 'gallery' },
    { label: 'Testimonials', page: 'home', sectionId: 'testimonials' },
    { label: 'Contact', page: 'home', sectionId: 'contact' }
  ];

  return (
    <header className="w-full bg-white shadow-sm border-b border-gold-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => handleNavigation('home')}>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 relative">
                <img 
                  src={logoImage} 
                  alt="Dr.SOFT Laser Clinic Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl text-gold-700 font-medium tracking-wide">Dr.SOFT</h1>
                <p className="text-sm text-gray-600 -mt-1">LASER CLINIC</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavigation(item.page, item.sectionId)}
                className={`text-gray-700 hover:text-primary transition-colors ${
                  currentPage === item.page ? 'text-primary font-medium' : ''
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button and Phone */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex flex-col items-end text-primary">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span className="text-sm">437-974-8245</span>
              </div>
              <span className="text-xs text-gray-600">905-965-3414</span>
            </div>
            <Button className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700">
              Book Appointment
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gold-200 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavigation(item.page, item.sectionId)}
                  className={`text-left text-gray-700 hover:text-primary transition-colors py-2 ${
                    currentPage === item.page ? 'text-primary font-medium' : ''
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 border-t border-gold-200">
                <div className="flex flex-col text-primary mb-3">
                  <div className="flex items-center mb-1">
                    <Phone className="h-4 w-4 mr-2" />
                    <span className="text-sm">437-974-8245</span>
                  </div>
                  <span className="text-xs text-gray-600 ml-6">905-965-3414</span>
                </div>
                <Button className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700">
                  Book Appointment
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}