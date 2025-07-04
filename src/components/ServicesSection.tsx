
import React from 'react';
import { Monitor, Smartphone, Palette, Target, Search, Settings } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: Monitor,
      title: 'تطوير المواقع',
      description: 'مواقع ويب وتطبيقات مخصصة بأحدث التقنيات والمعايير العالمية'
    },
    {
      icon: Smartphone,
      title: 'تطوير التطبيقات',
      description: 'تطبيقات الهاتف المحمول لأنظمة iOS و Android بجودة عالية'
    },
    {
      icon: Palette,
      title: 'تصميم واجهات المستخدم',
      description: 'واجهات مستخدم جميلة وبديهية تعزز تجربة المستخدم'
    },
    {
      icon: Target,
      title: 'الهوية البصرية',
      description: 'تصميم وتطوير الهوية التجارية الكاملة والعلامة التجارية'
    },
    {
      icon: Search,
      title: 'تحسين محركات البحث',
      description: 'تحسين محركات البحث لزيادة ظهورك على الإنترنت وجذب المزيد من العملاء'
    },
    {
      icon: Settings,
      title: 'الدعم الفني',
      description: 'خدمات الدعم الفني والصيانة على مدار الساعة طوال أيام الأسبوع'
    }
  ];

  return (
    <section id="services" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-tajawal">
            <span className="text-gradient">خدماتنا</span> المتميزة
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-tajawal">
            نقدم حلولاً رقمية شاملة لمساعدة عملك على النجاح والازدهار في العالم الرقمي
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
                <div className="mb-6 flex  justify-end">
                  <div className="w-16 h-16 bg-orange-gradient rounded-xl flex items-center justify-center mb-4 group-hover:animate-glow ">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <h4 className="text-xl font-bold mb-4 text-foreground group-hover:text-orange transition-colors font-tajawal text-right">
                  {service.title}
                </h4>
                
                <p className="text-muted-foreground leading-relaxed font-tajawal text-right">
                  {service.description}
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
