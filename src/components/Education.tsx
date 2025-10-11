import { motion } from "framer-motion";
import { Calendar, GraduationCap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const Education = () => {
  const education = [
    {
      degree: "Pós-Graduação em Ciência de Dados",
      institution: "Instituição de Ensino",
      period: "Em andamento",
      status: "Cursando",
      description: "Foco em Machine Learning, Deep Learning e análise de dados complexos.",
    },
    {
      degree: "Pós-Graduação em Recursos Ambientais",
      institution: "Instituição de Ensino",
      period: "2024",
      status: "Concluído",
      description:
        "Especialização em gestão de recursos naturais e tecnologias para sustentabilidade.",
    },
    {
      degree: "Bacharelado em Sistemas de Informação",
      institution: "Instituição de Ensino Superior",
      period: "2017 - 2021",
      status: "Concluído",
      description:
        "Formação completa em desenvolvimento de software, banco de dados e arquitetura de sistemas.",
    },
  ];

  const certifications = [
    {
      title: "Certificação UX/UI Design",
      issuer: "UX Unicórnio",
      year: "2023",
      description: "Design thinking, prototipagem e experiência do usuário.",
    },
    {
      title: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      year: "2023",
      description: "Arquitetura e desenvolvimento de aplicações em nuvem.",
    },
    {
      title: "React Native Advanced",
      issuer: "Udemy / Rocketseat",
      year: "2022",
      description: "Desenvolvimento mobile avançado com React Native.",
    },
  ];

  return (
    <section id="educacao" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
            Educação & Certificações
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Formação acadêmica e certificações que fundamentam minha expertise técnica
          </p>
          <div className="w-20 h-1 bg-gradient-nature mx-auto rounded-full" />
        </div>

        {/* Education */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-primary" />
            Formação Acadêmica
          </h3>
          <div className="space-y-6">
            {education.map((item, index) => (
              <motion.div
                key={item.degree}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-medium transition-shadow">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-1">{item.degree}</CardTitle>
                        <p className="text-sm text-muted-foreground">{item.institution}</p>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span className="text-muted-foreground">{item.period}</span>
                        <span
                          className={`px-2 py-1 rounded text-xs font-medium ${
                            item.status === "Cursando"
                              ? "bg-accent text-accent-foreground"
                              : "bg-primary/10 text-primary"
                          }`}
                        >
                          {item.status}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        {/* <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Award className="h-6 w-6 text-primary" />
            Certificações Profissionais
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-medium transition-shadow">
                  <CardHeader>
                    <Award className="h-8 w-8 text-primary mb-2" />
                    <CardTitle className="text-lg">{cert.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    <p className="text-xs text-muted-foreground">{cert.year}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{cert.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Education;
