import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { MapPin, Phone, Mail, Clock, Calendar, MessageCircle, Instagram } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    preferredDate: '',
    preferredTime: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you! We will contact you soon to confirm your appointment.');
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl text-gray-900 font-medium">Book Your Consultation</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your laser hair removal journey? Contact us today to schedule 
            your free consultation with our laser specialists in Toronto.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-gold-200 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Visit Our Clinic</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  127-614 Fleet Street<br />
                  Toronto, ON
                </p>
                
                {/* Google Maps Embed */}
                <div className="w-full h-48 rounded-lg overflow-hidden border border-gold-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.0862266155777!2d-79.37826732346098!3d43.64577487110659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d68bf33a9b%3A0x4a1bbeec9e7e5b5b!2s614%20Fleet%20St%2C%20Toronto%2C%20ON%20M5V%201A2%2C%20Canada!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Dr.SOFT Laser Clinic Location"
                  />
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full border-gold-300 text-gold-700 hover:bg-gold-50"
                  onClick={() => window.open('https://www.google.com/maps/dir//614+Fleet+St,+Toronto,+ON+M5V+1A2,+Canada', '_blank')}
                >
                  Get Directions
                </Button>
              </CardContent>
            </Card>

            <Card className="border-gold-200 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>Call or Text Us</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-xl text-primary font-medium">437-974-8245</p>
                  <p className="text-gray-600 text-sm">Main Line</p>
                </div>
                <div>
                  <p className="text-lg text-gray-900 font-medium">905-965-3414</p>
                  <p className="text-gray-600 text-sm">Alternative Line</p>
                </div>
                <div className="pt-2">
                  <div className="flex items-center space-x-2 text-primary">
                    <MessageCircle className="h-4 w-4" />
                    <span className="text-sm">Text messages welcome!</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gold-200 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Instagram className="h-5 w-5 text-primary" />
                  <span>Follow Us</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <p className="text-lg text-gray-900 font-medium mb-2">@dr.soft.laser.clinic</p>
                  <p className="text-gray-600 text-sm mb-4">See our latest results and updates</p>
                  <Button 
                    variant="outline" 
                    className="w-full border-gold-300 text-gold-700 hover:bg-gold-50"
                    onClick={() => window.open('https://www.instagram.com/dr.soft.laser.clinic', '_blank')}
                  >
                    Follow on Instagram
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gold-200 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>Hours</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="text-gray-900">9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday</span>
                  <span className="text-gray-900">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="text-gray-900">10:00 AM - 4:00 PM</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Appointment Form */}
          <div className="lg:col-span-2">
            <Card className="border-gold-200 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>Schedule Your Free Consultation</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-gray-700 font-medium">Full Name *</label>
                      <Input
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Enter your full name"
                        required
                        className="border-gold-200 focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-gray-700 font-medium">Email Address *</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="Enter your email"
                        required
                        className="border-gold-200 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-gray-700 font-medium">Phone Number *</label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="(xxx) xxx-xxxx"
                        required
                        className="border-gold-200 focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-gray-700 font-medium">Treatment Area of Interest</label>
                      <Select onValueChange={(value) => handleInputChange('service', value)}>
                        <SelectTrigger className="border-gold-200 focus:border-primary">
                          <SelectValue placeholder="Select treatment area" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="face">Face & Upper Lip</SelectItem>
                          <SelectItem value="underarms">Underarms</SelectItem>
                          <SelectItem value="legs">Legs (Full or Partial)</SelectItem>
                          <SelectItem value="arms">Arms</SelectItem>
                          <SelectItem value="bikini">Bikini Area</SelectItem>
                          <SelectItem value="brazilian">Brazilian</SelectItem>
                          <SelectItem value="back-chest">Back & Chest</SelectItem>
                          <SelectItem value="multiple">Multiple Areas</SelectItem>
                          <SelectItem value="consultation">General Consultation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-gray-700 font-medium">Preferred Date</label>
                      <Input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                        className="border-gold-200 focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-gray-700 font-medium">Preferred Time</label>
                      <Select onValueChange={(value) => handleInputChange('preferredTime', value)}>
                        <SelectTrigger className="border-gold-200 focus:border-primary">
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="morning">Morning (9:00 AM - 12:00 PM)</SelectItem>
                          <SelectItem value="afternoon">Afternoon (12:00 PM - 5:00 PM)</SelectItem>
                          <SelectItem value="evening">Evening (5:00 PM - 7:00 PM)</SelectItem>
                          <SelectItem value="weekend">Weekend</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-gray-700 font-medium">Message (Optional)</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Tell us about your goals, previous treatments, or any questions you have..."
                      rows={4}
                      className="border-gold-200 focus:border-primary"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700"
                  >
                    Schedule My Free Consultation
                  </Button>

                  <p className="text-sm text-gray-600 text-center">
                    By submitting this form, you agree to receive communications from 
                    Dr.SOFT Laser Clinic. We respect your privacy and will never 
                    share your information. Call or text us directly at{' '}
                    <span className="text-primary font-medium">437-974-8245</span> or{' '}
                    <span className="text-primary font-medium">905-965-3414</span>.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}