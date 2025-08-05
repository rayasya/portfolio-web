export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github?: string;
  live?: string;
  category: "web" | "mobile";
}

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
  link?: string;
  category: "certificates" | "achievements";
}

export interface TechItem {
  name: string;
  icon: string;
  color: string;
  category: string;
  simpleIconsSlug?: string;
}
