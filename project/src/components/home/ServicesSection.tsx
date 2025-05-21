import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../ui/SectionTitle';
import { Building2, Users2, Shield, Briefcase, Heart, HandHelping } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, link }) => {
  return (
    <Link to={link} className="group h-full">
      <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col">
        <div className="bg-primary/10 p-4 inline-flex rounded-full mb-4 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-medium mb-3 text-primary">{title}</h3>
        <p className="text-gray-600 flex-grow">{description}</p>
      </div>
    </Link>
  );
};

const ServicesSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="Áreas de Atuação" 
          subtitle="Soluções jurídicas especializadas para diferentes necessidades"
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon={<Building2 size={24} />}
            title="Direito Civil e Consumidor"
            description="Atuamos em contratos, responsabilidade civil, direito do consumidor e resolução de conflitos entre particulares."
            link="/areas-de-atuacao#civil"
          />
          
          <ServiceCard
            icon={<Users2 size={24} />}
            title="Direito Trabalhista"
            description="Assessoria completa para empregados e empregadores, com foco em direitos, obrigações e relações de trabalho."
            link="/areas-de-atuacao#trabalhista"
          />
          
          <ServiceCard
            icon={<HandHelping size={24} />}
            title="Direito Previdenciário"
            description="Auxílio em aposentadorias, benefícios previdenciários, Aposentadoria especial, Aposentadoria por invalidez"
            link="/areas-de-atuacao#previdenciario"
          />
        </div>
        
        <div className="text-center mt-12">
          <Link to="/areas-de-atuacao" className="inline-block text-accent font-medium hover:underline">
            Ver todas as áreas de atuação →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;