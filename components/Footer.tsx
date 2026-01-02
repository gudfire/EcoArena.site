
import React from 'react';
import { MapPin, Clock, Phone, Instagram, Facebook, Navigation } from 'lucide-react';
import { CONTACT_INFO, INSTAGRAM_LINK } from '../constants';

const Footer: React.FC = () => {
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(CONTACT_INFO.address)}`;

  return (
    <footer id="contato" className="bg-[#F2F2F2] pt-24 pb-12 border-t border-zinc-200 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          <div className="space-y-8">
            <a href="#inicio" className="inline-block">
              <img 
                src="input_file_0.png" 
                alt="EcoArena Fitness - Academia e Saúde" 
                className="h-16 w-auto"
              />
            </a>
            
            <p className="text-zinc-500 max-w-md leading-relaxed font-medium">
              Transformando vidas através do esporte, da tecnologia e do bem-estar. Venha conhecer a melhor estrutura de Alagoas.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-xl text-[#2E7D32] shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-black text-[10px] mb-1 uppercase tracking-widest text-[#9E9E9E]">Localização</h4>
                  <p className="text-zinc-700 font-bold text-sm leading-relaxed">{CONTACT_INFO.address}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-xl text-[#2E7D32] shadow-sm">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-black text-[10px] mb-1 uppercase tracking-widest text-[#9E9E9E]">Funcionamento</h4>
                  <p className="text-zinc-700 font-bold text-sm leading-relaxed">{CONTACT_INFO.hours}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-xl text-[#2E7D32] shadow-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-black text-[10px] mb-1 uppercase tracking-widest text-[#9E9E9E]">WhatsApp Oficial</h4>
                  <p className="text-zinc-700 font-bold text-sm leading-relaxed">{CONTACT_INFO.phone}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#2E7D32] hover:bg-[#2E7D32] hover:text-white transition-all shadow-md">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#2E7D32] hover:bg-[#2E7D32] hover:text-white transition-all shadow-md">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="h-[450px] rounded-[3rem] overflow-hidden border border-zinc-200 relative bg-zinc-100 group shadow-xl">
            <div className="absolute inset-0 grayscale contrast-75 opacity-30 bg-[url('https://api.mapbox.com/styles/v1/mapbox/light-v10/static/-35.8504,-9.7028,15/800x450?access_token=pk.eyJ1IjoiY29yZ3VpIiwiYSI6ImNrN2EycXp6ZzAxbGszbm8xc3R6c2Z1emEifQ.W7v087l-r9_f0_M0Kk_u7A')] bg-cover" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="w-14 h-14 bg-[#2E7D32] rounded-full animate-ping absolute inset-0 opacity-20" />
                <div className="w-14 h-14 bg-[#2E7D32] rounded-full relative z-10 flex items-center justify-center shadow-lg">
                  <MapPin className="text-white" />
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-8 left-8 right-8">
               <a 
                 href={googleMapsUrl} 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="flex items-center justify-center gap-3 w-full bg-[#2E7D32] text-white font-black py-5 rounded-2xl shadow-xl hover:scale-[1.02] transition-transform"
               >
                 <Navigation className="w-5 h-5" />
                 ABRIR NO GOOGLE MAPS
               </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-zinc-200 pt-12 text-center text-[#9E9E9E] text-[10px] font-black uppercase tracking-[0.2em]">
          <p>© {new Date().getFullYear()} Eco Arena Fitness. Todos os direitos reservados. Intensidade & Bem-Estar.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
