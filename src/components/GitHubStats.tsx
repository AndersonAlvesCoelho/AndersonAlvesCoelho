import { motion } from 'framer-motion';
import { Code, GitFork, Github, Star } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

interface Repo {
  name: string;
  description: string;
  language: string;
  stargazers_count: number;
  html_url: string;
}

interface Stats {
  public_repos: number;
  followers: number;
  following: number;
}

const GITHUB_USERNAME = 'AndersonAlvesCoelho';

export default function SectionGitHubStats() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    // Buscar informações do usuário
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
      .then((res) => res.json())
      .then((data) => {
        setStats({
          public_repos: data.public_repos,
          followers: data.followers,
          following: data.following,
        });
      });

    // Buscar repositórios do usuário
    fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=stars&per_page=6`
    )
      .then((res) => res.json())
      .then((data) => {
        setRepos(data);
      });
  }, []);

  const statsData = [
    {
      icon: Code,
      label: 'Repositórios Públicos',
      value: stats?.public_repos ?? '...',
    },
    { icon: Star, label: 'Seguidores', value: stats?.followers ?? '...' },
    { icon: GitFork, label: 'Seguindo', value: stats?.following ?? '...' },
    { icon: Github, label: 'Repos Populares', value: repos.length },
  ];

  return (
    <section id="github" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
            Atividade no GitHub
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Contribuições open source e projetos pessoais
          </p>
          <div className="w-20 h-1 bg-gradient-nature mx-auto rounded-full" />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
          {statsData.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="text-center hover:shadow-medium transition-shadow">
                <CardHeader className="pb-2">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-2xl font-bold">
                    {stat.value}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* GitHub Contribution Graph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-12 max-w-5xl mx-auto"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Github className="w-5 h-5 text-primary" />
                Gráfico de Contribuições
              </CardTitle>
            </CardHeader>
            <CardContent className="p-2 sm:p-6">
              <img
                src={`https://ghchart.rshah.org/3fb950/${GITHUB_USERNAME}`}
                alt="GitHub Contribution Graph"
                className="w-full"
                loading="lazy"
              />
            </CardContent>
          </Card>
        </motion.div>

        {/* Featured Repos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {repos.map((repo, index) => (
            <motion.div
              key={repo.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className="h-full hover:shadow-medium transition-shadow group cursor-pointer"
                onClick={() => window.open(repo.html_url, '_blank')}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Github className="w-5 h-5 text-primary" />
                    {repo.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {repo.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded-full bg-primary" />
                      {repo.language}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      {repo.stargazers_count}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <Button
            size="lg"
            variant="outline"
            onClick={() =>
              window.open(`https://github.com/${GITHUB_USERNAME}`, '_blank')
            }
            className="border-primary"
          >
            <Github className="mr-2 h-5 w-5" />
            Ver Perfil Completo no GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
