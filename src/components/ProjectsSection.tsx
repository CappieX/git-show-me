import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Star, GitFork, Calendar, Loader2, AlertCircle, Layers, Cpu } from 'lucide-react';
import { useGitHubRepos, getLanguageColor, GITHUB_USERNAME, type GitHubRepo } from '@/hooks/useGitHubRepos';
import { formatDistanceToNow } from 'date-fns';

// Featured projects that aren't on GitHub yet
const featuredProjects = [
  {
    title: 'Enum HMS',
    description: 'A comprehensive Hospital Management System designed for Ethiopian healthcare facilities. Built with modern technologies to streamline patient management, billing, and medical records.',
    tags: ['Laravel', 'React', 'MySQL', 'REST API'],
    icon: Layers,
    status: 'In Development',
  },
  {
    title: 'AI Emotional Intelligence System',
    description: 'An innovative AI-powered platform for emotional intelligence analysis and insights. Leveraging machine learning to understand and respond to human emotions.',
    tags: ['Python', 'FastAPI', 'TensorFlow', 'PostgreSQL'],
    icon: Cpu,
    status: 'In Development',
  },
];

const RepoCard = ({ repo }: { repo: GitHubRepo }) => {
  const languageColor = getLanguageColor(repo.language);
  const updatedAgo = formatDistanceToNow(new Date(repo.pushed_at), { addSuffix: true });

  return (
    <div className="glass-card rounded-xl p-6 hover:border-primary/30 transition-all duration-300 group flex flex-col h-full">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Github className="w-5 h-5 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-foreground truncate">{repo.name}</h3>
          </div>
        </div>
        <div className="flex items-center gap-3 text-muted-foreground text-sm">
          {repo.stargazers_count > 0 && (
            <span className="flex items-center gap-1">
              <Star className="w-4 h-4" />
              {repo.stargazers_count}
            </span>
          )}
          {repo.forks_count > 0 && (
            <span className="flex items-center gap-1">
              <GitFork className="w-4 h-4" />
              {repo.forks_count}
            </span>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-muted-foreground mb-4 line-clamp-2 flex-grow">
        {repo.description || 'No description available'}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {repo.language && (
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-secondary/80 text-xs font-medium">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: languageColor }}
            />
            {repo.language}
          </span>
        )}
        {repo.topics.slice(0, 3).map((topic) => (
          <span key={topic} className="tech-badge text-xs">
            {topic}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-border/50 mt-auto">
        <span className="text-xs text-muted-foreground flex items-center gap-1">
          <Calendar className="w-3 h-3" />
          Updated {updatedAgo}
        </span>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" asChild>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="gap-1.5">
              <Github className="w-3.5 h-3.5" />
              Code
            </a>
          </Button>
          {repo.homepage && (
            <Button variant="ghost" size="sm" asChild>
              <a href={repo.homepage} target="_blank" rel="noopener noreferrer" className="gap-1.5">
                <ExternalLink className="w-3.5 h-3.5" />
                Demo
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

const FeaturedCard = ({ project }: { project: typeof featuredProjects[0] }) => {
  return (
    <div className="glass-card rounded-xl p-6 hover:border-primary/30 transition-all duration-300 group ring-1 ring-primary/20 flex flex-col h-full">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
          <project.icon className="w-6 h-6 text-primary" />
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">
            Featured
          </span>
          <span className="px-2 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-xs font-medium">
            {project.status}
          </span>
        </div>
      </div>

      {/* Content */}
      <h3 className="text-xl font-semibold text-foreground mb-3">{project.title}</h3>
      <p className="text-muted-foreground mb-4 leading-relaxed flex-grow">{project.description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tags.map((tag) => (
          <span key={tag} className="tech-badge text-xs">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const { data: repos, isLoading, error } = useGitHubRepos();

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

          {/* Featured Projects */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Flagship Products
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {featuredProjects.map((project, index) => (
                <FeaturedCard key={index} project={project} />
              ))}
            </div>
          </div>

          {/* GitHub Repos */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Github className="w-5 h-5 text-primary" />
              Open Source & GitHub Projects
            </h3>

            {isLoading && (
              <div className="flex items-center justify-center py-16">
                <div className="flex flex-col items-center gap-4">
                  <Loader2 className="w-8 h-8 text-primary animate-spin" />
                  <p className="text-muted-foreground">Loading repositories...</p>
                </div>
              </div>
            )}

            {error && (
              <div className="glass-card rounded-xl p-8 text-center">
                <AlertCircle className="w-12 h-12 text-destructive mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-foreground mb-2">Unable to load repositories</h4>
                <p className="text-muted-foreground mb-4">
                  GitHub API is temporarily unavailable. Please try again later.
                </p>
                <Button variant="outline" asChild>
                  <a
                    href={`https://github.com/${GITHUB_USERNAME}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View on GitHub
                  </a>
                </Button>
              </div>
            )}

            {repos && repos.length > 0 && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {repos.slice(0, 6).map((repo) => (
                  <RepoCard key={repo.id} repo={repo} />
                ))}
              </div>
            )}

            {repos && repos.length === 0 && (
              <div className="glass-card rounded-xl p-8 text-center">
                <Github className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">
                  No public repositories found. Check back soon!
                </p>
              </div>
            )}
          </div>

          {/* GitHub CTA */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">
              Explore more projects and contributions on GitHub
            </p>
            <Button variant="hero" size="lg" asChild>
              <a
                href={`https://github.com/${GITHUB_USERNAME}`}
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
