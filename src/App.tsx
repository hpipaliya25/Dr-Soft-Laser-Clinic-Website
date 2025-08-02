import React, { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ServiceDetails } from "./components/ServiceDetails";
import { Gallery } from "./components/Gallery";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedService, setSelectedService] = useState<
    string | null
  >(null);

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId);
  };

  const handleBack = () => {
    setCurrentPage("home");
  };

  const renderPage = () => {
    switch (currentPage) {
      case "services":
        return (
          <div className="min-h-screen bg-gradient-to-br from-gold-50 to-white">
            <div className="bg-white border-b border-gold-200 py-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl lg:text-5xl text-gray-900 font-medium mb-4">
                  Our Laser Services
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Discover our comprehensive range of advanced
                  laser treatments designed to help you achieve
                  your aesthetic goals safely and effectively.
                </p>
              </div>
            </div>
            <div className="py-20">
              <Services
                onNavigate={handleNavigation}
                onServiceSelect={handleServiceSelect}
              />
            </div>
          </div>
        );
      case "service-details":
        return (
          <ServiceDetails
            onNavigate={handleNavigation}
            onBack={() => handleNavigation("services")}
          />
        );
      case "gallery":
        return (
          <Gallery
            onBack={() => handleNavigation("home")}
            onNavigate={handleNavigation}
          />
        );
      case "home":
      default:
        return (
          <main>
            <Hero onNavigate={handleNavigation} />
            <About />
            <Services
              onNavigate={handleNavigation}
              onServiceSelect={handleServiceSelect}
            />
            <Testimonials />
            <Contact />
          </main>
        );
    }
  };

  return (
    <div className="min-h-screen">
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigation}
      />
      {renderPage()}
      <Footer onNavigate={handleNavigation} />
    </div>
  );
}