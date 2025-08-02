import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { ArrowLeft, ZoomIn } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface GalleryProps {
  onBack?: () => void;
  onNavigate?: (page: string) => void;
}

const galleryCategories = {
  'before-after': {
    title: 'Before & After Results',
    description: 'Real patient results from our laser hair removal treatments',
    images: [
      {
        id: 1,
        title: 'Laser Hair Removal - Legs',
        before: 'https://images.unsplash.com/photo-1616391182219-e080b2513263?w=400&h=300&fit=crop',
        after: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=300&fit=crop',
        treatment: 'Full Legs',
        sessions: '6 sessions'
      },
      {
        id: 2,
        title: 'Laser Hair Removal - Underarms',
        before: 'https://images.unsplash.com/photo-1594824388862-c62ed26b8818?w=400&h=300&fit=crop',
        after: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&h=300&fit=crop',
        treatment: 'Underarms',
        sessions: '5 sessions'
      },
      {
        id: 3,
        title: 'Laser Hair Removal - Face',
        before: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400&h=300&fit=crop',
        after: 'https://images.unsplash.com/photo-1524863479829-916d8e77f114?w=400&h=300&fit=crop',
        treatment: 'Upper Lip & Chin',
        sessions: '4 sessions'
      },
      {
        id: 4,
        title: 'Laser Hair Removal - Bikini',
        before: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400&h=300&fit=crop',
        after: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=300&fit=crop',
        treatment: 'Bikini Area',
        sessions: '6 sessions'
      },
      {
        id: 5,
        title: 'Laser Hair Removal - Arms',
        before: 'https://images.unsplash.com/photo-1607349913338-552de08d8ac2?w=400&h=300&fit=crop',
        after: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=300&fit=crop',
        treatment: 'Full Arms',
        sessions: '5 sessions'
      },
      {
        id: 6,
        title: 'Laser Hair Removal - Back',
        before: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
        after: 'https://images.unsplash.com/photo-1544717301-9cdcb1f5940f?w=400&h=300&fit=crop',
        treatment: 'Full Back',
        sessions: '7 sessions'
      }
    ]
  }
};

export function Gallery({ onBack, onNavigate }: GalleryProps) {
  const [activeCategory, setActiveCategory] = useState<keyof typeof galleryCategories>('before-after');
  const [selectedImage, setSelectedImage] = useState<any>(null);

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

  const openModal = (image: any) => {
    setSelectedImage(image);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gold-50 to-white">
      {/* Header */}
      <div className="bg-white border-b border-gold-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                onClick={onBack}
                className="text-gold-700 hover:text-gold-800"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
              <h1 className="text-3xl text-gray-900 font-medium">Gallery</h1>
            </div>
            <Button
              className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700"
              onClick={handleBookConsultation}
            >
              Book Consultation
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Tabs */}
        <div className="mb-8">
          <div className="border-b border-gold-200">
            <nav className="flex space-x-8">
              {Object.entries(galleryCategories).map(([key, category]) => (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key as keyof typeof galleryCategories)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeCategory === key
                      ? 'border-primary text-primary'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Category Content */}
        <div className="mb-8">
          <h2 className="text-2xl text-gray-900 font-medium mb-2">
            {galleryCategories[activeCategory].title}
          </h2>
          <p className="text-gray-600">
            {galleryCategories[activeCategory].description}
          </p>
        </div>

        {/* Before/After Grid */}
        {activeCategory === 'before-after' && (
          <div className="grid md:grid-cols-2 gap-8">
            {galleryCategories['before-after'].images.map((item) => (
              <Card key={item.id} className="border-gold-200 shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-2">
                    <div className="relative cursor-pointer" onClick={() => openModal({ src: item.before, title: item.title })}>
                      <ImageWithFallback
                        src={item.before}
                        alt={`${item.title} - Before`}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
                        Before
                      </div>
                      <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all flex items-center justify-center">
                        <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100" />
                      </div>
                    </div>
                    <div className="relative cursor-pointer" onClick={() => openModal({ src: item.after, title: item.title })}>
                      <ImageWithFallback
                        src={item.after}
                        alt={`${item.title} - After`}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-medium">
                        After
                      </div>
                      <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all flex items-center justify-center">
                        <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100" />
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-gray-900 mb-2">{item.title}</h3>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>{item.treatment}</span>
                      <span>{item.sessions}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gold-500 to-gold-600 text-white rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-medium mb-4">Ready to See Your Own Results?</h3>
            <p className="text-gold-100 mb-6">
              Book your free consultation today and discover how our advanced laser hair removal
              can give you smooth, hair-free skin permanently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-white text-gold-600 hover:bg-gray-50"
                onClick={handleBookConsultation}
              >
                Book Free Consultation
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gold-600">
                Call 437-974-8245
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for image preview */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <div className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-lg font-medium">{selectedImage.title}</h3>
              <Button variant="ghost" onClick={() => setSelectedImage(null)}>×</Button>
            </div>
            <div className="p-4">
              <ImageWithFallback
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[60vh] object-contain"
              />
              <p className="text-gray-600 mt-4">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
