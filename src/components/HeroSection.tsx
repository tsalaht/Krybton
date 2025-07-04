import React, { useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import gsap from 'gsap';

const HeroSection: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (headingRef.current && subtitleRef.current) {
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
      });
      gsap.from(subtitleRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.5,
        ease: 'power3.out',
      });
    }
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden section-padding">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/80">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-orange rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-orange/60 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-orange/80 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
        </div>
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto">
        {/* Company Logo/Brand */}
        <div className="mb-8 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 glass rounded-2xl mb-6 animate-glow">
            <span className="text-3xl font-bold text-gradient font-tajawal">K</span>
          </div>
        </div>

        {/* Main Heading */}
        <h1 ref={headingRef} className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in font-tajawal" style={{animationDelay: '0.2s'}}>
          <span className="block text-foreground mb-2">مرحباً بكم في</span>
          <span className="block text-gradient">كريبتون</span>
        </h1>

        {/* Arabic Company Name */}
        <div className="mb-8 animate-fade-in" style={{animationDelay: '0.4s'}}>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-tajawal text-muted-foreground mb-2">
            مؤسسة ابراهيم أسعد لخدمات الإنترنت
          </h2>
        </div>

        {/* Subtitle */}
        <p ref={subtitleRef} className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 animate-fade-in font-tajawal" style={{animationDelay: '0.6s'}}>
          نصنع التميز الرقمي من خلال الابتكار
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{animationDelay: '0.8s'}}>
          <Button
            onClick={scrollToContact}
            className="btn-orange px-8 py-4 text-lg rounded-full group font-tajawal"
          >
            <span>اطلب خدمة الآن</span>
            <ArrowRight className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform rotate-180" />
          </Button>
          
          <Button
            onClick={scrollToContact}
            variant="outline"
            className="btn-glass px-8 py-4 text-lg rounded-full border-orange/50 text-foreground hover:text-orange font-tajawal"
          >
            تواصل معنا
          </Button>
        </div>

        {/* Floating Contact Info */}
        <div className="mt-16 animate-fade-in" style={{animationDelay: '1s'}}>
          <div className="inline-flex items-center glass px-6 py-3 rounded-full">
            <span className="text-orange font-semibold font-tajawal">+962 7 8295 0000</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
