import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <NavLink to="/" className="flex items-center">
            <span className={`text-2xl font-serif font-bold ${isScrolled ? 'text-primary' : 'text-white'}`}>
              Moschen & Honorato
            </span>
            <span className={`ml-2 text-xs uppercase tracking-wider font-medium ${isScrolled ? 'text-gray-600' : 'text-gray-200'}`}>
              Advocacia
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `font-medium transition-colors ${isScrolled 
                  ? (isActive ? 'text-accent' : 'text-gray-700 hover:text-primary') 
                  : (isActive ? 'text-accent' : 'text-white hover:text-accent')}
              `}
            >
              Início
            </NavLink>
            <NavLink 
              to="/quem-somos" 
              className={({ isActive }) => 
                `font-medium transition-colors ${isScrolled 
                  ? (isActive ? 'text-accent' : 'text-gray-700 hover:text-primary') 
                  : (isActive ? 'text-accent' : 'text-white hover:text-accent')}
              `}
            >
              Quem Somos
            </NavLink>
            <NavLink 
              to="/areas-de-atuacao" 
              className={({ isActive }) => 
                `font-medium transition-colors ${isScrolled 
                  ? (isActive ? 'text-accent' : 'text-gray-700 hover:text-primary') 
                  : (isActive ? 'text-accent' : 'text-white hover:text-accent')}
              `}
            >
              Áreas de Atuação
            </NavLink>
            <NavLink 
              to="/equipe" 
              className={({ isActive }) => 
                `font-medium transition-colors ${isScrolled 
                  ? (isActive ? 'text-accent' : 'text-gray-700 hover:text-primary') 
                  : (isActive ? 'text-accent' : 'text-white hover:text-accent')}
              `}
            >
              Equipe
            </NavLink>
            <NavLink 
              to="/contato" 
              className={`px-4 py-2 rounded bg-accent text-white font-medium hover:bg-accent/90 transition-all`}
            >
              Contato
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu} 
            className={`md:hidden ${isScrolled ? 'text-primary' : 'text-white'}`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen py-4 opacity-100' : 'max-h-0 py-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col space-y-4">
            <NavLink 
              to="/" 
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) => `py-2 px-4 font-medium ${isActive ? 'text-accent' : 'text-gray-700 hover:text-primary'}`}
            >
              Início
            </NavLink>
            <NavLink 
              to="/quem-somos" 
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) => `py-2 px-4 font-medium ${isActive ? 'text-accent' : 'text-gray-700 hover:text-primary'}`}
            >
              Quem Somos
            </NavLink>
            <NavLink 
              to="/areas-de-atuacao" 
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) => `py-2 px-4 font-medium ${isActive ? 'text-accent' : 'text-gray-700 hover:text-primary'}`}
            >
              Áreas de Atuação
            </NavLink>
            <NavLink 
              to="/equipe" 
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) => `py-2 px-4 font-medium ${isActive ? 'text-accent' : 'text-gray-700 hover:text-primary'}`}
            >
              Equipe
            </NavLink>
            <NavLink 
              to="/blog" 
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) => `py-2 px-4 font-medium ${isActive ? 'text-accent' : 'text-gray-700 hover:text-primary'}`}
            >
              Blog
            </NavLink>
            <NavLink 
              to="/contato" 
              onClick={() => setIsMenuOpen(false)}
              className="py-2 px-4 font-medium bg-accent text-white rounded"
            >
              Contato
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;