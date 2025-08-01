import React from 'react';
import { Button } from './ui/button';
import { Star, Award, Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroProps {
  onNavigate?: (page: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  const handleBookConsultation = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewServices = () => {
    if (onNavigate) {
      onNavigate('services');
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-gold-50 to-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl text-gray-900 leading-tight font-medium">
                Advanced Laser Treatments for 
                <span className="text-primary"> Beautiful Skin</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Experience the latest in laser technology with our expert team at Dr.SOFT Laser Clinic. 
                Safe, effective treatments for skin rejuvenation, hair removal, 
                and aesthetic enhancement in a luxurious setting.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-primary" />
                <span className="text-gray-700">100+ Happy Patients</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-primary" />
                <span className="text-gray-700">15+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-amber-400 fill-current" />
                  ))}
                </div>
                <span className="text-gray-700">5/5 Rating</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 shadow-lg"
                onClick={handleBookConsultation}
              >
                Book Free Consultation
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 border-gold-300 text-gold-700 hover:bg-gold-50"
                onClick={handleViewServices}
              >
                View Our Services
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=450&fit=crop&crop=center"
                alt="Dr.SOFT Laser Clinic treatment room"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-6 max-w-xs border border-gold-200">
              <div className="flex items-center space-x-3">
                <div className="bg-gold-100 rounded-full p-2">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-gray-900 font-medium">FDA Approved</h4>
                  <p className="text-sm text-gray-600">Latest laser technology</p>
                </div>
              </div>
            </div>
            {/* Gold accent */}
            <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-gold-400 to-gold-500 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}