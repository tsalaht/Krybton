
import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavigationProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'الرئيسية', href: '#home' },
    { name: 'عن الشركة', href: '#about' },
    { name: 'الخدمات', href: '#services' },
    { name: 'الأعمال', href: '#portfolio' },
    { name: 'الفريق', href: '#team' },
    { name: 'اتصل بنا', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-dark shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-gradient">
              كريبتون
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8 rtl space-x-reverse">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-foreground hover:text-orange transition-colors duration-200 px-3 py-2 text-sm font-medium font-tajawal"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Dark Mode Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4 rtl space-x-reverse">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="text-foreground hover:text-orange"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="text-foreground hover:text-orange"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden glass-dark border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-orange hover:bg-white/10 rounded-md transition-colors duration-200 w-full text-right font-tajawal"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
