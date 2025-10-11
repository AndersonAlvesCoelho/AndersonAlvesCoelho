import { motion } from "framer-motion";
import { ExternalLink, BookOpen } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const Articles = () => {
  const articles = [
    {
      title: "Mudar o nome da chave do objeto JavaScript",
      platform: "Medium",
      date: "2020",
      description: "Tutorial sobre como renomear propriedades de objetos JavaScript usando diferentes técnicas.",
      link: "https://a0a0coelho0.medium.com/mudar-o-nome-da-chave-do-objeto-javascript-21901c456e72",
    },
    {
      title: "Os atalhos mais importantes do Visual Studio Code",
      platform: "Medium",
      date: "2020",
      description: "Lista dos principais atalhos do VS Code para aumentar produtividade no desenvolvimento.",
      link: "https://a0a0coelho0.medium.com/os-atalhos-mais-importantes-do-visual-studio-codes-2020-f03b000d40ea",
    },
    {
      title: "Dicas para se destacar no estágio",
      platform: "Medium",
      date: "2020",
      description: "Conselhos práticos para estagiários se destacarem no ambiente de trabalho.",
      link: "https://a0a0coelho0.medium.com/n%C2%BA-dicas-para-se-destacar-no-seu-est%C3%A1gio-484dbe2b4224",
    },
    {
      title: "Como criar um portfólio no GitHub",
      platform: "Medium",
      date: "2020",
      description: "Guia passo a passo para criar um portfólio profissional usando GitHub Pages.",
      link: "https://a0a0coelho0.medium.com/como-criar-um-portf%C3%B3lio-no-github-9b5d2763698a",
    },
    {
      title: "Desafio do programa UX Unicórnio",
      platform: "Medium",
      date: "2021",
      description: "Reflexões e aprendizados durante o programa de formação em UX/UI Design.",
      link: "https://a0a0coelho0.medium.com/desafio-do-programa-ux-unic%C3%B3rnio-72ee9ac97e83",
    },
    {
      title: "Cooperativa de veterinários — Estudo de caso",
      platform: "Medium",
      date: "2021",
      description: "Estudo de caso UX/UI para resolver problemas de cooperativas de veterinários.",
      link: "https://a0a0coelho0.medium.com/resolvendo-o-problema-de-cooperativa-de-veterin%C3%A1rios-da-cidade-em-andamento-ad51317c2c78",
    },
    {
      title: "SASS ou Styled Components?",
      platform: "Medium",
      date: "2021",
      description: "Comparação entre SASS e Styled Components para estilização em React.",
      link: "https://a0a0coelho0.medium.com/qual-eu-devo-usar-sass-ou-styled-components-aa30e5925e3d",
    },
    {
      title: "Ecosystem — Estudo de caso UX/UI",
      platform: "Medium",
      date: "2021",
      description: "Estudo de caso completo de design UX/UI para aplicativo de sustentabilidade.",
      link: "https://a0a0coelho0.medium.com/ecosystem-estudo-de-caso-de-ux-ui-98217e7d7475",
    },
    {
      title: "Node + Sequelize: migração com múltiplos bancos",
      platform: "Tabnews",
      date: "2023",
      description: "Como gerenciar migrations do Sequelize em arquiteturas multi-tenant com múltiplos bancos.",
      link: "https://www.tabnews.com.br/andersonalvescoelho/node-sequelize-migracao-utilizando-multiplos-bancos-de-dados",
    },
    {
      title: "Readonly vs Disabled",
      platform: "Tabnews",
      date: "2023",
      description: "Diferenças entre os atributos readonly e disabled em formulários HTML.",
      link: "https://www.tabnews.com.br/andersonalvescoelho/readonly-vs-disabled-qual-eu-devo-usar",
    },
    {
      title: "ORM vs SQL — Performance em Node.js",
      platform: "Tabnews",
      date: "2023",
      description: "Análise de performance comparando ORMs e SQL puro em aplicações Node.js.",
      link: "https://www.tabnews.com.br/andersonalvescoelho/performance-do-orm-vs-sql-o-que-e-melhor-para-seu-projeto-node-js",
    },
  ];

  return (
    <section id="artigos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
            Artigos & Publicações
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Compartilhando conhecimento sobre desenvolvimento, UX/UI e boas práticas de programação
          </p>
          <div className="w-20 h-1 bg-gradient-nature mx-auto rounded-full" />
        </div>

        {/* Articles Grid with horizontal scroll on mobile */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {articles.map((article, index) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Card className="h-full hover:shadow-medium transition-all group cursor-pointer"
                  onClick={() => window.open(article.link, "_blank")}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <BookOpen className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-xs text-muted-foreground">{article.date}</span>
                    </div>
                    <CardTitle className="text-base leading-tight group-hover:text-primary transition-colors">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="text-xs">
                      <Badge variant="outline" className="mt-1">
                        {article.platform}
                      </Badge>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{article.description}</p>
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full border-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    >
                      Ler Artigo
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.open("https://medium.com/@a0a0coelho0", "_blank")}
              className="border-primary"
            >
              Ver Todos no Medium
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() =>
                window.open("https://www.tabnews.com.br/andersonalvescoelho", "_blank")
              }
              className="border-primary"
            >
              Ver Todos no Tabnews
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Articles;
