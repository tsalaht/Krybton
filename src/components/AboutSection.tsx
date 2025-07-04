
import React from 'react';
import { CheckCircle } from 'lucide-react';

const AboutSection: React.FC = () => {
  const features = [
    { text: 'Years of Experience', textAr: 'سنوات من الخبرة' },
    { text: 'Creative Design', textAr: 'تصميم إبداعي' },
    { text: 'Competitive Prices', textAr: 'أسعار منافسة' },
    { text: '24/7 Technical Support', textAr: 'دعم فني على مدار الساعة' },
    { text: 'Modern Technologies', textAr: 'تقنيات حديثة' },
    { text: 'Client Satisfaction', textAr: 'رضا العملاء' }
  ];

  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-on-scroll">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              About <span className="text-gradient">Krypton</span>
            </h2>
            <h3 className="text-2xl md:text-3xl font-tajawal rtl text-muted-foreground mb-8">
              عن شركة كريبتون
            </h3>
            
            <div className="space-y-6 mb-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Krypton, we are passionate about creating exceptional digital experiences that drive business growth. 
                Our team of skilled professionals combines creativity with cutting-edge technology to deliver solutions 
                that exceed expectations.
              </p>
              
              <p className="text-lg font-tajawal rtl text-muted-foreground leading-relaxed">
                في كريبتون، نحن متحمسون لإنشاء تجارب رقمية استثنائية تدفع نمو الأعمال. يجمع فريقنا من المحترفين 
                المهرة بين الإبداع والتكنولوجيا المتطورة لتقديم حلول تفوق التوقعات.
              </p>
            </div>

            {/* Why Choose Us */}
            <div className="mb-8">
              <h4 className="text-xl font-bold mb-4 text-foreground">Why Choose Us?</h4>
              <h5 className="text-lg font-tajawal rtl text-muted-foreground mb-6">لماذا تختارنا؟</h5>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 group">
                    <CheckCircle className="w-5 h-5 text-orange group-hover:scale-110 transition-transform" />
                    <div>
                      <span className="text-foreground font-medium">{feature.text}</span>
                      <div className="text-sm font-tajawal rtl text-muted-foreground">{feature.textAr}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="animate-on-scroll" style={{animationDelay: '0.2s'}}>
            <div className="relative">
              <div className="glass rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-orange-gradient rounded-2xl p-8 text-white">
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">100+</div>
                    <div className="text-lg opacity-90 mb-4">Successful Projects</div>
                    <div className="font-tajawal rtl text-sm opacity-80">مشروع ناجح</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 glass rounded-2xl p-6 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange mb-1">50+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                  <div className="font-tajawal rtl text-xs text-muted-foreground">عميل راضٍ</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
