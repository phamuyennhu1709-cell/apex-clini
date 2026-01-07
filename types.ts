export interface Service {
  id: string;
  title: string;
  description: string;
  price?: string;
  image?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  treatment: string;
  rating: number;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}