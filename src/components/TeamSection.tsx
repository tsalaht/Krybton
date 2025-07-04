
import React from 'react';

const TeamSection: React.FC = () => {
  const teamMembers = [
    {
      name: 'إبراهيم أسعد',
      position: 'المؤسس والرئيس التنفيذي',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      bio: 'قائد ذو رؤية مع أكثر من 10 سنوات في صناعة التكنولوجيا'
    },
    {
      name: 'سارة أحمد',
      position: 'مصممة رئيسية',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b830?w=400&h=400&fit=crop&crop=face',
      bio: 'مصممة مبدعة متخصصة في واجهات المستخدم والهوية البصرية'
    },
    {
      name: 'محمد حسن',
      position: 'مطور رئيسي',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      bio: 'مطور متكامل خبير في الأطر التقنية الحديثة'
    },
    {
      name: 'ليلى عمر',
      position: 'مديرة المشاريع',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      bio: 'مديرة مشاريع ذات خبرة تضمن التسليم في الوقت المحدد'
    }
  ];

  return (
    <section id="team" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-tajawal">
            تعرف على <span className="text-gradient">فريقنا</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-tajawal">
            فريقنا الموهوب من المحترفين مكرس لتحويل رؤيتك إلى واقع ملموس
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
                  <h4 className="text-xl font-bold mb-1 text-foreground group-hover:text-orange transition-colors font-tajawal">
                    {member.name}
                  </h4>
                  
                  <div className="mb-4">
                    <div className="text-sm font-medium text-orange mb-1 font-tajawal">
                      {member.position}
                    </div>
                  </div>

                  {/* Bio */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm text-muted-foreground leading-relaxed font-tajawal">
                      {member.bio}
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
