import React, { useState } from 'react';
import { Leaf } from 'lucide-react';

interface LogoProps {
  className?: string;
  imgClassName?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "", imgClassName = "h-10 md:h-14 w-auto" }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {!imgError ? (
        <img 
          src="input_file_0.png" 
          alt="EcoArena Fitness" 
          className={`${imgClassName} transition-transform duration-300 group-hover:scale-105`}
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="flex items-center gap-2 group-hover:scale-105 transition-transform duration-300">
          <div className="w-10 h-10 bg-[#2E7D32] rounded-xl flex items-center justify-center shadow-lg shadow-green-900/20">
            <Leaf className="text-white w-6 h-6" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-heading font-black text-xl tracking-tighter text-zinc-900 uppercase">
              Eco<span className="text-[#2E7D32]">Arena</span>
            </span>
            <span className="text-[10px] font-bold text-zinc-500 tracking-[0.2em] uppercase">
              Fitness
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Logo;