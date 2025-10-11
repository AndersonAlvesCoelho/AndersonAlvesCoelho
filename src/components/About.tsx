import { motion, useInView } from 'framer-motion';
import { Code2, Leaf, Rocket, Users } from 'lucide-react';
import { useRef } from 'react';
import SectionTechScroll from './TechScroll';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skills = [
    {
      icon: Code2,
      title: 'Desenvolvimento Full-Stack',
      description:
        'Expertise em React, React Native, Node.js e TypeScript com 5+ anos de experiência',
    },
    {
      icon: Rocket,
      title: 'Low-Code & Rapid Development',
      description:
        'Proficiente em FlutterFlow e Xano para MVPs e protótipos rápidos',
    },
    {
      icon: Leaf,
      title: 'Impacto Ambiental',
      description:
        'Projetos focados em conservação e sustentabilidade ambiental',
    },
    {
      icon: Users,
      title: 'Deep Learning',
      description:
        'Transição de carreira para aplicações de ML em causas socioambientais',
    },
  ];

  return (
    <section id="sobre" className="pt-10 py-20 bg-muted/30" ref={ref}>
      <SectionTechScroll />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
            Sobre Mim
          </h2>
          <div className="w-20 h-1 bg-gradient-nature mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none mb-12 text-center"
          >
            <p className="text-foreground/90 leading-relaxed mb-6">
              Sou um desenvolvedor pleno com sólida experiência em tecnologias
              web e mobile, incluindo JavaScript, TypeScript, React, React
              Native e Node.js. Durante minha carreira, trabalhei em diversos
              projetos de impacto, desde sistemas SaaS para o agronegócio até
              plataformas de monitoramento ambiental.
            </p>
            <p className="text-foreground/90 leading-relaxed mb-6">
              Atualmente, estou direcionando minha carreira para Deep Learning,
              com foco especial em aplicações que gerem impacto positivo no meio
              ambiente e na sociedade. Acredito no poder da tecnologia como
              ferramenta de transformação para um futuro mais sustentável.
            </p>
            <p className="text-muted-foreground">
              <strong>Localização:</strong> Brasil | <strong>Email:</strong>{' '}
              a0a0coelho0@gmail.com | <strong>Telefone:</strong> +55 61
              99172-0125
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-card p-6 rounded-lg shadow-soft hover:shadow-medium transition-shadow"
              >
                <skill.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                <p className="text-muted-foreground">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
