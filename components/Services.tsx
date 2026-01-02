
import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { SERVICES, WHATSAPP_LINK } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="modalidades" className="py-32 bg-[#FAFAFA] scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-block px-4 py-1.5 bg-[#F1F8F1] text-[#2E7D32] text-[10px] font-black uppercase tracking-[0.2em] rounded-full mb-6">
            Nossas Aulas
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-6 text-zinc-900">
            Intensidade em <span className="text-[#2E7D32]">Cada Aula</span>
          </h2>
          <p className="text-zinc-500 font-medium leading-relaxed">
            De lutas à dança, do funcional ao relaxamento. Escolha como você quer evoluir hoje na Eco Arena em um ambiente planejado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {SERVICES.map((service) => (
            <div key={service.id} className="bg-white border border-zinc-200/60 rounded-[3rem] overflow-hidden flex flex-col group h-full transition-all duration-500 hover:shadow-2xl hover:shadow-green-900/5 hover:-translate-y-2">
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={service.imageUrl} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-8">
                  <h3 className="text-2xl font-bold font-heading text-white">{service.title}</h3>
                </div>
              </div>
              
              <div className="p-10 flex-1 flex flex-col">
                <p className="text-zinc-600 mb-8 flex-1 font-medium leading-relaxed italic">
                  "{service.description}"
                </p>
                
                <ul className="space-y-4 mb-10">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-zinc-700 font-bold">
                      <div className="w-6 h-6 rounded-full bg-[#F1F8F1] flex items-center justify-center shrink-0">
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
                  className="w-full py-5 text-center bg-[#F5F5F5] text-[#2E7D32] border border-transparent rounded-2xl font-black hover:bg-[#2E7D32] hover:text-white transition-all shadow-sm"
                >
                  Consultar valores
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
