
import React from 'react';
import { DIFFERENTIALS } from '../constants';

const Differentials: React.FC = () => {
  return (
    <section id="diferenciais" className="py-32 bg-[#F5F5F5] scroll-mt-20 border-y border-zinc-100/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {DIFFERENTIALS.map((item, index) => (
            <div 
              key={index} 
              className="group p-10 rounded-[2.5rem] bg-white border border-zinc-200/50 hover:border-[#2E7D32]/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
            >
              <div className="text-[#2E7D32] mb-8 group-hover:scale-110 transition-transform bg-[#F1F8F1] w-20 h-20 rounded-[1.5rem] flex items-center justify-center shadow-inner">
                {item.icon}
              </div>
              <h3 className="text-2xl font-heading font-extrabold mb-4 text-zinc-900">{item.title}</h3>
              <p className="text-zinc-500 leading-relaxed text-sm font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
