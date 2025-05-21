import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Moschen & Honorato</h3>
            <p className="text-gray-300 mb-4">
              Compromisso com a Justiça, Excelência na Defesa dos seus Direitos.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://www.instagram.com/moschenhonoratoadv?igsh=dHkzOThuaGx0OTdh" className="text-white hover:text-accent transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-accent transition-colors">Início</Link>
              </li>
              <li>
                <Link to="/quem-somos" className="text-gray-300 hover:text-accent transition-colors">Quem Somos</Link>
              </li>
              <li>
                <Link to="/areas-de-atuacao" className="text-gray-300 hover:text-accent transition-colors">Áreas de Atuação</Link>
              </li>
              <li>
                <Link to="/equipe" className="text-gray-300 hover:text-accent transition-colors">Equipe</Link>
              </li>
              {/*<li>
                <Link to="/blog" className="text-gray-300 hover:text-accent transition-colors">Blog</Link>
              </li>*/}
              <li>
                <Link to="/contato" className="text-gray-300 hover:text-accent transition-colors">Contato</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex">
                <Phone size={18} className="mr-2 flex-shrink-0 text-accent" />
                <span className="text-gray-300">(27) 99713-3991</span>
              </li>
              <li className="flex">
                <Mail size={18} className="mr-2 flex-shrink-0 text-accent" />
                <span className="text-gray-300">moschenhonoratoadv@gmail.com</span>
              </li>
              {/* <li className="flex">
                <MapPin size={18} className="mr-2 flex-shrink-0 text-accent" />
                <span className="text-gray-300">SEU ENDEREÇO</span>
              </li>*/}
              <li className="flex">
                <Clock size={18} className="mr-2 flex-shrink-0 text-accent" />
                <span className="text-gray-300">9h as 17h</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter 
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Boletim Informativo</h3>
            <p className="text-gray-300 mb-4">
              Receba atualizações sobre legislação e artigos jurídicos.
            </p>
            <form className="mt-4">
              <div className="flex flex-col space-y-2">
                <input 
                  type="email" 
                  placeholder="Seu e-mail" 
                  className="px-4 py-2 rounded text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <button 
                  type="submit"
                  className="px-4 py-2 bg-accent text-white rounded hover:bg-accent/90 transition-colors"
                >
                  Inscrever-se
                </button>
              </div>
            </form>
          </div>*/}
        </div>
        
            
        {/* Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-300">
          <p>© {currentYear} Moschen & Honorato Advocacia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;