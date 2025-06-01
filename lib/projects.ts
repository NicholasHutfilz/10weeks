// Define project type
export interface Project {
  id: number;
  title: string;
  description: string;
  status: string;
  images?: string[];
  content?: string;
  technologies?: string[];
  liveLink?: string;
  githubLink?: string;
}

// Projects data
export const projects: Project[] = [
  {
    id: 1,
    title: "Interactive Portfolio",
    description: "A responsive portfolio website with interactive elements and smooth animations",
    status: "completed",
    images: ["/images/project1-1.jpg", "/images/project1-2.jpg"],
    content: "This project demonstrates the power of interactive web design using modern CSS techniques and JavaScript. The portfolio features smooth transitions, responsive layouts, and accessibility considerations.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    liveLink: "https://example.com/portfolio",
    githubLink: "https://github.com/example/portfolio",
  },
  {
    id: 2,
    title: "Project Two",
    description: "Coming soon",
    status: "upcoming",
  },
  {
    id: 3,
    title: "Project Three",
    description: "Coming soon",
    status: "upcoming",
  },
  {
    id: 4,
    title: "Project Four",
    description: "Coming soon",
    status: "upcoming",
  },
  {
    id: 5,
    title: "Project Five",
    description: "Coming soon",
    status: "upcoming",
  },
  {
    id: 6,
    title: "Project Six",
    description: "Coming soon",
    status: "upcoming",
  },
  {
    id: 7,
    title: "Project Seven",
    description: "Coming soon",
    status: "upcoming",
  },
  {
    id: 8,
    title: "Project Eight",
    description: "Coming soon",
    status: "upcoming",
  },
  {
    id: 9,
    title: "Project Nine",
    description: "Coming soon",
    status: "upcoming",
  },
  {
    id: 10,
    title: "Project Ten",
    description: "Coming soon",
    status: "upcoming",
  },
]; 