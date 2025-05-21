import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { Scale, Award, Users } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTitle 
              title="Quem Somos" 
              subtitle="Conheça a nossa história e valores que norteiam nosso trabalho"
            />
            
            <p className="text-gray-600 mb-6">
              Fundado em janeiro de 2025 pelos advogados André Moschen e Pâmela Honorato, nosso escritório nasceu com o compromisso de oferecer soluções jurídicas personalizadas, eficazes e                    pautadas na ética e na excelência profissional. Com atuação especializada em Direito Civil e Consumidor, Direito trabalhista, Direito Previdenciário. construímos uma base sólida                  desde o início, prestando assessoria tanto em processos judiciais quanto extrajudiciais.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 p-4 rounded-full mb-3">
                  <Scale className="text-primary" size={24} />
                </div>
                <h3 className="font-medium text-lg mb-1">Ética</h3>
                <p className="text-gray-500 text-sm">Integridade e transparência em todas as ações</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 p-4 rounded-full mb-3">
                  <Award className="text-primary" size={24} />
                </div>
                <h3 className="font-medium text-lg mb-1">Excelência</h3>
                <p className="text-gray-500 text-sm">Compromisso com resultados de alta qualidade</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 p-4 rounded-full mb-3">
                  <Users className="text-primary" size={24} />
                </div>
                <h3 className="font-medium text-lg mb-1">Dedicação</h3>
                <p className="text-gray-500 text-sm">Atenção personalizada para cada cliente</p>
              </div>
            </div>
            
            <Link to="/quem-somos">
              <Button variant="primary">
                Saiba Mais Sobre Nós
              </Button>
            </Link>
          </div>
          
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Escritório de advocacia" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-accent rounded-lg hidden lg:block" style={{ zIndex: -1 }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;