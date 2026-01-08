import React, { useState } from 'react';
import { Send, CheckCircle, Gift, Sparkles, User, Smartphone } from 'lucide-react';

const LeadForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="bg-white/80 backdrop-blur-md border border-[rgba(46,125,50,0.08)] shadow-sm p-20 rounded-[4rem] text-center animate-in zoom-in duration-500 max-w-2xl mx-auto my-32 shadow-2xl">
        <div className="w-24 h-24 bg-[#2E7D32] rounded-full flex items-center justify-center mx-auto mb-10 shadow-xl shadow-green-900/30">
          <CheckCircle className="text-white w-12 h-12" />
        </div>
        <h3 className="text-4xl font-heading font-black mb-6 text-zinc-900 tracking-tight">Estamos te esperando!</h3>
        <p className="text-zinc-600 text-xl leading-relaxed font-medium">Sua pré-matrícula foi enviada. Fique atento ao seu WhatsApp, pois entraremos em contato para liberar seu bônus de boas-vindas.</p>
        <button onClick={() => setSubmitted(false)} className="mt-12 text-[#2E7D32] font-black text-xs underline uppercase tracking-[0.3em] hover:opacity-70 transition-opacity">Voltar ao site</button>
      </div>
    );
  }

  return (
    <section id="leads" className="py-32 relative overflow-hidden">
      {/* Organic Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2E7D32]/[0.015] rounded-full blur-[100px] -mr-40 -mt-40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FF8F00]/[0.01] rounded-full blur-[100px] -ml-20 -mb-20 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto bg-white/80 border border-[rgba(46,125,50,0.08)] shadow-sm backdrop-blur-md rounded-[4rem] overflow-hidden flex flex-col lg:flex-row">
          <div className="lg:w-2/5 p-16 md:p-20 bg-[#2E7D32] flex flex-col justify-center text-white relative">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="0.5" fill="none" />
                <circle cx="50" cy="50" r="30" stroke="white" strokeWidth="0.5" fill="none" />
              </svg>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-heading font-black mb-12 leading-[1.1] relative z-10">
              Mude sua <br />
              <span className="text-[#C8E6C9] italic">natureza.</span>
            </h2>
            
            <div className="space-y-8 relative z-10">
              {[
                { t: "Primeiro passo para o bem-estar" },
                { t: "Ambiente moderno e ecológico" },
                { t: "Resultados reais e duradouros" }
              ].map((step, idx) => (
                <div key={idx} className="flex items-center gap-5 font-bold text-white/80">
                  <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/20">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <span className="text-lg">{step.t}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-3/5 p-12 md:p-20 flex flex-col justify-center">
            {/* Promotion Badge */}
            <div className="mb-12 bg-white/40 border border-[#2E7D32]/10 p-8 rounded-[2.5rem] flex items-center gap-6 group">
              <div className="w-16 h-16 bg-[#2E7D32] rounded-[1.5rem] flex items-center justify-center shrink-0 shadow-lg group-hover:rotate-6 transition-transform">
                <Gift className="text-white w-8 h-8" />
              </div>
              <div>
                <h4 className="text-[#2E7D32] font-black text-sm uppercase tracking-widest mb-1">🎁 Bônus de Matrícula</h4>
                <p className="text-zinc-600 text-sm font-medium leading-relaxed">Garanta agora <span className="font-bold text-[#2E7D32]">15min de Recovery Platinum</span> na sua primeira visita.</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-[#9E9E9E] mb-3 ml-2">Nome Completo</label>
                  <div className="relative">
                    <User className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-400 w-5 h-5" />
                    <input 
                      required
                      type="text" 
                      placeholder="Ex: João Silva" 
                      className="w-full bg-white/30 border border-zinc-200 rounded-[1.5rem] pl-14 pr-6 py-5 focus:border-[#2E7D32] focus:ring-4 focus:ring-green-800/5 focus:outline-none transition-all placeholder:text-zinc-400 font-bold"
                    />
                  </div>
                </div>
                <div className="relative">
                  <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-[#9E9E9E] mb-3 ml-2">WhatsApp</label>
                  <div className="relative">
                    <Smartphone className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-400 w-5 h-5" />
                    <input 
                      required
                      type="tel" 
                      placeholder="(82) 99999-9999" 
                      className="w-full bg-white/30 border border-zinc-200 rounded-[1.5rem] pl-14 pr-6 py-5 focus:border-[#2E7D32] focus:ring-4 focus:ring-green-800/5 focus:outline-none transition-all placeholder:text-zinc-400 font-bold"
                    />
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-[#9E9E9E] mb-3 ml-2">Qual seu principal objetivo?</label>
                <div className="relative">
                  <select className="w-full bg-white/30 border border-zinc-200 rounded-[1.5rem] px-8 py-5 focus:border-[#2E7D32] focus:outline-none transition-all appearance-none cursor-pointer text-zinc-700 font-bold">
                    <option value="emagrecer">Queimar calorias & Definição</option>
                    <option value="ganhar_massa">Massa Muscular & Força</option>
                    <option value="luta">Aprender Luta & Disciplina</option>
                    <option value="saude">Bem-estar & Longevidade</option>
                  </select>
                  <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none text-[#9E9E9E]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>
              
              <button 
                disabled={loading}
                type="submit" 
                className="w-full bg-[#2E7D32] text-white font-black py-7 rounded-[1.8rem] flex items-center justify-center gap-4 hover:bg-[#1B5E20] hover:shadow-xl transition-all disabled:opacity-50 text-xl tracking-tight"
              >
                {loading ? 'Enviando...' : (
                  <>
                    Confirmar Pré-Matrícula
                    <Send className="w-6 h-6" />
                  </>
                )}
              </button>
              <div className="flex justify-center pt-2">
                <div className="h-1 w-12 bg-[#2E7D32]/20 rounded-full"></div>
              </div>
              <p className="text-center text-[11px] text-zinc-400 font-bold uppercase tracking-[0.15em]">Garantimos a privacidade dos seus dados.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;