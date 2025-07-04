
import React from 'react';

const TeamSection: React.FC = () => {
  const teamMembers = [
    {
      name: 'Ibrahim Asaad',
      nameAr: 'إبراهيم أسعد',
      position: 'Founder & CEO',
      positionAr: 'المؤسس والرئيس التنفيذي',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      bio: 'Visionary leader with 10+ years in tech industry',
      bioAr: 'قائد ذو رؤية مع أكثر من 10 سنوات في صناعة التكنولوجيا'
    },
    {
      name: 'Sarah Ahmad',
      nameAr: 'سارة أحمد',
      position: 'Lead Designer',
      positionAr: 'مصممة رئيسية',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b830?w=400&h=400&fit=crop&crop=face',
      bio: 'Creative designer specializing in UI/UX and branding',
      bioAr: 'مصممة مبدعة متخصصة في واجهات المستخدم والهوية البصرية'
    },
    {
      name: 'Mohammed Hassan',
      nameAr: 'محمد حسن',
      position: 'Lead Developer',
      positionAr: 'مطور رئيسي',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      bio: 'Full-stack developer with expertise in modern frameworks',
      bioAr: 'مطور متكامل خبير في الأطر التقنية الحديثة'
    },
    {
      name: 'Layla Omar',
      nameAr: 'ليلى عمر',
      position: 'Project Manager',
      positionAr: 'مديرة المشاريع',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      bio: 'Experienced project manager ensuring timely delivery',
      bioAr: 'مديرة مشاريع ذات خبرة تضمن التسليم في الوقت المحدد'
    }
  ];

  return (
    <section id="team" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Meet Our <span className="text-gradient">Team</span>
          </h2>
          <h3 className="text-2xl md:text-3xl font-tajawal rtl text-muted-foreground mb-6">
            تعرف على فريقنا
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our talented team of professionals is dedicated to bringing your vision to life
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group animate-on-scroll"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="glass rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300">
                {/* Profile Image */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden ring-4 ring-orange/20 group-hover:ring-orange/50 transition-all duration-300">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Member Info */}
                <div>
                  <h4 className="text-xl font-bold mb-1 text-foreground group-hover:text-orange transition-colors">
                    {member.name}
                  </h4>
                  <h5 className="text-lg font-tajawal rtl text-muted-foreground mb-3">
                    {member.nameAr}
                  </h5>
                  
                  <div className="mb-4">
                    <div className="text-sm font-medium text-orange mb-1">
                      {member.position}
                    </div>
                    <div className="text-sm font-tajawal rtl text-muted-foreground">
                      {member.positionAr}
                    </div>
                  </div>

                  {/* Bio */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm text-muted-foreground mb-2 leading-relaxed">
                      {member.bio}
                    </p>
                    <p className="text-xs font-tajawal rtl text-muted-foreground/80 leading-relaxed">
                      {member.bioAr}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
