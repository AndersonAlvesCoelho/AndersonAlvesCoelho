
import { projects } from '@/data/projects';
import { ProjectCarousel } from './projects/ProjectCarousel';

type ProjectType = 'professional' | 'personal';

interface Project {
  title: string;
  description: string;
  role: string;
  technologies: string[];
  link?: string;
  github?: string;
  image: string;
  category: string;
  delay?: number;
  type: 'professional' | 'personal';
}

export default function SectionProjects() {
  return (
    <section id="projetos" className="py-20 px-4 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
            Projetos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Seleção de projetos profissionais em produção e experimentos
            pessoais de código aberto
          </p>
          <div className="w-20 h-1 bg-gradient-nature mx-auto rounded-full mb-8" />
        </div>

        <div className="flex justify-center"></div>

        {/* Projects Carousel */}
        <div className="relative">
          <ProjectCarousel projects={projects} category={undefined} />
        </div>
      </div>
    </section>
  );
}
