import { Code2, Lightbulb, Rocket, Users } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: '15+ Years',
    description: 'Deep hands-on experience across hardware, software, and networks',
  },
  {
    icon: Rocket,
    title: 'Founder',
    description: 'Leading Enum Technologies to build scalable, impactful platforms',
  },
  {
    icon: Lightbulb,
    title: 'Innovator',
    description: 'Creating AI-powered solutions and HMS platforms',
  },
  {
    icon: Users,
    title: 'Leader',
    description: 'Driving digital transformation and team excellence',
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(174_72%_56%/0.03),transparent_70%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              About Me
            </span>
            <h2 className="section-heading mb-4">
              The <span className="gradient-text">Journey</span>
            </h2>
            <p className="section-subheading mx-auto">
              From repairing computers to founding a technology company
            </p>
          </div>

          {/* Story */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                A visionary Computer Engineer, systems architect, and technology founder committed 
                to building solutions that outlive trends and create lasting impact. With over 
                <span className="text-foreground font-semibold"> 15 years of deep, hands-on experience</span> across 
                hardware engineering, software development, network systems, and product innovation.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From repairing computers as a young freelancer to founding{' '}
                <span className="text-primary font-semibold">Enum Technologies</span>, my journey 
                has always been driven by curiosity, resilience, and a commitment to meaningful progress. 
                Every role I held—technical, customer-facing, and leadership—revealed the same pattern: 
                <span className="text-foreground font-semibold"> solve real problems, improve lives, and build systems that last.</span>
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, that mission continues through Enum Technologies, where I am developing platforms 
                such as <span className="text-primary font-semibold">Enum HMS</span> and{' '}
                <span className="text-primary font-semibold">AI-powered emotional intelligence systems</span>.
              </p>
            </div>

            {/* Quote Card */}
            <div className="relative">
              <div className="glass-card rounded-2xl p-8 md:p-10">
                <div className="absolute -top-4 -left-4 text-6xl text-primary/20 font-serif">"</div>
                <blockquote className="text-xl md:text-2xl text-foreground font-medium leading-relaxed mb-6">
                  My mission is to build technology that scales, inspires, and leaves a legacy. 
                  Tech should empower people, strengthen communities, and create opportunities 
                  for future generations.
                </blockquote>
                <cite className="text-muted-foreground not-italic">
                  — Fitsum Mulugeta Tesfaye
                </cite>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="glass-card rounded-xl p-6 group hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
