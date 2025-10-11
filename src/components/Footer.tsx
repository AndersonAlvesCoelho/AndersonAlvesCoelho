import { Github, Heart, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-gradient-nature bg-clip-text  mb-2 font-serif">
              Anderson Alves Coelho
            </h3>
            <p className="text-sm text-muted-foreground">
              Desenvolvedor Sênior focado em Deep Learning e impacto ambiental
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#sobre" className="text-muted-foreground hover:text-primary transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#projetos" className="text-muted-foreground hover:text-primary transition-colors">
                  Projetos
                </a>
              </li>
              <li>
                <a href="#artigos" className="text-muted-foreground hover:text-primary transition-colors">
                  Artigos
                </a>
              </li>
              <li>
                <a href="#contato" className="text-muted-foreground hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Conecte-se</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/AndersonAlvesCoelho"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-muted rounded-lg hover:bg-primary/10 hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/anderson-alves-coelho"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-muted rounded-lg hover:bg-primary/10 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:a0a0coelho0@gmail.com"
                className="p-2 bg-muted rounded-lg hover:bg-primary/10 hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            © {currentYear} Anderson Alves Coelho. Feito com{" "}
            <Heart className="h-4 w-4 text-primary fill-primary animate-pulse" /> e código limpo.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
