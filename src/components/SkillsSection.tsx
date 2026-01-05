const skillCategories = [
  {
    title: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'PHP', 'Python', 'C#', 'C++', 'HTML/CSS', 'SQL'],
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['React', 'Next.js', 'Node.js', 'Laravel', 'FastAPI', 'WordPress', 'Express.js'],
  },
  {
    title: 'Databases',
    skills: ['MySQL', 'PostgreSQL', 'SQL Server', 'MongoDB', 'Redis'],
  },
  {
    title: 'Tools & Platforms',
    skills: ['Docker', 'Git', 'Ubuntu', 'macOS', 'Windows', 'Figma', 'Adobe Suite'],
    ![Next.js](https://img.shields.io/badge/Next.js-000?logo=next.js&logoColor=00FF9C)
  },
  {
    title: 'Data & Analytics',
    skills: ['Tableau', 'Power BI', 'Data Visualization', 'ETL Processes',],
    
  },
  {
    title: 'Specializations',
    skills: ['AI/ML', 'Network Architecture', 'IT Security', 'UI/UX Design', 'System Administration'],
  },
];

const focusAreas = [
  'IT Systems Engineering & Network Architecture',
  'Full-Stack Software Development & Product Innovation',
  'AI-Driven Platforms & Data-powered Solutions',
  'Business Leadership, Strategy & Digital Transformation',
  'Long-term Impact Creation through Sustainable Tech Ecosystems',
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 md:py-32 relative bg-secondary/20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(262_83%_65%/0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Skills & Expertise
            </span>
            <h2 className="section-heading mb-4">
              Tech <span className="gradient-text">Stack</span>
            </h2>
            <p className="section-subheading mx-auto">
              A comprehensive toolkit built over 15+ years of hands-on experience
            </p>
          </div>

          {/* Professional Focus */}
          <div className="mb-16">
            <h3 className="text-xl font-semibold text-foreground mb-6 text-center">Professional Focus</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {focusAreas.map((area, index) => (
                <div
                  key={index}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 text-foreground text-sm"
                >
                  {area}
                </div>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="glass-card rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="tech-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Core Strengths */}
          <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold gradient-text">15+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold gradient-text">50+</div>
              <div className="text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold gradient-text">100%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
