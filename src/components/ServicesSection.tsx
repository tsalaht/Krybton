
import React from 'react';
import { Monitor, Smartphone, Palette, Target, Search, Settings } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: Monitor,
      title: 'Web Development',
      titleAr: 'تطوير المواقع',
      description: 'Custom websites and web applications built with modern technologies',
      descriptionAr: 'مواقع ويب وتطبيقات مخصصة بأحدث التقنيات'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      titleAr: 'تطوير التطبيقات',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      descriptionAr: 'تطبيقات الهاتف المحمول لأنظمة iOS و Android'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      titleAr: 'تصميم واجهات المستخدم',
      description: 'Beautiful and intuitive user interfaces that enhance user experience',
      descriptionAr: 'واجهات مستخدم جميلة وبديهية تعزز تجربة المستخدم'
    },
    {
      icon: Target,
      title: 'Branding',
      titleAr: 'الهوية البصرية',
      description: 'Complete brand identity design and development',
      descriptionAr: 'تصميم وتطوير الهوية التجارية الكاملة'
    },
    {
      icon: Search,
      title: 'SEO',
      titleAr: 'تحسين محركات البحث',
      description: 'Search engine optimization to boost your online visibility',
      descriptionAr: 'تحسين محركات البحث لزيادة ظهورك على الإنترنت'
    },
    {
      icon: Settings,
      title: 'Technical Support',
      titleAr: 'الدعم الفني',
      description: '24/7 technical support and maintenance services',
      descriptionAr: 'خدمات الدعم الفني والصيانة على مدار الساعة'
    }
  ];

  return (
    <section id="services" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <h3 className="text-2xl md:text-3xl font-tajawal rtl text-muted-foreground mb-6">
            خدماتنا المتميزة
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We provide comprehensive digital solutions to help your business thrive in the digital world
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="glass rounded-2xl p-8 hover:scale-105 transition-all duration-300 group animate-on-scroll"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-orange-gradient rounded-xl flex items-center justify-center mb-4 group-hover:animate-glow">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <h4 className="text-xl font-bold mb-2 text-foreground group-hover:text-orange transition-colors">
                  {service.title}
                </h4>
                <h5 className="text-lg font-tajawal rtl text-muted-foreground mb-4">
                  {service.titleAr}
                </h5>
                
                <p className="text-muted-foreground mb-3 leading-relaxed">
                  {service.description}
                </p>
                <p className="text-sm font-tajawal rtl text-muted-foreground/80 leading-relaxed">
                  {service.descriptionAr}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
