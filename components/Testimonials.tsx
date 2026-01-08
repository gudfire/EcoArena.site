import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="relative py-32 transition-gradient-white-soft overflow-hidden scroll-mt-20 border-y border-[#2E7D32]/5">
      {/* Abstract Nature Shape */}
      <div className="absolute -left-10 top-0 opacity-[0.04] pointer-events-none rotate-45">
        <svg width="400" height="400" viewBox="0 0 200 200" fill="#2E7D32">
          <path d="M100,20 C140,20 180,60 180,100 C180,140 140,180 100,180 C60,180 20,140 20,100 C20,60 60,20 100,20 Z" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-xl">
            <div className="text-[#2E7D32] font-black text-[10px] uppercase tracking-[0.2em] mb-4">Comunidade Eco Arena</div>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-6 text-zinc-900">
              O que dizem os <span className="text-[#2E7D32] italic">nossos alunos</span>
            </h2>
            <p className="text-zinc-600 font-medium">
              Não somos apenas uma academia, somos uma comunidade unida por resultados, saúde e bem-estar.
            </p>
          </div>
          <div className="flex gap-2">
            <div className="w-16 h-2 bg-[#2E7D32]/20 rounded-full" />
            <div className="w-8 h-2 bg-[#2E7D32]/10 rounded-full" />
            <div className="w-4 h-2 bg-[#2E7D32]/5 rounded-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="p-12 rounded-[3rem] glass-section-green border border-[rgba(46,125,50,0.08)] shadow-sm relative hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
              <Quote className="absolute top-10 right-10 w-16 h-16 text-[#2E7D32] opacity-10" />
              <div className="flex items-center gap-5 mb-8 relative z-10">
                <div className="p-1 rounded-full bg-white/40 border border-[#2E7D32]/10">
                  <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-full shadow-md object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-zinc-900">{t.name}</h4>
                  <p className="text-[10px] text-[#2E7D32] uppercase font-black tracking-widest">{t.role}</p>
                </div>
              </div>
              <p className="text-zinc-700 italic leading-relaxed font-medium text-lg">
                "{t.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;