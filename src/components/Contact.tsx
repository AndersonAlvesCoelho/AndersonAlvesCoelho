import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';
import {
  CheckCircle2,
  Github,
  Linkedin,
  Mail,
  Phone,
  Send,
} from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envio (integrar com backend ou serviço de email posteriormente)
    setTimeout(() => {
      toast({
        title: 'Mensagem enviada!',
        description: 'Obrigado pelo contato. Responderei em breve!',
        duration: 5000,
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contato" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
            Entre em Contato
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Interessado em colaborar ou discutir projetos? Vamos conversar!
          </p>
          <div className="w-20 h-1 bg-gradient-nature mx-auto rounded-full" />
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">
                Informações de Contato
              </h3>
              <div className="space-y-4">
                <a
                  href="mailto:a0a0coelho0@gmail.com"
                  className="flex items-center gap-4 p-4 bg-card rounded-lg shadow-soft hover:shadow-medium transition-shadow group"
                >
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">
                      a0a0coelho0@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+556199172-0125"
                  className="flex items-center gap-4 p-4 bg-card rounded-lg shadow-soft hover:shadow-medium transition-shadow group"
                >
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Telefone / WhatsApp</p>
                    <p className="text-sm text-muted-foreground">
                      +55 61 99172-0125
                    </p>
                  </div>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Redes Sociais</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/AndersonAlvesCoelho"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-card rounded-lg shadow-soft hover:shadow-medium hover:bg-primary/5 transition-all"
                  aria-label="GitHub"
                >
                  <Github className="h-6 w-6 text-foreground hover:text-primary transition-colors" />
                </a>
                <a
                  href="https://linkedin.com/in/anderson-alves-coelho"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-card rounded-lg shadow-soft hover:shadow-medium hover:bg-primary/5 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6 text-foreground hover:text-primary transition-colors" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              action="https://formsubmit.co/a0a0coelho0@gmail.com"
              method="POST"
              className="space-y-6"
            >
              {/* Evita captchas e redirecionamentos indesejados */}
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_next"
                value="https://seusite.com/obrigado"
              />

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Nome
                </label>
                <Input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Seu nome completo"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="seu.email@exemplo.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Conte-me sobre seu projeto..."
                  rows={6}
                  required
                />
              </div>


              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-gradient-nature"
              >
                {isSubmitting ? (
                  <>
                    <CheckCircle2 className="mr-2 h-5 w-5 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Enviar Mensagem
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
