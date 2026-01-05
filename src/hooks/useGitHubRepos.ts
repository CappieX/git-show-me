import { useQuery } from '@tanstack/react-query';

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  created_at: string;
  updated_at: string;
  pushed_at: string;
  fork: boolean;
  archived: boolean;
}

const GITHUB_USERNAME = 'FitsumMuluworkem'; // Update this to your actual GitHub username

const fetchGitHubRepos = async (): Promise<GitHubRepo[]> => {
  const response = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=30`,
    {
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
    }
  );

  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status}`);
  }

  const repos: GitHubRepo[] = await response.json();
  
  // Filter out forks and archived repos, sort by stars + recent activity
  return repos
    .filter((repo) => !repo.fork && !repo.archived)
    .sort((a, b) => {
      // Prioritize repos with stars, then by recent push
      const scoreA = a.stargazers_count * 10 + new Date(a.pushed_at).getTime() / 1e12;
      const scoreB = b.stargazers_count * 10 + new Date(b.pushed_at).getTime() / 1e12;
      return scoreB - scoreA;
    });
};

export const useGitHubRepos = () => {
  return useQuery({
    queryKey: ['github-repos', GITHUB_USERNAME],
    queryFn: fetchGitHubRepos,
    staleTime: 5 * 60 * 1000, // Cache for 5 minutes
    retry: 2,
  });
};

export const getLanguageColor = (language: string | null): string => {
  const colors: Record<string, string> = {
    TypeScript: 'hsl(211, 60%, 48%)',
    JavaScript: 'hsl(53, 93%, 54%)',
    Python: 'hsl(207, 51%, 44%)',
    PHP: 'hsl(240, 31%, 47%)',
    HTML: 'hsl(12, 77%, 52%)',
    CSS: 'hsl(264, 64%, 52%)',
    'C#': 'hsl(265, 45%, 45%)',
    'C++': 'hsl(340, 80%, 50%)',
    Java: 'hsl(25, 80%, 50%)',
    Go: 'hsl(192, 68%, 48%)',
    Rust: 'hsl(25, 50%, 45%)',
    Ruby: 'hsl(0, 64%, 50%)',
    Shell: 'hsl(120, 20%, 50%)',
  };
  return colors[language || ''] || 'hsl(var(--muted-foreground))';
};

export { GITHUB_USERNAME };
