
import React from 'react';
import { Check, Star } from 'lucide-react';
import { PLANS, WHATSAPP_LINK } from '../constants';

const Plans: React.FC = () => {
  return (
    <section id="planos" className="py-32 bg-[#F5F5F5] scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="text-[#2E7D32] font-black text-[10px] uppercase tracking-[0.2em] mb-4">Invista em Você</div>
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-6 text-zinc-900">
            Planos sob <span className="text-[#2E7D32]">medida</span>
          </h2>
          <p className="text-zinc-500 font-medium text-lg">
            Escolha o plano que melhor se adapta ao seu objetivo. Sem burocracia, foco total na sua evolução.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-stretch">
          {PLANS.map((plan) => (
            <div 
              key={plan.id} 
              className={`relative p-12 rounded-[3rem] flex flex-col h-full transition-all duration-500 hover:-translate-y-2 border ${plan.highlight ? 'border-[#2E7D32]/30 bg-white shadow-2xl scale-105 z-10' : 'border-zinc-200 bg-white/60 shadow-sm'}`}
            >
              {plan.highlight && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#FF8F00] text-white px-6 py-2 rounded-full text-[10px] font-black uppercase flex items-center gap-2 shadow-xl shadow-orange-900/20">
                  <Star className="w-4 h-4 fill-white" /> Mais Escolhido
                </div>
              )}
              
              <h3 className="text-3xl font-black font-heading mb-8 text-zinc-900">{plan.name}</h3>
              
              <ul className="space-y-5 mb-12 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-4 text-zinc-600 font-semibold leading-relaxed">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${plan.highlight ? 'bg-[#2E7D32]/10 text-[#2E7D32]' : 'bg-zinc-200 text-zinc-500'}`}>
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm md:text-base">{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-6 rounded-2xl font-black text-center text-lg transition-all shadow-lg ${plan.highlight ? 'bg-[#2E7D32] text-white hover:bg-[#1B5E20] shadow-green-900/20' : 'bg-white text-[#2E7D32] border border-[#2E7D32]/20 hover:bg-[#F1F8F1]'}`}
              >
                Consultar valores
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
