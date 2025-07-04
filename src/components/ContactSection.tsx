
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('Form submitted:', formData);
    
    toast({
      title: "تم إرسال الرسالة!",
      description: "سنتواصل معك قريباً. شكراً لتواصلك معنا",
    });

    setFormData({
      name: '',
      email: '',
      service: '',
      message: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'الهاتف',
      value: '+962 7 8295 0000',
      link: 'tel:+962782950000'
    },
    {
      icon: Mail,
      title: 'البريد الإلكتروني',
      value: 'info@krypton.jo',
      link: 'mailto:info@krypton.jo'
    },
    {
      icon: MapPin,
      title: 'الموقع',
      value: 'عمان، الأردن'
    }
  ];

  const services = [
    'تطوير المواقع',
    'تطوير التطبيقات', 
    'تصميم واجهات المستخدم',
    'الهوية البصرية',
    'تحسين محركات البحث',
    'الدعم الفني'
  ];

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-tajawal">
            <span className="text-gradient">تواصل معنا</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-tajawal">
            هل أنت مستعد لبدء مشروعك القادم؟ دعنا نناقش كيف يمكننا مساعدتك في تحويل أفكارك إلى واقع
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-on-scroll">
            <div className="glass rounded-2xl p-8">
              <h4 className="text-2xl font-bold mb-6 text-foreground font-tajawal">
                أرسل لنا رسالة
              </h4>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder="اسمك الكريم"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    required
                    className="glass border-white/20 focus:border-orange text-right font-tajawal"
                  />
                </div>

                <div>
                  <Input
                    type="email"
                    placeholder="بريدك الإلكتروني"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                    className="glass border-white/20 focus:border-orange text-right font-tajawal"
                  />
                </div>

                <div>
                  <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                    <SelectTrigger className="glass border-white/20 focus:border-orange text-right font-tajawal">
                      <SelectValue placeholder="اختر الخدمة المطلوبة" />
                    </SelectTrigger>
                    <SelectContent className="glass border-white/20 font-tajawal">
                      {services.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Textarea
                    placeholder="رسالتك أو استفسارك"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    required
                    rows={5}
                    className="glass border-white/20 focus:border-orange resize-none text-right font-tajawal"
                  />
                </div>

                <Button
                  type="submit"
                  className="btn-orange w-full py-3 text-lg group font-tajawal"
                >
                  <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform rotate-180" />
                  إرسال الرسالة
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="animate-on-scroll" style={{animationDelay: '0.2s'}}>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="glass rounded-xl p-6 hover:scale-105 transition-all duration-300 group">
                    <div className="flex items-start space-x-4 rtl space-x-reverse">
                      <div className="w-12 h-12 bg-blue-gradient rounded-lg flex items-center justify-center group-hover:animate-glow">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 text-right">
                        <h5 className="text-lg font-bold text-foreground mb-1 font-tajawal">
                          {info.title}
                        </h5>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-orange hover:text-orange-dark transition-colors font-medium font-tajawal"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-orange font-medium font-tajawal">{info.value}</div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Map Placeholder */}
            <div className="glass rounded-2xl p-4 h-64 bg-gradient-to-br from-orange/10 to-orange/5 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-orange mx-auto mb-4" />
                <div className="text-lg font-medium text-foreground mb-2 font-tajawal">
                  تجدنا في الرصيفه 
                </div>
                <div className="font-tajawal text-muted-foreground">
                  المملكة الأردنية الرصيفه الجبل الشمالي مجمع عمار موبايل الطابق الاول
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
