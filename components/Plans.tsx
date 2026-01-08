
import React from 'react';
import { Star, CheckCircle2, Zap, ShieldCheck, Heart, Sparkles } from 'lucide-react';
import { PLANS, WHATSAPP_LINK } from '../constants';

const Plans: React.FC = () => {
  return (
    <section id="planos" className="relative py-32 scroll-mt-20 overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,0 C20,40 80,60 100,0" fill="none" stroke="#2E7D32" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <div className="inline-block px-5 py-2 bg-white/60 backdrop-blur-sm border border-green-800/10 text-[#2E7D32] text-xs font-black uppercase tracking-[0.2em] rounded-full mb-6">
            Assinaturas Eco Arena
          </div>
          <h2 className="text-5xl md:text-6xl font-heading font-extrabold mb-8 text-zinc-900 leading-tight">
            Escolha seu <span className="text-[#2E7D32]">nível de evolução</span>
          </h2>
          <p className="text-zinc-600 font-medium text-lg leading-relaxed">
            Planos transparentes e benefícios progressivos para garantir que você tenha exatamente o que precisa para atingir sua meta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch mb-24">
          {PLANS.map((plan) => (
            <div 
              key={plan.id} 
              className={`relative p-10 rounded-[3.5rem] flex flex-col h-full transition-all duration-500 hover:-translate-y-2 border-2 ${
                plan.highlight 
                ? 'border-[#2E7D32] bg-white/90 backdrop-blur-md shadow-2xl scale-105 z-10' 
                : 'glass-section-green border-[rgba(46,125,50,0.08)] shadow-sm'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF8F00] text-white px-6 py-2 rounded-full text-[10px] font-black uppercase flex items-center gap-2 shadow-xl shadow-orange-900/10 whitespace-nowrap border-2 border-white">
                  <Star className="w-3.5 h-3.5 fill-white" /> {plan.badge}
                </div>
              )}
              
              <div className="mb-8">
                <span className="text-[#2E7D32] text-[10px] font-black uppercase tracking-widest block mb-2">{plan.profile}</span>
                <h3 className="text-3xl font-black font-heading text-zinc-900">{plan.name}</h3>
              </div>
              
              <p className="text-zinc-500 text-sm font-medium leading-relaxed mb-10 italic">
                "{plan.description}"
              </p>

              <div className="flex-1 mb-10 space-y-5">
                {plan.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className={`mt-0.5 shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                      idx === plan.benefits.length - 1 && plan.id !== 'eco-basic'
                      ? 'bg-[#2E7D32] shadow-md shadow-green-900/10' 
                      : 'bg-white/40'
                    }`}>
                      <CheckCircle2 className={`w-4 h-4 ${
                        idx === plan.benefits.length - 1 && plan.id !== 'eco-basic'
                        ? 'text-white' 
                        : 'text-[#2E7D32]'
                      }`} />
                    </div>
                    <span className={`text-sm leading-tight font-bold ${
                      idx === plan.benefits.length - 1 && plan.id !== 'eco-basic'
                      ? 'text-zinc-900' 
                      : 'text-zinc-500'
                    }`}>
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mb-10 pt-8 border-t border-zinc-100/50">
                <p className="text-zinc-400 text-[10px] font-bold uppercase mb-2 tracking-widest">Investimento</p>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-zinc-900 text-base font-bold">R$</span>
                  <span className="text-4xl font-black text-zinc-900 tracking-tighter">{plan.price}</span>
                  <span className="text-zinc-400 text-xs font-bold">/mês</span>
                </div>
              </div>

              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-6 rounded-2xl font-black text-center text-base transition-all shadow-lg flex items-center justify-center gap-2 ${
                  plan.highlight 
                  ? 'bg-[#2E7D32] text-white hover:bg-[#1B5E20] shadow-green-900/30' 
                  : 'bg-white/40 text-[#2E7D32] hover:bg-[#2E7D32] hover:text-white border border-green-800/5'
                }`}
              >
                {plan.ctaText}
              </a>
            </div>
          ))}
        </div>

        {/* Highlighted Benefits Grid with Eco Feel */}
        <div className="bg-[#1B5E20] rounded-[4rem] p-12 md:p-20 mb-24 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#2E7D32] rounded-full blur-[100px] -mr-48 -mt-48 opacity-20" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#4CAF50] rounded-full blur-[100px] -ml-48 -mb-48 opacity-10" />
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-heading font-black text-center mb-16 text-white">
              Sinta a <span className="text-[#C8E6C9] italic">Experiência Eco</span> Arena
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                { icon: <Zap />, title: "Bio-Energia", desc: "Ambiente climatizado com renovação de ar constante." },
                { icon: <Sparkles />, title: "Área Zen Platinum", desc: "Cadeiras de massagem e relaxamento guiado." },
                { icon: <ShieldCheck />, title: "Elite Coaching", desc: "Professores especialistas em cada modalidade." },
                { icon: <Heart />, title: "Eco Consciência", desc: "Estrutura pensada para minimizar o impacto ambiental." }
              ].map((item, idx) => (
                <div key={idx} className="text-center group/item">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover/item:bg-[#C8E6C9] group-hover/item:text-[#1B5E20] transition-all text-white border border-white/5">
                    {/* Fix: Explicitly cast to React.ReactElement<any> to allow className prop in cloneElement */}
                    {React.cloneElement(item.icon as React.ReactElement<any>, { className: 'w-7 h-7' })}
                  </div>
                  <h4 className="font-bold text-lg mb-2 text-white">{item.title}</h4>
                  <p className="text-white/60 text-sm font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center max-w-2xl mx-auto">
          <p className="text-zinc-500 font-bold text-xl mb-12 leading-relaxed italic">
            "Sua saúde é o seu maior ativo. Invista onde você é prioridade."
          </p>
          <a 
            href="#leads"
            className="inline-flex bg-[#2E7D32] text-white px-14 py-6 rounded-[2rem] font-black text-xl hover:bg-[#1B5E20] hover:scale-105 transition-all shadow-2xl shadow-green-900/30"
          >
            Fazer matrícula online
          </a>
        </div>
      </div>
    </section>
  );
};

export default Plans;