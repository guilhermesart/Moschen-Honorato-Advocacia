import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../ui/SectionTitle';
import { Clock } from 'lucide-react';

interface BlogPostProps {
  image: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  link: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ 
  image, 
  title, 
  excerpt, 
  date, 
  author, 
  category, 
  link 
}) => {
  return (
    <Link to={link} className="group">
      <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl">
        <div className="aspect-w-16 aspect-h-9 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
              {category}
            </span>
            <div className="flex items-center text-gray-500 text-sm">
              <Clock size={14} className="mr-1" />
              <span>{date}</span>
            </div>
          </div>
          
          <h3 className="text-xl font-medium mb-3 text-primary group-hover:text-accent transition-colors">
            {title}
          </h3>
          
          <p className="text-gray-600 mb-4 line-clamp-3">
            {excerpt}
          </p>
          
          <p className="text-sm text-gray-500">
            Por: {author}
          </p>
        </div>
      </div>
    </Link>
  );
};

const BlogSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="Blog" 
          subtitle="Notícias, artigos e atualizações sobre o mundo jurídico"
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BlogPost
            image="https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            title="Mudanças nas leis trabalhistas: o que esperar em 2025"
            excerpt="Uma análise das principais alterações previstas na legislação trabalhista para o próximo ano e como elas podem afetar empresas e trabalhadores."
            date="15/06/2025"
            author="Dr. Carlos Mosch"
            category="Direito Trabalhista"
            link="/blog/mudancas-leis-trabalhistas-2025"
          />
          
          <BlogPost
            image="https://images.pexels.com/photos/5668838/pexels-photo-5668838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            title="Guarda compartilhada: direitos e responsabilidades"
            excerpt="Entenda como funciona o regime de guarda compartilhada, seus benefícios para os filhos e quais são os direitos e deveres dos pais nessa modalidade."
            date="08/06/2025"
            author="Dra. Helena Honorato"
            category="Direito de Família"
            link="/blog/guarda-compartilhada-direitos-responsabilidades"
          />
          
          <BlogPost
            image="https://images.pexels.com/photos/5668732/pexels-photo-5668732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            title="Compliance empresarial: por que investir em 2025"
            excerpt="Descubra como implementar um programa de compliance eficiente pode proteger sua empresa de riscos legais e contribuir para uma cultura ética corporativa."
            date="01/06/2025"
            author="Dr. Ricardo Souza"
            category="Direito Empresarial"
            link="/blog/compliance-empresarial-2025"
          />
        </div>
        
        <div className="text-center mt-12">
          <Link to="/blog" className="inline-block text-accent font-medium hover:underline">
            Ver todos os artigos →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;