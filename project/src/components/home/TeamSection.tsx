import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';

interface TeamMemberProps {
  image: string;
  name: string;
  role: string;
  link: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ image, name, role, link }) => {
  return (
    <Link to={link} className="group">
      <div className="relative overflow-hidden rounded-lg shadow-md">
        <div className="aspect-w-3 aspect-h-4">
          <img 
            src={image} 
            alt={name} 
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 to-transparent p-6">
          <h3 className="text-xl font-medium text-white">{name}</h3>
          <p className="text-gray-200">{role}</p>
        </div>
      </div>
    </Link>
  );
};

const TeamSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="Nossa Equipe" 
          subtitle="Conheça os profissionais dedicados a defender seus interesses"
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <TeamMember
            image="https://iili.io/3srTBVa.md.jpg"
            name="Pâmela Honorato"
            role="Sócia Fundadora"
            link="/equipe/Honorato"
          />
          
          <TeamMember
            image="https://i.postimg.cc/QtVXbZH1/andre-preto.jpg"
            name="André Moschen"
            role="Sócio Fundador"
            link="/equipe/Moschen"
          />


        </div>
        
        <div className="text-center mt-12">
          <Link to="/equipe">
            <Button variant="primary">
              Conheça toda a equipe
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;