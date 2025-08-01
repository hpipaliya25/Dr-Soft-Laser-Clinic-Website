import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { CheckCircle, Clock, Shield, Star, ArrowLeft, Calendar, Users, Award } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ServiceDetailsProps {
  onNavigate?: (page: string) => void;
  onBack?: () => void;
}

const service = {
  title: 'Laser Hair Removal',
  shortDescription: 'Permanent hair reduction with advanced diode laser technology',
  fullDescription: 'Our state-of-the-art diode laser technology provides safe and effective permanent hair reduction for all skin types. The treatment targets hair follicles while protecting surrounding skin, resulting in smooth, hair-free skin with minimal discomfort. Our experienced technicians ensure optimal results with personalized treatment plans.',
  benefits: [
    'Permanent hair reduction',
    'Safe for all skin types',
    'Virtually painless treatment',
    'Quick 15-45 minute sessions',
    'No more ingrown hairs',
    'Smooth, silky skin',
    'Cost-effective long-term',
    'Precise targeting'
  ],
  process: [
    'Free consultation and skin assessment',
    'Customized treatment plan creation',
    'Laser treatment sessions (typically 6-8)',
    'Follow-up care and maintenance'
  ],
  treatmentAreas: [
    'Face and upper lip',
    'Underarms',
    'Legs (full or partial)',
    'Arms',
    'Bikini area',
    'Back and chest',
    'Brazilian',
    'Custom areas'
  ],
  beforeAfter: [
    'https://images.unsplash.com/photo-1616391182219-e080b2513263?w=300&h=200&fit=crop',
    'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=300&h=200&fit=crop'
  ],
  price: 'Starting at $99 per session',
  duration: '15-45 minutes depending on area',
  sessions: '6-8 sessions typical for optimal results',
  downtime: 'None - return to normal activities immediately'
};

export function ServiceDetails({ onNavigate, onBack }: ServiceDetailsProps) {
  const handleBookConsultation = () => {
    if (onNavigate) {
      onNavigate('home');
      setTimeout(() => {
        const element = document.getElementById('contact');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gold-50 to-white">
      {/* Header */}
      <div className="bg-white border-b border-gold-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              onClick={onBack}
              className="text-gold-700 hover:text-gold-800"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Services
            </Button>
            <h1 className="text-3xl text-gray-900 font-medium">Laser Hair Removal</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Service Overview */}
            <Card className="border-gold-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">{service.title}</CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  {service.shortDescription}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  {service.fullDescription}
                </p>

                {/* Key Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium text-gray-900">Duration</p>
                        <p className="text-gray-600">{service.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium text-gray-900">Sessions</p>
                        <p className="text-gray-600">{service.sessions}</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Shield className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium text-gray-900">Downtime</p>
                        <p className="text-gray-600">{service.downtime}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Star className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium text-gray-900">Price</p>
                        <p className="text-gold-600 font-medium">{service.price}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Treatment Areas */}
            <Card className="border-gold-200 shadow-lg">
              <CardHeader>
                <CardTitle>Treatment Areas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {service.treatmentAreas.map((area, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{area}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card className="border-gold-200 shadow-lg">
              <CardHeader>
                <CardTitle>Benefits & Results</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Treatment Process */}
            <Card className="border-gold-200 shadow-lg">
              <CardHeader>
                <CardTitle>Treatment Process</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {service.process.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-gold-500 to-gold-600 text-white rounded-full flex items-center justify-center font-medium text-sm">
                        {index + 1}
                      </div>
                      <p className="text-gray-700 pt-1">{step}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Before & After */}
            <Card className="border-gold-200 shadow-lg">
              <CardHeader>
                <CardTitle>Before & After Results</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-center mb-3 text-gray-700 font-medium">Before</h4>
                    <div className="aspect-[4/3] rounded-lg overflow-hidden">
                      <ImageWithFallback
                        src={service.beforeAfter[0]}
                        alt="Before laser hair removal treatment"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-center mb-3 text-gray-700 font-medium">After</h4>
                    <div className="aspect-[4/3] rounded-lg overflow-hidden">
                      <ImageWithFallback
                        src={service.beforeAfter[1]}
                        alt="After laser hair removal treatment"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-500 text-center mt-4">
                  *Results may vary. Individual results are not guaranteed.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Consultation CTA */}
            <Card className="border-gold-200 shadow-lg bg-gradient-to-br from-gold-50 to-white">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl text-gray-900 mb-4 font-medium">Ready to Get Started?</h3>
                <p className="text-gray-600 mb-6">
                  Book your free consultation to discuss your goals and create a personalized treatment plan.
                </p>
                <Button 
                  className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 mb-4"
                  onClick={handleBookConsultation}
                >
                  Book Free Consultation
                </Button>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full border-gold-300 text-gold-700 hover:bg-gold-50">
                    Call 437-974-8245
                  </Button>
                  <Button variant="outline" className="w-full border-gold-300 text-gold-700 hover:bg-gold-50">
                    Text 905-965-3414
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Stats */}
            <Card className="border-gold-200 shadow-lg">
              <CardHeader>
                <CardTitle>Why Choose Dr.SOFT?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-gray-900">5000+ Treatments</p>
                    <p className="text-sm text-gray-600">Successful procedures completed</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-gray-900">15+ Years Experience</p>
                    <p className="text-sm text-gray-600">Professional laser treatments</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-gray-900">98% Success Rate</p>
                    <p className="text-sm text-gray-600">Client satisfaction guarantee</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card className="border-gold-200 shadow-lg">
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Is the treatment painful?</h4>
                  <p className="text-sm text-gray-600">Most clients describe the sensation as mild and very tolerable. We use advanced cooling technology to maximize comfort throughout the procedure.</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">How long do results last?</h4>
                  <p className="text-sm text-gray-600">Results are permanent for treated hair follicles. Most clients achieve 80-95% permanent hair reduction after completing their treatment series.</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Are there any side effects?</h4>
                  <p className="text-sm text-gray-600">Side effects are minimal and temporary, typically including mild redness that resolves within a few hours. Serious complications are extremely rare.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}