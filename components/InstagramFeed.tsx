
import React from 'react';
import { Instagram } from 'lucide-react';
import { INSTAGRAM_LINK } from '../constants';

const InstagramFeed: React.FC = () => {
  const posts = [
    "https://images.unsplash.com/photo-1518611012118-2969c6a2c7a7?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1599058917232-d750083bb6d8?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1574673402450-c32398e05739?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1517838276537-c22588a69a92?auto=format&fit=crop&q=80&w=600"
  ];

  return (
    <section className="py-32 bg-[#FAFAFA] border-y border-zinc-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-4">
          <div>
            <h2 className="text-4xl font-heading font-extrabold flex items-center gap-4 text-zinc-900">
              <div className="w-12 h-12 bg-[#2E7D32]/10 rounded-2xl flex items-center justify-center">
                <Instagram className="text-[#2E7D32] w-6 h-6" />
              </div>
              Vida na Eco Arena
            </h2>
            <p className="text-zinc-500 mt-3 font-medium text-lg">Siga nosso dia a dia <span className="text-[#2E7D32] font-bold">@eco_arena_fitness</span></p>
          </div>
          <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="bg-white text-[#2E7D32] border border-[#2E7D32]/20 px-8 py-3 rounded-full font-bold text-sm hover:bg-[#2E7D32] hover:text-white transition-all shadow-sm flex items-center justify-center">
            Ver perfil completo
          </a>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {posts.map((src, i) => (
            <a key={i} href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="aspect-square overflow-hidden group relative cursor-pointer rounded-[2rem] shadow-md">
              <img src={src} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Instagram Post" />
              <div className="absolute inset-0 bg-[#2E7D32]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                <Instagram className="text-white w-10 h-10" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
