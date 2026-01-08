
import React from 'react';
import { Star, Target, Users, ChevronDown } from 'lucide-react';

const Differentials: React.FC = () => {
  return (
    <section id="diferenciais" className="relative pt-16 lg:pt-24 pb-0 scroll-mt-20 overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Manifesto & Guia */}
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="bg-white/40 backdrop-blur-md border border-[#2E7D32]/10 rounded-[3rem] p-8 md:p-16 relative overflow-hidden group shadow-sm">
            {/* Elemento Decorativo */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#2E7D32]/5 rounded-full blur-3xl -mr-32 -mt-32 transition-transform group-hover:scale-110 duration-1000" />
            
            <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-2/3">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#2E7D32]/10 text-[#2E7D32] text-[10px] font-black uppercase tracking-[0.2em] rounded-full mb-6">
                  Nosso Propósito
                </div>
                <h2 className="text-3xl md:text-5xl font-heading font-black text-zinc-900 leading-tight mb-6">
                  O objetivo é fazer você <span className="text-[#2E7D32] italic text-shadow-sm">se sentir bem.</span>
                </h2>
                <p className="text-zinc-600 text-lg leading-relaxed font-medium mb-8">
                  Aprenda com os melhores professores em treinamentos personalizados, com aulas desenvolvidas sob medida para suas necessidades e objetivos. Tudo planejado para que você obtenha o <span className="text-zinc-900 font-bold"> máximo de rendimento.</span>
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-zinc-500 text-sm font-bold">
                    <Users className="w-4 h-4 text-[#2E7D32]" /> Melhores Professores
                  </div>
                  <div className="flex items-center gap-2 text-zinc-500 text-sm font-bold">
                    <Target className="w-4 h-4 text-[#2E7D32]" /> Aulas Direcionadas
                  </div>
                </div>
              </div>

              <div className="md:w-1/3 flex flex-col items-center justify-center p-8 bg-[#2E7D32] rounded-[2.5rem] shadow-xl shadow-green-900/20 text-center transform hover:rotate-2 transition-transform duration-500">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <Star className="text-white w-6 h-6 fill-white" />
                </div>
                <p className="text-white/80 text-xs font-black uppercase tracking-widest mb-2">Acreditamos que</p>
                <h3 className="text-white text-2xl font-heading font-black leading-tight italic">
                  Você é seu melhor Investimento.
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Ponte de Transição Narrativa */}
        <div className="mt-16 text-center relative z-10">
          <p className="text-[#2E7D32] font-black text-[10px] uppercase tracking-[0.4em] mb-4 opacity-60">Pronto para começar?</p>
          <h3 className="text-2xl md:text-3xl font-heading font-extrabold text-zinc-800">
            Descubra o seu <span className="text-[#2E7D32] italic">caminho de evolução</span>
          </h3>
          <div className="mt-6 flex flex-col items-center">
             <div className="w-px h-16 bg-gradient-to-b from-[#2E7D32]/30 to-transparent" />
             <ChevronDown className="w-5 h-5 text-[#2E7D32]/40 animate-bounce -mt-1" />
          </div>
        </div>
      </div>

      {/* Background Connector Shape */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#F1F8F1] to-transparent pointer-events-none" />
    </section>
  );
};

export default Differentials;
