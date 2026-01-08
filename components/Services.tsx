
import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { SERVICES, WHATSAPP_LINK } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="modalidades" className="relative py-20 lg:pt-10 lg:pb-32 scroll-mt-20 overflow-hidden bg-[#F1F8F1]/40">
      {/* Decorative Organic element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-white rounded-[100%] blur-[120px] pointer-events-none opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 lg:mb-24">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/80 backdrop-blur-sm border border-green-800/10 text-[#2E7D32] text-xs font-black uppercase tracking-widest rounded-full mb-6 shadow-sm">
            Nossas Modalidades
          </div>
          <h2 className="text-5xl md:text-6xl font-heading font-extrabold mb-8 text-zinc-900 leading-tight">
            Treinos para <span className="text-[#2E7D32] italic">todos os ritmos</span>
          </h2>
          <p className="text-zinc-500 text-lg font-medium leading-relaxed">
            Do alto impacto à conexão mente e corpo. Na Eco Arena, sua jornada é única e respeitada por profissionais de elite.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {SERVICES.map((service) => (
            <div key={service.id} className="bg-white/90 border border-[rgba(46,125,50,0.08)] shadow-sm backdrop-blur-md rounded-[3.5rem] overflow-hidden flex flex-col group h-full transition-all duration-500 hover:shadow-2xl hover:shadow-green-900/5 hover:border-[#2E7D32]/20">
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={service.imageUrl} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B5E20]/40 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-10">
                  <h3 className="text-2xl font-extrabold font-heading text-white">{service.title}</h3>
                </div>
              </div>
              
              <div className="p-10 flex-1 flex flex-col">
                <p className="text-zinc-600 mb-8 flex-1 font-medium leading-relaxed italic text-sm">
                  "{service.description}"
                </p>
                
                <ul className="space-y-4 mb-10">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-zinc-800 font-bold">
                      <div className="w-6 h-6 rounded-full bg-white/50 flex items-center justify-center shrink-0 border border-green-800/10">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2E7D32]" />
                      </div>
                      {benefit}
                    </li>
                  ))}
                </ul>
                
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full py-5 text-center bg-[#2E7D32] text-white rounded-2xl font-black hover:bg-[#1B5E20] transition-all shadow-lg flex items-center justify-center gap-3"
                >
                  Consultar Turmas
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
