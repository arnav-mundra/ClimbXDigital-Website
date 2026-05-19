export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables?: string[];
}

export interface CaseStudy {
  id: string;
  slug: string;
  brand: string;
  category: "Paid Media" | "SEO" | "Social" | "Brand";
  result: string;
  challenge: string;
  solution: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  company: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
}
