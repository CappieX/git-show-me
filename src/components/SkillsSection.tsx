import React from 'react';

interface SkillBadge {
  name: string;
  url: string;
}

const badge = (label: string, logo: string) =>
  `https://img.shields.io/badge/${encodeURIComponent(label)}-000?logo=${logo}&logoColor=00FF9C`;

const skillCategories: {
  title: string;
  skills: SkillBadge[];
}[] = [
  {
    title: 'Languages',
    skills: [
      { name: 'JavaScript', url: badge('JavaScript', 'javascript') },
      { name: 'TypeScript', url: badge('TypeScript', 'typescript') },
      { name: 'PHP', url: badge('PHP', 'php') },
      { name: 'Python', url: badge('Python', 'python') },
      { name: 'C#', url: badge('C#', 'csharp') },
      { name: 'C++', url: badge('C++', 'cplusplus') },
      { name: 'HTML/CSS', url: badge('HTML / CSS', 'html5') },
      { name: 'SQL', url: badge('SQL', 'postgresql') },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      { name: 'React', url: badge('React', 'react') },
      { name: 'Next.js', url: badge('Next.js', 'next.js') },
      { name: 'Node.js', url: badge('Node.js', 'node.js') },
      { name: 'Laravel', url: badge('Laravel', 'laravel') },
      { name: 'FastAPI', url: badge('FastAPI', 'fastapi') },
      { name: 'WordPress', url: badge('WordPress', 'wordpress') },
      { name: 'Express.js', url: badge('Express.js', 'express') },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MySQL', url: badge('MySQL', 'mysql') },
      { name: 'PostgreSQL', url: badge('PostgreSQL', 'postgresql') },
      { name: 'SQL Server', url: badge('SQL Server', 'microsoftsqlserver') },
      { name: 'MongoDB', url: badge('MongoDB', 'mongodb') },
      { name: 'Redis', url: badge('Redis', 'redis') },
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Docker', url: badge('Docker', 'docker') },
      { name: 'Git', url: badge('Git', 'git') },
      { name: 'Ubuntu', url: badge('Ubuntu', 'ubuntu') },
      { name: 'macOS', url: badge('macOS', 'apple') },
      { name: 'Windows', url: badge('Windows', 'windows') },
      { name: 'Figma', url: badge('Figma', 'figma') },
      { name: 'Adobe', url: badge('Adobe', 'adobe') },
    ],
  },
  {
    title: 'Data & Analytics',
    skills: [
      { name: 'Tableau', url: badge('Tableau', 'tableau') },
      { name: 'Power BI', url: badge('Power BI', 'powerbi') },
      { name: 'ETL', url: badge('ETL', 'apacheairflow') },
      { name: 'Data Visualization', url: badge('Data Visualization', 'chartdotjs') },
    ],
  },
  {
    title: 'Specializations',
    skills: [
      { name: 'AI / ML', url: badge('AI / ML', 'openai') },
      { name: 'IT Security', url: badge('IT Security', 'securityscorecard') },
      { name: 'Network Architecture', url: badge('Network Architecture', 'cisco') },
      { name: 'UI / UX', url: badge('UI / UX', 'figma') },
      { name: 'System Administration', url: badge('System Administration', 'linux') },
    ],
  },
];

const focusAreas: SkillBadge[] = [
  { name: 'Systems Engineering', url: badge('Systems Engineering', 'linux') },
  { name: 'Full-Stack Development', url: badge('Full-Stack Development', 'react') },
  { name: 'AI Platforms', url: badge('AI Platforms', 'openai') },
  { name: 'Digital Strategy', url: badge('Digital Strategy', 'googleanalytics') },
  { name: 'Sustainable Tech', url: badge('Sustainable Tech', 'leaflet') },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 md:py-32 relative bg-secondary/20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(262_83%_65%/0.05),transparent_50%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
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

          {/* Focus Areas */}
          <div className="mb-16">
            <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
              Professional Focus
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {focusAreas.map((area, index) => (
                <img
                  key={index}
                  src={area.url}
                  alt={area.name}
                  className="h-6 hover:scale-105 transition-transform"
                />
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
                    <img
                      key={skillIndex}
                      src={skill.url}
                      alt={skill.name}
                      className="h-5 hover:scale-105 transition-transform"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold gradient-text">10+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text">25+</div>
              <div className="text-muted-foreground">Projects Delivered</div>
            </div>
            <div>
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
