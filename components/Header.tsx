
import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, MessageCircle } from 'lucide-react';
import { INSTAGRAM_LINK, WHATSAPP_LINK } from '../constants';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['inicio', 'diferenciais', 'modalidades', 'sobre', 'depoimentos', 'planos', 'leads'];
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
    { name: 'Sobre Nós', href: '#sobre', id: 'sobre' },
    { name: 'Depoimentos', href: '#depoimentos', id: 'depoimentos' },
    { name: 'Planos', href: '#planos', id: 'planos' },
    { name: 'Matrícula', href: '#leads', id: 'leads' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 animate-in fade-in slide-in-from-top-4 ${
        isScrolled 
        ? 'bg-white/90 backdrop-blur-lg py-3 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] border-b border-green-800/5' 
        : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a 
          href="#inicio" 
          onClick={(e) => handleScrollTo(e, 'inicio')}
          className="flex items-center group relative z-10 transition-transform hover:scale-105 active:scale-95"
        >
          <Logo />
        </a>

        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-zinc-900/5 p-1.5 rounded-full border border-zinc-900/5 backdrop-blur-sm">
          {menuItems.map((link, index) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.id)}
              style={{ animationDelay: `${index * 100}ms` }}
              className={`px-4 py-2.5 rounded-full text-xs xl:text-sm font-bold transition-all duration-300 relative group animate-in fade-in slide-in-from-top-2 fill-mode-both ${
                activeSection === link.id 
                ? 'text-white bg-[#2E7D32] shadow-lg shadow-green-900/20' 
                : 'text-zinc-600 hover:text-[#2E7D32] hover:bg-white/80'
              }`}
            >
              <span className="relative z-10">{link.name}</span>
              {activeSection !== link.id && (
                <span className="absolute inset-0 bg-white rounded-full scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 -z-0 shadow-sm" />
              )}
            </a>
          ))}
          
          <div className="flex items-center gap-3 ml-4 pl-4 border-l border-zinc-200">
            <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="p-2 text-zinc-400 hover:text-[#2E7D32] hover:bg-white rounded-full transition-all duration-300 hover:rotate-12"><Instagram className="w-5 h-5" /></a>
            <a 
              href={WHATSAPP_LINK} 
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-[#2E7D32] text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(46,125,50,0.4)] active:scale-95 flex items-center gap-2 border border-green-700/20"
            >
              <div className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-[-25deg] -translate-x-full group-hover:animate-[shine_0.75s_ease-in-out]" />
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span className="relative z-10">WhatsApp</span>
            </a>
          </div>
        </nav>

        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="lg:hidden relative z-50 text-zinc-800 p-2.5 hover:bg-zinc-100 rounded-xl transition-all active:scale-90"
          aria-label="Menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <div 
        className={`lg:hidden fixed inset-0 bg-white/95 backdrop-blur-xl z-40 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="container mx-auto px-6 pt-24 pb-12 h-full flex flex-col justify-between overflow-y-auto">
          <div className="flex flex-col gap-2">
            {menuItems.map((link, index) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleScrollTo(e, link.id)}
                className={`text-2xl font-heading font-black transition-all py-3 border-b border-zinc-100 ${
                  activeSection === link.id 
                  ? 'text-[#2E7D32]' 
                  : 'text-zinc-400 hover:text-zinc-800'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <div className="space-y-4 mt-8">
            <a 
              href={WHATSAPP_LINK} 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2E7D32] text-white text-center py-5 rounded-2xl font-black text-lg shadow-xl shadow-green-900/10 hover:bg-[#1B5E20] transition-all flex items-center justify-center gap-3 active:scale-95"
            >
              <MessageCircle className="w-6 h-6" />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
