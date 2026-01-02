
import React, { useState } from 'react';
import { Send, CheckCircle, Sparkles } from 'lucide-react';

const LeadForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="bg-[#F1F8F1] border border-[#2E7D32]/20 p-16 rounded-[3rem] text-center animate-in zoom-in duration-500 max-w-2xl mx-auto my-24">
        <div className="w-24 h-24 bg-[#2E7D32] rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-green-900/20">
          <CheckCircle className="text-white w-12 h-12" />
        </div>
        <h3 className="text-4xl font-heading font-bold mb-6 text-zinc-900">Inscrição realizada!</h3>
        <p className="text-zinc-600 text-lg leading-relaxed font-medium">Recebemos seu contato. Em breve um consultor Eco Arena falará com você para agendar seu treino experimental.</p>
        <button onClick={() => setSubmitted(false)} className="mt-10 text-[#2E7D32] font-black text-xs underline uppercase tracking-[0.2em] hover:opacity-70 transition-opacity">Voltar ao formulário</button>
      </div>
    );
  }

  return (
    <section id="leads" className="py-32 bg-[#F1F8F1] relative overflow-hidden">
      {/* Decorative organic elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#2E7D32]/5 rounded-full blur-[100px] -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF8F00]/5 rounded-full blur-[100px] -ml-48 -mb-48" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto bg-white border border-zinc-200/50 rounded-[4rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
          <div className="lg:w-2/5 p-16 bg-[#2E7D32] flex flex-col justify-center text-white relative">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="40" stroke="white" strokeWidth="0.5" />
                <circle cx="80" cy="80" r="30" stroke="white" strokeWidth="0.5" />
              </svg>
            </div>
            
            <h2 className="text-5xl font-heading font-black mb-8 leading-tight relative z-10">
              Sua jornada começa agora.
            </h2>
            
            <div className="font-bold bg-[#FF8F00] p-6 rounded-[2rem] border border-white/20 mb-10 shadow-2xl relative z-10 text-white transform -rotate-1">
              <p className="text-[10px] uppercase tracking-[0.3em] opacity-80 mb-2">Bônus Exclusivo</p>
              <p className="text-base leading-snug">Ao finalizar o cadastro, sua visita inclui <span className="underline decoration-white/50 underline-offset-4">15 minutos</span> na nossa cadeira de massagem exclusiva.</p>
            </div>

            <div className="space-y-6 relative z-10">
              {[
                { n: "01", t: "Garanta seu Free Pass" },
                { n: "02", t: "Conheça nossa estrutura" },
                { n: "03", t: "Relaxe no Recovery VIP" }
              ].map((step, idx) => (
                <div key={idx} className="flex items-center gap-5 font-bold">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-sm backdrop-blur-md border border-white/10">{step.n}</div>
                  <span className="text-base">{step.t}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-3/5 p-16 bg-white">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-[#9E9E9E] mb-3">Nome Completo</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Seu nome aqui..." 
                    className="w-full bg-[#FAFAFA] border border-zinc-200 rounded-2xl px-6 py-5 focus:border-[#2E7D32] focus:ring-4 focus:ring-green-800/5 focus:outline-none transition-all placeholder:text-zinc-400 font-medium"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-[#9E9E9E] mb-3">WhatsApp</label>
                  <input 
                    required
                    type="tel" 
                    placeholder="(82) 90000-0000" 
                    className="w-full bg-[#FAFAFA] border border-zinc-200 rounded-2xl px-6 py-5 focus:border-[#2E7D32] focus:ring-4 focus:ring-green-800/5 focus:outline-none transition-all placeholder:text-zinc-400 font-medium"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-[#9E9E9E] mb-3">Qual seu Foco Principal?</label>
                <div className="relative">
                  <select className="w-full bg-[#FAFAFA] border border-zinc-200 rounded-2xl px-6 py-5 focus:border-[#2E7D32] focus:outline-none transition-all appearance-none cursor-pointer text-zinc-700 font-bold">
                    <option value="emagrecer">Emagrecimento & HIIT</option>
                    <option value="ganhar_massa">Hipertrofia & Força Muscular</option>
                    <option value="luta">Jiu-Jitsu / Artes Marciais</option>
                    <option value="saude">Qualidade de Vida & Equilíbrio</option>
                  </select>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-[#9E9E9E]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>
              
              <div className="p-5 bg-[#FF8F00]/5 border border-[#FF8F00]/10 rounded-[2rem] flex gap-4 items-center">
                 <div className="w-12 h-12 rounded-full bg-[#FF8F00]/10 flex items-center justify-center shrink-0">
                  <Sparkles className="w-6 h-6 text-[#FF8F00]" />
                 </div>
                 <p className="text-xs font-black text-[#FF8F00] uppercase leading-relaxed tracking-wider">
                   Ative seu bônus de recovery agora mesmo!
                 </p>
              </div>

              <button 
                disabled={loading}
                type="submit" 
                className="w-full bg-[#2E7D32] text-white font-black py-6 rounded-2xl flex items-center justify-center gap-4 hover:bg-[#1B5E20] hover:scale-[1.01] active:scale-95 transition-all disabled:opacity-50 shadow-2xl shadow-green-900/20 text-lg"
              >
                {loading ? 'Validando...' : (
                  <>
                    Quero Treinar na Eco Arena
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
