import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  role: string;
  technologies: string[];
  link?: string;
  github?: string;
  image: string;
  category: string;
  delay?: number;
}

const ProjectCard = ({
  title,
  description,
  role,
  technologies,
  link,
  github,
  image,
  category,
  delay = 0,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-medium transition-all group"
    >
      <div className="relative overflow-hidden aspect-video">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-4 right-4">
          <Badge className="bg-primary/90 text-primary-foreground">{category}</Badge>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 font-serif">{title}</h3>
        <p className="text-sm text-muted-foreground mb-3">{role}</p>
        <p className="text-foreground/80 mb-4 leading-relaxed">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex gap-3">
          {link && (
            <Button
              size="sm"
              onClick={() => window.open(link, "_blank")}
              className="bg-gradient-nature"
            >
              Ver Projeto
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          )}
          {github && (
            <Button
              size="sm"
              variant="outline"
              onClick={() => window.open(github, "_blank")}
              className="border-primary"
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
