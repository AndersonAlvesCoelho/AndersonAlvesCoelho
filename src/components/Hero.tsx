import heroBg from '@/assets/hero-bg.jpg';
import { motion } from 'framer-motion';
import {
  CheckCircle2,
  ExternalLink,
  FileDown,
  Github,
  Linkedin,
  Mail,
} from 'lucide-react';
import { Button } from './ui/button';

import cvUrlFromAssets from '@/assets/Curriculo_Anderson_Alves_10_10_2025.pdf';
import { useToast } from '@/hooks/use-toast';
import {
  Cloud,
  Code2,
  Database,
  GitBranch,
  Package,
  Palette,
  Smartphone,
  Terminal,
} from 'lucide-react';
import { useState } from 'react';

const technologies = [
  { name: 'React Native', icon: Smartphone },
  { name: 'TypeScript', icon: Code2 },
  { name: 'Node.js', icon: Terminal },
  { name: 'PostgreSQL', icon: Database },
  { name: 'AWS', icon: Cloud },
  { name: 'Figma', icon: Palette },
  { name: 'Git', icon: GitBranch },
  { name: 'Docker', icon: Package },
];

export default function SectionHero() {
  const duplicatedTechs = [...technologies, ...technologies];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [isDownload, setIsDownload] = useState(false);
  const { toast } = useToast();

  const CV_FILE_NAME = 'Curriculo_Anderson_Alves_10_10_2025.pdf';
  const CV_URL =
    (cvUrlFromAssets as string) || '/Curriculo_Anderson_Alves_10_10_2025.pdf';

  const handleDownload = async () => {
    setIsDownload(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const link = document.createElement('a');
      link.href = CV_URL;
      link.setAttribute('download', CV_FILE_NAME);
      document.body.appendChild(link);

      link.click();
      document.body.removeChild(link);

      const isExternal = (() => {
        try {
          const urlObj = new URL(CV_URL, window.location.href);
          return urlObj.origin !== window.location.origin;
        } catch {
          return false;
        }
      })();

      if (isExternal) {
        const res = await fetch(CV_URL, { mode: 'cors' });
        if (!res.ok) throw new Error('Falha ao baixar o arquivo');
        const blob = await res.blob();
        const blobUrl = URL.createObjectURL(blob);
        const link2 = document.createElement('a');
        link2.href = blobUrl;
        link2.download = CV_FILE_NAME;
        document.body.appendChild(link2);
        link2.click();
        document.body.removeChild(link2);
        URL.revokeObjectURL(blobUrl);
      }

      toast({
        title: 'Currículo baixado!',
        description: 'Obrigado pelo interesse.',
        duration: 5000,
      });
    } catch (error) {
      console.error('Erro ao baixar CV', error);
      toast({
        title: 'Erro',
        description: 'Não foi possível baixar o currículo. Tente novamente.',
        duration: 5000,
      });
    } finally {
      setIsDownload(false);
    }
  };

  const pdfUrl =
    'https://docs.google.com/document/d/1ifVABa9I0FDJnisZSxfKptHClqcSg6dA/export?format=pdf';

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 relative group"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="relative"
            >
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(34, 197, 94, 0.3)',
                    '0 0 40px rgba(34, 197, 94, 0.5)',
                    '0 0 20px rgba(34, 197, 94, 0.3)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto overflow-hidden border-4 border-primary/30"
              >
                <img
                  src="https://avatars.githubusercontent.com/u/42191435?v=4"
                  alt="Anderson Alves Coelho"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Animated ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 w-32 h-32 md:w-40 md:h-40 mx-auto"
              >
                <div className="w-full h-full rounded-full border-2 border-dashed border-primary/50" />
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-4 font-serif"
          >
            Anderson Alves Coelho
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl md:text-2xl text-muted-foreground mb-6"
          >
            Analista de sistema Pleno
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            5 anos criando soluções digitais focadas nas necessidades reais do
            público, transformando desafios em experiências intuitivas e
            funcionais.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-8"
          >
            <Button
              onClick={() => scrollToSection('projetos')}
              size="lg"
              className="bg-gradient-nature shadow-medium hover:shadow-soft transition-all"
            >
              Ver Projetos
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open(pdfUrl, '_blank')}
              className="border-primary hover:bg-primary/5"
            >
              {isDownload ? (
                <>
                  <CheckCircle2 className="mr-2 h-5 w-5 animate-spin" />
                  Baixando...
                </>
              ) : (
                <>
                  <FileDown className="ml-2 h-4 w-4" />
                  Baixar CV
                </>
              )}
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center justify-center gap-6"
          >
            <a
              href="https://github.com/AndersonAlvesCoelho"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/anderson-alves-coelho"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:a0a0coelho0@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 1,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
