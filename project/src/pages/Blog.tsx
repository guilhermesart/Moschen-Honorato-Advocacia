import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import SectionTitle from '../components/ui/SectionTitle';
import { Search, Calendar, User, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogPostProps {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ 
  id, 
  title, 
  excerpt, 
  image, 
  category, 
  date, 
  author, 
  readTime 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg">
      <div className="aspect-w-16 aspect-h-9 relative">
        <img 
          src={image} 
          alt={title} 
          className="object-cover w-full h-full"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-accent text-white text-xs px-3 py-1 rounded-full">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <div className="flex items-center mr-4">
            <Calendar size={14} className="mr-1" />
            <span>{date}</span>
          </div>
          <div className="flex items-center mr-4">
            <User size={14} className="mr-1" />
            <span>{author}</span>
          </div>
          <div className="flex items-center">
            <Clock size={14} className="mr-1" />
            <span>{readTime}</span>
          </div>
        </div>
        
        <h3 className="text-xl font-medium text-primary mb-3 hover:text-accent transition-colors">
          <Link to={`/blog/${id}`}>{title}</Link>
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {excerpt}
        </p>
        
        <Link 
          to={`/blog/${id}`}
          className="text-accent font-medium hover:underline"
        >
          Ler mais →
        </Link>
      </div>
    </div>
  );
};

const Blog: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  
  const categories = [
    "Todos", 
    "Direito Civil", 
    "Direito Trabalhista", 
    "Direito Penal", 
    "Direito Empresarial",
    "Direito de Família",
    "Direito Previdenciário"
  ];
  
  const blogPosts: BlogPostProps[] = [
    {
      id: "mudancas-leis-trabalhistas-2025",
      title: "Mudanças nas leis trabalhistas: o que esperar em 2025",
      excerpt: "Uma análise das principais alterações previstas na legislação trabalhista para o próximo ano e como elas podem afetar empresas e trabalhadores. Entenda os impactos e prepare-se para as novas regras.",
      image: "https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Direito Trabalhista",
      date: "15/06/2025",
      author: "Dr. Carlos Mosch",
      readTime: "6 min de leitura"
    },
    {
      id: "guarda-compartilhada-direitos-responsabilidades",
      title: "Guarda compartilhada: direitos e responsabilidades",
      excerpt: "Entenda como funciona o regime de guarda compartilhada, seus benefícios para os filhos e quais são os direitos e deveres dos pais nessa modalidade. Saiba como garantir o melhor interesse da criança.",
      image: "https://images.pexels.com/photos/5668838/pexels-photo-5668838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Direito de Família",
      date: "08/06/2025",
      author: "Dra. Helena Honorato",
      readTime: "5 min de leitura"
    },
    {
      id: "compliance-empresarial-2025",
      title: "Compliance empresarial: por que investir em 2025",
      excerpt: "Descubra como implementar um programa de compliance eficiente pode proteger sua empresa de riscos legais e contribuir para uma cultura ética corporativa. Conheça as melhores práticas e benefícios.",
      image: "https://images.pexels.com/photos/5668732/pexels-photo-5668732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Direito Empresarial",
      date: "01/06/2025",
      author: "Dr. Ricardo Souza",
      readTime: "7 min de leitura"
    },
    {
      id: "principais-mudancas-reforma-tributaria",
      title: "As principais mudanças da reforma tributária",
      excerpt: "Uma análise detalhada sobre as alterações trazidas pela reforma tributária e como elas impactam pessoas físicas e jurídicas. Preparamos um guia completo para você entender as novas regras.",
      image: "https://images.pexels.com/photos/6693661/pexels-photo-6693661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Direito Empresarial",
      date: "25/05/2025",
      author: "Dr. Carlos Mosch",
      readTime: "8 min de leitura"
    },
    {
      id: "aposentadoria-especial-direito-requisitos",
      title: "Aposentadoria especial: quem tem direito e quais os requisitos",
      excerpt: "Saiba quem pode se beneficiar da aposentadoria especial, entenda os requisitos necessários e como comprovar o tempo de serviço em condições prejudiciais à saúde ou integridade física.",
      image: "https://images.pexels.com/photos/7176030/pexels-photo-7176030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Direito Previdenciário",
      date: "18/05/2025",
      author: "Dra. Ana Santos",
      readTime: "6 min de leitura"
    },
    {
      id: "contratos-digitais-validade-juridica",
      title: "Contratos digitais e sua validade jurídica",
      excerpt: "Entenda como funcionam os contratos assinados digitalmente, sua validade legal e os cuidados necessários para garantir a segurança jurídica nas transações eletrônicas no ambiente digital.",
      image: "https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Direito Civil",
      date: "10/05/2025",
      author: "Dr. Ricardo Souza",
      readTime: "5 min de leitura"
    },
    {
      id: "crimes-digitais-protecao-legal",
      title: "Crimes digitais: como se proteger e buscar reparação",
      excerpt: "Um guia completo sobre os principais crimes cometidos na internet, como se prevenir e quais medidas legais tomar caso você seja vítima. Conheça seus direitos e saiba como agir.",
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Direito Penal",
      date: "03/05/2025",
      author: "Dr. Marcos Oliveira",
      readTime: "7 min de leitura"
    },
    {
      id: "assedio-moral-ambiente-trabalho",
      title: "Assédio moral no ambiente de trabalho: como identificar e reagir",
      excerpt: "Aprenda a reconhecer situações de assédio moral no trabalho, conheça seus direitos e saiba como agir para proteger sua saúde mental e buscar reparação pelos danos sofridos.",
      image: "https://images.pexels.com/photos/3760810/pexels-photo-3760810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Direito Trabalhista",
      date: "28/04/2025",
      author: "Dra. Juliana Lima",
      readTime: "6 min de leitura"
    },
    {
      id: "planejamento-sucessorio-importancia",
      title: "A importância do planejamento sucessório para evitar conflitos familiares",
      excerpt: "Entenda por que planejar a sucessão patrimonial ainda em vida pode evitar disputas entre herdeiros e garantir que seus bens sejam distribuídos conforme sua vontade.",
      image: "https://images.pexels.com/photos/7841968/pexels-photo-7841968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Direito de Família",
      date: "20/04/2025",
      author: "Dra. Helena Honorato",
      readTime: "5 min de leitura"
    }
  ];
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesQuery = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === "Todos" || post.category === selectedCategory;
    
    return matchesQuery && matchesCategory;
  });

  return (
    <Layout>
      <div className="bg-primary pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Blog" 
            subtitle="Notícias, artigos e atualizações sobre o mundo jurídico"
            light
            center
          />
        </div>
      </div>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          {/* Search and Filter */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Pesquisar artigos..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                </div>
              </div>
              
              <div className="md:col-span-1">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          
          {/* Blog Posts */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <BlogPost 
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  excerpt={post.excerpt}
                  image={post.image}
                  category={post.category}
                  date={post.date}
                  author={post.author}
                  readTime={post.readTime}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-700 mb-2">Nenhum artigo encontrado</h3>
              <p className="text-gray-500">Tente ajustar os filtros ou termos de pesquisa.</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;