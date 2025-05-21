import React from 'react';
import Layout from '../components/layout/Layout';
import SectionTitle from '../components/ui/SectionTitle';
import { Building2, Users2, Shield, Briefcase, Heart, HandHelping } from 'lucide-react';

interface PracticeAreaProps {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  services: string[];
  imageUrl: string;
}

const PracticeArea: React.FC<PracticeAreaProps> = ({ 
  id, 
  icon, 
  title, 
  description, 
  services, 
  imageUrl 
}) => {
  return (
    <div id={id} className="py-16 border-b border-gray-200 last:border-b-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="flex items-center mb-6">
            <div className="bg-primary/10 p-4 rounded-full mr-4">
              {icon}
            </div>
            <h2 className="text-3xl font-serif font-bold text-primary">{title}</h2>
          </div>
          
          <p className="text-gray-600 mb-8">
            {description}
          </p>
          
          <h3 className="text-xl font-medium mb-4 text-primary">Serviços</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 mb-6">
            {services.map((service, index) => (
              <li key={index} className="flex items-center">
                <div className="h-2 w-2 bg-accent rounded-full mr-2"></div>
                <span className="text-gray-700">{service}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="relative">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src={imageUrl}
              alt={title} 
              className="w-full h-auto"
            />
          </div>
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/20 rounded-lg hidden lg:block" style={{ zIndex: -1 }}></div>
        </div>
      </div>
    </div>
  );
};

const PracticeAreas: React.FC = () => {
  const practiceAreas: PracticeAreaProps[] = [
    {
      id: "civil",
      icon: <Building2 size={24} className="text-primary" />,
      title: "Direito Civil e Consumidor",
      description: "Nossa equipe atua em diversas questões de Direito Civil, oferecendo orientação jurídica completa para proteger os interesses de pessoas físicas e jurídicas. Contamos com advogados especializados e atualizados com as mais recentes jurisprudências e legislações.",
      services: [
        "Contratos e negociações",
        "Responsabilidade civil",
        "Direito do consumidor",
        "Cobranças e execuções",
        "Ações indenizatórias",
        "Contratos imobiliários",
        "Usucapião e regularização de imóveis",
        "Inventários e testamentos"
      ],
      imageUrl: "https://fcoadvocacia.com.br/wp-content/uploads/2024/11/blog02.jpg"
    },
    {
      id: "trabalhista",
      icon: <Users2 size={24} className="text-primary" />,
      title: "Direito Trabalhista",
      description: "Oferecemos assessoria jurídica completa tanto para empregadores quanto para empregados, atuando na prevenção e resolução de conflitos trabalhistas. Nossa abordagem combina conhecimento técnico aprofundado com uma visão estratégica das relações de trabalho.",
      services: [
        "Reclamações trabalhistas",
        "Defesa de empresas",
        "Negociações coletivas",
        "Auditorias trabalhistas",
        "Compliance trabalhista",
        "Contratos de trabalho",
        "Rescisões contratuais",
        "Terceirização"
      ],
      imageUrl: "https://kfprev.adv.br/wp-content/uploads/2022/06/irregularidades-no-trabalho-a-quem-recorrer.jpg"
    },
    {
      id: "previdenciario",
      icon: <Users2 size={24} className="text-primary" />,
      title: "Direito Previdenciário",
      description: "Oferecemos assessoria jurídica especializada em Direito Previdenciário, auxiliando trabalhadores e segurados do INSS em todas as etapas de concessão e revisão de benefícios. Atuamos com precisão técnica e foco na garantia dos seus direitos previdenciários.",
      services: [
        "Aposentadoria por idade",
        "Aposentadoria por tempo de contribuição",
        "Aposentadoria especial",
        "Aposentadoria por invalidez",
        "Pensão por morte",
        "Auxílio-doença",
        "Planejamento previdenciário",
        "Revisão de benefícios",
        "INSS: Recursos e defesas",
        "Benefício assistencial (LOAS)",
      ],
      imageUrl: "https://imgs.jusbr.com/publications/images/5c1c4d23d89397b2d8240bf1edff313b"
    }
  ];

  return (
    <Layout>
      <div className="bg-primary pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Áreas de Atuação" 
            subtitle="Soluções jurídicas especializadas para diferentes necessidades"
            light
            center
          />
        </div>
      </div>

      <section className="py-6 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 py-8">
            {practiceAreas.map((area) => (
              <a 
                key={area.id}
                href={`#${area.id}`} 
                className="flex flex-col items-center justify-center p-4 bg-gray-50 hover:bg-primary/5 rounded-lg transition-colors text-center"
              >
                <div className="bg-primary/10 p-3 rounded-full mb-3">
                  {area.icon}
                </div>
                <span className="text-primary font-medium">{area.title}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container mx-auto px-4 md:px-6">
          {practiceAreas.map((area) => (
            <PracticeArea 
              key={area.id}
              id={area.id}
              icon={area.icon}
              title={area.title}
              description={area.description}
              services={area.services}
              imageUrl={area.imageUrl}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default PracticeAreas;