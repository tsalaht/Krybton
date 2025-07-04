
import React from 'react';
import { CheckCircle } from 'lucide-react';

const AboutSection: React.FC = () => {
  const features = [
    { text: 'سنوات من الخبرة' },
    { text: 'تصميم إبداعي' },
    { text: 'أسعار منافسة' },
    { text: 'دعم فني على مدار الساعة' },
    { text: 'تقنيات حديثة' },
    { text: 'رضا العملاء' }
  ];

  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-on-scroll">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-tajawal">
              عن <span className="text-gradient">كريبتون</span>
            </h2>
            
            <div className="space-y-6 mb-8">
              <p className="text-lg text-muted-foreground leading-relaxed font-tajawal">
                في كريبتون، نحن متحمسون لإنشاء تجارب رقمية استثنائية تدفع نمو الأعمال. يجمع فريقنا من المحترفين 
                المهرة بين الإبداع والتكنولوجيا المتطورة لتقديم حلول تفوق التوقعات.
              </p>
              
              <p className="text-lg font-tajawal text-muted-foreground leading-relaxed">
                نؤمن بأن التكنولوجيا يجب أن تكون في خدمة الإنسان، ولذلك نسعى دائماً لتقديم حلول تقنية متقدمة 
                ومبتكرة تساعد عملاءنا على تحقيق أهدافهم والوصول إلى آفاق جديدة في العالم الرقمي.
              </p>
            </div>

            {/* Why Choose Us */}
            <div className="mb-8">
              <h4 className="text-xl font-bold mb-4 text-foreground font-tajawal">لماذا تختارنا؟</h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 group rtl space-x-reverse">
                    <CheckCircle className="w-5 h-5 text-orange group-hover:scale-110 transition-transform" />
                    <span className="text-foreground font-medium font-tajawal">{feature.text}</span>
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
                    <div className="text-lg opacity-90 mb-4 font-tajawal">مشروع ناجح</div>
                    <div className="font-tajawal text-sm opacity-80">تم إنجازه بنجاح</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 glass rounded-2xl p-6 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange mb-1">50+</div>
                  <div className="text-sm text-muted-foreground font-tajawal">عميل راضٍ</div>
                  <div className="font-tajawal text-xs text-muted-foreground">عن خدماتنا</div>
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
