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
  /* {
    id: 1,
    title: "Interactive Portfolio",
    description: "A responsive portfolio website with interactive elements and smooth animations",
    status: "completed",
    images: ["/images/project1-1.jpg", "/images/project1-2.jpg"],
    content: "This project demonstrates the power of interactive web design using modern CSS techniques and JavaScript. The portfolio features smooth transitions, responsive layouts, and accessibility considerations.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    liveLink: "https://example.com/portfolio",
    githubLink: "https://github.com/example/portfolio",
  }, */
  {
    id: 1,
    title: "Tammany Times",
    description: "An infinite scroller news website for the Tammany Times, a newsletter on New York politics that I write every morning.",
    status: "completed",
    images: ["/images/project1-1.jpg", "/images/project1-2.jpg"],
    content: "I've been writing the Tammany Times for months now, but I never had a good place to link to full articles written by me. This week I spent time creating the front end website itself, but also a custom backend CMS specifically designed for my needs as a live breaking news website. It is built on NextJS, Tailwind CSS, Heroku, and Postgres. I also spent time this week getting an official New York City Press Credential, which will allow me to better cover political events in the city. This will be an ongoing project as I continue to report on the latest political news, so check it out and subscribe if you are interested!",
    liveLink: "https://tammanytimes.com",
  },
  {
    id: 2,
    title: "Simple Fitness Tracker",
    description: "*Work in Progress:* An easy workout tracker that just tells you what to do and keeps you coming back.",
    status: "completed",
    images: ["/images/project2-1.jpg", "/images/project2-2.jpg"],
    content: "This workout tracker, which I have not named yet, is only in the early stages of development. Over the next week, I plan to fully implement it and ideally have it live on the iOS App Store by the end of the week.",
    liveLink: "https://10weeks.to/project/2",
  },
  {
    id: 3,
    title: "????",
    description: "Coming soon",
    status: "upcoming",
  },
  {
    id: 4,
    title: "????",
    description: "Coming soon",
    status: "upcoming",
  },
  {
    id: 5,
    title: "????",
    description: "Coming soon",
    status: "upcoming",
  },
  {
    id: 6,
    title: "????",
    description: "Coming soon",
    status: "upcoming",
  },
  {
    id: 7,
    title: "????",
    description: "Coming soon",
    status: "upcoming",
  },
  {
    id: 8,
    title: "????",
    description: "Coming soon",
    status: "upcoming",
  },
  {
    id: 9,
    title: "????",
    description: "Coming soon",
    status: "upcoming",
  },
  {
    id: 10,
    title: "????",
    description: "Coming soon",
    status: "upcoming",
  },
]; 