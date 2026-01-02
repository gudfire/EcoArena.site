
import React from 'react';
import { Dumbbell, Users, Zap, Heart, Sparkles, Trophy, Flame, Target } from 'lucide-react';
import { Service, Testimonial, Plan } from './types';

export const WHATSAPP_LINK = "https://api.whatsapp.com/message/HVASE7FUQGZ4B1?autoload=1&app_absent=0";
export const INSTAGRAM_LINK = "https://www.instagram.com/eco_arena_fitness/";

export const SERVICES: Service[] = [
  {
    id: 'musculacao',
    title: 'Musculação Premium',
    description: 'Área completa com maquinário novo e ergonômico para quem busca força e definição.',
    benefits: ['Maquinário High-End', 'Treino de Hipertrofia', 'Ambiente Climatizado'],
    imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'funcional-cross',
    title: 'Funcional Cross',
    description: 'Alta intensidade e movimentos naturais para queimar calorias e ganhar agilidade.',
    benefits: ['Condicionamento Total', 'Variedade de Exercícios', 'Foco em Performance'],
    imageUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'ritbox-dance',
    title: 'Ritbox & Fit Dance',
    description: 'Combine ritmo, música e diversão em aulas que detonam calorias brincando.',
    benefits: ['Queima Calórica Extrema', 'Energia Lá no Alto', 'Coordenação e Ritmo'],
    imageUrl: 'https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'body-pump',
    title: 'Body Pump & Local',
    description: 'Fortalecimento focado em resistência muscular com pesos e repetições.',
    benefits: ['Definição Muscular', 'Resistência Física', 'Acompanhamento de Ritmo'],
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'jiu-jitsu',
    title: 'Jiu-Jitsu',
    description: 'Arte suave para disciplina mental, defesa pessoal e condicionamento físico.',
    benefits: ['Defesa Pessoal', 'Foco e Disciplina', 'Respeito e Tradição'],
    imageUrl: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'yoga-recovery',
    title: 'Yoga & Recovery',
    description: 'Equilíbrio físico e mental com Yoga e nossa sala de massagem exclusiva.',
    benefits: ['Recuperação Pós-Treino', 'Flexibilidade', 'Redução do Estresse'],
    imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Roberto Silva',
    role: 'Aluno Elite',
    text: 'A Eco Arena mudou minha visão de treino. O maquinário é sensacional e o ambiente te motiva a ir além todos os dias.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 2,
    name: 'Juliana Mendes',
    role: 'Aluna Performance',
    text: 'As aulas de Ritbox são pura energia! Perdi 5kg em dois meses e me divirto muito. O recovery pós-treino é um diferencial único.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 3,
    name: 'Carlos Lima',
    role: 'Praticante de Jiu-Jitsu',
    text: 'Estrutura de primeira para artes marciais. Professores qualificados e uma comunidade muito acolhedora. Recomendo fortemente.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
  }
];

export const PLANS: Plan[] = [
  {
    id: 'plano-evolucao',
    name: 'Plano Evolução',
    features: [
      'Musculação Completa',
      '1 Modalidade Coletiva à escolha',
      'App de Treino Exclusivo',
      'Ideal para constância e foco'
    ],
  },
  {
    id: 'plano-performance',
    name: 'Plano Performance',
    features: [
      'Musculação Completa',
      'Todas as Coletivas (Funcional, Ritbox, Dance, Local)',
      'Body Pump Incluso',
      'Ideal para quem busca variedade e intensidade'
    ],
    highlight: true,
  },
  {
    id: 'plano-elite',
    name: 'Plano Elite Experience',
    features: [
      'Acesso Total VIP',
      'Todas as Modalidades + Jiu-Jitsu',
      'Uso Ilimitado da Cadeira de Massagem',
      'Avaliações Periódicas',
      'Para quem não aceita menos que o topo'
    ],
  }
];

export const DIFFERENTIALS = [
  {
    icon: <Flame className="w-8 h-8" />,
    title: "Intensidade Máxima",
    desc: "Treino intenso é a nossa praia. Aqui você encontra o seu limite."
  },
  {
    icon: <Dumbbell className="w-8 h-8" />,
    title: "Maquinário Novo",
    desc: "Tecnologia de ponta para biomecânica perfeita e segurança."
  },
  {
    icon: <Trophy className="w-8 h-8" />,
    title: "Variedade Real",
    desc: "Do Jiu-Jitsu ao Yoga, temos a aula perfeita para sua meta."
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Recovery VIP",
    desc: "Cadeira de massagem exclusiva para você recuperar e voltar mais forte."
  }
];

export const CONTACT_INFO = {
  address: "R. Marinita Gouvêia, 915 - Massagueira, Mal. Deodoro - AL, 57160-000, Brasil",
  hours: "Seg a Sex: 06h às 23h | Sáb: 08h às 14h",
  phone: "(82) 99999-9999" // Updated to local prefix
};
