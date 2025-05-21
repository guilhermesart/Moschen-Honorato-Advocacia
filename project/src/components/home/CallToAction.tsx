import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const CallToAction: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
          Precisando de assistência jurídica?
        </h2>
        
        <p className="text-xl text-secondary mb-10 max-w-3xl mx-auto">
          Agende uma consulta com nossos especialistas e encontre a solução legal para o seu caso.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contato">
            <Button variant="primary" size="lg">
              Agendar Consulta
            </Button>
          </Link>
          
          <a href="https://api.whatsapp.com/send?phone=27997133991">
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
              (27) 99713-3991
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;