import { Project } from "@/@types/project";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="group relative flex flex-col h-full rounded-xl overflow-hidden border border-border/50 bg-gradient-to-br from-card/60 to-card/40 backdrop-blur-sm transition-all duration-500 hover:border-primary/50 hover:shadow-[var(--shadow-hover)]">
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden bg-muted/30">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Type Badge */}
        {/* <div className="absolute top-3 right-3">
          <Badge variant="secondary" className="backdrop-blur-md bg-secondary/80">
            {project.type === "professional" ? "Profissional" : "Pessoal"}
          </Badge>
        </div> */}
      </div>

      {/* Content Section */}
      <div className="flex-1 flex flex-col p-6 space-y-4 ">
        {/* Title */}
        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>

        {/* Role */}
        <p className="text-sm text-muted-foreground font-medium">
          {project.role}
        </p>

        {/* Description */}
        <p className="text-sm text-foreground/80 leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="tech" className="text-xs">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 4 && (
            <Badge variant="tech" className="text-xs">
              +{project.technologies.length - 4}
            </Badge>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-2">
          {project.link && (
            <Button
              variant="gradient"
              size="sm"
              className="flex-1"
              onClick={() => window.open(project.link, "_blank")}
            >
              <ExternalLink className="w-4 h-4" />
              Demo
            </Button>
          )}
          {project.github && (
            <Button
              variant="glass"
              size="sm"
              className="flex-1"
              onClick={() => window.open(project.github, "_blank")}
            >
              <Github className="w-4 h-4" />
              Código
            </Button>
          )}
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl bg-gradient-to-br from-primary/20 to-secondary/20" />
    </div>
  );
};
