import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Layers, Cpu, Database, Globe } from 'lucide-react';

const projects = [
  {
    title: 'Enum HMS',
    description: 'A comprehensive Hospital Management System designed for Ethiopian healthcare facilities. Built with modern technologies to streamline patient management, billing, and medical records.',
    tags: ['Laravel', 'React', 'MySQL', 'REST API'],
    icon: Layers,
    featured: true,
    status: 'In Development',
  },
  {
    title: 'AI Emotional Intelligence System',
    description: 'An innovative AI-powered platform for emotional intelligence analysis and insights. Leveraging machine learning to understand and respond to human emotions.',
    tags: ['Python', 'FastAPI', 'TensorFlow', 'PostgreSQL'],
    icon: Cpu,
    featured: true,
    status: 'In Development',
  },
  {
    title: 'Enterprise Network Solutions',
    description: 'Custom network architecture and security solutions implemented for multiple Ethiopian enterprises. Includes VPN setup, firewall configuration, and monitoring systems.',
    tags: ['Network Security', 'Ubuntu', 'Docker', 'Monitoring'],
    icon: Globe,
    status: 'Completed',
  },
  {
    title: 'Data Analytics Dashboard',
    description: 'Business intelligence dashboard for real-time data visualization and reporting. Helps organizations make data-driven decisions.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Power BI'],
    icon: Database,
    status: 'Completed',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 md:py-32 relative bg-secondary/20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(174_72%_56%/0.03),transparent_60%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Portfolio
            </span>
            <h2 className="section-heading mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="section-subheading mx-auto">
              Building technology solutions that make a lasting impact
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`glass-card rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 group ${
                  project.featured ? 'ring-1 ring-primary/20' : ''
                }`}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <project.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex items-center gap-2">
                    {project.featured && (
                      <span className="px-2 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">
                        Featured
                      </span>
                    )}
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Completed' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-semibold text-foreground mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tech-badge text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Github className="w-4 h-4" />
                    Code
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Details
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* GitHub CTA */}
          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-6">
              Explore more projects and contributions on GitHub
            </p>
            <Button variant="hero" size="lg" asChild>
              <a
                href="https://github.com/FitsumMuluworkem"
                target="_blank"
                rel="noopener noreferrer"
                className="gap-2"
              >
                <Github className="w-5 h-5" />
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
