
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-[#FAFAFA]">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=2000" 
          alt="Academia Moderna" 
          className="w-full h-full object-cover opacity-15"
        />
        {/* Organic overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAFAFA] via-[#FAFAFA]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAFAFA]/95 via-[#F1F8F1]/20 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-[#2E7D32]/10 border border-[#2E7D32]/20 px-4 py-2 rounded-full mb-8">
            <div className="w-2 h-2 rounded-full bg-[#2E7D32] animate-pulse" />
            <span className="text-[#2E7D32] text-xs font-black uppercase tracking-widest">Treino Intenso & Natureza</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold leading-[1.1] mb-8 text-zinc-900">
            Sua <span className="text-[#2E7D32] italic">Evolução</span> não pode <span className="block underline decoration-[#2E7D32] underline-offset-8">Esperar.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-600 mb-12 max-w-xl leading-relaxed font-medium">
            Performance, intensidade e recuperação em um só lugar. Descubra a experiência Eco Arena Fitness e transforme seus resultados em um ambiente pensado para o seu bem-estar.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5">
            <a 
              href={WHATSAPP_LINK} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#2E7D32] text-white px-10 py-5 rounded-2xl font-extrabold text-lg flex items-center justify-center gap-2 hover:scale-105 transition-transform group shadow-xl shadow-green-900/20"
            >
              Quero treinar na Eco Arena
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#modalidades" 
              className="bg-white/80 backdrop-blur-sm border border-[#2E7D32]/20 px-10 py-5 rounded-2xl font-bold text-lg text-[#2E7D32] hover:bg-white transition-all flex items-center justify-center shadow-sm"
            >
              Explorar Modalidades
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
