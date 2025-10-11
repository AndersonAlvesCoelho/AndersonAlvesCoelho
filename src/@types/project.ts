export interface Project {
  title: string;
  description: string;
  role: string;
  technologies: string[];
  link?: string;
  github?: string;
  image: string;
  category: string;
  type: "professional" | "personal";
}
