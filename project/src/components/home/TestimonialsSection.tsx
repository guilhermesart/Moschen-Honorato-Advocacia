import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, role }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <Quote className="text-accent mb-4" size={32} />
      <p className="text-gray-600 mb-6 italic">{quote}</p>
      <div>
        <h4 className="font-medium text-primary">{author}</h4>
        <p className="text-gray-500 text-sm">{role}</p>
      </div>
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  return (
<section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="Depoimentos" 
          subtitle="O que nossos clientes dizem sobre nosso trabalho"
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Testimonial
            quote="O escritório Mosch & Honorato foi fundamental na resolução do meu caso. Profissionais extremamente competentes e atenciosos, sempre disponíveis para esclarecer minhas dúvidas."
            author="Maria Silva"
            role="Cliente desde 2018"
          />
          
          <Testimonial
            quote="Recomendo o trabalho da equipe para qualquer questão jurídica. O atendimento personalizado e o comprometimento com o cliente fazem toda a diferença."
            author="João Pereira"
            role="Empresário"
          />
          
          <Testimonial
            quote="Após anos de luta, consegui minha aposentadoria graças ao excelente trabalho da Dra. Helena. Profissionalismo e dedicação exemplares."
            author="Antônio Oliveira"
            role="Aposentado"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 