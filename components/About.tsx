
import React from 'react';
import { Calendar, Users, MapPin, MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

const About: React.FC = () => {
  return (
    <section id="sobre" className="relative py-20 scroll-mt-20 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Card Principal Contido */}
        <div className="max-w-6xl mx-auto bg-[#1B5E20] rounded-[3.5rem] lg:rounded-[5rem] overflow-hidden shadow-2xl shadow-green-950/40 relative border border-white/10">
          
          {/* Elementos Decorativos de Fundo */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#2E7D32] rounded-full blur-[100px] -mr-48 -mt-48 opacity-40" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#4CAF50] rounded-full blur-[80px] -ml-32 -mb-32 opacity-20" />

          <div className="flex flex-col lg:flex-row relative z-10">
            
            {/* Lado da Imagem - Ocupa menos espaço vertical no mobile */}
            <div className="lg:w-5/12 relative h-[300px] lg:h-auto">
              <img 
                src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&q=80&w=1200" 
                alt="Interior da Eco Arena Fitness" 
                className="w-full h-full object-cover grayscale-[20%] contrast-125"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1B5E20] via-transparent to-transparent hidden lg:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B5E20] via-transparent to-transparent lg:hidden" />
              
              {/* Badge de Fundação */}
              <div className="absolute top-8 left-8 bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20">
                <p className="text-[10px] font-black uppercase tracking-widest text-white/60">Fundada em</p>
                <p className="text-white font-heading font-black">2022</p>
              </div>
            </div>

            {/* Lado do Texto - Conteúdo focado */}
            <div className="lg:w-7/12 p-10 md:p-16 lg:p-20 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 text-[#C8E6C9] text-[10px] font-black uppercase tracking-[0.2em] rounded-full mb-8 w-fit">
                Nossa Essência
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-8 text-white leading-tight">
                Sobre <span className="text-[#C8E6C9] italic">Nós</span>
              </h2>
              
              <div className="space-y-6 text-white/80">
                <p className="text-lg md:text-xl leading-relaxed font-medium">
                  Inaugurada em 2022, a <span className="text-white font-black underline decoration-[#C8E6C9]/30 underline-offset-4">Eco Arena Fitness</span> atende com orgulho a região de Marechal Deodoro - AL. 
                </p>
                
                <p className="text-base md:text-lg leading-relaxed">
                  Fundada por <span className="text-white font-bold">Alessandro e Fernanda Borges</span>, nosso espaço oferece treinamentos físicos de elite para homens e mulheres que buscam sua melhor versão.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
                  <div className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/5">
                    <Users className="w-5 h-5 text-[#C8E6C9]" />
                    <span className="text-sm font-bold text-white/90">Equipe de Professores</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/5">
                    <Calendar className="w-5 h-5 text-[#C8E6C9]" />
                    <span className="text-sm font-bold text-white/90">Marechal Deodoro - AL</span>
                  </div>
                </div>

                <p className="text-base md:text-lg leading-relaxed italic border-l-2 border-[#C8E6C9]/30 pl-6 py-2">
                  "Nossa equipe está preparada para ajudar você a conquistar o corpo desejado e mostrar todo o seu potencial. Ligue ou envie uma mensagem hoje mesmo!"
                </p>

                <div className="pt-8 flex flex-col sm:flex-row items-center gap-6">
                  <a 
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto bg-[#C8E6C9] text-[#1B5E20] px-10 py-5 rounded-2xl font-black text-sm hover:bg-white hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-3"
                  >
                    <MessageCircle className="w-5 h-5" />
                    AGENDAR MINHA AULA
                  </a>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#C8E6C9] animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Matrículas Abertas</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
