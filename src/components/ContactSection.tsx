
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
    
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message Sent!",
      description: "We'll get back to you soon. شكراً لتواصلك معنا",
    });

    // Reset form
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
      title: 'Phone',
      titleAr: 'الهاتف',
      value: '+962 7 8295 0000',
      link: 'tel:+962782950000'
    },
    {
      icon: Mail,
      title: 'Email',
      titleAr: 'البريد الإلكتروني',
      value: 'info@krypton.jo',
      link: 'mailto:info@krypton.jo'
    },
    {
      icon: MapPin,
      title: 'Location',
      titleAr: 'الموقع',
      value: 'Amman, Jordan',
      valueAr: 'عمان، الأردن'
    }
  ];

  const services = [
    'Web Development',
    'Mobile App Development', 
    'UI/UX Design',
    'Branding',
    'SEO',
    'Technical Support'
  ];

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <h3 className="text-2xl md:text-3xl font-tajawal rtl text-muted-foreground mb-6">
            تواصل معنا
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to start your next project? Let's discuss how we can help bring your ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-on-scroll">
            <div className="glass rounded-2xl p-8">
              <h4 className="text-2xl font-bold mb-6 text-foreground">
                Send us a message
                <span className="block text-lg font-tajawal rtl text-muted-foreground mt-2">
                  أرسل لنا رسالة
                </span>
              </h4>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder="Your Name / اسمك"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    required
                    className="glass border-white/20 focus:border-orange"
                  />
                </div>

                <div>
                  <Input
                    type="email"
                    placeholder="Your Email / بريدك الإلكتروني"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                    className="glass border-white/20 focus:border-orange"
                  />
                </div>

                <div>
                  <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                    <SelectTrigger className="glass border-white/20 focus:border-orange">
                      <SelectValue placeholder="Select Service / اختر الخدمة" />
                    </SelectTrigger>
                    <SelectContent className="glass border-white/20">
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
                    placeholder="Your Message / رسالتك"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    required
                    rows={5}
                    className="glass border-white/20 focus:border-orange resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="btn-orange w-full py-3 text-lg group"
                >
                  <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  Send Message
                  <span className="mx-2">•</span>
                  <span className="font-tajawal">إرسال الرسالة</span>
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
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-orange-gradient rounded-lg flex items-center justify-center group-hover:animate-glow">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h5 className="text-lg font-bold text-foreground mb-1">
                          {info.title}
                        </h5>
                        <div className="text-sm font-tajawal rtl text-muted-foreground mb-2">
                          {info.titleAr}
                        </div>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-orange hover:text-orange-dark transition-colors font-medium"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div>
                            <div className="text-orange font-medium">{info.value}</div>
                            {info.valueAr && (
                              <div className="font-tajawal rtl text-sm text-muted-foreground mt-1">
                                {info.valueAr}
                              </div>
                            )}
                          </div>
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
                <div className="text-lg font-medium text-foreground mb-2">
                  Find us in Amman
                </div>
                <div className="font-tajawal rtl text-muted-foreground">
                  تجدنا في عمان
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
