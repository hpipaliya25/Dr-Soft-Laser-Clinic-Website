import React from 'react';
import { Card, CardContent } from './ui/card';
import { Star, Quote } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const testimonials = [
  {
    name: "Sarah Johnson",
    treatment: "Laser Hair Removal",
    rating: 5,
    text: "Amazing results! The staff was professional and the treatment was virtually painless. I'm so happy with my smooth skin and would definitely recommend Dr Soft Laser Clinic.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b372?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Michael Chen",
    treatment: "Skin Rejuvenation",
    rating: 5,
    text: "The fractional laser treatment exceeded my expectations. My skin looks years younger and the fine lines around my eyes have significantly reduced. Professional service from start to finish.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Emily Rodriguez",
    treatment: "Acne Scar Treatment",
    rating: 5,
    text: "After years of feeling self-conscious about my acne scars, Dr Soft Laser Clinic gave me my confidence back. The results are incredible and the team made me feel comfortable throughout.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "David Thompson",
    treatment: "Tattoo Removal",
    rating: 5,
    text: "Professional, clean facility with state-of-the-art equipment. The tattoo removal process was explained clearly and the results speak for themselves. Highly recommended!",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl text-gray-900">What Our Patients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied patients 
            have to say about their experience at Dr Soft Laser Clinic.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {/* Quote Icon */}
                  <Quote className="h-8 w-8 text-blue-600" />
                  
                  {/* Stars */}
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-700 text-lg leading-relaxed">
                    "{testimonial.text}"
                  </p>

                  {/* Patient Info */}
                  <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <ImageWithFallback
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.treatment}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <div className="bg-blue-600 text-white rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl mb-4">Ready to Start Your Journey?</h3>
            <p className="text-blue-100 mb-6">
              Join thousands of satisfied patients who have transformed their skin 
              with our advanced laser treatments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                Book Free Consultation
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
                Call Now: (555) 123-4567
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}