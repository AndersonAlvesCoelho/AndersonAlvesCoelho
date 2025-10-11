import { Project } from '@/@types/project';
import ImageAres from '@/assets/project/ares.png';
import ImageCalculadoraPegadaCarbono from '@/assets/project/calculadora-de-pegada-de-carbono.png';
import ImageCestaPro from '@/assets/project/cesta-pro.png';
import ImageChatuba from '@/assets/project/chatuba.webp';
import ImageCnuc from '@/assets/project/cnuc.png';
import ImageComercialBi from '@/assets/project/comercial-bi.png';
import ImageDetran from '@/assets/project/detran.jpg';
import ImageFioDaNavalha from '@/assets/project/fio-da-navalha.png';
import ImageLLMFinance from '@/assets/project/LLM-finance.png';
import ImageN8N from '@/assets/project/n8n.png';
import ImageTermometroInterno from '@/assets/project/termometro-interno.webp';

export const projects: Project[] = [
  {
    title: 'Cesta Pro (SaaS)',
    description:
      'SaaS desenvolvido do zero em 3 meses para gestão e controle de venda de produtos voltado a um nicho específico do agronegócio. Atualmente em produção com clientes ativos e em constante evolução com novas funcionalidades.',
    role: 'Desenvolvedor Full-Stack | Arquitetura e Implementação',
    technologies: ['React', 'Tailwind CSS', 'Supabase'],
    link: 'https://cestapro.com.br/',
    image: ImageCestaPro,
    category: 'SaaS & Gestão',
    type: 'professional',
  },
  {
    title: 'Autenticação Auto Escola (DETRAN-DF)',
    description:
      'Serviço de backend criado para o DETRAN-DF, integrando autenticação facial (FaceID) e reconhecimento de placas de veículos (OCR) para validação segura em aulas práticas.',
    role: 'Desenvolvedor Backend | Segurança e Integração',
    technologies: ['Nest.js', 'Python', 'Face Recognition', 'OCR'],
    image: ImageDetran,
    category: 'Backend & Segurança',
    type: 'professional',
  },
  {
    title: 'Chatuba Mais (Consultoria Mobile)',
    description:
      'Aplicativo de benefícios desenvolvido com sistema de telas dinâmicas, permitindo alterar componentes em tempo real sem novos deploys. Responsável pela consultoria técnica, publicação na Play Store e testes no TestFlight.',
    role: 'Consultor Mobile | Desenvolvimento e Otimização',
    technologies: ['React Native', 'Expo'],
    link: 'https://play.google.com/store/apps/details?id=com.chatubamais',
    image: ImageChatuba,
    category: 'Consultoria Mobile',
    type: 'professional',
  },
  {
    title: 'Ares Monitoramento IoT',
    description:
      'Aplicativo de monitoramento de insumos em tempo real, coletando dados de umidade, temperatura e localização via MQTT e processando eventos com Kafka. Dashboard mobile e web para visualização das métricas.',
    role: 'Desenvolvedor Mobile & Backend | Integração IoT',
    technologies: ['React Native', 'Expo', 'Nest.js', 'MQTT', 'Kafka'],
    image: ImageAres,
    category: 'IoT & Real-time',
    type: 'professional',
  },
  {
    title: 'Cadastro Nacional de Unidades de Conservação (CNUC)',
    description:
      'Desenvolvimento de arquitetura multi-tenant para gestão de unidades de conservação. Implementação de migração complexa do Sequelize para múltiplos bancos de dados de forma unificada.',
    role: 'Desenvolvedor Backend | Arquitetura de Dados',
    technologies: ['React', 'Node.js', 'Express', 'Sequelize', 'PostgreSQL'],
    link: 'https://cnuc.mma.gov.br/',
    image: ImageCnuc,
    category: 'Governo & Ambiente',
    type: 'professional',
  },
  {
    title: 'Comercial BI (Plataforma de Dados)',
    description:
      'Pipeline ETL desenvolvido em Python para processamento e enriquecimento de dados públicos de CNPJs, exibidos em um painel web interativo para análise de mercado e insights comerciais.',
    role: 'Desenvolvedor Full-Stack | Pipeline de Dados',
    technologies: ['React', 'Python', 'Node.js', 'PostgreSQL'],
    image: ImageComercialBi,
    category: 'Business Intelligence',
    type: 'professional',
  },
  {
    title: 'Termômetro do Código Florestal',
    description:
      'Aplicativo mobile e API de visualização de dados sobre o Código Florestal Brasileiro. Interface interativa com gráficos dinâmicos e filtros avançados para análise de indicadores ambientais.',
    role: 'Desenvolvedor Full-Stack | API e Visualização de Dados',
    technologies: [
      'React Native',
      'Node.js',
      'Express',
      'Sequelize',
      'PostgreSQL',
    ],
    link: 'https://termometroflorestal.org.br/',
    image: ImageTermometroInterno,
    category: 'Impacto Ambiental',
    type: 'professional',
  },
  {
    title: 'LLM Finance (Análise de Dados com IA)',
    description:
      'Projeto pessoal que utiliza LangChain para categorização automática de extratos financeiros. O fluxo processa dados brutos, classifica transações e exporta resultados para planilhas.',
    role: 'Desenvolvedor | IA e Automação de Dados',
    technologies: ['Python', 'LangChain'],
    github: 'https://github.com/AndersonAlvesCoelho/llm-finance',
    image: ImageLLMFinance,
    category: 'IA & Machine Learning',
    type: 'personal',
  },
  {
    title: 'Automação de Agenda com IA',
    description:
      'Fluxo automatizado criado no N8N que agenda eventos no Google Calendar a partir de mensagens no WhatsApp. Utiliza IA para interpretar comandos de linguagem natural e executar ações automaticamente.',
    role: 'Desenvolvedor | Automação Inteligente',
    technologies: ['N8N', 'Docker', 'AWS EC2', 'WhatsApp API'],
    image: ImageN8N,
    category: 'Automação & IA',
    type: 'personal',
  },
  {
    title: 'Carbon Calc',
    description:
      'Página web interativa que orienta o usuário a calcular sua pegada de carbono pessoal, apresentando resultados visuais e intuitivos para conscientização ambiental.',
    role: 'Desenvolvedor Frontend | Projeto de Impacto',
    technologies: ['React', 'Tailwind CSS'],
    link: 'https://carbon-calc.vercel.app/',
    github: 'https://github.com/AndersonAlvesCoelho/carbon-calc',
    image: ImageCalculadoraPegadaCarbono,
    category: 'Sustentabilidade',
    type: 'personal',
  },
  {
    title: 'App de Gestão de Academia',
    description:
      'MVP de aplicativo para academias de artes marciais com controle de mensalidades, rede social interna e agendamento de eventos. Design moderno e navegação fluida.',
    role: 'Desenvolvedor Mobile | MVP',
    technologies: ['React Native', 'Expo', 'NativeWind', 'Supabase'],
    github: 'https://github.com/AndersonAlvesCoelho/fio-da-navalha',
    image: ImageFioDaNavalha,
    category: 'Performance & Edge',
    type: 'personal',
  },
];

export const categories = Array.from(new Set(projects.map((p) => p.category)));
