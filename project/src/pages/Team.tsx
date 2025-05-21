import React from 'react';
import Layout from '../components/layout/Layout';
import SectionTitle from '../components/ui/SectionTitle';
import { MapPin, Mail, Linkedin } from 'lucide-react';

interface TeamMemberProps {
  id: string;
  name: string;
  role: string;
  image: string;
  education: string[];
  specializations: string[];
  languages: string[];
  email: string;
  linkedin?: string;
  featured?: boolean;
}

const TeamMember: React.FC<TeamMemberProps> = ({ 
  id, 
  name, 
  role, 
  image, 
  education, 
  specializations, 
  languages, 
  email, 
  linkedin,
  featured = false
}) => {
  return (
    <div id={id} className={`bg-white rounded-lg shadow-md overflow-hidden ${featured ? 'border-2 border-accent' : ''}`}>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="aspect-w-4 aspect-h-5 md:col-span-1">
          <img 
            src={image} 
            alt={name} 
            className="object-cover w-full h-full"
          />
        </div>
        
        <div className="p-6 md:col-span-2">
          {featured && (
            <span className="inline-block bg-accent text-white text-xs px-3 py-1 rounded-full mb-4">
              Sócio Fundador
            </span>
          )}
          
          <h2 className="text-2xl font-serif font-bold text-primary mb-2">
            {name}
          </h2>
          
          <p className="text-lg text-gray-700 mb-4">{role}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-base font-medium text-primary mb-2">Formação Acadêmica</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                {education.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="h-2 w-2 bg-accent rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-base font-medium text-primary mb-2">Especializações</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                {specializations.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="h-2 w-2 bg-accent rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-base font-medium text-primary mb-2">Idiomas</h3>
            <div className="flex flex-wrap gap-2">
              {languages.map((language, index) => (
                <span 
                  key={index} 
                  className="inline-block bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
                >
                  {language}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href={`mailto:${email}`} 
              className="flex items-center text-sm text-gray-700 hover:text-accent transition-colors"
            >
              <Mail size={16} className="mr-1" />
              <span>{email}</span>
            </a>
            
            {linkedin && (
              <a 
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-gray-700 hover:text-accent transition-colors"
              >
                <Linkedin size={16} className="mr-1" />
                <span>LinkedIn</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Team: React.FC = () => {
  const teamMembers: TeamMemberProps[] = [
    {
      id: "Honorato",
      name: "Pâmela Honorato",
      role: "Sócia Fundadora | Direito Empresarial e Civil",
      image: "https://iili.io/3QqCFON.md.jpg",
      education: [
        "Bacharel em Direito pelo UNESC "
      
      ],
      specializations: [
        "Contratos Empresariais",
        "Fusões e Aquisições",
        "Direito Societário",
        "Planejamento Patrimonial",
        "Resolução de Conflitos"
      ],
      languages: ["Português", "Inglês"],
      email: "moschenhonoratoadv@gmail.com",
      linkedin: "https://www.linkedin.com/",
      featured: true
    },
    {
      id: "Moschen",
      name: "André Moschen",
      role: "Sócio Fundador | Direito de Família e Sucessões",
      image: "https://i.postimg.cc/QdsKqVs7/andre-preto2.jpg",
      education: [
        "Bacharel em Direito pelo UNESC "
      ],
      specializations: [
        "Divórcios Complexos",
        "Inventários",
        "Planejamento Sucessório",
        "Guarda e Alimentos",
        "Mediação Familiar"
      ],
      languages: ["Português", "Inglês"],
      email: "moschenhonoratoadv@gmail.com",
      linkedin: "https://www.linkedin.com/",
      featured: true
    },
  ];

  return (
    <Layout>
      <div className="bg-primary pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Nossa Equipe" 
            subtitle="Conheça nossos advogados especializados"
            light
            center
          />
        </div>
      </div>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            {teamMembers.map((member) => (
              <a 
                key={member.id}
                href={`#${member.id}`}
                className="bg-white p-6 rounded-lg shadow-md transition-all hover:shadow-lg text-center"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-medium text-primary mb-1">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
              </a>
            ))}
          </div>
          
          <div className="space-y-8">
            {teamMembers.map((member) => (
              <TeamMember 
                key={member.id}
                id={member.id}
                name={member.name}
                role={member.role}
                image={member.image}
                education={member.education}
                specializations={member.specializations}
                languages={member.languages}
                email={member.email}
                linkedin={member.linkedin}
                featured={member.featured}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Team;