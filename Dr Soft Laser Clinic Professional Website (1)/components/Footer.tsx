import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, MessageCircle } from 'lucide-react';
import logoImage from 'figma:asset/d8d7057342b82f3c07b6a4154c4a8f5e5f792d85.png';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const handleNavigation = (page: string, sectionId?: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
    
    if (sectionId && page === 'home') {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 relative">
                <img 
                  src={logoImage} 
                  alt="Dr.SOFT Laser Clinic Logo" 
                  className="w-full h-full object-contain filter brightness-0 invert"
                />
              </div>
              <div>
                <h3 className="text-xl font-medium text-gold-300">Dr.SOFT</h3>
                <p className="text-sm text-gray-300 -mt-1">LASER CLINIC</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Toronto's premier laser hair removal clinic providing safe, effective, and 
              professional treatments with the latest technology and experienced staff.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-gold-300 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-gold-300 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-gold-300 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-gold-300">Our Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li 
                className="hover:text-gold-300 cursor-pointer transition-colors"
                onClick={() => handleNavigation('service-details')}
              >
                Laser Hair Removal
              </li>
              <li className="text-gray-500">• Face & Upper Lip</li>
              <li className="text-gray-500">• Underarms</li>
              <li className="text-gray-500">• Legs (Full/Partial)</li>
              <li className="text-gray-500">• Arms</li>
              <li className="text-gray-500">• Bikini & Brazilian</li>
              <li className="text-gray-500">• Back & Chest</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-gold-300">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li 
                className="hover:text-gold-300 cursor-pointer transition-colors"
                onClick={() => handleNavigation('home', 'about')}
              >
                About Us
              </li>
              <li 
                className="hover:text-gold-300 cursor-pointer transition-colors"
                onClick={() => handleNavigation('gallery')}
              >
                Before & After Gallery
              </li>
              <li 
                className="hover:text-gold-300 cursor-pointer transition-colors"
                onClick={() => handleNavigation('home', 'testimonials')}
              >
                Patient Reviews
              </li>
              <li 
                className="hover:text-gold-300 cursor-pointer transition-colors"
                onClick={() => handleNavigation('service-details')}
              >
                Treatment Areas
              </li>
              <li className="hover:text-gold-300 cursor-pointer transition-colors">
                Financing Options
              </li>
              <li className="hover:text-gold-300 cursor-pointer transition-colors">
                Privacy Policy
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-gold-300">Contact Info</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-1 flex-shrink-0 text-gold-400" />
                <div>
                  <p>127-614 Fleet Street</p>
                  <p>Toronto, ON</p>
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 flex-shrink-0 text-gold-400" />
                  <p className="font-medium">437-974-8245</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 flex-shrink-0 text-gold-400" />
                  <p>905-965-3414</p>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageCircle className="h-4 w-4 flex-shrink-0 text-gold-400" />
                  <p className="text-sm">Text messages welcome!</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Instagram className="h-5 w-5 flex-shrink-0 text-gold-400" />
                <p>@dr.soft.laser.clinic</p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 mt-1 flex-shrink-0 text-gold-400" />
                <div>
                  <p>Mon-Fri: 9:00 AM - 7:00 PM</p>
                  <p>Sat: 9:00 AM - 5:00 PM</p>
                  <p>Sun: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 Dr.SOFT Laser Clinic. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-gold-300 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-gold-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gold-300 transition-colors">Medical Disclaimer</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}