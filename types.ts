export interface Cycle {
  id: string;
  title: string;
  university: 'UNI' | 'San Marcos' | 'Callao' | 'General';
  description: string;
  startDate: string;
  schedule: string;
  image: string;
  modality: 'Virtual' | 'Presencial' | 'Híbrido';
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  summary: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  career: string;
  university: string;
  text: string;
  image: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}