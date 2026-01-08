import React from 'react';
import { MessageSquare } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

const WhatsAppButton: React.FC = () => {
  return (
    <a 
      href={WHATSAPP_LINK} 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[100] group"
    >
      {/* Glow Effect */}
      <div className="absolute -inset-2 bg-green-500 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity animate-pulse" />
      
      {/* Button Body with Gradient and Hover state */}
      <div className="relative w-16 h-16 bg-gradient-to-br from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#075E54] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300">
        <MessageSquare className="text-white w-8 h-8 fill-white" />
        
        {/* Tooltip */}
        <div className="absolute right-full mr-4 bg-white text-zinc-900 px-5 py-2.5 rounded-2xl text-sm font-black shadow-xl opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all pointer-events-none whitespace-nowrap hidden md:block border border-zinc-100">
          Dúvidas? Fale conosco!
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;