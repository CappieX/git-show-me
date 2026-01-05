import { Building2, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: 'Founder, Lead Architect & Full-Stack Engineer',
    company: 'Enum Technologies',
    period: '2019 – Present',
    description: [
      'Built a trusted IT solutions brand known for quality and innovation',
      'Provides enterprise-level consulting, repair services, and software solutions',
      'Leads digital transformation and data-driven system development',
      'Developing Enum HMS and AI-powered emotional intelligence systems',
    ],
    current: true,
  },
  {
    title: 'IT Support Specialist',
    company: 'Seferian & Co.',
    period: '2015 – 2018',
    description: [
      'Led network operations, maintenance, and infrastructure reliability',
      'Managed enterprise IT systems and security protocols', 
      'Customer Support',
    ],
  },
  {
    title: 'IT Systems & Network Administrator',
    company: 'Adulala Resort & Spa',
    period: '2014 – 2015',
    description: [
      'Managed enterprise connectivity and critical system uptime',
      'Implemented network security measures and monitoring systems',
    ],
  },
  {
    title: 'Sales & Technical Support',
    company: 'Zamnet Electronics PLC',
    period: '2013 – 2014',
    description: [
      'Delivered customer-focused technical support and product guidance',
      'Bridged technical solutions with customer needs',
    ],
  },
  {
    title: 'IT Consultant & Support',
    company: 'Conmech Engineering PLC',
    period: '2011 – 2013',
    description: [
      'Designed and maintained IT systems and network architecture',
      'Provided strategic technology consulting',
    ],
  },
  {
    title: 'Freelance IT Technician',
    company: 'Self-Employed',
    period: '2007 – 2011',
    description: [
      'Repaired PCs and provided technical support',
      'Tutored students and supported local businesses',
    ],
  },
];

const education = [
  {
    degree: 'BSc in Computer Science',
    institution: 'Hilcoe School of Computer Science',
    period: '2007 – 2011',
  },
  {
    degree: 'Diploma in Information Technology',
    institution: "St. Mary's University College",
    period: '2003 – 2006',
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(174_72%_56%/0.03),transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Career Path
            </span>
            <h2 className="section-heading mb-4">
              Professional <span className="gradient-text">Experience</span>
            </h2>
            <p className="section-subheading mx-auto">
              A journey of continuous growth and impactful contributions
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-border to-transparent md:-translate-x-1/2" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_hsl(174_72%_56%/0.5)] md:-translate-x-1/2 top-8" />

                  {/* Content */}
                  <div className={`md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'}`}>
                    <div className={`glass-card rounded-xl p-6 hover:border-primary/30 transition-all duration-300 ${exp.current ? 'border-primary/30' : ''}`}>
                      {exp.current && (
                        <span className="inline-block px-2 py-0.5 rounded-full bg-primary/20 text-primary text-xs font-medium mb-3">
                          Current
                        </span>
                      )}
                      <h3 className="text-xl font-semibold text-foreground mb-2">{exp.title}</h3>
                      <div className={`flex items-center gap-4 text-muted-foreground text-sm mb-4 ${index % 2 === 0 ? '' : 'md:justify-end'}`}>
                        <span className="flex items-center gap-1">
                          <Building2 className="w-4 h-4" />
                          {exp.company}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </span>
                      </div>
                      <ul className={`space-y-2 text-muted-foreground ${index % 2 === 0 ? '' : 'md:text-right'}`}>
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className={`w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0 ${index % 2 === 0 ? '' : 'md:order-2'}`} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Empty space for other side */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mt-24">
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Education</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="glass-card rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
                >
                  <h4 className="text-lg font-semibold text-foreground mb-2">{edu.degree}</h4>
                  <p className="text-muted-foreground mb-2">{edu.institution}</p>
                  <p className="text-sm text-primary flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {edu.period}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
