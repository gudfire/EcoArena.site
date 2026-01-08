
import React, { useState, useEffect } from 'react';
import { ChevronRight, MousePointer2 } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="inicio" className="relative min-h-[95vh] flex items-center overflow-hidden pt-20 bg-zinc-50">
      {/* Background com Parallax */}
      <div className="absolute inset-0 z-0 opacity-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-transparent z-10" />
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=2000" 
          alt="Eco Arena Fitness Background" 
          className="absolute -top-[10%] left-0 w-full h-[120%] object-cover grayscale transition-transform duration-75 ease-out will-change-transform"
          style={{ 
            transform: `translateY(${scrollY * 0.4}px)` 
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#2E7D32]/10 text-[#2E7D32] text-[10px] font-black uppercase tracking-[0.3em] rounded-full mb-8 animate-in fade-in slide-in-from-left-4 duration-700">
            Performance & Natureza
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-[115px] font-heading font-extrabold leading-[0.82] mb-12 text-zinc-900 tracking-tighter animate-in fade-in slide-in-from-bottom-6 duration-1000">
            Evolua sua <br />
            <span className="text-[#2E7D32] relative">
              performance.
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#2E7D32]/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" />
              </svg>
            </span>
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
            <a 
              href={WHATSAPP_LINK} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative bg-[#2E7D32] text-white px-10 py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-2 hover:bg-[#1B5E20] hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-green-900/10 overflow-hidden"
            >
              <div className="absolute inset-0 w-1/2 h-full bg-white/10 skew-x-[-25deg] -translate-x-full group-hover:animate-[shine_0.75s_ease-in-out]" />
              <span className="relative z-10">Matricule-se agora</span>
              <ChevronRight className="w-5 h-5 relative z-10" />
            </a>
            <button 
              onClick={() => handleScrollTo('modalidades')}
              className="bg-white/50 backdrop-blur-md border border-zinc-200 px-10 py-5 rounded-2xl font-bold text-lg text-zinc-700 hover:bg-white hover:border-[#2E7D32]/30 transition-all shadow-sm"
            >
              Ver modalidades
            </button>
          </div>
        </div>
      </div>

      {/* Explore Indicator */}
      <div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-400 animate-bounce cursor-pointer opacity-30 hover:opacity-100 transition-opacity z-20" 
        onClick={() => handleScrollTo('diferenciais')}
      >
        <span className="text-[10px] font-black uppercase tracking-[0.2em] mb-2">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-zinc-400 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
