
import React from 'react';

const PortfolioSection: React.FC = () => {
  const projects = [
    {
      title: 'منصة التجارة الإلكترونية',
      category: 'تطوير المواقع',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      description: 'حل تجارة إلكترونية حديث بميزات متقدمة ونظام دفع آمن'
    },
    {
      title: 'تطبيق البنك المحمول',
      category: 'تطوير التطبيقات',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
      description: 'تطبيق مصرفي آمن وسهل الاستخدام مع أحدث تقنيات الأمان'
    },
    {
      title: 'الهوية المؤسسية',
      category: 'الهوية البصرية',
      image: 'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=800&h=600&fit=crop',
      description: 'هوية بصرية متكاملة للشركات العصرية مع دليل استخدام شامل'
    },
    {
      title: 'تطبيق المطعم الويب',
      category: 'تطوير المواقع',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop',
      description: 'نظام طلبات وحجوزات متكامل للمطاعم مع واجهة سهلة الاستخدام'
    },
    {
      title: 'تطبيق تتبع اللياقة',
      category: 'تطوير التطبيقات',
      image: 'https://images.unsplash.com/photo-1434596922112-19c563067271?w=800&h=600&fit=crop',
      description: 'تطبيق مراقبة الصحة واللياقة البدنية مع ميزات تتبع متقدمة'
    },
    {
      title: 'منصة التعليم',
      category: 'تطوير المواقع',
      image: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800&h=600&fit=crop',
      description: 'نظام إدارة التعلم التفاعلي للمؤسسات التعليمية'
    }
  ];

  return (
    <section id="portfolio" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-tajawal">
            <span className="text-gradient">أعمالنا</span> المميزة
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-tajawal">
            ألقِ نظرة على بعض مشاريعنا الحديثة التي تعرض خبرتنا وإبداعنا في مختلف المجالات
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group cursor-pointer animate-on-scroll"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="glass rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500">
                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-sm font-medium font-tajawal">{project.category}</div>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-orange/20 text-orange rounded-full font-tajawal">
                      {project.category}
                    </span>
                  </div>
                  
                  <h4 className="text-xl font-bold mb-3 text-foreground group-hover:text-orange transition-colors font-tajawal">
                    {project.title}
                  </h4>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed font-tajawal">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
