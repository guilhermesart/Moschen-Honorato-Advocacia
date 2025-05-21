import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  return (
    <section 
      className="relative min-h-screen bg-cover bg-center flex items-center"
      style={{ 
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://www.smg.edu.br/wp-content/uploads/2022/06/Eventos-1920-%C3%97-1080-px-5.png")'
      }}
    >
      <div className="container mx-auto px-4 md:px-6 py-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
            Moschen & Honorato Advocacia
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
            Compromisso com a Justiça, Excelência na Defesa dos seus Direitos.
          </p>
          
          <p className="text-gray-200 mb-10 text-lg">
            Somos um escritório dedicado a oferecer soluções jurídicas eficientes e personalizadas, 
            com profissionalismo, ética e responsabilidade. Nossa missão é defender seus direitos 
            e interesses com excelência e comprometimento.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contato">
              <Button variant="primary" size="lg">
                Fale Conosco
              </Button>
            </Link>
            
            <Link to="/areas-de-atuacao">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <span>Áreas de Atuação</span>
                <ChevronRight size={18} className="ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-6 left-0 right-0 flex justify-center">
        <a 
          href="#about"
          className="text-white animate-bounce"
          aria-label="Rolar para baixo"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-8 w-8" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;