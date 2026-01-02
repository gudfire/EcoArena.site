
import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, MessageCircle } from 'lucide-react';
import { INSTAGRAM_LINK, WHATSAPP_LINK } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple scroll spy logic
      const sections = ['inicio', 'diferenciais', 'modalidades', 'planos', 'depoimentos', 'contato'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Início', href: '#inicio', id: 'inicio' },
    { name: 'Diferenciais', href: '#diferenciais', id: 'diferenciais' },
    { name: 'Modalidades', href: '#modalidades', id: 'modalidades' },
    { name: 'Planos', href: '#planos', id: 'planos' },
    { name: 'Depoimentos', href: '#depoimentos', id: 'depoimentos' },
    { name: 'Contato', href: '#contato', id: 'contato' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md py-3 shadow-md border-b border-zinc-100' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo - Canto superior esquerdo */}
        <a href="#inicio" className="flex items-center group">
          <img 
            src="input_file_0.png" 
            alt="EcoArena Fitness - Academia e Saúde" 
            className="h-10 md:h-14 w-auto transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        {/* Desktop Nav - Exibição horizontal a partir de lg (1024px) */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {menuItems.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-sm font-bold transition-all whitespace-nowrap relative ${
                activeSection === link.id ? 'text-[#2E7D32]' : 'text-zinc-600 hover:text-[#2E7D32]'
              }`}
            >
              {link.name}
              {activeSection === link.id && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#2E7D32] rounded-full animate-in fade-in slide-in-from-left-1 duration-300" />
              )}
            </a>
          ))}
          
          <div className="flex items-center gap-4 ml-4">
            <div className="flex items-center gap-3 mr-2">
              <a 
                href={INSTAGRAM_LINK} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-zinc-400 hover:text-[#2E7D32] transition-colors"
                title="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href={WHATSAPP_LINK} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-zinc-400 hover:text-[#25D366] transition-colors"
                title="Fale conosco no WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
            <a 
              href={WHATSAPP_LINK} 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2E7D32] text-white px-7 py-3 rounded-full font-bold text-sm hover:bg-[#1B5E20] hover:scale-105 active:scale-95 transition-all shadow-lg shadow-green-900/30 whitespace-nowrap flex items-center gap-2 border border-green-800/20"
            >
              <MessageCircle className="w-4 h-4 fill-white/10" />
              Matricule-se
            </a>
          </div>
        </nav>

        {/* Mobile Toggle - Visível apenas abaixo de lg */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="lg:hidden text-zinc-800 p-2 hover:bg-zinc-100 rounded-lg transition-colors"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-zinc-100 absolute top-full left-0 w-full p-6 shadow-2xl animate-in slide-in-from-top duration-300 max-h-[90vh] overflow-y-auto">
          <div className="flex flex-col gap-5">
            {menuItems.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMenuOpen(false)}
                className={`text-lg font-bold transition-colors border-b border-zinc-50 pb-3 ${
                  activeSection === link.id ? 'text-[#2E7D32]' : 'text-zinc-800 hover:text-[#2E7D32]'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center gap-6 py-2">
               <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-lg font-bold text-zinc-500 hover:text-[#2E7D32]">
                 <Instagram className="w-6 h-6" /> Instagram
               </a>
               <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-lg font-bold text-zinc-500 hover:text-[#25D366]">
                 <MessageCircle className="w-6 h-6" /> WhatsApp
               </a>
            </div>
            <a 
              href={WHATSAPP_LINK} 
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="bg-[#2E7D32] text-white text-center py-5 rounded-2xl font-bold text-lg shadow-xl shadow-green-900/20 hover:bg-[#1B5E20] active:scale-95 transition-all flex items-center justify-center gap-3"
            >
              <MessageCircle className="w-6 h-6 fill-white/10" />
              Matricule-se Agora
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
