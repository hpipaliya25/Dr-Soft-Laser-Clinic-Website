import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Zap } from 'lucide-react';

const services = [
  {
    icon: Zap,
    title: "Laser Hair Removal",
    description: "Permanent hair reduction with advanced diode laser technology. Safe for all skin types and body areas.",
    price: "Starting at $99",
    features: ["FDA Approved", "Virtually Painless", "All Skin Types", "Quick Sessions", "Long-lasting Results", "Professional Care"],
    serviceId: "hair-removal"
  }
];

interface ServicesProps {
  onNavigate?: (page: string) => void;
  onServiceSelect?: (serviceId: string) => void;
}

export function Services({ onNavigate, onServiceSelect }: ServicesProps) {
  const handleLearnMore = (serviceId: string) => {
    if (onServiceSelect) {
      onServiceSelect(serviceId);
    }
    if (onNavigate) {
      onNavigate('service-details');
    }
  };

  const handleBookConsultation = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gold-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl text-gray-900 font-medium">Our Laser Service</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specializing in advanced laser hair removal treatments delivered by certified professionals using 
            the latest FDA-approved technology for safe and effective permanent hair reduction.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="max-w-md">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-gold-200 shadow-lg bg-white">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto w-20 h-20 bg-gold-100 rounded-full flex items-center justify-center group-hover:bg-gold-200 transition-colors">
                      <IconComponent className="h-10 w-10 text-primary" />
                    </div>
                    <CardTitle className="text-2xl text-gray-900 font-medium">{service.title}</CardTitle>
                    <CardDescription className="text-gray-600 text-lg">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="text-center">
                      <span className="text-3xl text-primary font-medium">{service.price}</span>
                    </div>
                    
                    <ul className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="space-y-3">
                      <Button 
                        className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700"
                        onClick={() => handleLearnMore(service.serviceId)}
                      >
                        Learn More
                      </Button>
                      <Button 
                        variant="outline"
                        className="w-full border-gold-300 text-gold-700 hover:bg-gold-50"
                        onClick={handleBookConsultation}
                      >
                        Book Free Consultation
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="bg-gold-50 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-xl text-gray-900 font-medium mb-4">
              Why Choose Dr.SOFT for Laser Hair Removal?
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-600">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-medium">15+</span>
                </div>
                <p>Years of Experience</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-medium">5K+</span>
                </div>
                <p>Happy Clients</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-medium">98%</span>
                </div>
                <p>Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}