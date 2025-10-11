
const technologies = [
  {
    name: 'React',
    icon: 'https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB',
  },
  {
    name: 'React Native',
    icon: 'https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB',
  },
  {
    name: 'Next.js',
    icon: 'https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=next.js&logoColor=white',
  },
  {
    name: 'Node.js',
    icon: 'https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white',
  },
  {
    name: 'Express.js',
    icon: 'https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white',
  },
  {
    name: 'Nest.js',
    icon: 'https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white',
  },
  {
    name: 'TypeScript',
    icon: 'https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white',
  },
  {
    name: 'JavaScript',
    icon: 'https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black',
  },
  {
    name: 'Python',
    icon: 'https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white',
  },
  {
    name: 'PHP',
    icon: 'https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white',
  },
  {
    name: 'C#',
    icon: 'https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white',
  },
  {
    name: 'PostgreSQL',
    icon: 'https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white',
  },
  {
    name: 'MySQL',
    icon: 'https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white',
  },
  {
    name: 'SQL Server',
    icon: 'https://img.shields.io/badge/Microsoft%20SQL%20Server-CC2927?style=for-the-badge&logo=microsoft%20sql%20server&logoColor=white',
  },
  {
    name: 'Oracle',
    icon: 'https://img.shields.io/badge/Oracle-F80000?style=for-the-badge&logo=oracle&logoColor=white',
  },
  {
    name: 'AWS',
    icon: 'https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white',
  },
  {
    name: 'Docker',
    icon: 'https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white',
  },
  {
    name: 'N8N',
    icon: 'https://img.shields.io/badge/N8N-1A8272?style=for-the-badge&logo=n8n&logoColor=white',
  },
  {
    name: 'Git',
    icon: 'https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white',
  },
  {
    name: 'GitHub',
    icon: 'https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white',
  },
  {
    name: 'Figma',
    icon: 'https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white',
  },
  {
    name: 'Tailwind CSS',
    icon: 'https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white',
  },
  {
    name: 'Chakra UI',
    icon: 'https://img.shields.io/badge/Chakra%20UI-319795?style=for-the-badge&logo=chakra-ui&logoColor=white',
  },
  {
    name: 'Material UI',
    icon: 'https://img.shields.io/badge/MUI-007FFF?style=for-the-badge&logo=mui&logoColor=white',
  },
  {
    name: 'Bootstrap',
    icon: 'https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white',
  },
  {
    name: 'ShadCN',
    icon: 'https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white',
  },
  {
    name: 'Sequelize',
    icon: 'https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white',
  },
  {
    name: 'Prisma',
    icon: 'https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white',
  },
  {
    name: 'LangChain',
    icon: 'https://img.shields.io/badge/LangChain-000000?style=for-the-badge&logo=langchain&logoColor=white',
  },
  {
    name: 'NLP',
    icon: 'https://img.shields.io/badge/NLP-5A67D8?style=for-the-badge',
  },
  {
    name: 'Visão Computacional',
    icon: 'https://img.shields.io/badge/Visão%20Computacional-4299E1?style=for-the-badge',
  },
  {
    name: 'ETL',
    icon: 'https://img.shields.io/badge/ETL-38B2AC?style=for-the-badge',
  },
  {
    name: 'OpenLayers',
    icon: 'https://img.shields.io/badge/OpenLayers-1F6B75?style=for-the-badge&logo=openlayers&logoColor=white',
  },
  {
    name: 'MapServer',
    icon: 'https://img.shields.io/badge/MapServer-555555?style=for-the-badge',
  },
  {
    name: 'MQTT',
    icon: 'https://img.shields.io/badge/MQTT-660066?style=for-the-badge&logo=mqtt&logoColor=white',
  },
  {
    name: 'Kafka',
    icon: 'https://img.shields.io/badge/Kafka-231F20?style=for-the-badge&logo=apache-kafka&logoColor=white',
  },
  {
    name: 'APIs RESTful',
    icon: 'https://img.shields.io/badge/APIs%20RESTful-000000?style=for-the-badge',
  },
];

export default function SectionTechScroll() {
  const duplicatedTechs = [...technologies, ...technologies];

  return (
    <section id="tecnologias" className="bg-transparent pb-20  overflow-hidden">
      <div className="relative">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex animate-infinite-scroll hover:[animation-play-state:paused]">
          {duplicatedTechs.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3 mx-8 min-w-fit"
              >
                <div key={index} className="mx-4 flex-shrink-0">
                  <img src={tech.icon} alt={tech.name} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
