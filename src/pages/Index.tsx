
import React, { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import PortfolioSection from '@/components/PortfolioSection';
import TeamSection from '@/components/TeamSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  const [darkMode, setDarkMode] = useState(true); // Start with dark mode

  useEffect(() => {
    // Apply dark mode class to document
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all elements with animate-on-scroll class
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="bg-background text-foreground transition-colors duration-300">
        <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <PortfolioSection />
          <TeamSection />
          <ContactSection />
        </main>

        {/* Footer */}
        <footer className="bg-card border-t border-border py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gradient mb-4 font-tajawal">كريبتون</div>
              <div className="font-tajawal text-muted-foreground mb-4">
                مؤسسة ابراهيم أسعد لخدمات الإنترنت
              </div>
              <div className="text-sm text-muted-foreground font-tajawal">
                © 2024 كريبتون. جميع الحقوق محفوظة
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
