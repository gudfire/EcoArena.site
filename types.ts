
export interface Service {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  imageUrl: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  avatar: string;
}

export interface Plan {
  id: string;
  name: string;
  features: string[];
  highlight?: boolean;
}

export interface LeadFormData {
  name: string;
  whatsapp: string;
  goal: 'emagrecer' | 'ganhar_massa' | 'qualidade_vida';
}
