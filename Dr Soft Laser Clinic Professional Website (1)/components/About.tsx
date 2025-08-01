import React from 'react';
import { Card, CardContent } from './ui/card';
import { CheckCircle, Shield, Award, Clock } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const highlights = [
    {
      icon: Shield,
      title: "Safety First",
      description: "FDA-approved equipment and certified professionals ensure your safety"
    },
    {
      icon: Award,
      title: "Expert Team",
      description: "15+ years of experience in laser treatments and aesthetic medicine"
    },
    {
      icon: CheckCircle,
      title: "Proven Results",
      description: "Thousands of satisfied patients with documented before/after results"
    },
    {
      icon: Clock,
      title: "Convenient Hours",
      description: "Flexible scheduling including evenings and weekends"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl text-gray-900">
                Why Choose Dr Soft Laser Clinic?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We are dedicated to providing the highest quality laser treatments 
                in a comfortable, professional environment. Our state-of-the-art 
                facility combines advanced technology with personalized care to 
                deliver exceptional results.
              </p>
            </div>

            <div className="space-y-6">
              {highlights.map((highlight, index) => {
                const IconComponent = highlight.icon;
                return (
                  <div key={index} className="flex space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-gray-900 mb-2">{highlight.title}</h4>
                      <p className="text-gray-600">{highlight.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Images */}
          <div className="space-y-6">
            <Card className="overflow-hidden shadow-lg">
              <div className="aspect-[4/3]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=450&fit=crop&crop=center"
                  alt="Dr Soft Laser Clinic interior"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h4 className="text-gray-900 mb-2">Modern Facility</h4>
                <p className="text-gray-600">
                  Our clinic features the latest laser technology in a comfortable, 
                  spa-like environment designed for your relaxation and privacy.
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-lg p-6 text-center">
                <div className="text-3xl text-blue-600 mb-2">5000+</div>
                <div className="text-gray-700">Treatments Performed</div>
              </div>
              <div className="bg-green-50 rounded-lg p-6 text-center">
                <div className="text-3xl text-green-600 mb-2">98%</div>
                <div className="text-gray-700">Patient Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}